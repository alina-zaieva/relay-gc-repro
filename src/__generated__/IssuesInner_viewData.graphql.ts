/**
 * @generated SignedSource<<f65719c79907b125f56c856b37f4af95>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
import { issueModel as viewDataIssueModelResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `viewDataIssueModelResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(viewDataIssueModelResolverType satisfies () => ViewData__issueModel$normalization | null | undefined);
export type IssuesInner_viewData$data = {
  readonly issueModel: {
    readonly " $fragmentSpreads": FragmentRefs<"Issue_viewData">;
  } | null | undefined;
  readonly noResultsText: string;
  readonly searchPlaceholderText: string;
  readonly " $fragmentType": "IssuesInner_viewData";
};
export type IssuesInner_viewData$key = {
  readonly " $data"?: IssuesInner_viewData$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssuesInner_viewData">;
};

import {issueModel as viewDataIssueModelResolver} from './../resolvers/viewData.resolver';
import ViewData__issueModel$normalization_graphql from './ViewData__issueModel$normalization.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "IssuesInner_viewData",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "IssueViewData",
      "modelResolvers": null,
      "backingField": {
        "alias": null,
        "args": null,
        "fragment": null,
        "kind": "RelayResolver",
        "name": "issueModel",
        "resolverModule": viewDataIssueModelResolver,
        "path": "issueModel",
        "normalizationInfo": {
          "kind": "OutputType",
          "concreteType": "IssueViewData",
          "plural": false,
          "normalizationNode": ViewData__issueModel$normalization_graphql
        }
      },
      "linkedField": {
        "alias": null,
        "args": null,
        "concreteType": "IssueViewData",
        "kind": "LinkedField",
        "name": "issueModel",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Issue_viewData"
          }
        ],
        "storageKey": null
      }
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "searchPlaceholderText",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "noResultsText",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "ViewData",
  "abstractKey": null
};

(node as any).hash = "93de571b38b4f2776d0f6d9406b93080";

export default node;
