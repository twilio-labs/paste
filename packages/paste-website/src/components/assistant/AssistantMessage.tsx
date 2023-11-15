import { ChatBubble, ChatMessage, ChatMessageMeta, ChatMessageMetaItem } from "@twilio-paste/chat-log";
import Markdown from "markdown-to-jsx";
import { type ThreadMessage } from "openai/resources/beta/threads/messages";
import * as React from "react";

import { Logo } from "../../assets/Logo";
import { formatTimestamp } from "../../utils/formatTimestamp";

export const AssistantMessage: React.FC<{ threadMessage: ThreadMessage }> = ({ threadMessage }) => {
  return (
    <ChatMessage variant="inbound">
      <ChatBubble>
        <Markdown key={threadMessage.id}>{threadMessage.content[0].text.value}</Markdown>
      </ChatBubble>
      <ChatMessageMeta aria-label={`said by the assistant at ${formatTimestamp(threadMessage.created_at)}`}>
        <ChatMessageMetaItem>
          <Logo size={20} />
          PasteBot ・ {formatTimestamp(threadMessage.created_at)}
        </ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  );
};
