/**
 * @generated SignedSource<<9c038e0d32a414b379e63b0d57dcc107>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { IssueViewData } from "../resolvers/viewData.resolver";
import { FragmentRefs } from "relay-runtime";
export type IssueViewData____relay_model_instance$data = {
  readonly __relay_model_instance: IssueViewData;
  readonly " $fragmentType": "IssueViewData____relay_model_instance";
};
export type IssueViewData____relay_model_instance$key = {
  readonly " $data"?: IssueViewData____relay_model_instance$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueViewData____relay_model_instance">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueViewData____relay_model_instance",
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
  "type": "IssueViewData",
  "abstractKey": null
};

export default node;
