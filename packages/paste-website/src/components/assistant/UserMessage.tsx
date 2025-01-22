import { AIChatMessage, AIChatMessageAuthor, AIChatMessageBody, AIChatMessageBodyProps } from "@twilio-paste/ai-chat-log";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { type Message } from "openai/resources/beta/threads/messages";
import * as React from "react";

import { formatTimestamp } from "../../utils/formatTimestamp";
import { AssistantMarkdown } from "./AssistantMarkdown";

interface UserMessageProps extends AIChatMessageBodyProps {
  threadMessage: Message
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
        {threadMessage.content[0].type === "text" && (
          <AssistantMarkdown key={threadMessage.id}>{threadMessage.content[0].text.value}</AssistantMarkdown>
        )}
      </AIChatMessageBody>
    </AIChatMessage>
  );
};
