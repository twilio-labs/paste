import darkThemeTokens from '@twilio-paste/design-tokens/dist/themes/dark/tokens.gatsby';
import defaultThemeTokens from '@twilio-paste/design-tokens/dist/tokens.gatsby';

import type {ThemeTokens, TokensByCategory} from './types';

import {sentenceCase} from './utils';

export const filterDeprecated = (
  categoryTokens: typeof darkThemeTokens.tokens | typeof defaultThemeTokens.tokens
): TokensByCategory =>
  Object.entries(categoryTokens).reduce(
    (result, [key, tokens]) => ({
      ...result,
      // @ts-ignore
      [key]: tokens.filter(({deprecated = false}) => {
        return !deprecated;
      }),
    }),
    {} as TokensByCategory
  );

export const TOKENS_BY_THEME: ThemeTokens = {
  dark: filterDeprecated(darkThemeTokens.tokens),
  default: filterDeprecated(defaultThemeTokens.tokens),
};

// assumption: categoriy tokens are the same.
export const TOKEN_CATEGORIES = Object.keys(TOKENS_BY_THEME.dark);

export const pageAsideHeadings = TOKEN_CATEGORIES.map((value) => ({value: sentenceCase(value), depth: 2}));
export const pageAsideData = {
  fileAbsolutePath: '',
  frontmatter: {slug: '/tokens/list', title: 'Design tokens'},
  headings: pageAsideHeadings,
};
