/**
 * @generated SignedSource<<2f29f192b5cdc22798e8ff561ce826fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssuesSearchQuery$variables = {
  query?: string | null | undefined;
};
export type IssuesSearchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"IssuesInner_data">;
};
export type IssuesSearchQuery = {
  response: IssuesSearchQuery$data;
  variables: IssuesSearchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "name": "__relay_model_instance",
      "args": null,
      "fragment": {
        "kind": "InlineFragment",
        "selections": [
          (v2/*: any*/)
        ],
        "type": "RestIssue",
        "abstractKey": null
      },
      "kind": "RelayResolver",
      "storageKey": null,
      "isOutputType": false
    }
  ],
  "type": "RestIssue",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IssuesSearchQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "IssuesInner_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssuesSearchQuery",
    "selections": [
      {
        "kind": "ClientEdgeToClientObject",
        "backingField": {
          "name": "restIssues",
          "args": (v1/*: any*/),
          "fragment": null,
          "kind": "RelayResolver",
          "storageKey": null,
          "isOutputType": false
        },
        "linkedField": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "RestIssue",
          "kind": "LinkedField",
          "name": "restIssues",
          "plural": true,
          "selections": [
            (v2/*: any*/),
            {
              "name": "number",
              "args": null,
              "fragment": (v3/*: any*/),
              "kind": "RelayResolver",
              "storageKey": null,
              "isOutputType": true
            },
            {
              "name": "title",
              "args": null,
              "fragment": (v3/*: any*/),
              "kind": "RelayResolver",
              "storageKey": null,
              "isOutputType": true
            },
            {
              "name": "url",
              "args": null,
              "fragment": (v3/*: any*/),
              "kind": "RelayResolver",
              "storageKey": null,
              "isOutputType": true
            },
            {
              "name": "author",
              "args": null,
              "fragment": (v3/*: any*/),
              "kind": "RelayResolver",
              "storageKey": null,
              "isOutputType": true
            }
          ],
          "storageKey": null
        }
      }
    ]
  },
  "params": {
    "cacheID": "acaeabfab82ea9e9adadb26ceee448b7",
    "id": null,
    "metadata": {},
    "name": "IssuesSearchQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "c5ca9d1bc9a5efd345727862631f8f44";

export default node;
