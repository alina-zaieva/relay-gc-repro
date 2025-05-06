/**
 * @generated SignedSource<<4358dab6155f7b81eeaecb14e5cb49c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RestIssue__id$data = {
  readonly id: string;
  readonly " $fragmentType": "RestIssue__id";
};
export type RestIssue__id$key = {
  readonly " $data"?: RestIssue__id$data;
  readonly " $fragmentSpreads": FragmentRefs<"RestIssue__id">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RestIssue__id",
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "RestIssue",
  "abstractKey": null
};

export default node;
