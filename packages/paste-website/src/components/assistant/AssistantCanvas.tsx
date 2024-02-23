import { useIsMutating, useQuery } from "@tanstack/react-query";
import { Box } from "@twilio-paste/box";
import { ChatBookend, ChatBookendItem, ChatLog } from "@twilio-paste/chat-log";
import * as React from "react";
import { useShallow } from "zustand/react/shallow";

import { useAssistantMessagesStore } from "../../stores/assistantMessagesStore";
import { useAssistantRunStore } from "../../stores/assistantRunStore";
import { AssistantMessage } from "./AssistantMessage";
import { AssistantMessagePoller } from "./AssistantMessagePoller";
import { useAssistantToaster } from "./AssistantToaster";
import { LoadingMessage } from "./LoadingMessage";
import { UserMessage } from "./UserMessage";

type AssistantCanvasProps = {
  selectedThreadID: string;
};

export const AssistantCanvas: React.FC<AssistantCanvasProps> = ({ selectedThreadID }) => {
  const [mounted, setMounted] = React.useState(false);
  const [logWidth, setLogWidth] = React.useState(0);
  const messages = useAssistantMessagesStore(useShallow((state) => state.messages));
  const setMessages = useAssistantMessagesStore(useShallow((state) => state.setMessages));
  const activeRun = useAssistantRunStore(useShallow((state) => state.activeRun));
  const isCreatingAResponse = useIsMutating({ mutationKey: ["create-assistant-run"] });
  const assistantToaster = useAssistantToaster();

  const memoedMessages = React.useMemo(() => messages, [messages]);

  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const loggerRef = React.useRef<HTMLDivElement>(null);

  // fetch messages for the selected thread
  const { error, isError } = useQuery({
    queryKey: ["assistant-messages", selectedThreadID],
    queryFn: async () => {
      const response = await fetch(`/api/paste-assistant-messages/${selectedThreadID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJSON = await response.json();
      if (!response.ok) {
        throw new Error(responseJSON.error);
      }
      const newMessages = responseJSON.data;
      setMessages(newMessages);
      return newMessages;
    },
    notifyOnChangeProps: ["data", "error"],
  });

  React.useEffect(() => {
    setMounted(true);
    // whats the width of the log? You'll need it to render the skeleton loader
    setLogWidth(loggerRef.current?.offsetWidth ?? 0);
  }, []);

  // scroll to bottom of chat log when new messages are added
  React.useEffect(() => {
    if (!mounted || !loggerRef.current) return;
    scrollerRef.current?.scrollTo({ top: loggerRef.current.scrollHeight, behavior: "smooth" });
  }, [memoedMessages, mounted]);

  React.useEffect(() => {
    if (isError) {
      assistantToaster.push({
        message: error.message,
        variant: "error",
      });
    }
  }, [isError, error, assistantToaster]);

  return (
    <Box ref={scrollerRef} tabIndex={0} overflowY="auto">
      <Box maxWidth="1000px" marginX="auto">
        {activeRun != null && <AssistantMessagePoller />}
        <ChatLog ref={loggerRef}>
          <ChatBookend>
            <ChatBookendItem>
              Welcome to the Paste Design System Assistant! We&apos;re excited to have you here.
            </ChatBookendItem>
          </ChatBookend>
          <ChatBookend>
            <ChatBookendItem>
              Keep in mind that this is an experimental tool and so the information provided{" "}
              <strong>may not be entirely accurate</strong>.
            </ChatBookendItem>
            <ChatBookendItem>
              Your conversations are not used to train OpenAI&apos;s models, but are stored by OpenAI.
            </ChatBookendItem>
          </ChatBookend>
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
