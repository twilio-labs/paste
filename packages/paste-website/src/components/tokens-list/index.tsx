import * as React from 'react';
import {Box} from '@twilio-paste/box';
import Tokens from '@twilio-paste/design-tokens/dist/tokens.generic';
import DarkModeTokens from '@twilio-paste/design-tokens/dist/themes/dark/tokens.generic';
import {useClipboard} from '@twilio-paste/clipboard-copy-library';
import kebabCase from 'lodash/kebabCase';
import {AnchoredHeading} from '../Heading';
import {useDarkModeContext} from '../../context/DarkModeContext';
import {trackTokenFilterString} from './helpers';
import type {Token, TokensListProps} from './types';
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

export const TokensList: React.FC<TokensListProps> = (props) => {
  const {theme} = useDarkModeContext();
  const [filterString, setFilterString] = React.useState('');
  const [tokens, setTokens] = React.useState<{[key: string]: Token[]}>(Tokens.tokens);
  const tokenCategories = Object.keys(Tokens.tokens);
  const [useJavascriptNames, setUseJavascriptNames] = React.useState(false);
  const [selectedFormat, setSelectedFormat] = React.useState(SimpleStorage.get('formatControl') ?? 'css');
  const [selectedTheme, setSelectedTheme] = React.useState(SimpleStorage.get('themeControl') ?? 'default');
  const [lastCopiedValue, setLastCopiedValue] = React.useState('');
  const clipboard = useClipboard({copiedTimeout: 2000});

  const handleCopyName = React.useCallback((_tokenName: string): void => {
    clipboard.copy(_tokenName);
    // The inverse of what we do in TokenCard
    setLastCopiedValue(useJavascriptNames ? _tokenName.slice(1) : kebabCase(_tokenName));
  }, []);

  React.useEffect(() => {
    if (selectedTheme === 'dark') setTokens(DarkModeTokens.tokens);
    else if (selectedTheme === 'default') setTokens(Tokens.tokens);
  }, [selectedTheme]);

  React.useEffect(() => {
    if (selectedFormat === 'javascript') setUseJavascriptNames(true);
    else if (selectedFormat === 'css') setUseJavascriptNames(false);
  }, [selectedFormat]);

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
    const value = e.currentTarget.value;
    SimpleStorage.set('themeControl', value);
    setSelectedTheme(value);
  };

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.currentTarget.value;
    SimpleStorage.set('formatControl', value);
    setSelectedFormat(value);
  };

  if (tokens === null) {
    return <NoTokensFound onClearSearch={() => setFilterString('')} />;
  }

  /**
   * These vars store the body and inverse background color values from the current theme,
   * to be passed into the TokenCards. They need to be the values and not the token names
   * because they need to adapt to the applied theme through the Theme Control.
   */
  const tokenCardBackgroundColor =
    (tokens['background-colors'].find((token) => token.name === 'color-background-body')?.value as string) ?? '#fff';
  const tokenCardInverseBackgroundColor =
    (tokens['background-colors'].find((token) => token.name === 'color-background-body-inverse')?.value as string) ??
    '#121C2D';

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
          handleThemeChange={handleThemeChange}
          handleFormatChange={handleFormatChange}
          handleInput={handleInput}
          selectedFormat={selectedFormat}
          selectedTheme={selectedTheme}
        />
        {tokenCategories.map((tokenCategory) => {
          const sectionIntro = sectionIntros[tokenCategory];

          return (
            <React.Fragment key={`catname-${tokenCategory}`}>
              <AnchoredHeading as="h2" variant="heading20">
                {sentenceCase(tokenCategory)}
              </AnchoredHeading>
              {sectionIntro}
              <Box marginBottom="space160" data-cy="tokens-table-container">
                {tokens[tokenCategory].map(({name, value, comment}) => (
                  <TokenCard
                    key={`token${name}`}
                    category={tokenCategory}
                    name={name}
                    useCamelCase={useJavascriptNames}
                    value={value}
                    comment={comment}
                    onCopyText={handleCopyName}
                    isCopied={clipboard.copied && lastCopiedValue === name}
                    backgroundColor={tokenCardBackgroundColor}
                    inverseBackgroundColor={tokenCardInverseBackgroundColor}
                  />
                ))}
              </Box>
            </React.Fragment>
          );
        })}
      </Content>
    </ContentWrapper>
  );
};
