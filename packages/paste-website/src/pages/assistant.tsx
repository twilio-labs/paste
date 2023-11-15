/* eslint-disable camelcase */
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ChatComposer } from "@twilio-paste/chat-composer";
import { ChatLog } from "@twilio-paste/chat-log";
import { Heading } from "@twilio-paste/heading";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { $getRoot, ClearEditorPlugin, type EditorState } from "@twilio-paste/lexical-library";
import { useListboxPrimitiveState } from "@twilio-paste/listbox-primitive";
import differenceWith from "lodash/differenceWith";
import isEqual from "lodash/isEqual";
import type { NextPage } from "next";
import { type ThreadMessagesPage } from "openai/resources/beta/threads/messages";
import { type Run } from "openai/resources/beta/threads/runs";
import { type Thread } from "openai/resources/beta/threads/threads";
import * as React from "react";

import { set } from "lodash";
import { Logo } from "../assets/Logo";
import { AssistantMessage } from "../components/assistant/AssistantMessage";
import { EnterKeySubmitPlugin } from "../components/assistant/EnterKeySubmitPlugin";
import { SendButtonPlugin } from "../components/assistant/SendButtonPlugin";
import { ThreadList, ThreadListItem, ThreadListMeta, ThreadListTitle } from "../components/assistant/ThreadList";
import { UserMessage } from "../components/assistant/UserMessage";
import { formatTimestamp } from "../utils/formatTimestamp";

const Assistant: NextPage = () => {
  const listboxState = useListboxPrimitiveState();
  const [selectedThread, setSelectedThread] = React.useState<Thread["id"]>();
  const [selectedThreadMessages, setSelectedThreadMessages] = React.useState<ThreadMessagesPage["data"]>();
  const [lastAssistantRun, setLastAssistantRun] = React.useState<Run["id"]>();

  const [threads, setThreads] = React.useState<Thread[]>([
    {
      created_at: 1700526686,
      id: "thread_vhBUVa68I5nnBTCOM02qSY00",
      metadata: { threadTitle: "New thread" },
      object: "thread",
    },
    {
      created_at: 1700526686,
      id: "thread_GOupC2K3OoGUbCwYiYATNB0l",
      metadata: { threadTitle: "New thread" },
      object: "thread",
    },
  ]);
  const [message, setMessage] = React.useState("");
  const [mounted, setMounted] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const loggerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  const handleCreateNewThread = async (): Promise<void> => {
    const thread = await fetch("/api/paste-assistant-thread", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      throw error;
    });
    setThreads([...threads, await thread.json()]);
  };

  const handleThreadDelete = async (threadID: Thread["id"]): Promise<void> => {
    const deleteAction = await fetch("/api/paste-assistant-thread", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: threadID }),
    }).catch((error) => {
      throw error;
    });
    setThreads(threads.filter((thread) => thread.id !== threadID));
  };

  const createAssistantThreadRun = async ({
    userMessage,
    threadID,
  }: { userMessage: string; threadID: string }): Promise<void> => {
    const thread = await fetch("/api/paste-assistant-message/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ threadId: threadID, message: userMessage }),
    }).catch((error) => {
      throw error;
    });
    const assistantThreadRun = (await thread.json()) as Run;
    setLastAssistantRun(assistantThreadRun.id);
  };

  const handleThreadClick = (threadID: Thread["id"]): void => {
    setSelectedThread(threadID);
    setSelectedThreadMessages([]);
  };

  const handleComposerChange = (editorState: EditorState): void => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setMessage(text);
    });
  };

  const submitMessage = (): void => {
    if (message === "" || selectedThread == null) return;
    createAssistantThreadRun({ userMessage: message, threadID: selectedThread });
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // poll the assistant thread for new messages when a thread is selected
  React.useEffect(() => {
    if (selectedThread == null)
      return () => {
        return null;
      };

    setScrolled(false);

    const fetchSelectedThreadMessages = async (): Promise<void> => {
      const thread = await fetch(`/api/paste-assistant-messages/${selectedThread}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((error) => {
        throw error;
      });
      const threadData = (await thread.json()) as ThreadMessagesPage;

      // update the selected thread messages if the returned threadData.data is different from the current state
      if (JSON.stringify(threadData.data) !== JSON.stringify(selectedThreadMessages)) {
        setSelectedThreadMessages(threadData.data);
      }
    };
    const intervalId = setInterval(fetchSelectedThreadMessages, 1000); // polling every 5 seconds

    // cleanup function on component unmount or ID change
    return () => {
      clearInterval(intervalId);
    };
  }, [selectedThread, selectedThreadMessages]);

  React.useEffect(() => {
    console.log("selectedThreadMessages", selectedThreadMessages);
  }, [selectedThreadMessages]);

  // scroll to bottom of chat log when new messages are added
  React.useEffect(() => {
    if (!mounted || !loggerRef.current || scrolled) return;
    scrollerRef.current?.scrollTo({ top: loggerRef.current.scrollHeight, behavior: "smooth" });
  }, [selectedThreadMessages, mounted, scrolled]);

  return (
    <Box display="grid" gridTemplateColumns="400px 1fr" height="100vh" width="100%">
      <Box
        display="grid"
        gridTemplateRows="auto 1fr"
        borderRightStyle="solid"
        borderRightColor="colorBorderWeaker"
        borderRightWidth="borderWidth10"
        backgroundColor="colorBackgroundWeak"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingX="space60"
          paddingY="space40"
          backgroundColor="colorBackgroundBody"
          borderBottomStyle="solid"
          borderBottomColor="colorBorderWeaker"
          borderBottomWidth="borderWidth10"
        >
          <Heading as="h2" variant="heading40" marginBottom="space0">
            <Box display="flex" alignItems="center" columnGap="space30">
              <Logo size={20} /> Assistant
            </Box>
          </Heading>
          <Button variant="secondary" size="icon_small" onClick={handleCreateNewThread}>
            <PlusIcon decorative={false} title="Create new assistant thread" />
          </Button>
        </Box>
        <Box>
          <ThreadList {...listboxState}>
            {threads.map((thread) => (
              <ThreadListItem
                {...listboxState}
                key={thread.id}
                selected={selectedThread === thread.id}
                onSelect={(): void => {
                  handleThreadClick(thread.id);
                }}
                onDelete={(): void => {
                  handleThreadDelete(thread.id);
                }}
              >
                <ThreadListTitle key={`${thread.id}-title`}>
                  {thread.metadata?.threadTitle ?? thread.id}
                </ThreadListTitle>
                <ThreadListMeta key={`${thread.id}-meta`}>{formatTimestamp(thread.created_at)}</ThreadListMeta>
              </ThreadListItem>
            ))}
          </ThreadList>
        </Box>
      </Box>
      <Box display="grid" gridTemplateRows="1fr auto" overflow="hidden">
        <Box
          ref={scrollerRef}
          tabIndex={0}
          overflowY="auto"
          onScroll={() => {
            setScrolled(true);
          }}
        >
          <Box maxWidth="1000px" marginX="auto">
            <ChatLog ref={loggerRef}>
              {selectedThreadMessages?.map((threadMessage): React.ReactNode => {
                if (threadMessage.role === "assistant") {
                  return <AssistantMessage key={threadMessage.id} threadMessage={threadMessage} />;
                }
                return <UserMessage key={threadMessage.id} threadMessage={threadMessage} />;
              })}
            </ChatLog>
          </Box>
        </Box>
        <Box
          borderStyle="solid"
          borderWidth="borderWidth0"
          borderTopWidth="borderWidth10"
          borderColor="colorBorderWeak"
          backgroundColor="colorBackgroundBody"
          display="flex"
          flexDirection="row"
          columnGap="space30"
          paddingX="space70"
          paddingY="space50"
          position="sticky"
          bottom="0"
          zIndex="zIndex10"
        >
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error: Error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
            onChange={handleComposerChange}
          >
            <ClearEditorPlugin />
            <SendButtonPlugin onClick={submitMessage} disabled={selectedThread == null} />
            <EnterKeySubmitPlugin onKeyDown={submitMessage} />
          </ChatComposer>
        </Box>
      </Box>
    </Box>
  );
};

export default Assistant;
/* eslint-enable camelcase */
