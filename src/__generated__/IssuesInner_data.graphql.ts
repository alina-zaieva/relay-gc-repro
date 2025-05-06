/**
 * @generated SignedSource<<25ac028c9f60aeeb8059b5eb82cbc062>>
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

import {restIssues as queryRestIssuesResolver} from '../resolvers/issues.resolver';
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
    "hasClientEdges": true
  },
  "name": "IssuesInner_data",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "RestIssue",
      "modelResolvers": {
        "RestIssue": {
          "alias": null,
          "args": [],
          "fragment": {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RestIssue__id"
          },
          "kind": "RelayLiveResolver",
          "name": "restIssues",
          "resolverModule": resolverDataInjector(RestIssue__id_graphql, queryRestIssuesResolver, 'id', true),
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

(node as any).hash = "f5cd6b70743583320c4ab7716326aa5f";

export default node;
