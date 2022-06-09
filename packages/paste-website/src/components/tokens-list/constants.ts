// @ts-expect-error @TODO this is fixed in a following pull request.
import darkThemeTokens from '@twilio-paste/design-tokens/dist/themes/dark/tokens.gatsby';
// these files are not (currently) built with declaration files.
// @ts-expect-error @TODO this is fixed in a following pull request.
import defaultThemeTokens from '@twilio-paste/design-tokens/dist/tokens.gatsby';

import type {ThemeTokens, TokensByCategory} from './types';

import {sentenceCase} from './utils';

export const filterDeprecated = (categoryTokens: TokensByCategory): TokensByCategory =>
  Object.entries(categoryTokens).reduce(
    (result, [key, tokens]) => ({
      ...result,
      [key]: tokens.filter(({deprecated = false}) => {
        return !deprecated;
      }),
    }),
    {} as TokensByCategory
  );

console.log(darkThemeTokens);

export const TOKENS_BY_THEME: ThemeTokens = {
  dark: filterDeprecated(darkThemeTokens),
  default: filterDeprecated(defaultThemeTokens),
};

// assumption: categoriy tokens are the same.
export const TOKEN_CATEGORIES = Object.keys(TOKENS_BY_THEME.dark);

export const pageAsideHeadings = TOKEN_CATEGORIES.map((value) => ({value: sentenceCase(value), depth: 2}));
export const pageAsideData = {
  fileAbsolutePath: '',
  frontmatter: {slug: '/tokens/list', title: 'Design tokens'},
  headings: pageAsideHeadings,
};
