import { DataID, LiveState } from "relay-runtime";

export const ISSUES_STORE = new Map<DataID, RestIssue>();

export type RestIssue = {
  id: DataID;
  title: string;
  url: string;
  number: number;
  author: string;
};

/**
 * @RelayResolver RestIssue
 * @live
 */
export function RestIssue(id: DataID): LiveState<RestIssue | undefined> {
  const issue = ISSUES_STORE.get(id);
  return {
    read: () => issue,
    subscribe: (callback) => {
      callback();
      return () => undefined;
    }
  };
}

/**
 * @RelayResolver RestIssue.title: String
 */
export function title(issue: RestIssue): string {
  return issue.title;
}

/**
 * @RelayResolver RestIssue.url: String
 */
export function url(issue: RestIssue): string {
  return issue.url;
}

/**
 * @RelayResolver RestIssue.author: String
 */
export function author(issue: RestIssue): string {
  return issue.author;
}

/**
 * @RelayResolver RestIssue.number: Int
 */
export function number(issue: RestIssue): number {
  return issue.number;
}
