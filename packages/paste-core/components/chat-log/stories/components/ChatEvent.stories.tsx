import type { StoryFn } from '@storybook/react';
import * as React from 'react';

import { ChatEvent, ChatLog } from '../../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog',
};

export const ChatEventExample: StoryFn = () => (
  <ChatLog>
    <ChatEvent>
      <strong>Lauren Gardner, Lee White, Loreina Chew </strong>have joined the chat・3:42pm
    </ChatEvent>
    <ChatEvent>
      <strong>Loreina Chew </strong>has left the chat・3:43pm
    </ChatEvent>
  </ChatLog>
);
