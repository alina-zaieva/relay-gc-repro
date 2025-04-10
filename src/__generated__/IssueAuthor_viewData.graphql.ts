/**
 * @generated SignedSource<<a4d293046e58ea501b1cc9a865c82463>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueAuthor_viewData$data = {
  readonly avatarSize: number;
  readonly " $fragmentType": "IssueAuthor_viewData";
};
export type IssueAuthor_viewData$key = {
  readonly " $data"?: IssueAuthor_viewData$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueAuthor_viewData">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueAuthor_viewData",
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatarSize",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "IssueAuthorViewData",
  "abstractKey": null
};

(node as any).hash = "cd21497a68bc12036a9ac7e703985704";

export default node;
