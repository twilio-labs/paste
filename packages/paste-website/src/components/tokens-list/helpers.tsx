import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import type {Token, Tokens} from './types';

import debounce from 'lodash/debounce';

export const trackTokenFilterString = debounce((filter: string): void => {
  if (filter !== '') {
    trackCustomEvent({
      category: 'Design Tokens',
      action: 'filter',
      label: filter,
    });
  }
}, 500);

export const filterTokenList = (filterString: string, tokens: Tokens): Partial<Tokens> | null => {
  const categories = Object.keys(tokens);

  let newTokens: Partial<Tokens> | null = null;

  for (const category of categories) {
    const filteredTokens = tokens[category].filter((token: Token) => {
      return token.name.includes(filterString) || token.value.toString().includes(filterString);
    });

    if (filteredTokens.length > 0) {
      if (newTokens === null) {
        newTokens = {};
      }
      newTokens[category] = filteredTokens;
    }
  }

  return newTokens;
};
