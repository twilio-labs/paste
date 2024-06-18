import { act, renderHook } from "@testing-library/react";
import * as React from "react";

import { AIChatMessage, AIChatMessageBody, useAIChatLogger } from "../src";

const aiChat = {
  id: "custom-id-123",
  variant: "bot",
  content: (
    <AIChatMessage variant="bot">
      <AIChatMessageBody>hi</AIChatMessageBody>
    </AIChatMessage>
  ),
} as const;

describe("useAIChatLogger", () => {
  it("returns expected result with defaults", () => {
    const { result } = renderHook(() => useAIChatLogger());

    expect(result.current).toMatchObject({
      aiChats: [],
      pop: expect.any(Function),
      push: expect.any(Function),
    });
  });

  it("returns expected result with initialization", () => {
    const { result } = renderHook(() => useAIChatLogger(aiChat));

    expect(result.current.aiChats).toHaveLength(1);
    expect(result.current.pop).toBeInstanceOf(Function);
    expect(result.current.push).toBeInstanceOf(Function);
    expect(result.current.aiChats[0]).toMatchObject(aiChat);
  });

  describe("push", () => {
    it("pushes new aiChats with an id", () => {
      const { result } = renderHook(() => useAIChatLogger());
      expect(result.current.aiChats).toHaveLength(0);

      act(() => {
        result.current.push(aiChat);
      });

      expect(result.current.aiChats).toHaveLength(1);
      expect(result.current.aiChats[0]).toMatchObject(aiChat);
    });

    it("pushes new aiChats without an id", () => {
      const { result } = renderHook(() => useAIChatLogger());
      expect(result.current.aiChats).toHaveLength(0);

      act(() => {
        const chatWithoutCustomId = { ...aiChat, id: undefined };
        result.current.push(chatWithoutCustomId);
      });

      expect(result.current.aiChats).toHaveLength(1);
      expect(result.current.aiChats[0]).toMatchObject({
        id: expect.stringMatching(/^uid/),
      });
    });
  });

  describe("pop", () => {
    it("pops aiChats with an id", () => {
      const { result } = renderHook(() => useAIChatLogger(aiChat));
      expect(result.current.aiChats).toHaveLength(1);

      act(() => {
        result.current.pop(aiChat.id);
      });

      expect(result.current.aiChats).toHaveLength(0);
    });

    it("pops aiChats without an id", () => {
      const { result } = renderHook(() => useAIChatLogger(aiChat));
      expect(result.current.aiChats).toHaveLength(1);

      act(() => {
        result.current.pop();
      });

      expect(result.current.aiChats).toHaveLength(0);
    });
  });
});
