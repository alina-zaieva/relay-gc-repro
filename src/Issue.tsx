import { graphql, useFragment, useLazyLoadQuery } from "react-relay";
import { Issue_data$key } from "./__generated__/Issue_data.graphql";
import { Suspense } from "react";
import { IssueAuthorAvatarQuery } from "./__generated__/IssueAuthorAvatarQuery.graphql";
import { Issue_viewData$key } from "./__generated__/Issue_viewData.graphql";
import { IssueAuthor_viewData$key } from "./__generated__/IssueAuthor_viewData.graphql";

export interface IssueProps {
  data: Issue_data$key;
  viewData: Issue_viewData$key;
}

export function Issue({ data, viewData }: IssueProps) {
  const issue = useFragment(
    graphql`
      fragment Issue_data on RestIssue {
        issueId
        number
        title
        url
        author
      }
    `,
    data
  );
  const { showAuthor, authorModel } = useFragment(
    graphql`
      fragment Issue_viewData on IssueViewData {
        showAuthor
        authorModel {
          ...IssueAuthor_viewData
        }
      }
    `,
    viewData
  );

  if (!authorModel) {
    return null;
  }

  return (
    <div>
      <a href={issue?.url || ""}>
        {issue?.number} - {issue?.title}
      </a>
      {showAuthor && issue.author && (
        <span>
          <Suspense>
            <Author login={issue.author} viewData={authorModel} />{" "}
          </Suspense>
        </span>
      )}
    </div>
  );
}

interface AuthorProps {
  login: string;
  viewData: IssueAuthor_viewData$key;
}

function Author({ login, viewData }: AuthorProps) {
  const { avatarSize } = useFragment(
    graphql`
      fragment IssueAuthor_viewData on IssueAuthorViewData {
        avatarSize
      }
    `,
    viewData
  );
  const { user } = useLazyLoadQuery<IssueAuthorAvatarQuery>(
    graphql`
      query IssueAuthorAvatarQuery($login: String!, $avatarSize: Int!) {
        user(login: $login) {
          avatarUrl(size: $avatarSize)
        }
      }
    `,
    { login, avatarSize }
  );

  const avatarUrl = user?.avatarUrl ?? "";
  return (
    <>
      by <img src={avatarUrl} width={avatarSize} height={avatarSize} /> {login}
    </>
  );
}
