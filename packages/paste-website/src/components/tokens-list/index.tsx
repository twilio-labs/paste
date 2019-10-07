import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Theme} from '@twilio-paste/theme';
import {useUID} from 'react-uid';
import {Table, Tr, Th, Td, Tbody} from '../table';
import {TokenExample} from '../tokens-example';
import {Input} from '../input';
import {Label} from '../label';
import {InlineCode} from '../Typography';
import {AnchoredHeading} from '../Heading';
import {useActiveSiteTheme} from '../../context/ActiveSiteThemeContext';
import {Themes, ThemesType} from '../../constants';

const sentenceCase = (catName: string): string => {
  return catName
    .split('-')
    .join(' ')
    .replace(/[a-z]/i, (letter): string => {
      return letter.toUpperCase();
    });
};

interface Token {
  name: string;
  value: string;
  comment: string;
  category: string;
  type: string;
}

interface TokenCategory {
  categoryName: string;
  tokens: Token[];
}

interface TokensShape {
  node: {
    tokens: TokenCategory[];
  };
}

interface TokensListProps {
  children?: React.ReactElement;
  consoleTokens: TokensShape[];
  sendgridTokens: TokensShape[];
}

const getTokensByTheme = (theme: ThemesType, props: TokensListProps): TokenCategory[] => {
  let tokens = [] as TokenCategory[];
  if (theme === Themes.CONSOLE) {
    if (props.consoleTokens != null) {
      // eslint-disable-next-line prefer-destructuring
      tokens = props.consoleTokens[0].node.tokens;
    }
  }
  if (theme === Themes.SENDGRID) {
    if (props.sendgridTokens != null) {
      // eslint-disable-next-line prefer-destructuring
      tokens = props.sendgridTokens[0].node.tokens;
    }
  }
  return tokens;
};

export const TokensList: React.FC<TokensListProps> = props => {
  const {theme} = useActiveSiteTheme();
  const [tokens, setTokens] = React.useState<TokenCategory[] | null>(getTokensByTheme(theme, props));
  const [filterString, setFilterString] = React.useState('');

  const filterTokenList = (): void => {
    setTokens(() => {
      const newTokenCategories = getTokensByTheme(theme, props).map(
        (category): TokenCategory => {
          const newTokens = category.tokens.filter(token => {
            return token.name.includes(filterString) || token.value.includes(filterString);
          });
          return {...category, tokens: newTokens};
        }
      );
      const filteredCategories = newTokenCategories.filter(category => {
        return category.tokens.length > 0;
      });
      if (filteredCategories.length > 0) {
        return filteredCategories;
      }
      return null;
    });
  };

  React.useEffect((): void => {
    filterTokenList();
  }, [theme]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const filter = e.currentTarget.value;
    setFilterString(filter);
    filterTokenList();
  };

  const uid = useUID();

  return (
    <>
      <Box as="form" marginTop="space100" marginBottom="space100" maxWidth="size40">
        <Label htmlFor={uid}>Filter tokens</Label>
        <Input
          aria-label="Filter the token list"
          autoComplete="off"
          id={uid}
          onInput={handleInput}
          placeholder="filter by name or value"
          type="text"
        />
      </Box>
      {tokens != null &&
        tokens.map(cat => {
          return (
            <React.Fragment key={`catname${cat.categoryName}`}>
              <AnchoredHeading as="h2" headingStyle="headingStyle20">
                {sentenceCase(cat.categoryName)}
              </AnchoredHeading>
              <Theme.Provider theme={theme}>
                <Box marginBottom="space160">
                  <Table>
                    <thead>
                      <Tr>
                        <Th>Token</Th>
                        <Th style={{width: '250px'}}>Value</Th>
                        <Th style={{width: '250px'}}>Example</Th>
                      </Tr>
                    </thead>
                    <Tbody>
                      {cat.tokens.map((token: Token) => {
                        return (
                          <Tr key={`token${token.name}`}>
                            <Td>
                              <Text marginBottom="space30" lineHeight="lineHeight40">
                                <InlineCode>${token.name}</InlineCode>
                              </Text>
                              <Text>{token.comment}</Text>
                            </Td>
                            <Td>{token.type === 'color' ? token.value.toUpperCase() : token.value}</Td>
                            <Td
                              css={{
                                position: 'relative',
                              }}
                            >
                              <TokenExample token={token} />
                            </Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </Box>
              </Theme.Provider>
            </React.Fragment>
          );
        })}
    </>
  );
};
