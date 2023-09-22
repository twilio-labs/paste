import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { Box } from '@twilio-paste/box';
import { Label } from '@twilio-paste/label';
import { useUID } from '@twilio-paste/uid-library';

import { GrowingInput } from '../src/multiselect/GrowingInput';

export const GrowingInputDemo: StoryFn = () => {
  const id = useUID();

  return (
    <>
      <Label htmlFor={id}>Type in here:</Label>
      <Box display="flex" alignItems="center">
        <span> -&gt; </span>
        <GrowingInput id={id} />
        <span> &lt;- </span>
      </Box>
    </>
  );
};

GrowingInputDemo.storyName = 'GrowingInput';
GrowingInputDemo.parameters = {
  // Nothing to VRT. Story for developer experience
  chromatic: { disableSnapshot: true },
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Combobox',
  component: GrowingInputDemo,
};
