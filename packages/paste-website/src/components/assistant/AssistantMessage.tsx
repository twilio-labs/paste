import { AIChatMessage, AIChatMessageAuthor, AIChatMessageBody } from "@twilio-paste/ai-chat-log";
import { type ThreadMessage } from "openai/resources/beta/threads/messages";
import * as React from "react";

import { formatTimestamp } from "../../utils/formatTimestamp";
import { AssistantMarkdown } from "./AssistantMarkdown";

export const AssistantMessage: React.FC<{ threadMessage: ThreadMessage }> = ({ threadMessage }) => {
  return (
    <AIChatMessage variant="bot">
      <AIChatMessageAuthor
        aria-label={`said by paste assistant at ${formatTimestamp(threadMessage.created_at)}`}
        avatarSrc="../../assets/Logo"
      >
        PasteBot
      </AIChatMessageAuthor>
      <AIChatMessageBody>
        {threadMessage.content[0].type === "text" && (
          <AssistantMarkdown key={threadMessage.id}>{threadMessage.content[0].text.value}</AssistantMarkdown>
        )}
      </AIChatMessageBody>
    </AIChatMessage>
  );
};
