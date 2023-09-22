import React from 'react';
import { useUID as useUIDLegacy, useUIDSeed as useUIDSeedLegacy, UIDFork, uid } from 'react-uid';

/**
 * We found a workaround here but for webpack Workaround for https://github.com/webpack/webpack/issues/14814
 * The line below is an adaptation to make it work in ESBuild (bundler we're using)
 */
const useId = 'useId';
const maybeReactUseId: undefined | (() => string) = React[useId];

const useUID = maybeReactUseId !== undefined ? maybeReactUseId : useUIDLegacy;

const useUIDSeed =
  maybeReactUseId !== undefined
    ? () => {
        const id = maybeReactUseId();
        return (seed: string) => `${id}-${seed}`;
      }
    : useUIDSeedLegacy;

export { useUIDSeed, UIDFork, uid, useUID };
