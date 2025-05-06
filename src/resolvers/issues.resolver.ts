import { DataID, LiveState, suspenseSentinel } from "relay-runtime";
import { ISSUES_STORE, RestIssue } from "./RestIssue.resolver";

/**
 * @RelayResolver Query.restIssues(query: String): [RestIssue!]
 * @live
 */
export function restIssues({
  query,
}: {
  query?: string | null;
}): LiveState<{ id: DataID }[] | undefined> {
  const promise = fetchIssues(query || "");
  let data: { id: DataID }[] | undefined;

  return {
    read: () => {
      if (!data) {
        return suspenseSentinel();
      }

      return data;
    },
    subscribe: (callback) => {
      let unsubscribed = false;
      callback();

      promise
        .then((issues) => {
          if (!unsubscribed) {
            for (const issue of issues) {
              ISSUES_STORE.set(issue.id, issue);
            }
  
            data = issues.map(({id}) => ({id}));
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

async function fetchIssues(
  query: string
): Promise<RestIssue[]> {
  const response = await fetch(
    `https://api.github.com/search/issues?q=${encodeURIComponent(
      query
    )}+repo:facebook/relay+is:issue+is:open&sort=updated&order=desc&per_page=10`,
    {
      method: "GET",
      headers: [
        ["Content-Type", "application/json"],
        ["Authorization", `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`],
      ],
    }
  );
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const issues = (data.items as any[]).map(
    (item) =>
      ({
        id: btoa(`RestIssue_${item.id}`),
        title: item.title,
        url: item.html_url,
        number: item.number,
        author: item.user.login,
      } satisfies RestIssue)
  );
  return issues;
}
