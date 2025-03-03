import {
  AIChatMessage,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageBodyProps,
} from "@twilio-paste/ai-chat-log";
import { compiler } from "markdown-to-jsx";
import { type Message } from "openai/resources/beta/threads/messages";
import * as React from "react";

import { formatTimestamp } from "../../utils/formatTimestamp";
import { assistantMarkdownOptions } from "./AssistantMarkdown";

interface AssistantMessageProps extends AIChatMessageBodyProps {
  threadMessage: Message;
}

export const AssistantMessage: React.FC<AssistantMessageProps> = ({ threadMessage, ...props }) => {
  return (
    <AIChatMessage variant="bot">
      <AIChatMessageAuthor aria-label={`said by paste assistant at ${formatTimestamp(threadMessage.created_at)}`}>
        PasteBot
      </AIChatMessageAuthor>
      <AIChatMessageBody {...props}>
        {threadMessage.content.length > 0 &&
          threadMessage.content[0]?.type === "text" &&
          compiler(threadMessage.content[0].text.value, assistantMarkdownOptions)}
      </AIChatMessageBody>
    </AIChatMessage>
  );
};
