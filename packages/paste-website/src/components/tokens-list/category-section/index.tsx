import * as React from 'react';
import {useVirtual} from 'react-virtual';

import isEqual from 'lodash/isEqual';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';

import {AnchoredHeading} from '../../Heading';
import {TokenCard} from '../token-card';
import {isMatch, sentenceCase} from '../utils';

import type {TokenCategoryKeys} from '../types';

import {TOKENS_BY_THEME} from '../constants';

const useVirtualizedList = (
  // @TODO no any
  items: any[],
  parentRef: React.MutableRefObject<HTMLDivElement | HTMLElement | null>
): Pick<ReturnType<typeof useVirtual>, 'scrollToIndex' | 'virtualItems' | 'totalSize'> => {
  const {scrollToIndex, virtualItems, totalSize} = useVirtual({
    size: items.length,
    parentRef,
    estimateSize: React.useCallback(() => 36, []),
    overscan: 4,
    paddingStart: 10,
  });

  return {scrollToIndex, virtualItems, totalSize};
};

export const CategorySection: React.FC<{
  value: string;
  themeKey: 'default' | 'dark';
  categoryKey: TokenCategoryKeys;
  setNoResults: VoidFunction;
  // sortTokenFn = sortTokens // @TODO add in when add sort.
  // sortTokenFn?: typeof sortTokens;
}> = ({value, categoryKey, themeKey, setNoResults}) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const seed = useUIDSeed();
  const tokens = TOKENS_BY_THEME[themeKey][categoryKey]; // this is the default for our token state.
  const categoryHeading = React.useMemo(() => sentenceCase(categoryKey), [categoryKey]);
  const [categoryTokens, setCategoryTokens] = React.useState<typeof tokens>(tokens);

  // @TODO narroriwng for undefined.
  const {virtualItems} = useVirtualizedList(categoryTokens, parentRef);

  React.useEffect(() => {
    // instead should maniuplate the virtualized items
    // needs werk
    // @ts-expect-error @TODO fix this typoe
    const filtered = categoryTokens.filter((token) => isMatch(value, token));

    if (!isEqual(filtered, categoryTokens)) {
      setCategoryTokens(filtered);
    }
  }, [value, categoryTokens]);

  React.useEffect(() => {
    if (value === '') {
      setCategoryTokens(tokens);
    }
  }, [value]);

  React.useEffect(() => {
    if (categoryTokens.length === 0) {
      setNoResults();
    }
  }, [categoryTokens.length]);

  return (
    <Box as="section" display={categoryTokens.length > 0 ? 'auto' : 'none'}>
      <AnchoredHeading as="h2" variant="heading40">
        {categoryHeading}
      </AnchoredHeading>

      <Box ref={parentRef}>
        {virtualItems.map(({index}) => {
          const token = categoryTokens[index];

          return (
            <TokenCard
              key={seed(token.name)}
              name={token.name}
              // @ts-expect-error @TODO fix after PR for token card.
              value={token.value}
              category={token.category}
              comment={token.comment}
            />
          );
        })}
      </Box>
    </Box>
  );
};
