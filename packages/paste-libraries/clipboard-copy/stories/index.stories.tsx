import * as React from 'react';
import type { StoryFn, Meta } from '@storybook/react';
import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { Input } from '@twilio-paste/input';
import { Label } from '@twilio-paste/label';
import { Stack } from '@twilio-paste/stack';
import { useUID } from '@twilio-paste/uid-library';

import { useClipboard } from '../src';
import type { UseClipboardProps } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Libraries/clipboard-copy',
} as Meta;

const Template: StoryFn<{ clipboardProps: UseClipboardProps }> = ({ clipboardProps = {} }) => {
  const clipboard = useClipboard(clipboardProps);
  const uid = useUID();

  return (
    <Stack orientation="vertical" spacing="space50">
      <Box>
        <Label htmlFor={uid}>SID</Label>
        <Input ref={clipboard.target} id={uid} type="text" readOnly value="AC00000000000000000000000000" />
      </Box>
      <Button variant="primary" onClick={clipboard.copy}>
        {clipboardProps.copiedTimeout && clipboard.copied ? 'Copied' : 'Copy'}
      </Button>
    </Stack>
  );
};

export const Default = Template.bind({});

Default.args = {};

export const Timeout = Template.bind({});

Timeout.args = {
  clipboardProps: {
    copiedTimeout: 2000,
  },
};

export const OnSuccessHandler = Template.bind({});

OnSuccessHandler.args = {
  clipboardProps: {
    onSuccess: () => {
      const ON_SUCCESS_TIMEOUT = 500;
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        window.alert(`alert after ${ON_SUCCESS_TIMEOUT} ms`);
      }, ON_SUCCESS_TIMEOUT);
    },
  },
};

export const SelectOnCopy = Template.bind({});

SelectOnCopy.args = {
  clipboardProps: {
    selectOnCopy: true,
  },
};
