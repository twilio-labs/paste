import { ChatBubble, ChatMessage, ChatMessageMeta, ChatMessageMetaItem } from "@twilio-paste/chat-log";
import { type ThreadMessage } from "openai/resources/beta/threads/messages";
import * as React from "react";

import { formatTimestamp } from "../../utils/formatTimestamp";
import { AssistantMarkdown } from "./AssistantMarkdown";

export const UserMessage: React.FC<{ threadMessage: ThreadMessage }> = ({ threadMessage }) => {
  return (
    <ChatMessage variant="outbound">
      <ChatBubble>
        {threadMessage.content[0].type === "text" && (
          <AssistantMarkdown key={threadMessage.id}>{threadMessage.content[0].text.value}</AssistantMarkdown>
        )}
      </ChatBubble>
      <ChatMessageMeta aria-label={`said by you at ${formatTimestamp(threadMessage.created_at)}`}>
        <ChatMessageMetaItem>You ・ {formatTimestamp(threadMessage.created_at)}</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  );
};
