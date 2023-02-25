import type {Properties} from 'csstype';
import debounce from 'lodash/debounce';

import type {Token, Tokens, TokenExampleColors, TokensShape} from './types';
import {event} from '../../lib/gtag';

export const trackTokenFilterString = debounce((filter: string): void => {
  if (filter !== '') {
    event({
      category: 'Design Tokens',
      action: 'filter',
      label: filter,
    });
  }
}, 500);

function sanitizeForSearch(filterString: string): string {
  /*
   * Remove space and `-` characters
   * Lowercases
   */
  return filterString.replace(/[\s-]+/g, '').toLowerCase();
}

export const filterTokenList = (filterString: string, tokens: Tokens): Partial<Tokens> | null => {
  const sanitizedFilterString = sanitizeForSearch(filterString);
  const categories = Object.keys(tokens);

  let newTokens: Partial<Tokens> | null = null;

  for (const category of categories) {
    const filteredTokens = tokens[category].filter((token: Token) => {
      return (
        sanitizeForSearch(token.name).includes(sanitizedFilterString) ||
        sanitizeForSearch(token.value.toString()).includes(sanitizedFilterString) ||
        (token.altValue && sanitizeForSearch(token.altValue).includes(sanitizedFilterString))
      );
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

export const getTokenExampleColors = (tokens: Tokens): TokenExampleColors => {
  return {
    backgroundColor: tokens['background-colors'].find((token) => token.name === 'color-background-body')
      ?.value as Properties['backgroundColor'],
    backgroundColorInverse: tokens['background-colors'].find((token) => token.name === 'color-background-body-inverse')
      ?.value as Properties['backgroundColor'],
    borderColor: tokens['border-colors'].find((token) => token.name === 'color-border')
      ?.value as Properties['borderColor'],
    highlightColor: tokens['background-colors'].find((token) => token.name === 'color-background-stronger')
      ?.value as Properties['backgroundColor'],
    textColor: tokens['text-colors'].find((token) => token.name === 'color-text')?.value as Properties['color'],
    textColorInverse: tokens['text-colors'].find((token) => token.name === 'color-text-inverse')
      ?.value as Properties['color'],
  };
};

export const getTokenContrastPairs = (Tokens: TokensShape): Record<string, string[]> => {
  const {tokens} = Tokens;
  const tokensWithPairs: Record<string, string[]> = {};
  const tokenCategories = tokens ? (Object.keys(tokens) as [keyof typeof tokens]) : [];
  tokenCategories.forEach((tokenCatgory) => {
    if (tokens) {
      tokens[tokenCatgory].forEach((token) => {
        if (token.text_contrast_pairing) {
          tokensWithPairs[token.name] = token.text_contrast_pairing;
        }
      });
    }
  });
  return tokensWithPairs;
};
