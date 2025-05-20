/**
 * @generated SignedSource<<a9d74768961747e354c7ec59ae2fa720>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
import { avatarSize as issueAuthorViewDataAvatarSizeResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `issueAuthorViewDataAvatarSizeResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(issueAuthorViewDataAvatarSizeResolverType satisfies (
  __relay_model_instance: IssueAuthorViewData____relay_model_instance$data['__relay_model_instance'],
) => number | null | undefined);
export type IssueAuthor_viewData$data = {
  readonly avatarSize: number | null | undefined;
  readonly " $fragmentType": "IssueAuthor_viewData";
};
export type IssueAuthor_viewData$key = {
  readonly " $data"?: IssueAuthor_viewData$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueAuthor_viewData">;
};

import {avatarSize as issueAuthorViewDataAvatarSizeResolver} from '../resolvers/viewData.resolver';
import IssueAuthorViewData____relay_model_instance_graphql from './IssueAuthorViewData____relay_model_instance.graphql';
import {resolverDataInjector} from 'relay-runtime/experimental';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueAuthor_viewData",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "IssueAuthorViewData____relay_model_instance"
      },
      "kind": "RelayResolver",
      "name": "avatarSize",
      "resolverModule": resolverDataInjector(IssueAuthorViewData____relay_model_instance_graphql, issueAuthorViewDataAvatarSizeResolver, '__relay_model_instance', true),
      "path": "avatarSize"
    }
  ],
  "type": "IssueAuthorViewData",
  "abstractKey": null
};

(node as any).hash = "cd21497a68bc12036a9ac7e703985704";

export default node;
