import { uid } from "@twilio-paste/uid-library";
import * as React from "react";

export type AIChat = {
  id: string;
  content: React.ReactElement;
};

export type PartialIDChat = Omit<AIChat, "id"> & Partial<Pick<AIChat, "id">>;

type PushAIChat = (chat: PartialIDChat) => void;
type PopAIChat = (id?: string) => void;

export type UseAIChatLogger = (...initialChats: PartialIDChat[]) => {
  aiChats: AIChat[];
  push: PushAIChat;
  pop: PopAIChat;
  clear: () => void;
};

const aiChatWithId = (chat: PartialIDChat): AIChat => ({ ...chat, id: chat.id || uid(chat.content) });

export const useAIChatLogger: UseAIChatLogger = (...initialChats) => {
  const parsedInitialChats = React.useMemo(() => initialChats.map(aiChatWithId), [initialChats]);

  const [aiChats, setAIChats] = React.useState<AIChat[]>(parsedInitialChats);

  const push: PushAIChat = React.useCallback((next) => {
    setAIChats((prev) => prev.concat(aiChatWithId(next)));
  }, []);

  const pop: PopAIChat = React.useCallback((id) => {
    setAIChats((prev) => (id ? prev.filter((chat) => chat.id !== id) : prev.slice(0, -1)));
  }, []);

  const clear: () => void = React.useCallback(() => setAIChats([]), []);

  return { push, pop, aiChats, clear };
};
