import * as React from 'react';
import {Avatar} from '@twilio-paste/avatar';
import type {Story} from '@storybook/react';
import {ChatMessage, ChatBubble, ChatMessageMeta, ChatMessageMetaItem, ChatLog} from '../../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog',
};

export const InboundMessageWithMeta: Story = () => (
  <ChatLog>
    <ChatMessage variant="inbound">
      <ChatBubble>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ChatBubble>
      <ChatMessageMeta aria-label="said by Gibby Radki 4 minutes ago">
        <ChatMessageMetaItem>
          <Avatar name="Gibby Radki" size="sizeIcon20" />
          Gibby Radki
        </ChatMessageMetaItem>
        <ChatMessageMetaItem>4 minutes ago</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  </ChatLog>
);

export const OutboundMessageWithMeta: Story = () => (
  <ChatLog>
    <ChatMessage variant="outbound">
      <ChatBubble>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ChatBubble>
      <ChatMessageMeta aria-label="said by you 2 minutes ago">
        <ChatMessageMetaItem>2 minutes ago</ChatMessageMetaItem>
      </ChatMessageMeta>
      <ChatMessageMeta aria-label="(read)">
        <ChatMessageMetaItem>Read</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  </ChatLog>
);
