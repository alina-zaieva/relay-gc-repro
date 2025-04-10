/**
 * @generated SignedSource<<460fe5e7e9d512b63765c3d1a0beb0b8>>
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
];
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
          "isOutputType": true
        },
        "linkedField": {
          "alias": null,
          "args": (v1/*: any*/),
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
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "number",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "author",
              "storageKey": null
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

(node as any).hash = "4b4d89fae9e315ed91eed1b7b938beac";

export default node;
