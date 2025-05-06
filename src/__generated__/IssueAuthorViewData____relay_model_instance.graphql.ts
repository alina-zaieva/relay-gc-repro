/**
 * @generated SignedSource<<341be25cfbd4f97afc389f2a2e131d32>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { IssueAuthorViewData } from "../resolvers/viewData.resolver";
import { FragmentRefs } from "relay-runtime";
export type IssueAuthorViewData____relay_model_instance$data = {
  readonly __relay_model_instance: IssueAuthorViewData;
  readonly " $fragmentType": "IssueAuthorViewData____relay_model_instance";
};
export type IssueAuthorViewData____relay_model_instance$key = {
  readonly " $data"?: IssueAuthorViewData____relay_model_instance$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueAuthorViewData____relay_model_instance">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueAuthorViewData____relay_model_instance",
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__relay_model_instance",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "IssueAuthorViewData",
  "abstractKey": null
};

export default node;
