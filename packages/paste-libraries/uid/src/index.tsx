import * as React from 'react';
import {useUID as useUIDLegacy, useUIDSeed as useUIDSeedLegacy, UIDFork, uid} from 'react-uid';

// eslint-disable-next-line no-useless-concat -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId: undefined | (() => string) = (React as any)['useId' + ''];

const useUID = maybeReactUseId !== undefined ? maybeReactUseId : useUIDLegacy;

const useUIDSeed =
  maybeReactUseId !== undefined
    ? () => {
        return (seed: string) => `${maybeReactUseId()}-${seed}`;
      }
    : useUIDSeedLegacy;

export {useUIDSeed, UIDFork, uid, useUID};
