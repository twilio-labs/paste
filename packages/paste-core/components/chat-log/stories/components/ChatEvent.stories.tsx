import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {ChatLog, ChatEvent} from '../../src';

export const ChatEventExample: StoryFn = () => (
  <ChatLog>
    <ChatEvent>
      <strong>Lauren Gardner, Lee White, Loreina Chew </strong>have joined the chat・3:42 PM
    </ChatEvent>
    <ChatEvent>
      <strong>Loreina Chew </strong>has left the chat・3:43 PM
    </ChatEvent>
  </ChatLog>
);
