/* DISCLAIMER: this is an example, not meant to be used in production */

import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { Heading } from '@twilio-paste/heading';
import { Paragraph } from '@twilio-paste/paragraph';
import * as React from 'react';

import { NoResultsIllustration } from './NoResultsIllustration';

export const EmptyState: React.FC<React.PropsWithChildren<{ handleClearAll: () => void }>> = ({ handleClearAll }) => (
  <Box
    height="size30"
    borderStyle="solid"
    borderColor="colorBorderWeaker"
    borderWidth="borderWidth20"
    display="flex"
    justifyContent="center"
    alignItems="center"
    columnGap="space110"
  >
    <Box width="size20" aria-hidden="true">
      <NoResultsIllustration />
    </Box>
    <Box>
      <Heading as="div" variant="heading30">
        No results found
      </Heading>
      <Paragraph>Try changing the filters or the search term.</Paragraph>
      <Button variant="secondary" onClick={handleClearAll} data-cy="filter-group-empty-state-clear-button">
        Clear all
      </Button>
    </Box>
  </Box>
);
