import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Heading} from '@twilio-paste/heading';
import {Card} from '@twilio-paste/card';
import {Button} from '@twilio-paste/button';
import {Text} from '@twilio-paste/text';

interface NoTokensFoundProps {
  onClearSearch: () => void;
}

export const NoTokensFound: React.FC<NoTokensFoundProps> = ({onClearSearch}) => (
  <Card data-cy="tokens-empty-state" padding="space150">
    <Stack orientation="horizontal" spacing="space110">
      <Box
        as="img"
        src="/images/patterns/empty-no-results-found.png"
        alt="No results found illustration"
        size="size20"
      />
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
              // setFilterString('');
              onClearSearch();
            }}
          >
            Clear search
          </Button>
        </Stack>
      </Stack>
    </Stack>
  </Card>
);
