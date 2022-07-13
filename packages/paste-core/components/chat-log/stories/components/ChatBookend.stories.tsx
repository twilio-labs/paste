import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {ChatLog, ChatBookend, ChatBookendItem} from '../../src';

export const ChatBookendExample: StoryFn = () => (
  <ChatLog>
    <ChatBookend>
      <ChatBookendItem>Yesterday</ChatBookendItem>
      <ChatBookendItem>
        <strong>Chat started</strong>・3:45 PM
      </ChatBookendItem>
    </ChatBookend>
    <ChatBookend>
      <ChatBookendItem>Today</ChatBookendItem>
    </ChatBookend>
  </ChatLog>
);
