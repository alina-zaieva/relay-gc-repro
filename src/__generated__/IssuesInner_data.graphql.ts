/**
 * @generated SignedSource<<0b56be2595b5c26c8310bd936512e33c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { LiveState, FragmentRefs, DataID } from "relay-runtime";
import { restIssues as queryRestIssuesResolverType } from "../resolvers/issues.resolver";
// Type assertion validating that `queryRestIssuesResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryRestIssuesResolverType satisfies (
  args: {
    query: string | null | undefined;
  },
) => LiveState<ReadonlyArray<{
  readonly id: DataID;
}> | null | undefined>);
export type IssuesInner_data$data = {
  readonly restIssues: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"Issue_data">;
  }> | null | undefined;
  readonly " $fragmentType": "IssuesInner_data";
};
export type IssuesInner_data$key = {
  readonly " $data"?: IssuesInner_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssuesInner_data">;
};

import {RestIssue as restIssueRelayModelInstanceResolver} from '../resolvers/RestIssue.resolver';
import {restIssues as queryRestIssuesResolver} from '../resolvers/issues.resolver';
import IssuesSearchQuery_graphql from './IssuesSearchQuery.graphql';
import RestIssue__id_graphql from './RestIssue__id.graphql';
import {resolverDataInjector} from 'relay-runtime/experimental';

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
      "modelResolvers": {
        "RestIssue": {
          "alias": null,
          "args": null,
          "fragment": {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RestIssue__id"
          },
          "kind": "RelayResolver",
          "name": "__relay_model_instance",
          "resolverModule": resolverDataInjector(RestIssue__id_graphql, restIssueRelayModelInstanceResolver, 'id', true),
          "path": "restIssues.__relay_model_instance"
        }
      },
      "backingField": {
        "alias": null,
        "args": (v0/*: any*/),
        "fragment": null,
        "kind": "RelayLiveResolver",
        "name": "restIssues",
        "resolverModule": queryRestIssuesResolver,
        "path": "restIssues"
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
            "name": "id",
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

(node as any).hash = "c5ca9d1bc9a5efd345727862631f8f44";

export default node;
