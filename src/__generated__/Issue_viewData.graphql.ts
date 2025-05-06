/**
 * @generated SignedSource<<9e14e9fdbe9f390904775cd67ee84a21>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
import { authorModel as issueViewDataAuthorModelResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `issueViewDataAuthorModelResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(issueViewDataAuthorModelResolverType satisfies () => IssueViewData__authorModel$normalization | null | undefined);
export type Issue_viewData$data = {
  readonly authorModel: {
    readonly " $fragmentSpreads": FragmentRefs<"IssueAuthor_viewData">;
  } | null | undefined;
  readonly showAuthor: boolean;
  readonly " $fragmentType": "Issue_viewData";
};
export type Issue_viewData$key = {
  readonly " $data"?: Issue_viewData$data;
  readonly " $fragmentSpreads": FragmentRefs<"Issue_viewData">;
};

import {authorModel as issueViewDataAuthorModelResolver} from '../resolvers/viewData.resolver';
import IssueViewData__authorModel$normalization_graphql from './IssueViewData__authorModel$normalization.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "Issue_viewData",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "IssueAuthorViewData",
      "modelResolvers": null,
      "backingField": {
        "alias": null,
        "args": null,
        "fragment": null,
        "kind": "RelayResolver",
        "name": "authorModel",
        "resolverModule": issueViewDataAuthorModelResolver,
        "path": "authorModel",
        "normalizationInfo": {
          "kind": "OutputType",
          "concreteType": "IssueAuthorViewData",
          "plural": false,
          "normalizationNode": IssueViewData__authorModel$normalization_graphql
        }
      },
      "linkedField": {
        "alias": null,
        "args": null,
        "concreteType": "IssueAuthorViewData",
        "kind": "LinkedField",
        "name": "authorModel",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "IssueAuthor_viewData"
          }
        ],
        "storageKey": null
      }
    },
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
  ],
  "type": "IssueViewData",
  "abstractKey": null
};

(node as any).hash = "8c6c1d8fcf0ee46ff5b6d3f6c386cd78";

export default node;
