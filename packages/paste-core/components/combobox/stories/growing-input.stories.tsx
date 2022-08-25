import * as React from 'react';
import type {Story} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {GrowingInput} from '../src/multiselect/GrowingInput';

export const GrowingInputDemo: Story = () => {
  return (
    <Box display="flex" alignItems="center">
      <span> -&gt; </span>
      <GrowingInput />
      <span> &lt;- </span>
    </Box>
  );
};

GrowingInputDemo.story = {
  name: 'GrowingInput',
  parameters: {
    // Nothing to VRT. Story for developer experience
    chromatic: {disableSnapshot: true},
  },
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Combobox/Multiselect',
  component: GrowingInputDemo,
};
