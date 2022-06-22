/* eslint-disable react/react-in-jsx-scope */
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import type {ThemeVariants} from '@twilio-paste/theme';
import type {LegacyTokenCategory, LegacyTokensListProps} from './types';
import {Callout, CalloutTitle, CalloutText} from '../callout';

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

const filterDeprecatedTokens = (tokens: LegacyTokenCategory[]): LegacyTokenCategory[] => {
  return tokens.map((category) => {
    return {...category, tokens: [...category.tokens.filter((token) => !token.deprecated)]};
  });
};

export const getTokensByTheme = (props: LegacyTokensListProps, theme: ThemeVariants): LegacyTokenCategory[] => {
  const unfilteredTokensBasedOnTheme =
    theme === 'default' ? props.defaultTokens[0].node.tokens : props.darkTokens[0].node.tokens;
  let tokens = [] as LegacyTokenCategory[];

  if (unfilteredTokensBasedOnTheme != null) {
    tokens = filterDeprecatedTokens(unfilteredTokensBasedOnTheme);
  }

  const fontSize = tokens.find((ele) => ele.categoryName === 'font-sizes');
  if (fontSize) {
    fontSize.info = (
      <Callout>
        <CalloutTitle as="h4">Heads up about font sizes in Paste!</CalloutTitle>
        <CalloutText>
          Font-sizes in our Paste tokens use rem values. Unlike em values which are relative to their parent element,
          rem values are relative to the html element. If you aren&apos;t using the Theme.Provider component, you must
          set font-size: 100%; on your page&apos;s html tag for the font-sizes to be sized correctly as 1rem=16px.
        </CalloutText>
      </Callout>
    );
  }

  return tokens;
};

export const filterTokenList = (
  filter: string,
  propsArg: LegacyTokensListProps,
  themeArg: string
): LegacyTokenCategory[] | null => {
  const newTokenCategories = getTokensByTheme(propsArg, themeArg).map((category): LegacyTokenCategory => {
    const newTokens = category.tokens.filter((token) => {
      return token.name.includes(filter) || token.value.includes(filter);
    });
    return {...category, tokens: newTokens};
  });
  const filteredCategories = newTokenCategories.filter((category) => {
    return category.tokens.length > 0;
  });
  if (filteredCategories.length > 0) {
    return filteredCategories;
  }
  return null;
};
/* eslint-enable react/react-in-jsx-scope */
