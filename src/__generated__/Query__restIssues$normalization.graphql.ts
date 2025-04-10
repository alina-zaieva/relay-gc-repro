/**
 * @generated SignedSource<<507cb8ef0ad6137dcf4b4acc3721736f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { NormalizationSplitOperation } from 'relay-runtime';

export type Query__restIssues$normalization = {
  readonly author: string | null | undefined;
  readonly issueId: string;
  readonly number: number | null | undefined;
  readonly title: string | null | undefined;
  readonly url: string | null | undefined;
};


const node: NormalizationSplitOperation = {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "Query__restIssues$normalization",
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
          "name": "number",
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
  ]
};

export default node;
