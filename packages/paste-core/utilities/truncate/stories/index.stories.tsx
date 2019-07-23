import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Box} from '@paste/box';
import {Text} from '@paste/text';
import {Truncate} from '../src';

storiesOf('Utilities|Truncate', module).add('Default', () => {
  return (
    <Box maxWidth="150px">
      <Text>
        <Truncate>Some very long text to truncate</Truncate>
      </Text>
    </Box>
  );
});
