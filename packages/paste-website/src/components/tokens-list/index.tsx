import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Theme, ThemeVariants} from '@twilio-paste/theme';
import {useUID} from 'react-uid';
import {Table, Tr, Th, Td, Tbody} from '../table';
import {TokenExample} from '../tokens-example';
import {Input} from '../input';
import {Label} from '../label';
import {InlineCode} from '../Typography';
import {AnchoredHeading} from '../Heading';
import {useActiveSiteTheme} from '../../context/ActiveSiteThemeContext';
import {Callout, CalloutTitle, CalloutText} from '../callout';

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
  info?: React.ReactNode;
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
  defaultTokens: TokensShape[];
}

const getTokensByTheme = (theme: ThemeVariants, props: TokensListProps): TokenCategory[] => {
  const font = props.consoleTokens[0].node.tokens.find(ele => ele.categoryName === 'fonts');
  if (font) {
    font.info = (
      <Callout variant="secondary">
        <CalloutTitle as="h4">Heads up about fonts in Paste!</CalloutTitle>
        <CalloutText as="p">
          Paste leaves it up to you to load the fonts needed for the theme you&apos;ve selected. Console uses Whitney
          ScreenSmart and SendGrid uses Colfax
        </CalloutText>
      </Callout>
    );
  }

  const fontSize = props.consoleTokens[0].node.tokens.find(ele => ele.categoryName === 'font-sizes');
  if (fontSize) {
    fontSize.info = (
      <Callout variant="secondary">
        <CalloutTitle as="h4">Heads up about font sizes in Paste!</CalloutTitle>
        <CalloutText as="p">
          Font-sizes in our Paste tokens use rem values. Unlike em values which are relative to their parent element,
          rem values are relative to the html element. If you aren&apos;t using the Theme.Provider component, you must
          set font-size: 100%; on your page&apos;s html tag for the font-sizes to be sized correctly as 1rem=16px.
        </CalloutText>
      </Callout>
    );
  }

  let tokens = [] as TokenCategory[];
  if (theme === ThemeVariants.CONSOLE) {
    if (props.consoleTokens != null) {
      // eslint-disable-next-line prefer-destructuring
      tokens = props.consoleTokens[0].node.tokens;
    }
  }
  if (theme === ThemeVariants.SENDGRID) {
    if (props.sendgridTokens != null) {
      // eslint-disable-next-line prefer-destructuring
      tokens = props.sendgridTokens[0].node.tokens;
    }
  }
  if (theme === ThemeVariants.DEFAULT) {
    if (props.defaultTokens != null) {
      // eslint-disable-next-line prefer-destructuring
      tokens = props.defaultTokens[0].node.tokens;
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
              <AnchoredHeading as="h2" variant="heading20">
                {sentenceCase(cat.categoryName)}
              </AnchoredHeading>
              {cat.info}
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
                              <Text as="p" marginBottom="space30">
                                <InlineCode>${token.name}</InlineCode>
                              </Text>
                              <Text as="p">{token.comment}</Text>
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
