/**
 * @generated SignedSource<<8360e76e109f6b6e6a6074627855a43f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { ViewData } from "../resolvers/viewData.resolver";
import { FragmentRefs } from "relay-runtime";
export type ViewData____relay_model_instance$data = {
  readonly __relay_model_instance: ViewData;
  readonly " $fragmentType": "ViewData____relay_model_instance";
};
export type ViewData____relay_model_instance$key = {
  readonly " $data"?: ViewData____relay_model_instance$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewData____relay_model_instance">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewData____relay_model_instance",
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
  "type": "ViewData",
  "abstractKey": null
};

export default node;
