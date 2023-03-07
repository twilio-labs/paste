import * as React from 'react';
import type {StoryFn} from '@storybook/react';

import {ChatLog, ChatBookend, ChatBookendItem} from '../../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog',
};

export const ChatBookendExample: StoryFn = () => (
  <ChatLog>
    <ChatBookend>
      <ChatBookendItem>Yesterday</ChatBookendItem>
      <ChatBookendItem>
        <strong>Chat started</strong>・3:45pm
      </ChatBookendItem>
    </ChatBookend>
    <ChatBookend>
      <ChatBookendItem>Today</ChatBookendItem>
    </ChatBookend>
  </ChatLog>
);
