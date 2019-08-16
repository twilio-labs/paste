import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {useUID} from 'react-uid';
import {Table, Tr, Th, Td, Tbody} from '../table';
import {TokenExample} from '../tokens-example';
import {Input} from '../input';
import {Label} from '../label';
import {InlineCode} from '../Typography';
import {Heading} from '../Heading';

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
  default: TokensShape[];
  sendgrid: TokensShape[];
}

const setInitialState = (data: TokensShape[]): TokenCategory[] | null => {
  if (data != null) {
    const {tokens} = data[0].node;
    return tokens;
  }
  return null;
};

export const TokensList: React.FC<TokensListProps> = props => {
  const [tokens, setTokens] = React.useState(setInitialState(props.sendgrid));

  const filterTokenList = (filter: string): void => {
    setTokens(() => {
      const newTokenCategories = props.sendgrid[0].node.tokens.map(
        (category): TokenCategory => {
          const newTokens = category.tokens.filter(token => {
            return token.name.includes(filter) || token.value.includes(filter);
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

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const filter = e.currentTarget.value;
    filterTokenList(filter);
  };

  const uid = useUID();

  return (
    <>
      <Box as="form" my="space100" maxWidth="size40">
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
              <Heading as="h2" headingStyle="headingStyle20">
                {sentenceCase(cat.categoryName)}
              </Heading>
              <Box mb="space160">
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
                            <Text mb="space30" lineHeight="lineHeight40">
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
            </React.Fragment>
          );
        })}
    </>
  );
};
