/**
 * @generated SignedSource<<320697a46dc6dfa1c37680fb5177bf6b>>
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
(queryViewDataResolverType satisfies () => ViewData | null | undefined);
import { ViewData } from "../resolvers/viewData.resolver";
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

import {viewData as queryViewDataResolver} from '../resolvers/viewData.resolver';

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
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__relay_model_instance",
    "storageKey": null
  }
],
v5 = {
  "kind": "InlineFragment",
  "selections": (v4/*: any*/),
  "type": "ViewData",
  "abstractKey": null
},
v6 = {
  "kind": "InlineFragment",
  "selections": (v4/*: any*/),
  "type": "IssueViewData",
  "abstractKey": null
};
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
            "kind": "WeakModel",
            "concreteType": "ViewData",
            "plural": false
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
              "name": "searchPlaceholderText",
              "args": null,
              "fragment": (v5/*: any*/),
              "kind": "RelayResolver",
              "storageKey": null,
              "isOutputType": true
            },
            {
              "name": "noResultsText",
              "args": null,
              "fragment": (v5/*: any*/),
              "kind": "RelayResolver",
              "storageKey": null,
              "isOutputType": true
            },
            {
              "kind": "ClientEdgeToClientObject",
              "backingField": {
                "name": "issueModel",
                "args": null,
                "fragment": (v5/*: any*/),
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
                    "name": "showAuthor",
                    "args": null,
                    "fragment": (v6/*: any*/),
                    "kind": "RelayResolver",
                    "storageKey": null,
                    "isOutputType": true
                  },
                  {
                    "kind": "ClientEdgeToClientObject",
                    "backingField": {
                      "name": "authorModel",
                      "args": null,
                      "fragment": (v6/*: any*/),
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
                          "name": "avatarSize",
                          "args": null,
                          "fragment": {
                            "kind": "InlineFragment",
                            "selections": (v4/*: any*/),
                            "type": "IssueAuthorViewData",
                            "abstractKey": null
                          },
                          "kind": "RelayResolver",
                          "storageKey": null,
                          "isOutputType": true
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
