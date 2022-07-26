import * as React from 'react';
import {Box} from '@twilio-paste/box';
import DefaultThemeTokens from '@twilio-paste/design-tokens/dist/tokens.generic';
import DarkThemeTokens from '@twilio-paste/design-tokens/dist/themes/dark/tokens.generic';
import {useClipboard} from '@twilio-paste/clipboard-copy-library';
import kebabCase from 'lodash/kebabCase';
import {AnchoredHeading} from '../Heading';
import {trackTokenFilterString, filterTokenList} from './helpers';
import type {Token, Tokens} from './types';
import {PageAside} from '../shortcodes/PageAside';
import {NoTokensFound} from './NoTokensFound';
import {TokenCard} from './token-card';
import {TokensListFilter} from './TokensListFilter';
import {SimpleStorage} from '../../utils/SimpleStorage';
import {sectionIntros} from './sectionIntros';

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

export const TokensList: React.FC = () => {
  const [filterString, setFilterString] = React.useState('');
  const [selectedTheme, setSelectedTheme] = React.useState(SimpleStorage.get('themeControl') ?? 'default');
  // Handles storing the full list of currently visible tokens (swaps on theme change)
  const [tokens, setTokens] = React.useState<{[key: string]: Token[]}>(
    selectedTheme === 'dark' ? DarkThemeTokens.tokens : DefaultThemeTokens.tokens
  );
  // Handles storing the currently viewable list of tokens (the above + filters)
  const [filteredTokens, setFilteredTokens] = React.useState<Partial<Tokens> | null>(DefaultThemeTokens.tokens);
  const [tokenCategories, setTokenCategories] = React.useState(Object.keys(DefaultThemeTokens.tokens));
  const [selectedFormat, setSelectedFormat] = React.useState(SimpleStorage.get('formatControl') ?? 'css');
  const [useJavascriptNames, setUseJavascriptNames] = React.useState(selectedFormat === 'javascript');
  const [lastCopiedValue, setLastCopiedValue] = React.useState('');
  const clipboard = useClipboard({copiedTimeout: 2000});

  const handleCopyName = React.useCallback((_tokenName: string): void => {
    clipboard.copy(_tokenName);
    // The inverse of what we do in TokenCard
    setLastCopiedValue(useJavascriptNames ? _tokenName.slice(1) : kebabCase(_tokenName));
  }, []);

  // The rendered tokens should update every time the filterString or tokens change
  React.useEffect(() => {
    const newFilteredTokens = filterTokenList(filterString, tokens);
    setFilteredTokens(newFilteredTokens);

    // Sometimes the filtered object will find no results and return null
    setTokenCategories(newFilteredTokens == null ? [] : Object.keys(newFilteredTokens));

    trackTokenFilterString(filterString);
  }, [filterString, tokens]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const filter = e.currentTarget.value;
    setFilterString(filter);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.currentTarget.value;
    SimpleStorage.set('themeControl', value);
    setSelectedTheme(value);
    setTokens(value === 'dark' ? DarkThemeTokens.tokens : DefaultThemeTokens.tokens);
  };

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.currentTarget.value;
    SimpleStorage.set('formatControl', value);
    setSelectedFormat(value);
    setUseJavascriptNames(selectedFormat === 'javascript');
  };

  /**
   * These vars grab different values from the selected theme (as opposed to the global theme)
   * to render the token examples in accordance with the selected theme.
   */
  const tokenExampleBackgroundColor =
    (tokens['background-colors'].find((token) => token.name === 'color-background-body')?.value as string) ?? '#fff';
  const tokenExampleInverseBackgroundColor =
    (tokens['background-colors'].find((token) => token.name === 'color-background-body-inverse')?.value as string) ??
    '#121C2D';
  const tokenExampleBorderColor =
    (tokens['border-colors'].find((token) => token.name === 'color-border')?.value as string) ?? '#8891AA';
  const tokenExampleHighlightColor =
    (tokens['background-colors'].find((token) => token.name === 'color-background-stronger')?.value as string) ??
    '#E1E3EA';
  const tokenExampleTextColor =
    (tokens['text-colors'].find((token) => token.name === 'color-text')?.value as string) ?? '#121C2D';
  const tokenExampleInverseTextColor =
    (tokens['text-colors'].find((token) => token.name === 'color-text-inverse')?.value as string) ?? '#FFF';

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
          value={filterString}
          handleThemeChange={handleThemeChange}
          handleFormatChange={handleFormatChange}
          handleInput={handleInput}
          selectedFormat={selectedFormat}
          selectedTheme={selectedTheme}
        />
        {filteredTokens == null ? (
          <NoTokensFound onClearSearch={() => setFilterString('')} />
        ) : (
          tokenCategories.map((tokenCategory) => {
            const sectionIntro = sectionIntros[tokenCategory];
            const categoryTokens = filteredTokens[tokenCategory] ?? [];

            return (
              <React.Fragment key={`catname-${tokenCategory}`}>
                <AnchoredHeading as="h2" variant="heading20">
                  {sentenceCase(tokenCategory)}
                </AnchoredHeading>
                {sectionIntro}
                <Box marginBottom="space160" data-cy="tokens-table-container">
                  {categoryTokens.map(({name, value, altValue, comment}) => (
                    <TokenCard
                      key={`token${name}`}
                      category={tokenCategory}
                      name={name}
                      value={value}
                      altValue={altValue}
                      comment={comment}
                      exampleBackgroundColor={tokenExampleBackgroundColor}
                      exampleBackgroundColorInverse={tokenExampleInverseBackgroundColor}
                      exampleTextColor={tokenExampleTextColor}
                      exampleTextColorInverse={tokenExampleInverseTextColor}
                      exampleBorderColor={tokenExampleBorderColor}
                      exampleHighlightColor={tokenExampleHighlightColor}
                      useCamelCase={useJavascriptNames}
                      onCopyText={handleCopyName}
                      isCopied={clipboard.copied && lastCopiedValue === name}
                    />
                  ))}
                </Box>
              </React.Fragment>
            );
          })
        )}
      </Content>
    </ContentWrapper>
  );
};
