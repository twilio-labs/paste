import { render, screen } from '@testing-library/react';
import * as React from 'react';

import { ChatBubble, ChatLogger, ChatMessage } from '../src';
import type { Chat } from '../src/useChatLogger';

const chats: Chat[] = [
  {
    id: 'uid1',
    variant: 'inbound',
    content: (
      <ChatMessage variant="inbound">
        <ChatBubble>hi</ChatBubble>
      </ChatMessage>
    ),
  },
  {
    id: 'uid2',
    variant: 'outbound',
    content: (
      <ChatMessage variant="outbound">
        <ChatBubble>hello</ChatBubble>
      </ChatMessage>
    ),
  },
];

describe('ChatLogger', () => {
  it('should render', () => {
    render(<ChatLogger chats={chats} />);
    expect(screen.getByRole('log')).toBeDefined();
    expect(screen.getByRole('list')).toBeDefined();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
