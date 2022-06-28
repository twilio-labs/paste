import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Label} from '@twilio-paste/label';
import {Heading} from '@twilio-paste/heading';
import {Card} from '@twilio-paste/card';
import {Button} from '@twilio-paste/button';
import {Input} from '@twilio-paste/input';
import {Table, Tr, Th, Td, THead, TBody} from '@twilio-paste/table';
import {Text} from '@twilio-paste/text';
import {useUID} from '@twilio-paste/uid-library';
import {InlineCode} from '../Typography';
import {AnchoredHeading} from '../Heading';
import {TokenExample} from './TokensExample';
import {getTokenValue} from './getTokenValue';
import {useDarkModeContext} from '../../context/DarkModeContext';
import {trackTokenFilterString, filterTokenList, getTokensByTheme} from './helpers';
import type {Token, TokenCategory, TokensListProps} from './types';
import {NoResultImage} from '../images/EmptyStateImages';

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
  const [tokens, setTokens] = React.useState<TokenCategory[] | null>(getTokensByTheme(props, theme));

  // The rendered tokens should update every time the filterString, props, or theme changes
  React.useEffect(() => {
    setTokens(filterTokenList(filterString, props, theme));
    trackTokenFilterString(filterString);
  }, [filterString, props, theme]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const filter = e.currentTarget.value;
    setFilterString(filter);
  };

  const uid = useUID();

  return (
    <>
      <Box
        as="form"
        marginTop="space100"
        marginBottom="space100"
        maxWidth="size40"
        onSubmit={(e) => e.preventDefault()}
      >
        <Label htmlFor={uid}>Filter tokens</Label>
        <Input
          autoComplete="off"
          id={uid}
          onChange={handleInput}
          placeholder="filter by name or value"
          type="text"
          value={filterString}
          name="tokens-filter"
        />
      </Box>
      {tokens != null ? (
        tokens.map((cat) => {
          return (
            <React.Fragment key={`catname${cat.categoryName}`}>
              <AnchoredHeading as="h2" variant="heading20">
                {sentenceCase(cat.categoryName)}
              </AnchoredHeading>
              {cat.info}
              <Box marginBottom="space160" data-cy="tokens-table-container">
                <Table scrollHorizontally>
                  <THead>
                    <Tr>
                      <Th>Token</Th>
                      <Th width="250px">Value</Th>
                      <Th width="250px">Example</Th>
                    </Tr>
                  </THead>
                  <TBody>
                    {cat.tokens
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
                      })}
                  </TBody>
                </Table>
              </Box>
            </React.Fragment>
          );
        })
      ) : (
        <Card data-cy="tokens-empty-state" padding="space150">
          <Stack orientation="horizontal" spacing="space110">
            <NoResultImage />
            <Stack orientation="vertical" spacing="space50">
              <Heading as="h3" variant="heading30">
                Oh no! We couldn&apos;t find any matches
              </Heading>
              <Stack orientation="vertical" spacing="space70">
                <Text as="span">
                  Try clearing your search and using another query to find the token you&apos;re looking for.
                </Text>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setFilterString('');
                  }}
                >
                  Clear search
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      )}
    </>
  );
};
