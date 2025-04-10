/**
 * @generated SignedSource<<874180b67f0316472edfb87434e85db5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { NormalizationSplitOperation } from 'relay-runtime';

export type ViewData__issueModel$normalization = {
  readonly showAuthor: boolean;
};


const node: NormalizationSplitOperation = {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "ViewData__issueModel$normalization",
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showAuthor",
          "storageKey": null
        }
      ]
    }
  ]
};

export default node;
