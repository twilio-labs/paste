import { type ThreadMessage, type ThreadMessagesPage } from "openai/resources/beta/threads/messages";
import { create } from "zustand";

export type AssistantThreadMessages = ThreadMessagesPage["data"];
type State = { messages: AssistantThreadMessages };
type Actions = {
  setMessages: (newMessages: AssistantThreadMessages) => void;
  addMessage: (newMessage: ThreadMessage) => void;
  resetMessages: () => void;
};

export const useAssistantMessagesStore = create<State & Actions>()((set) => ({
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
}));
