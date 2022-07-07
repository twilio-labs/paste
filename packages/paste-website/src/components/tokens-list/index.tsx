import * as React from 'react';
import {Box} from '@twilio-paste/box';
import Tokens from '@twilio-paste/design-tokens/dist/tokens.generic';
import DarkModeTokens from '@twilio-paste/design-tokens/dist/themes/dark/tokens.generic';
import {AnchoredHeading} from '../Heading';
import {useDarkModeContext} from '../../context/DarkModeContext';
import {trackTokenFilterString, filterTokenList, getTokensByTheme} from './helpers';
import type {Token, TokenCategory, TokensListProps} from './types';
import {PageAside} from '../shortcodes/PageAside';
import {NoTokensFound} from './NoTokensFound';
import {TokenCard} from './token-card';
import {TokensListFilter} from './TokensListFilter';

const sentenceCase = (catName: string): string => {
  return catName
    .split('-')
    .join(' ')
    .replace(/[a-z]/i, (letter): string => {
      return letter.toUpperCase();
    });
};

const ContentWrapper: React.FC = (props) => <Box as="div" display={['block', 'block', 'flex']} {...props} />;
const Content: React.FC = (props) => <Box as="div" maxWidth="size70" minWidth="0" {...props} />;

export const TokensList: React.FC<TokensListProps> = (props) => {
  const {theme} = useDarkModeContext();
  const [filterString, setFilterString] = React.useState('');
  const [tokens, setTokens] = React.useState(Tokens.tokens);
  const [tokenCategories, setTokenCategories] = React.useState(Object.keys(tokens) as unknown as [keyof typeof tokens]);
  const [useJavascriptNames, setUseJavascriptNames] = React.useState(false);

  // The rendered tokens should update every time the filterString, props, or theme changes
  React.useEffect(() => {
    // setTokens(filterTokenList(filterString, props, theme));
    trackTokenFilterString(filterString);
  }, [filterString, props, theme]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const filter = e.currentTarget.value;
    setFilterString(filter);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e.currentTarget.value === 'dark') setTokens(DarkModeTokens.tokens);
    else if (e.currentTarget.value === 'default') setTokens(Tokens.tokens);
  };

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e.currentTarget.value === 'javascript') setUseJavascriptNames(true);
    else if (e.currentTarget.value === 'css') setUseJavascriptNames(false);
  };

  if (tokens === null) {
    return <NoTokensFound onClearSearch={() => setFilterString('')} />;
  }

  return (
    <ContentWrapper>
      <PageAside
        data={{
          fileAbsolutePath: '',
          frontmatter: {slug: '/tokens/list', title: 'Design tokens'},
          headings: tokenCategories.map((value) => ({value: sentenceCase(value), depth: 2})),
        }}
      />
      <Content>
        <TokensListFilter
          theme={theme}
          handleThemeChange={handleThemeChange}
          handleFormatChange={handleFormatChange}
          handleInput={handleInput}
        />
        {tokenCategories.map((tokenCategory) => (
          <React.Fragment key={`catname-${tokenCategory}`}>
            <AnchoredHeading as="h2" variant="heading20">
              {sentenceCase(tokenCategory)}
            </AnchoredHeading>
            <Box marginBottom="space160" data-cy="tokens-table-container">
              {/* @ts-ignore : todo - figure out comment issue */}
              {tokens[tokenCategory].map(({name, value, comment}) => (
                <TokenCard
                  key={`token${name}`}
                  category={tokenCategory}
                  name={name}
                  useCamelCase={useJavascriptNames ? true : false}
                  value={value}
                  comment={comment}
                  backgroundColor={
                    tokens['background-colors'].find((token) => token.name === 'color-background-body')?.value
                  }
                />
              ))}
            </Box>
          </React.Fragment>
        ))}
      </Content>
    </ContentWrapper>
  );
};
