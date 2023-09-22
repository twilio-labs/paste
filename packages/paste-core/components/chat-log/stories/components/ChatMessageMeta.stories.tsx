import type { StoryFn } from '@storybook/react';
import { Avatar } from '@twilio-paste/avatar';
import * as React from 'react';

import { ChatBubble, ChatLog, ChatMessage, ChatMessageMeta, ChatMessageMetaItem } from '../../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog',
};

export const InboundMessageWithMeta: StoryFn = () => (
  <ChatLog>
    <ChatMessage variant="inbound">
      <ChatBubble>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ChatBubble>
      <ChatMessageMeta aria-label="said by Gibby Radki 4 minutes ago">
        <ChatMessageMetaItem>
          <Avatar name="Gibby Radki" size="sizeIcon20" />
          Gibby Radki ・ 4 minutes ago
        </ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  </ChatLog>
);

export const OutboundMessageWithMeta: StoryFn = () => (
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

export const MessageWithLongMeta: StoryFn = () => (
  <ChatLog>
    <ChatMessage variant="inbound">
      <ChatBubble>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ChatBubble>
      <ChatMessageMeta
        aria-label="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      >
        <ChatMessageMetaItem>
          <Avatar name="Gibby Radki" size="sizeIcon20" />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
    <ChatMessage variant="outbound">
      <ChatBubble>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ChatBubble>
      <ChatMessageMeta
        aria-label="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      >
        <ChatMessageMetaItem>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  </ChatLog>
);
