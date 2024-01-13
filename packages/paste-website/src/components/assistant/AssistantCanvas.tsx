import { useIsMutating, useQuery } from "@tanstack/react-query";
import { Box } from "@twilio-paste/box";
import { ChatLog } from "@twilio-paste/chat-log";
import * as React from "react";

import { useAssistantMessagesStore } from "../../stores/assistantMessagesStore";
import { useAssistantRunStore } from "../../stores/assistantRunStore";
import { AssistantMessage } from "./AssistantMessage";
import { LoadingMessage } from "./LoadingMessage";
import { UserMessage } from "./UserMessage";

type AssistantCanvasProps = {
  selectedThreadID: string;
};

export const AssistantCanvas: React.FC<AssistantCanvasProps> = ({ selectedThreadID }) => {
  const [mounted, setMounted] = React.useState(false);
  const [logWidth, setLogWidth] = React.useState(0);
  const { messages, setMessages } = useAssistantMessagesStore();
  const { activeRun } = useAssistantRunStore();
  const isCreatingAResponse = useIsMutating({ mutationKey: ["create-assistant-run"] });

  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const loggerRef = React.useRef<HTMLDivElement>(null);

  useQuery({
    queryKey: ["assistant-messages", selectedThreadID],
    queryFn: async () => {
      const response = await fetch(`/api/paste-assistant-messages/${selectedThreadID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJSON = await response.json();
      const newMessages = responseJSON.data;
      setMessages(newMessages);
      return newMessages;
    },
  });

  React.useEffect(() => {
    setMounted(true);
    setLogWidth(loggerRef.current?.offsetWidth ?? 0);
  }, []);

  // scroll to bottom of chat log when new messages are added
  React.useEffect(() => {
    if (!mounted || !loggerRef.current) return;
    scrollerRef.current?.scrollTo({ top: loggerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, mounted]);

  return (
    <Box ref={scrollerRef} tabIndex={0} overflowY="auto">
      <Box maxWidth="1000px" marginX="auto">
        <ChatLog ref={loggerRef}>
          {messages?.map((threadMessage): React.ReactNode => {
            if (threadMessage.role === "assistant") {
              return <AssistantMessage key={threadMessage.id} threadMessage={threadMessage} />;
            }
            return <UserMessage key={threadMessage.id} threadMessage={threadMessage} />;
          })}
          {(isCreatingAResponse || activeRun != null) && <LoadingMessage maxWidth={logWidth} />}
        </ChatLog>
      </Box>
    </Box>
  );
};
