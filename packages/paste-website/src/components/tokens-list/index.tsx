import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Label} from '@twilio-paste/label';
import {Heading} from '@twilio-paste/heading';
import {Card} from '@twilio-paste/card';
import {Button} from '@twilio-paste/button';
import {Input} from '@twilio-paste/input';
import type {ThemeShape} from '@twilio-paste/theme';
import {Table, Tr, Th, Td, THead, TBody} from '@twilio-paste/table';
import Tokens from '@twilio-paste/design-tokens/dist/tokens.gatsby.js';
import {Text} from '@twilio-paste/text';
import {useUID} from '@twilio-paste/uid-library';
import {InlineCode} from '../Typography';
import {AnchoredHeading} from '../Heading';
import {TokenExample} from './TokensExample';
import {getTokenValue} from './getTokenValue';
import {useDarkModeContext} from '../../context/DarkModeContext';
import {trackTokenFilterString, filterTokenList, getTokensByTheme} from './helpers';
import type {Token, TokenCategory, TokensListProps} from './types';
import {PageAside} from '../shortcodes/PageAside';
import {NoTokensFound} from './NoTokensFound';
import {BackgroundColor} from './token-box/BackgroundColor';
import {NoResultImage} from '../images/EmptyStateImages';
import {TokenCard} from './token-card';
import {FilterIcon} from '@twilio-paste/icons/esm/FilterIcon';

const PreviewComponentMap: {[key: string]: React.ReactNode} = {
  'background-colors': BackgroundColor,
};

console.log(Tokens);
const TokenKeys = Object.keys(Tokens);

const ContentWrapper = (props): React.FC => <Box as="div" display={['block', 'block', 'flex']} {...props} />;
const Content = (props): React.FC => <Box as="div" maxWidth="size70" minWidth="0" {...props} />;

const sentenceCase = (catName: string): string => {
  return catName
    .split('-')
    .join(' ')
    .replace(/[a-z]/i, (letter): string => {
      return letter.toUpperCase();
    });
};

const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

export const TokensList: React.FC<TokensListProps> = (props) => {
  const {theme} = useDarkModeContext();
  const [filterString, setFilterString] = React.useState('');
  //const [tokens, setTokens] = React.useState<TokenCategory[] | null>(getTokensByTheme(props, theme));

  // The rendered tokens should update every time the filterString, props, or theme changes
  React.useEffect(() => {
    // setTokens(filterTokenList(filterString, props, theme));
    trackTokenFilterString(filterString);
  }, [filterString, props, theme]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const filter = e.currentTarget.value;
    setFilterString(filter);
  };

  const uid = useUID();

  if (Tokens === null) {
    return <NoTokensFound onClearSearch={() => setFilterString('')} />;
  }

  return (
    <ContentWrapper>
      <PageAside
        data={{
          fileAbsolutePath: '',
          frontmatter: {slug: '/tokens/list', title: 'Design tokens'},
          headings: TokenKeys.map((value) => ({value, depth: 2})),
        }}
      />
      <Content>
        <Box paddingBottom="space80">
          <Label htmlFor="test" id="test-label">
            Filter tokens
          </Label>
          <Input
            type="text"
            id="test"
            aria-labelledby="test-label"
            onChange={handleInput}
            insertBefore={<FilterIcon decorative={false} title="Description of icon" />}
          />
        </Box>

        {TokenKeys.map((tokenKey: string) => (
          <React.Fragment key={`catname-${tokenKey}`}>
            <AnchoredHeading as="h2" variant="heading20">
              {sentenceCase(tokenKey)}
            </AnchoredHeading>
            <Box marginBottom="space160" data-cy="tokens-table-container">
              {Tokens[tokenKey].map(({name, value, comment}: {name: string; value: string; comment: string}) => {
                console.log('key', tokenKey);
                return (
                  <TokenCard key={`token${name}`} category={tokenKey} name={name} value={value} comment={comment} />
                );
              })}
            </Box>
          </React.Fragment>
        ))}
      </Content>
    </ContentWrapper>
  );
};

/*cat.tokens
                    .sort((a, b) => {
                      if (cat.categoryName === 'font-weights') {
                        return collator.compare(a.value, b.value);
                      }
                      return collator.compare(a.name, b.name);
                    })
                    .map((token: Token) => {
                      return (
                        <Tr key={`token${token.name}`}>
                          <Td>
                            <Text as="p" marginBottom="space30">
                              <InlineCode>${token.name}</InlineCode>
                            </Text>
                            <Text as="p">{token.comment}</Text>
                          </Td>
                          <Td>{getTokenValue(token)}</Td>
                          <Td>
                            <TokenExample token={token} />
                          </Td>
                        </Tr>
                      );
                    })*/
