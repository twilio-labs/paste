import {
  AIChatMessage,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageBodyProps,
} from "@twilio-paste/ai-chat-log";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { compiler } from "markdown-to-jsx";
import { type Message } from "openai/resources/beta/threads/messages";
import * as React from "react";

import { formatTimestamp } from "../../utils/formatTimestamp";
import { assistantMarkdownOptions } from "./AssistantMarkdown";

interface UserMessageProps extends AIChatMessageBodyProps {
  threadMessage: Message;
}

export const UserMessage: React.FC<UserMessageProps> = ({ threadMessage, ...props }) => {
  return (
    <AIChatMessage variant="user">
      <AIChatMessageAuthor
        aria-label={`said by you at ${formatTimestamp(threadMessage.created_at)}`}
        avatarIcon={UserIcon}
      >
        You
      </AIChatMessageAuthor>
      <AIChatMessageBody {...props}>
        {threadMessage.content.length > 0 &&
          threadMessage.content[0]?.type === "text" &&
          compiler(threadMessage.content[0].text.value, assistantMarkdownOptions)}
      </AIChatMessageBody>
    </AIChatMessage>
  );
};
