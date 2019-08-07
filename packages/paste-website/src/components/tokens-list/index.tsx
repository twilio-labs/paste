import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {useUID} from 'react-uid';
import {Table, Tr, Th, Td, Tbody} from '../table';
import {TokenExample} from '../token-example';
import {Input} from '../input';
import {Label} from '../label';

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
}

interface TokenCategory {
  categoryName: string;
  tokens: Token[];
}

interface DataShape {
  node: {
    tokens: TokenCategory[];
  };
}

interface TokensListProps {
  children?: React.ReactElement;
  data: DataShape[];
}

const setInitialState = (data: DataShape[]): TokenCategory[] | null => {
  if (data != null) {
    // eslint-disable-next-line prefer-destructuring
    return data[0].node.tokens;
  }
  return null;
};

export const TokensList: React.FC<TokensListProps> = props => {
  const [tokens, setTokens] = React.useState(setInitialState(props.data));

  const filterTokenList = (filter: string): void => {
    setTokens(() => {
      const newTokenCategories = props.data[0].node.tokens.map(
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
      <Box as="form" my="space80" maxWidth="size40">
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
              <Box my="space60">
                <Heading as="h2" headingStyle="headingStyle20">
                  {sentenceCase(cat.categoryName)}
                </Heading>
              </Box>
              <Box mb="space160">
                <Table>
                  <thead>
                    <Tr>
                      <Th>Token</Th>
                      <Th>Value</Th>
                      <Th>Description</Th>
                      <Th>Example</Th>
                    </Tr>
                  </thead>
                  <Tbody>
                    {cat.tokens.map((token: Token) => {
                      return (
                        <Tr key={`token${token.name}`}>
                          <Td>
                            <Text fontSize="fontSize30">
                              <code>${token.name}</code>
                            </Text>
                          </Td>
                          <Td>{token.value}</Td>
                          <Td>{token.comment}</Td>
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
