import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Truncate} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Truncate',
};

export const Default = (): React.ReactNode => {
  return (
    <Box maxWidth="size20">
      <Text as="p">
        <Truncate>Some very long text to truncate</Truncate>
      </Text>
    </Box>
  );
};
