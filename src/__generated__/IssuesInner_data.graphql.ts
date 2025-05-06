/**
 * @generated SignedSource<<4d7d1b8adefa251388efe42e7acad831>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { LiveState, FragmentRefs } from "relay-runtime";
import { restIssues as queryRestIssuesResolverType } from "../resolvers/issues.resolver";
// Type assertion validating that `queryRestIssuesResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryRestIssuesResolverType satisfies (
  args: {
    query: string | null | undefined;
  },
) => LiveState<ReadonlyArray<Query__restIssues$normalization> | null | undefined>);
export type IssuesInner_data$data = {
  readonly restIssues: ReadonlyArray<{
    readonly issueId: string;
    readonly " $fragmentSpreads": FragmentRefs<"Issue_data">;
  }> | null | undefined;
  readonly " $fragmentType": "IssuesInner_data";
};
export type IssuesInner_data$key = {
  readonly " $data"?: IssuesInner_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssuesInner_data">;
};

import {restIssues as queryRestIssuesResolver} from '../resolvers/issues.resolver';
import IssuesSearchQuery_graphql from './IssuesSearchQuery.graphql';
import Query__restIssues$normalization_graphql from './Query__restIssues$normalization.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  }
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "query"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true,
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": IssuesSearchQuery_graphql
    }
  },
  "name": "IssuesInner_data",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "RestIssue",
      "modelResolvers": null,
      "backingField": {
        "alias": null,
        "args": (v0/*: any*/),
        "fragment": null,
        "kind": "RelayLiveResolver",
        "name": "restIssues",
        "resolverModule": queryRestIssuesResolver,
        "path": "restIssues",
        "normalizationInfo": {
          "kind": "OutputType",
          "concreteType": "RestIssue",
          "plural": true,
          "normalizationNode": Query__restIssues$normalization_graphql
        }
      },
      "linkedField": {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "RestIssue",
        "kind": "LinkedField",
        "name": "restIssues",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "issueId",
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Issue_data"
          }
        ],
        "storageKey": null
      }
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "4b4d89fae9e315ed91eed1b7b938beac";

export default node;
