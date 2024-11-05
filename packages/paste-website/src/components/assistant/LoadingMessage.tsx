import { AIChatMessage, AIChatMessageAuthor, AIChatMessageBody, AIChatMessageLoading } from "@twilio-paste/ai-chat-log";
import * as React from "react";

import { formatTimestamp } from "../../utils/formatTimestamp";

export const LoadingMessage: React.FC = () => {
  const newDateTime = new Date();
  const timestamp = Math.floor(newDateTime.getTime() / 1000);

  return (
    <AIChatMessage variant="bot">
      <AIChatMessageAuthor aria-label={`said by paste assistant at ${formatTimestamp(timestamp)}`}>
        PasteBot
      </AIChatMessageAuthor>
      <AIChatMessageBody>
        <AIChatMessageLoading />
      </AIChatMessageBody>
    </AIChatMessage>
  );
};
