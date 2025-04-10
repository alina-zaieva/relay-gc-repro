/**
 * @generated SignedSource<<5be282e342cfb159b1b9c30f1105619b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { NormalizationSplitOperation } from 'relay-runtime';

export type Query__viewData$normalization = {
  readonly noResultsText: string;
  readonly searchPlaceholderText: string;
};


const node: NormalizationSplitOperation = {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "Query__viewData$normalization",
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "searchPlaceholderText",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "noResultsText",
          "storageKey": null
        }
      ]
    }
  ]
};

export default node;
