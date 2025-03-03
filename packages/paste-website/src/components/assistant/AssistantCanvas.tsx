import { useIsMutating, useQuery } from "@tanstack/react-query";
import { AIChatLog } from "@twilio-paste/ai-chat-log";
import { Box } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import * as React from "react";
import { useShallow } from "zustand/react/shallow";

import { useAssistantMessagesStore } from "../../stores/assistantMessagesStore";
import { useAssistantRunStore } from "../../stores/assistantRunStore";
import { AssistantMessage } from "./AssistantMessage";
import { AssistantMessagePoller } from "./AssistantMessagePoller";
import { LoadingMessage } from "./LoadingMessage";
import { UserMessage } from "./UserMessage";

type AssistantCanvasProps = {
  selectedThreadID: string;
};

export const AssistantCanvas: React.FC<AssistantCanvasProps> = ({ selectedThreadID }) => {
  const [mounted, setMounted] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [userInterctedScroll, setUserInteractedScroll] = React.useState(false);

  const messages = useAssistantMessagesStore(useShallow((state) => state.messages));
  const setMessages = useAssistantMessagesStore(useShallow((state) => state.setMessages));
  const { activeRun, lastActiveRun, clearLastActiveRun } = useAssistantRunStore(useShallow((state) => state));
  const isCreatingAResponse = useIsMutating({ mutationKey: ["create-assistant-run"] });

  const memoedMessages = React.useMemo(() => messages, [messages]);

  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const loggerRef = React.useRef<HTMLDivElement>(null);

  // fetch messages for the selected thread
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
    notifyOnChangeProps: ["data", "error"],
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToChatEnd = (): void => {
    const scrollPosition: any = scrollerRef.current;
    const scrollHeight: any = loggerRef.current;
    scrollPosition?.scrollTo({ top: scrollHeight.scrollHeight, behavior: "smooth" });
  };

  // scroll to bottom of chat log when new messages are added
  React.useEffect(() => {
    if (!mounted || !loggerRef.current) return;
    scrollToChatEnd();
  }, [memoedMessages, mounted]);

  const onAnimationEnd = (): void => {
    setIsAnimating(false);
    setUserInteractedScroll(false);
    // avoid reanimating the same message
    clearLastActiveRun();
  };

  const onAnimationStart = (): void => {
    setUserInteractedScroll(false);
    setIsAnimating(true);
  };

  const userScrolled = (): void => setUserInteractedScroll(true);

  React.useEffect(() => {
    scrollerRef.current?.addEventListener("wheel", userScrolled);
    scrollerRef.current?.addEventListener("touchmove", userScrolled);

    const interval = setInterval(() => isAnimating && !userInterctedScroll && scrollToChatEnd(), 5);
    return () => {
      if (interval) clearInterval(interval);
      scrollerRef.current?.removeEventListener("wheel", userScrolled);
      scrollerRef.current?.removeEventListener("touchmove", userScrolled);
    };
  }, [isAnimating, userInterctedScroll]);

  return (
    <Box ref={scrollerRef} tabIndex={0} overflowY="auto" paddingX="space60">
      <Box maxWidth="1000px" marginX="auto">
        {activeRun != null && <AssistantMessagePoller />}
        <AIChatLog ref={loggerRef}>
          <Box display="flex" flexDirection="column" rowGap="space40">
            <Text
              as="span"
              color="colorTextWeak"
              fontSize="fontSize20"
              lineHeight="lineHeight20"
              fontWeight="fontWeightMedium"
              textAlign="center"
            >
              Welcome to the Paste Design System Assistant! We&apos;re excited to have you here.
            </Text>
            <Text
              as="span"
              color="colorTextWeak"
              fontSize="fontSize20"
              lineHeight="lineHeight20"
              fontWeight="fontWeightMedium"
              textAlign="center"
            >
              Keep in mind that this is an experimental tool and so the information provided may not be entirely
              accurate.
            </Text>
            <Text
              as="span"
              color="colorTextWeak"
              fontSize="fontSize20"
              lineHeight="lineHeight20"
              fontWeight="fontWeightMedium"
              textAlign="center"
            >
              Your conversations are not used to train OpenAI&apos;s models, but are stored by OpenAI.
            </Text>
          </Box>
          {messages?.map((threadMessage, index): React.ReactNode => {
            if (threadMessage.role === "assistant") {
              return (
                <AssistantMessage
                  key={threadMessage.id}
                  threadMessage={threadMessage}
                  // Only animate the last message recieved from AI and must be most recent run to avoid reanimating
                  animated={index === messages.length - 1 && lastActiveRun?.id === threadMessage.run_id}
                  size="fullScreen"
                  onAnimationEnd={onAnimationEnd}
                  onAnimationStart={onAnimationStart}
                />
              );
            }
            return <UserMessage key={threadMessage.id} threadMessage={threadMessage} size="fullScreen" />;
          })}
          {(isCreatingAResponse || activeRun != null) && <LoadingMessage />}
        </AIChatLog>
      </Box>
    </Box>
  );
};
