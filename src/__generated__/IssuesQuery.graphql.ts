/**
 * @generated SignedSource<<b8974d10e7ddcac653321e19377befb5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
import { viewData as queryViewDataResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `queryViewDataResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryViewDataResolverType satisfies () => Query__viewData$normalization | null | undefined);
export type IssuesQuery$variables = {
  query?: string | null | undefined;
};
export type IssuesQuery$data = {
  readonly viewData: {
    readonly " $fragmentSpreads": FragmentRefs<"IssuesInner_viewData">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"IssuesInner_data">;
};
export type IssuesQuery = {
  response: IssuesQuery$data;
  variables: IssuesQuery$variables;
};

import {viewData as queryViewDataResolver} from './../resolvers/viewData.resolver';
import Query__viewData$normalization_graphql from './Query__viewData$normalization.graphql';

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
    "metadata": {
      "hasClientEdges": true
    },
    "name": "IssuesQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "IssuesInner_data"
      },
      {
        "kind": "ClientEdgeToClientObject",
        "concreteType": "ViewData",
        "modelResolvers": null,
        "backingField": {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayResolver",
          "name": "viewData",
          "resolverModule": queryViewDataResolver,
          "path": "viewData",
          "normalizationInfo": {
            "kind": "OutputType",
            "concreteType": "ViewData",
            "plural": false,
            "normalizationNode": Query__viewData$normalization_graphql
          }
        },
        "linkedField": {
          "alias": null,
          "args": null,
          "concreteType": "ViewData",
          "kind": "LinkedField",
          "name": "viewData",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "IssuesInner_viewData"
            }
          ],
          "storageKey": null
        }
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssuesQuery",
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
      },
      {
        "kind": "ClientEdgeToClientObject",
        "backingField": {
          "name": "viewData",
          "args": null,
          "fragment": null,
          "kind": "RelayResolver",
          "storageKey": null,
          "isOutputType": true
        },
        "linkedField": {
          "alias": null,
          "args": null,
          "concreteType": "ViewData",
          "kind": "LinkedField",
          "name": "viewData",
          "plural": false,
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
            },
            {
              "kind": "ClientEdgeToClientObject",
              "backingField": {
                "name": "issueModel",
                "args": null,
                "fragment": null,
                "kind": "RelayResolver",
                "storageKey": null,
                "isOutputType": true
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
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "showAuthor",
                    "storageKey": null
                  },
                  {
                    "kind": "ClientEdgeToClientObject",
                    "backingField": {
                      "name": "authorModel",
                      "args": null,
                      "fragment": null,
                      "kind": "RelayResolver",
                      "storageKey": null,
                      "isOutputType": true
                    },
                    "linkedField": {
                      "alias": null,
                      "args": null,
                      "concreteType": "IssueAuthorViewData",
                      "kind": "LinkedField",
                      "name": "authorModel",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "avatarSize",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  }
                ],
                "storageKey": null
              }
            }
          ],
          "storageKey": null
        }
      }
    ]
  },
  "params": {
    "cacheID": "0eab0820628728ebb2e4db1c1e64c2c2",
    "id": null,
    "metadata": {},
    "name": "IssuesQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "2da77b6138f2c567bf2c4815e921c086";

export default node;
