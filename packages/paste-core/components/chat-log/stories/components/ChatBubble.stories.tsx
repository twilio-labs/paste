import * as React from 'react';
import type {Story} from '@storybook/react';

import {ChatMessage, ChatBubble, ChatLog} from '../../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog',
};

export const InboundChatMessage: Story = () => (
  <ChatLog>
    <ChatMessage variant="inbound">
      <ChatBubble>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </ChatBubble>
    </ChatMessage>
  </ChatLog>
);

export const OutboundChatMessage: Story = () => (
  <ChatLog>
    <ChatMessage variant="outbound">
      <ChatBubble>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ChatBubble>
    </ChatMessage>
  </ChatLog>
);
