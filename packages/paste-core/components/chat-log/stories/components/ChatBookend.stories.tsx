import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';
import {ChatLog, ChatBookend} from '../../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog',
};

export const ChatBookendExample: StoryFn = () => (
  <ChatLog>
    <ChatBookend>
      <Box>Yesterday</Box>
      <Box>
        <strong>Chat started</strong>・3:45 PM
      </Box>
    </ChatBookend>
    <ChatBookend>Today</ChatBookend>
  </ChatLog>
);
