/**
 * @generated SignedSource<<da9acd1eb0ac5b55f6b285bc07a7df9b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Issue_data$data = {
  readonly author: string | null | undefined;
  readonly issueId: string;
  readonly number: number | null | undefined;
  readonly title: string | null | undefined;
  readonly url: string | null | undefined;
  readonly " $fragmentType": "Issue_data";
};
export type Issue_data$key = {
  readonly " $data"?: Issue_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"Issue_data">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Issue_data",
  "selections": [
    {
      "kind": "ClientExtension",
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
      ]
    }
  ],
  "type": "RestIssue",
  "abstractKey": null
};

(node as any).hash = "58f9680548f2b62f5162c25e5bada4ac";

export default node;
