/**
 * @generated SignedSource<<0100cfb2bb635ed43eea9c728ab32362>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { NormalizationSplitOperation } from 'relay-runtime';

export type IssueViewData__authorModel$normalization = {
  readonly avatarSize: number;
};


const node: NormalizationSplitOperation = {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "IssueViewData__authorModel$normalization",
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
  ]
};

export default node;
