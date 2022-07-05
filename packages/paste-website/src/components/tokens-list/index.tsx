import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {Input} from '@twilio-paste/input';
import Tokens from '@twilio-paste/design-tokens/dist/tokens.generic';
import DarkModeTokens from '@twilio-paste/design-tokens/dist/themes/dark/tokens.generic';
import camelCase from 'lodash/camelCase';
import {AnchoredHeading} from '../Heading';
import {useDarkModeContext} from '../../context/DarkModeContext';
import {trackTokenFilterString, filterTokenList, getTokensByTheme} from './helpers';
import type {Token, TokenCategory, TokensListProps} from './types';
import {PageAside} from '../shortcodes/PageAside';
import {NoTokensFound} from './NoTokensFound';
import {TokenCard} from './token-card';
import {FilterIcon} from '@twilio-paste/icons/esm/FilterIcon';
import {Grid, Column} from '@twilio-paste/grid';
import {Select, Option} from '@twilio-paste/select';

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
        <Box marginBottom="space80">
          <Grid gutter="space40">
            <Column span={6}>
              <Label htmlFor="test" id="test-label">
                Filter tokens
              </Label>
              <Input
                type="text"
                id="test"
                aria-labelledby="test-label"
                onChange={handleInput}
                insertBefore={<FilterIcon decorative={false} title="Description of icon" />}
                placeholder="Filter by token name or value"
              />
            </Column>
            <Column span={3}>
              <Label htmlFor="theme-control" id="theme-control-label">
                Theme
              </Label>
              <Select
                id="theme-control"
                defaultValue={theme === 'dark' ? 'dark' : 'default'}
                onChange={(evt) => {
                  if (evt.target.value === 'dark') setTokens(DarkModeTokens.tokens);
                  if (evt.target.value === 'default') setTokens(Tokens.tokens);
                }}
              >
                <Option value="default">Default</Option>
                <Option value="dark">Dark</Option>
              </Select>
            </Column>
            <Column span={3}>
              <Label htmlFor="format-control" id="format-control-label">
                Format
              </Label>
              <Select
                id="format-control"
                onChange={(evt) => {
                  if (evt.target.value === 'javascript') setUseJavascriptNames(true);
                  else setUseJavascriptNames(false);
                }}
              >
                <Option value="css">CSS</Option>
                <Option value="javascript">Javascript</Option>
              </Select>
            </Column>
          </Grid>
        </Box>
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
                  name={useJavascriptNames ? camelCase(name) : name}
                  value={value}
                  comment={comment}
                  backgroundColor="rgb(255, 255, 255)"
                />
              ))}
            </Box>
          </React.Fragment>
        ))}
      </Content>
    </ContentWrapper>
  );
};
