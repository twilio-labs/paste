import * as React from 'react';

import {useVirtual} from 'react-virtual';

import type {DecoratedToken} from '../types';
import {useUIDSeed} from 'react-uid';

export const useVirtualizedTokensList = (
  tokens: DecoratedToken[],
  parentRef: React.MutableRefObject<HTMLDivElement | HTMLElement | null>
): Pick<ReturnType<typeof useVirtual>, 'scrollToIndex' | 'virtualItems' | 'totalSize'> => {
  const seed = useUIDSeed();
  const {scrollToIndex, virtualItems, totalSize} = useVirtual({
    size: tokens.length,
    parentRef,
    keyExtractor: React.useCallback((idx) => seed(tokens[idx]), []),
    estimateSize: React.useCallback(() => 36, []),
    overscan: 4,
    paddingStart: 10,
  });

  return {scrollToIndex, virtualItems, totalSize};
};
