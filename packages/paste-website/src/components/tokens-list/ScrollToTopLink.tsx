import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {ArrowUpIcon} from '@twilio-paste/icons/esm/ArrowUpIcon';

export const ScrollToTopLink = (): JSX.Element => (
  <Box as="div" position="absolute" top="110vh" bottom="0" right="0">
    <Box as="span" position="sticky" top="85vh">
      <Button as="a" href="#paste-docs-content-area" variant="secondary">
        Scroll to top <ArrowUpIcon decorative />
      </Button>
    </Box>
  </Box>
);
