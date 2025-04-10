import React, { useState } from "react";
import {
  graphql,
  useFragment,
  useLazyLoadQuery,
  useRefetchableFragment,
} from "react-relay";
import { IssuesQuery } from "./__generated__/IssuesQuery.graphql";
import { Issue } from "./Issue";
import { IssuesInner_data$key } from "./__generated__/IssuesInner_data.graphql";
import { IssuesSearchQuery } from "./__generated__/IssuesSearchQuery.graphql";
import { IssuesInner_viewData$key } from "./__generated__/IssuesInner_viewData.graphql";

export function Issues(): React.ReactNode {
  const data = useLazyLoadQuery<IssuesQuery>(
    graphql`
      query IssuesQuery($query: String) {
        ...IssuesInner_data

        viewData {
          ...IssuesInner_viewData
        }
      }
    `,
    {
      query: "",
    }
  );

  if (!data.viewData) {
    return null;
  }

  return <IssuesInner data={data} viewData={data.viewData} />;
}

interface IssuesInnerProps {
  data: IssuesInner_data$key;
  viewData: IssuesInner_viewData$key;
}

function IssuesInner({ data, viewData }: IssuesInnerProps) {
  const [{ restIssues }, refetch] = useRefetchableFragment<
    IssuesSearchQuery,
    IssuesInner_data$key
  >(
    graphql`
      fragment IssuesInner_data on Query
      @refetchable(queryName: "IssuesSearchQuery") {
        restIssues(query: $query) {
          issueId
          ...Issue_data
        }
      }
    `,
    data
  );
  const { searchPlaceholderText, noResultsText, issueModel } = useFragment(
    graphql`
      fragment IssuesInner_viewData on ViewData {
        searchPlaceholderText
        noResultsText
        issueModel {
          ...Issue_viewData
        }
      }
    `,
    viewData
  );

  const issues = restIssues ?? [];
  const [query, setQuery] = useState("");

  if (!issueModel) {
    return null;
  }

  return (
    <>
      <input
        type="search"
        value={query}
        onChange={(e) => {
          const newQuery = e.target.value;
          refetch({ query: newQuery });
          setQuery(newQuery);
        }}
        placeholder={searchPlaceholderText}
      />
      <ul>
        {issues.length === 0 && noResultsText}
        {issues
          .filter((issue) => !!issue)
          .map((issue) => (
            <li key={issue?.issueId}>
              <Issue data={issue} viewData={issueModel} />
            </li>
          ))}
      </ul>
    </>
  );
}
