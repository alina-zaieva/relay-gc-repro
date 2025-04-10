/**
 * @generated SignedSource<<5a34a0d78bcb5155b2788d1d4b553c16>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IssueAuthorAvatarQuery$variables = {
  avatarSize: number;
  login: string;
};
export type IssueAuthorAvatarQuery$data = {
  readonly user: {
    readonly avatarUrl: any;
  } | null | undefined;
};
export type IssueAuthorAvatarQuery = {
  response: IssueAuthorAvatarQuery$data;
  variables: IssueAuthorAvatarQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "avatarSize"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "login"
},
v2 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v3 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "size",
      "variableName": "avatarSize"
    }
  ],
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueAuthorAvatarQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "IssueAuthorAvatarQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "805f500e190ed0917cdf3e598cac9f21",
    "id": null,
    "metadata": {},
    "name": "IssueAuthorAvatarQuery",
    "operationKind": "query",
    "text": "query IssueAuthorAvatarQuery(\n  $login: String!\n  $avatarSize: Int!\n) {\n  user(login: $login) {\n    avatarUrl(size: $avatarSize)\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "159ceb8bec82872dd7f93a394927ebbf";

export default node;
