import * as React from 'react';
import type {Story} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import UIBox from 'ui-box';
import {Pane} from 'evergreen-ui';

export default {
  title: 'Performance/Box',
  component: Box,
};

export const PasteBox: Story = () => {
  return (
    <Box
      backgroundColor="colorBackgroundDestructive"
      padding="space80"
      borderRadius="borderRadius30"
      color="colorTextInverse"
    >
      This is a box
    </Box>
  );
};
export const EvergreenPane: Story = () => {
  return (
    <Pane backgroundColor="red" padding="20px" borderRadius="4px" color="white">
      This is a box
    </Pane>
  );
};
export const EvergreenUIBox: Story = () => {
  return (
    <UIBox backgroundColor="red" padding="20px" borderRadius="4px" color="white">
      This is a box
    </UIBox>
  );
};
