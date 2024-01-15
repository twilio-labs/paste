/* eslint-disable camelcase */
import { Box } from "@twilio-paste/box";
import { ChatBubble, ChatMessage, ChatMessageMeta, ChatMessageMetaItem } from "@twilio-paste/chat-log";
import { SkeletonLoader } from "@twilio-paste/skeleton-loader";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { Logo } from "../../assets/Logo";
import { useAssistantRunStore } from "../../stores/assistantRunStore";
import { formatTimestamp } from "../../utils/formatTimestamp";

const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const STATUS_MAP = {
  queued: "Queued...",
  in_progress: "Researching...",
  requires_action: "Researching...",
  cancelling: "Concelling...",
  cancelled: "Cancelled.",
  failed: "Failed.",
  completed: "Finished.",
  expired: "Expired.",
};

export const LoadingMessage: React.FC<{ maxWidth: number }> = ({ maxWidth }) => {
  const activeRun = useAssistantRunStore((state) => state.activeRun);

  const newDateTime = new Date();
  const timestamp = Math.floor(newDateTime.getTime() / 1000);

  const randomWidths = React.useMemo(() => {
    return Array.from({ length: 3 }, () => getRandomNumber(maxWidth));
  }, [maxWidth]);

  return (
    <ChatMessage variant="inbound">
      <ChatBubble>
        <Box display="grid" rowGap="space30">
          {randomWidths.map((width) => (
            <SkeletonLoader key={useUID()} height="20px" width={`${width}px`} />
          ))}
        </Box>
      </ChatBubble>
      <ChatMessageMeta aria-label={`said by the assistant at ${formatTimestamp(timestamp)}`}>
        <ChatMessageMetaItem>
          <Logo size={20} />
          PasteBot ・ {activeRun?.status ? STATUS_MAP[activeRun?.status] : "Thinking..."}
        </ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  );
};
/* eslint-enable camelcase */
