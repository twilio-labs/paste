import darkThemeTokens from '@twilio-paste/design-tokens/dist/themes/dark/tokens.gatsby';
import defaultThemeTokens from '@twilio-paste/design-tokens/dist/tokens.gatsby';

import {annotate} from '../../utils/token-decorator';

import {sentenceCase} from './utils';

export const TOKENS_BY_THEME = Object.freeze({
  dark: annotate(darkThemeTokens),
  default: annotate(defaultThemeTokens),
});

// assumption: categoriy tokens are the same.
export const TOKEN_CATEGORIES = Object.keys(TOKENS_BY_THEME.dark);

export const pageAsideHeadings = TOKEN_CATEGORIES.map((value) => ({value: sentenceCase(value), depth: 2}));
export const pageAsideData = {
  fileAbsolutePath: '',
  frontmatter: {slug: '/tokens/list', title: 'Design tokens'},
  headings: pageAsideHeadings,
};
