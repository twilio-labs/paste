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
  const tokens = React.useMemo(() => TOKENS_BY_THEME[themeKey][categoryKey], [themeKey]);
  const categoryHeading = React.useMemo(() => sentenceCase(categoryKey), [categoryKey]);
  const [categoryTokens, setCategoryTokens] = React.useState<typeof tokens>(tokens);

  const parentRef = React.useRef<HTMLDivElement>(null);
  const {virtualItems} = useVirtualizedList(categoryTokens, parentRef);

  React.useEffect(() => {
    const filtered = tokens.filter((token) => isMatch(filterString, token));
    setCategoryTokens((current) => {
      return !isEqual(current, filtered) ? filtered : current;
    });
  }, [filterString, tokens]);

  React.useEffect(() => {
    if (filterString === '') {
      setCategoryTokens(tokens);
    }
  }, [filterString]);

  React.useEffect(() => {
    if (categoryTokens.length === 0) {
      setNoResults();
    }
  }, [categoryTokens.length]);

  return (
    <Box
      as="section"
      paddingTop="space60"
      paddingBottom="space60"
      display={categoryTokens.length > 0 ? 'auto' : 'none'}
    >
      <AnchoredHeading as="h2" variant="heading40">
        {categoryHeading}
      </AnchoredHeading>

      <Description categoryKey={categoryKey} />

      <Box ref={parentRef}>
        {virtualItems.map(({index, key}) => {
          const token = categoryTokens[index];

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
