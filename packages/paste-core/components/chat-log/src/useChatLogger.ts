import { uid } from "@twilio-paste/uid-library";
import * as React from "react";

import type { MessageVariants } from "./MessageVariantContext";

type PushChat = (chat: PartialIDChat) => void;
type PopChat = (id?: string) => void;

export type Chat = {
  id: string;
  variant?: MessageVariants;
  content: React.ReactElement<any>;
};

export type PartialIDChat = Omit<Chat, "id"> & Partial<Pick<Chat, "id">>;

export type UseChatLogger = (...initialChats: PartialIDChat[]) => {
  chats: Chat[];
  push: PushChat;
  pop: PopChat;
  clear: () => void;
};

const chatWithId = (chat: PartialIDChat): Chat => ({ ...chat, id: chat.id || uid(chat.content) });

export const useChatLogger: UseChatLogger = (...initialChats) => {
  const parsedInitialChats = React.useMemo(() => initialChats.map(chatWithId), [initialChats]);

  const [chats, setChats] = React.useState<Chat[]>(parsedInitialChats);

  const push: PushChat = React.useCallback((next) => {
    setChats((prev) => prev.concat(chatWithId(next)));
  }, []);

  const pop: PopChat = React.useCallback((id) => {
    setChats((prev) => (id ? prev.filter((chat) => chat.id !== id) : prev.slice(0, -1)));
  }, []);

  const clear: () => void = React.useCallback(() => setChats([]), []);

  return { push, pop, chats, clear };
};
