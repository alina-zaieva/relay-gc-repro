
import { IssueViewData__authorModel$normalization } from "../__generated__/IssueViewData__authorModel$normalization.graphql";
import { Query__viewData$normalization } from "../__generated__/Query__viewData$normalization.graphql";
import { ViewData__issueModel$normalization } from "../__generated__/ViewData__issueModel$normalization.graphql";

/**
 * @RelayResolver Query.viewData: ViewData
 */
export function viewData(): Query__viewData$normalization {
  return {
    searchPlaceholderText: "Search issues",
    noResultsText: "No issues found"
  };
}

/**
 * @RelayResolver ViewData.issueModel: IssueViewData
 */
export function issueModel(): ViewData__issueModel$normalization {
  return {
    showAuthor: true
  };
}

/**
 * @RelayResolver IssueViewData.authorModel: IssueAuthorViewData
 */
export function authorModel(): IssueViewData__authorModel$normalization {
  return {
    avatarSize: 16,
  }
}