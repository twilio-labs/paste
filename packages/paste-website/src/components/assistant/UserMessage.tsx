import { AIChatMessage, AIChatMessageAuthor, AIChatMessageBody } from "@twilio-paste/ai-chat-log";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { type ThreadMessage } from "openai/resources/beta/threads/messages";
import * as React from "react";

import { formatTimestamp } from "../../utils/formatTimestamp";
import { AssistantMarkdown } from "./AssistantMarkdown";

export const UserMessage: React.FC<{ threadMessage: ThreadMessage }> = ({ threadMessage }) => {
  return (
    <AIChatMessage variant="user">
      <AIChatMessageAuthor
        aria-label={`said by you at ${formatTimestamp(threadMessage.created_at)}`}
        avatarIcon={UserIcon}
      >
        You
      </AIChatMessageAuthor>
      <AIChatMessageBody>
        {threadMessage.content[0].type === "text" && (
          <AssistantMarkdown key={threadMessage.id}>{threadMessage.content[0].text.value}</AssistantMarkdown>
        )}
      </AIChatMessageBody>
    </AIChatMessage>
  );
};
