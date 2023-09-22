import { Anchor } from '@twilio-paste/anchor';
import { Box } from '@twilio-paste/box';
import { Text } from '@twilio-paste/text';
import * as React from 'react';

import { Truncate } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Truncate',
  component: Truncate,
};

export const Default = (): React.ReactNode => {
  return (
    <Box maxWidth="size20">
      <Text as="p">
        <Truncate title="Some very long text to truncate">Some very long text to truncate</Truncate>
      </Text>
    </Box>
  );
};

export const TruncateInAnchor = (): React.ReactNode => {
  return (
    <Box maxWidth="size20">
      <Anchor href="https://paste.twilio.design">
        <Truncate title="A very very long anchor to truncate">A very very long anchor to truncate</Truncate>
      </Anchor>
    </Box>
  );
};
