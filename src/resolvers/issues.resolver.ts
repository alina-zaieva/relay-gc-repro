import { LiveState, suspenseSentinel } from "relay-runtime";
import { Query__restIssues$normalization } from "../__generated__/Query__restIssues$normalization.graphql";


/**
 * @RelayResolver Query.restIssues(query: String): [RestIssue!]
 * @live
 *
 */
export function restIssues({ query }: { query?: string | null}): LiveState<Query__restIssues$normalization[] | undefined> {
  const promise = fetchIssues(query || "");
  let data: Query__restIssues$normalization[] | undefined;

  return {
    read: () => {
      if (!data) {
        return suspenseSentinel();
      }

      return data;
    },
    subscribe: (callback) => {
      let unsubscribed = false;

      promise
        .then((issues) => {
          data = issues;
          if (!unsubscribed) {
            callback();
          }
        })
        .catch((error) => {
          console.log("Error fetching issues:", error);
        });

      return () => {
        unsubscribed = true;
      };
    },
  };
}

async function fetchIssues(query: string): Promise<Query__restIssues$normalization[]> {
  const response = await fetch(
    `https://api.github.com/search/issues?q=${encodeURIComponent(query)}+repo:facebook/relay+is:issue+is:open&sort=updated&order=desc&per_page=10`,
    {
      method: "GET",
      headers: [
        ["Content-Type", "application/json"],
        ["Authorization", `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`],
      ],
    }
  );
  const data = await response.json();
  const issues = (data.items as any[]).map(
    (item) =>
      ({
        issueId: item.id,
        title: item.title,
        url: item.html_url,
        number: item.number,
        author: item.user.login,
      } satisfies Query__restIssues$normalization)
  );
  return issues;
}
