/**
 * @generated SignedSource<<8c07c2b0e8bbf436a036dd390ba97a84>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { IssueAuthorViewData } from "../resolvers/viewData.resolver";
import { FragmentRefs } from "relay-runtime";
import { authorModel as issueViewDataAuthorModelResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `issueViewDataAuthorModelResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(issueViewDataAuthorModelResolverType satisfies (
  __relay_model_instance: IssueViewData____relay_model_instance$data['__relay_model_instance'],
) => IssueAuthorViewData | null | undefined);
import { showAuthor as issueViewDataShowAuthorResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `issueViewDataShowAuthorResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(issueViewDataShowAuthorResolverType satisfies (
  __relay_model_instance: IssueViewData____relay_model_instance$data['__relay_model_instance'],
) => boolean | null | undefined);
export type Issue_viewData$data = {
  readonly authorModel: {
    readonly " $fragmentSpreads": FragmentRefs<"IssueAuthor_viewData">;
  } | null | undefined;
  readonly showAuthor: boolean | null | undefined;
  readonly " $fragmentType": "Issue_viewData";
};
export type Issue_viewData$key = {
  readonly " $data"?: Issue_viewData$data;
  readonly " $fragmentSpreads": FragmentRefs<"Issue_viewData">;
};

import {authorModel as issueViewDataAuthorModelResolver} from '../resolvers/viewData.resolver';
import {showAuthor as issueViewDataShowAuthorResolver} from '../resolvers/viewData.resolver';
import IssueViewData____relay_model_instance_graphql from './IssueViewData____relay_model_instance.graphql';
import {resolverDataInjector} from 'relay-runtime/experimental';

const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "IssueViewData____relay_model_instance"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "Issue_viewData",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "showAuthor",
      "resolverModule": resolverDataInjector(IssueViewData____relay_model_instance_graphql, issueViewDataShowAuthorResolver, '__relay_model_instance', true),
      "path": "showAuthor"
    },
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "IssueAuthorViewData",
      "modelResolvers": null,
      "backingField": {
        "alias": null,
        "args": null,
        "fragment": (v0/*: any*/),
        "kind": "RelayResolver",
        "name": "authorModel",
        "resolverModule": resolverDataInjector(IssueViewData____relay_model_instance_graphql, issueViewDataAuthorModelResolver, '__relay_model_instance', true),
        "path": "authorModel",
        "normalizationInfo": {
          "kind": "WeakModel",
          "concreteType": "IssueAuthorViewData",
          "plural": false
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
    }
  ],
  "type": "IssueViewData",
  "abstractKey": null
};
})();

(node as any).hash = "8c6c1d8fcf0ee46ff5b6d3f6c386cd78";

export default node;
