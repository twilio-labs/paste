import * as React from 'react';
import {Box} from '@twilio-paste/box';
import DefaultThemeTokens from '@twilio-paste/design-tokens/dist/tokens.generic';
import DarkThemeTokens from '@twilio-paste/design-tokens/dist/themes/dark/tokens.generic';
import {useClipboard} from '@twilio-paste/clipboard-copy-library';
import kebabCase from 'lodash/kebabCase';

import {AnchoredHeading} from '../Heading';
import {trackTokenFilterString, filterTokenList, getTokenExampleColors} from './helpers';
import type {Tokens, TokenExampleColors} from './types';
import {PageAside} from '../shortcodes/PageAside';
import {NoTokensFound} from './NoTokensFound';
import {TokenCard} from './token-card';
import {TokensListFilter} from './TokensListFilter';
import {SimpleStorage} from '../../utils/SimpleStorage';
import {sectionIntros} from './sectionIntros';
import {ScrollToTopLink} from './ScrollToTopLink';

const sentenceCase = (catName: string): string => {
  return catName
    .split('-')
    .join(' ')
    .replace(/[a-z]/i, (letter): string => {
      return letter.toUpperCase();
    });
};

const ContentWrapper: React.FC = (props) => <Box as="div" display={['block', 'block', 'flex']} {...props} />;
const Content: React.FC = (props) => (
  <Box as="div" position="relative" maxWidth="size70" minWidth="0" width="100%" {...props} />
);

const defaultTheme = 'default';
const defaultFormat = 'css';

export const TokensList: React.FC = () => {
  // State related to the list of tokens
  const [tokens, setTokens] = React.useState<Tokens>(DefaultThemeTokens.tokens);
  const [tokenCategories, setTokenCategories] = React.useState(Object.keys(tokens));
  const [filteredTokens, setFilteredTokens] = React.useState<Partial<Tokens> | null>(tokens);
  const [exampleColors, setExampleColors] = React.useState<TokenExampleColors>(getTokenExampleColors(tokens));
  const [shadowOpacity, setShadowOpacity] = React.useState(0);

  // State related to select and filter controls
  const [filterString, setFilterString] = React.useState('');
  const [selectedTheme, setSelectedTheme] = React.useState(defaultTheme);
  const [selectedFormat, setSelectedFormat] = React.useState(defaultFormat);
  const [useJavascriptNames, setUseJavascriptNames] = React.useState(false);

  // State related to the clipboard
  const [lastCopiedValue, setLastCopiedValue] = React.useState('');

  /*
   * This runs on hydration, grabs any settings from the client's localStorage,
   * and populates the token list.
   */
  React.useEffect(() => {
    const userTheme = SimpleStorage.get('themeControl') || defaultTheme;
    const userFormat = SimpleStorage.get('formatControl') || defaultFormat;
    let tokenList: Tokens = DefaultThemeTokens.tokens;

    // Set the theme tokens based on the user's preference
    if (userTheme === 'dark') {
      tokenList = DarkThemeTokens.tokens;
    }

    setSelectedTheme(userTheme);
    setSelectedFormat(userFormat);
    setUseJavascriptNames(userFormat === 'javascript');
    setTokens(tokenList);
    setFilteredTokens(tokenList);
    setExampleColors(getTokenExampleColors(tokenList));
  }, []);

  /*
   * Set up code needed for passing & receiving clipboard copy functionality
   * into the TokenCard components.
   */
  const clipboard = useClipboard({copiedTimeout: 2000});
  const handleCopyName = React.useCallback((_tokenName: string): void => {
    clipboard.copy(_tokenName);
    // The inverse of what we do in TokenCard
    setLastCopiedValue(useJavascriptNames ? _tokenName.slice(1) : kebabCase(_tokenName));
  }, []);

  // Event handler for Tokens Filter
  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const {value} = e.currentTarget;
    setFilterString(value);
  };

  // Event handler for Theme select change
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const {value} = e.currentTarget;
    const newTokens = value === 'dark' ? DarkThemeTokens.tokens : DefaultThemeTokens.tokens;

    SimpleStorage.set('themeControl', value);
    setSelectedTheme(value);
    setTokens(newTokens);
    setExampleColors(getTokenExampleColors(newTokens));
  };

  // Event handler for Format select change
  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const {value} = e.currentTarget;
    SimpleStorage.set('formatControl', value);
    setSelectedFormat(value);
    setUseJavascriptNames(value === 'javascript');
  };

  // The rendered tokens should update every time the filterString changes
  React.useEffect(() => {
    if (!tokens) return;

    // set the filtered tokens based on the query
    const newFilteredTokens = filterTokenList(filterString, tokens);
    setFilteredTokens(newFilteredTokens);

    // Sometimes the filtered object will find no results and return null
    setTokenCategories(newFilteredTokens == null ? [] : Object.keys(newFilteredTokens));

    trackTokenFilterString(filterString);
  }, [filterString, tokens]);

  /*
   * Intersection observer for the Token Filter UI. The Tokens Filter gets a shadow
   * as the user scrolls past its inherent position, and this intersection observer
   * checks against a 'canary' element to determine when the shadow should be applied
   */
  React.useEffect(() => {
    const intObserver = new IntersectionObserver(
      (entries) => {
        const shadowState = entries[0].intersectionRatio;
        setShadowOpacity(1 - shadowState);
      },
      {
        root: document.querySelector('#styled-site-body'),
        rootMargin: '0px',
        threshold: [1, 0.8, 0.6, 0.4, 0.2, 0],
      }
    );

    const tokensFilter = document.querySelector('#filter-canary');
    if (tokensFilter) {
      intObserver.observe(tokensFilter);
    }
    // Clean up observer
    return () => {
      intObserver.disconnect();
    };
  }, []);

  // Render code
  return tokens ? (
    <ContentWrapper>
      <PageAside
        data={{
          fileAbsolutePath: '',
          frontmatter: {slug: '/tokens/list', title: 'Design tokens'},
          headings: tokenCategories
            .filter((value) => value !== 'colors') // filter out colors section
            .map((value) => ({value: sentenceCase(value), depth: 2})),
        }}
        stickyTop="space0"
        topPadding="space130"
      />
      <Content>
        <Box id="filter-canary" position="absolute" height="50px" width="100%" zIndex="zIndex0" />
        <TokensListFilter
          value={filterString}
          handleThemeChange={handleThemeChange}
          handleFormatChange={handleFormatChange}
          handleInput={handleInput}
          handleClearSearch={() => setFilterString('')}
          selectedFormat={selectedFormat}
          selectedTheme={selectedTheme}
          shadowOpacity={shadowOpacity}
        />
        {filteredTokens === null ? (
          <NoTokensFound onClearSearch={() => setFilterString('')} />
        ) : (
          tokenCategories.map((tokenCategory) => {
            // do not render colors section
            if (tokenCategory === 'colors') return undefined;

            const sectionIntro = sectionIntros[tokenCategory];
            const categoryTokens = filteredTokens[tokenCategory] ?? null;

            return (
              <Box key={`catname-${tokenCategory}`} id={kebabCase(tokenCategory)}>
                <AnchoredHeading as="h2" variant="heading20" existingSlug={`heading-${kebabCase(tokenCategory)}`}>
                  {sentenceCase(tokenCategory)}
                </AnchoredHeading>
                {sectionIntro}
                <Box marginBottom="space130" data-cy="tokens-table-container">
                  {categoryTokens ? (
                    categoryTokens.map(({name, value, altValue, comment}) => (
                      <TokenCard
                        key={`token${name}`}
                        category={tokenCategory}
                        name={name}
                        value={value}
                        altValue={altValue}
                        comment={comment}
                        backgroundColor={exampleColors?.backgroundColor}
                        backgroundColorInverse={exampleColors?.backgroundColorInverse}
                        textColor={exampleColors?.textColor}
                        textColorInverse={exampleColors?.textColorInverse}
                        borderColor={exampleColors?.borderColor}
                        highlightColor={exampleColors?.highlightColor}
                        useCamelCase={useJavascriptNames}
                        onCopyText={handleCopyName}
                        isCopied={clipboard.copied && lastCopiedValue === name}
                      />
                    ))
                  ) : (
                    <p>Placeholder...</p>
                  )}
                </Box>
                <ScrollToTopLink />
              </Box>
            );
          })
        )}
      </Content>
    </ContentWrapper>
  ) : (
    // Loading Box
    <Box height="size120" width="100%" />
  );
};
