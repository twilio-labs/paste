import * as React from 'react';

import isEqual from 'lodash/isEqual';
import {Box} from '@twilio-paste/box';
import {useVirtual} from 'react-virtual';

import {AnchoredHeading} from '../../Heading';
import {TokenCard} from '../token-card';
import {isMatch, sentenceCase} from '../utils';
import type {TokenValueFormatter, CategoryKeys} from '../types';
import {TOKENS_BY_THEME} from '../constants';
import {Description} from './Description';

import type {DecoratedToken} from '../types';
import {useUIDSeed} from 'react-uid';

const useVirtualizedList = (
  items: DecoratedToken[],
  parentRef: React.MutableRefObject<HTMLDivElement | HTMLElement | null>
): Pick<ReturnType<typeof useVirtual>, 'scrollToIndex' | 'virtualItems' | 'totalSize'> => {
  const seed = useUIDSeed();
  const {scrollToIndex, virtualItems, totalSize} = useVirtual({
    size: items.length,
    parentRef,
    keyExtractor: React.useCallback((idx) => seed(items[idx]), []),
    estimateSize: React.useCallback(() => 36, []),
    overscan: 4,
    paddingStart: 10,
  });

  return {scrollToIndex, virtualItems, totalSize};
};

export const CategorySection: React.FC<{
  filterString: string;
  themeKey: ('default' | 'dark') & keyof typeof TOKENS_BY_THEME;
  categoryKey: string & CategoryKeys;
  setNoResults: VoidFunction;
  tokenFormatter: TokenValueFormatter;
}> = ({filterString, categoryKey, themeKey, setNoResults, tokenFormatter}) => {
  React.useEffect(() => {}, []);
  const categoryTokens = React.useMemo(() => TOKENS_BY_THEME[themeKey][categoryKey], [themeKey]);
  const categoryHeading = React.useMemo(() => sentenceCase(categoryKey), [categoryKey]);
  const [filteredTokens, setFilteredTokens] = React.useState<typeof categoryTokens>(categoryTokens);

  const parentRef = React.useRef<HTMLDivElement>(null);
  const {virtualItems} = useVirtualizedList(filteredTokens, parentRef);

  React.useEffect(() => {
    if (filteredTokens.length === 0) {
      setNoResults();
    }
  }, [filteredTokens.length]);

  React.useEffect(() => {
    const filtered = categoryTokens.filter((token) => isMatch(filterString, token));
    setFilteredTokens((current) => {
      return !isEqual(current, filtered) ? filtered : current;
    });
  }, [filterString, categoryTokens]);

  React.useEffect(() => {
    if (filterString === '') {
      setFilteredTokens(categoryTokens);
    }
  }, [filterString]);

  return (
    <Box
      as="section"
      paddingTop="space60"
      paddingBottom="space60"
      display={filteredTokens.length > 0 ? 'auto' : 'none'}
    >
      <AnchoredHeading as="h2" variant="heading40">
        {categoryHeading}
      </AnchoredHeading>

      <Description categoryKey={categoryKey} />

      <Box ref={parentRef}>
        {virtualItems.map(({index, key}) => {
          const token = filteredTokens[index];

          return (
            <TokenCard
              key={key}
              name={tokenFormatter(token.name)}
              value={token.value}
              category={token.category}
              comment={token.comment}
              contrastRating={token.contrastRating}
              backgroundColor={token.backgroundColor}
            />
          );
        })}
      </Box>
    </Box>
  );
};
