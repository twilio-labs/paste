import * as React from 'react';
import type {Story, Meta} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {Input} from '@twilio-paste/input';
import {Label} from '@twilio-paste/label';

import {useClipboard} from '../src';
import type {UseClipboardProps} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Libraries/use-clipboard',
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: Story<{clipboardProps: UseClipboardProps}> = ({clipboardProps}) => {
  const clipboard = useClipboard(clipboardProps);

  return (
    <Box>
      <Label htmlFor="input">Copy</Label>
      <Input ref={clipboard.target} id="input" />
      <Button variant="primary" onClick={clipboard.copy}>
        Copy
      </Button>
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {};

export const Timeout = Template.bind({});

Timeout.args = {
  clipboardProps: {
    copiedTimeout: 100,
  },
};
