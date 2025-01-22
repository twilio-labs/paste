import { type Message, type MessagesPage } from "openai/resources/beta/threads/messages";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type AssistantThreadMessages = MessagesPage["data"];
type State = { messages: AssistantThreadMessages };
type Actions = {
  setMessages: (newMessages: AssistantThreadMessages) => void;
  addMessage: (newMessage: Message) => void;
  resetMessages: () => void;
};

export const useAssistantMessagesStore = create<State & Actions>()(
  devtools((set) => ({
    messages: [],
    setMessages: (newMessages) => {
      set(() => ({ messages: newMessages }));
    },
    addMessage: (newMessage) => {
      set((state) => ({ messages: [...state.messages, newMessage] }));
    },
    resetMessages: () => {
      set(() => ({ messages: [] }));
    },
  })),
);
