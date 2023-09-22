import * as React from 'react';
import { renderHook, act } from '@testing-library/react';

import { useChatLogger, ChatBubble, ChatMessage } from '../src';

const chat = {
  id: 'custom-id-123',
  variant: 'inbound',
  content: (
    <ChatMessage variant="inbound">
      <ChatBubble>hi</ChatBubble>
    </ChatMessage>
  ),
} as const;

describe('useChatLogger', () => {
  it('returns expected result with defaults', () => {
    const { result } = renderHook(() => useChatLogger());

    expect(result.current).toMatchObject({
      chats: [],
      pop: expect.any(Function),
      push: expect.any(Function),
    });
  });

  it('returns expected result with initialization', () => {
    const { result } = renderHook(() => useChatLogger(chat));

    expect(result.current.chats).toHaveLength(1);
    expect(result.current.pop).toBeInstanceOf(Function);
    expect(result.current.push).toBeInstanceOf(Function);
    expect(result.current.chats[0]).toMatchObject(chat);
  });

  describe('push', () => {
    it('pushes new chats with an id', () => {
      const { result } = renderHook(() => useChatLogger());
      expect(result.current.chats).toHaveLength(0);

      act(() => {
        result.current.push(chat);
      });

      expect(result.current.chats).toHaveLength(1);
      expect(result.current.chats[0]).toMatchObject(chat);
    });

    it('pushes new chats without an id', () => {
      const { result } = renderHook(() => useChatLogger());
      expect(result.current.chats).toHaveLength(0);

      act(() => {
        const chatWithoutCustomId = { ...chat, id: undefined };
        result.current.push(chatWithoutCustomId);
      });

      expect(result.current.chats).toHaveLength(1);
      expect(result.current.chats[0]).toMatchObject({
        id: expect.stringMatching(/^uid/),
      });
    });
  });

  describe('pop', () => {
    it('pops chats with an id', () => {
      const { result } = renderHook(() => useChatLogger(chat));
      expect(result.current.chats).toHaveLength(1);

      act(() => {
        result.current.pop(chat.id);
      });

      expect(result.current.chats).toHaveLength(0);
    });

    it('pops chats without an id', () => {
      const { result } = renderHook(() => useChatLogger(chat));
      expect(result.current.chats).toHaveLength(1);

      act(() => {
        result.current.pop();
      });

      expect(result.current.chats).toHaveLength(0);
    });
  });
});
