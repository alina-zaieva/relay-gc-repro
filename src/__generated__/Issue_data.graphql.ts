/**
 * @generated SignedSource<<bb15d42a8d680ab811efb4089cd6cf2e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
import { author as restIssueAuthorResolverType } from "../resolvers/RestIssue.resolver";
// Type assertion validating that `restIssueAuthorResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(restIssueAuthorResolverType satisfies (
  __relay_model_instance: RestIssue____relay_model_instance$data['__relay_model_instance'],
) => string | null | undefined);
import { number as restIssueNumberResolverType } from "../resolvers/RestIssue.resolver";
// Type assertion validating that `restIssueNumberResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(restIssueNumberResolverType satisfies (
  __relay_model_instance: RestIssue____relay_model_instance$data['__relay_model_instance'],
) => number | null | undefined);
import { title as restIssueTitleResolverType } from "../resolvers/RestIssue.resolver";
// Type assertion validating that `restIssueTitleResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(restIssueTitleResolverType satisfies (
  __relay_model_instance: RestIssue____relay_model_instance$data['__relay_model_instance'],
) => string | null | undefined);
import { url as restIssueUrlResolverType } from "../resolvers/RestIssue.resolver";
// Type assertion validating that `restIssueUrlResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(restIssueUrlResolverType satisfies (
  __relay_model_instance: RestIssue____relay_model_instance$data['__relay_model_instance'],
) => string | null | undefined);
export type Issue_data$data = {
  readonly author: string | null | undefined;
  readonly id: string;
  readonly number: number | null | undefined;
  readonly title: string | null | undefined;
  readonly url: string | null | undefined;
  readonly " $fragmentType": "Issue_data";
};
export type Issue_data$key = {
  readonly " $data"?: Issue_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"Issue_data">;
};

import {author as restIssueAuthorResolver} from '../resolvers/RestIssue.resolver';
import {number as restIssueNumberResolver} from '../resolvers/RestIssue.resolver';
import {title as restIssueTitleResolver} from '../resolvers/RestIssue.resolver';
import {url as restIssueUrlResolver} from '../resolvers/RestIssue.resolver';
import RestIssue____relay_model_instance_graphql from './RestIssue____relay_model_instance.graphql';
import {resolverDataInjector} from 'relay-runtime/experimental';

const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "RestIssue____relay_model_instance"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Issue_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "number",
      "resolverModule": resolverDataInjector(RestIssue____relay_model_instance_graphql, restIssueNumberResolver, '__relay_model_instance', true),
      "path": "number"
    },
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "title",
      "resolverModule": resolverDataInjector(RestIssue____relay_model_instance_graphql, restIssueTitleResolver, '__relay_model_instance', true),
      "path": "title"
    },
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "url",
      "resolverModule": resolverDataInjector(RestIssue____relay_model_instance_graphql, restIssueUrlResolver, '__relay_model_instance', true),
      "path": "url"
    },
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "author",
      "resolverModule": resolverDataInjector(RestIssue____relay_model_instance_graphql, restIssueAuthorResolver, '__relay_model_instance', true),
      "path": "author"
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "RestIssue",
  "abstractKey": null
};
})();

(node as any).hash = "d4f99db5ab9d3b725c27923d40ae0d93";

export default node;
