/**
 * @generated SignedSource<<cedb0aee75957c919c09979bde2242be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
import { RestIssue as restIssueRelayModelInstanceResolverType } from "../resolvers/RestIssue.resolver";
// Type assertion validating that `restIssueRelayModelInstanceResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(restIssueRelayModelInstanceResolverType satisfies (
  id: RestIssue__id$data['id'],
) => unknown);
export type RestIssue____relay_model_instance$data = {
  readonly __relay_model_instance: NonNullable<ReturnType<typeof restIssueRelayModelInstanceResolverType>>;
  readonly " $fragmentType": "RestIssue____relay_model_instance";
};
export type RestIssue____relay_model_instance$key = {
  readonly " $data"?: RestIssue____relay_model_instance$data;
  readonly " $fragmentSpreads": FragmentRefs<"RestIssue____relay_model_instance">;
};

import {RestIssue as restIssueRelayModelInstanceResolver} from '../resolvers/RestIssue.resolver';
import RestIssue__id_graphql from './RestIssue__id.graphql';
import {resolverDataInjector} from 'relay-runtime/experimental';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RestIssue____relay_model_instance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RestIssue__id"
      },
      "kind": "RelayResolver",
      "name": "__relay_model_instance",
      "resolverModule": resolverDataInjector(RestIssue__id_graphql, restIssueRelayModelInstanceResolver, 'id', true),
      "path": "__relay_model_instance"
    }
  ],
  "type": "RestIssue",
  "abstractKey": null
};

export default node;
