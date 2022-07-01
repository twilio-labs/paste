import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {ChatMessage, ChatBubble} from '../../src';

export const InboundChatMessage: StoryFn = () => (
  <ChatMessage variant="inbound">
    <ChatBubble>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </ChatBubble>
  </ChatMessage>
);

export const OutboundChatMessage: StoryFn = () => (
  <ChatMessage variant="outbound">
    <ChatBubble>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </ChatBubble>
  </ChatMessage>
);
