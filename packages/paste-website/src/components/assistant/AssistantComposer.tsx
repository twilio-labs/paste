/* eslint-disable camelcase */
import { ChatComposer } from "@twilio-paste/chat-composer";
import { $getRoot, ClearEditorPlugin, type EditorState } from "@twilio-paste/lexical-library";
import * as React from "react";

import { useCreateAssistantRunMutation, useSimpleCompletionMutation } from "../../api/assistantAPIs";
import { useAssistantMessagesStore } from "../../stores/assistantMessagesStore";
import { useAssistantRunStore } from "../../stores/assistantRunStore";
import { useAssistantThreadsStore } from "../../stores/assistantThreadsStore";
import useStoreWithLocalStorage from "../../stores/useStore";
import { EnterKeySubmitPlugin } from "./EnterKeySubmitPlugin";
import { FocusComposerPlugin } from "./FocusComposerPlugin";
import { SendButtonPlugin } from "./SendButtonPlugin";

export const AssistantComposer: React.FC = () => {
  const [message, setMessage] = React.useState("");
  const threadsStore = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state);
  const selectedThread = threadsStore?.selectedThreadID;
  const createAssistantRun = useCreateAssistantRunMutation();
  const simpleCompletionMutation = useSimpleCompletionMutation();
  const { setActiveRun } = useAssistantRunStore();
  const { addMessage, messages } = useAssistantMessagesStore();
  const editorRef = React.useRef(null);

  const handleComposerChange = (editorState: EditorState): void => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setMessage(text);
    });
  };

  const submitMessage = (): void => {
    if (message === "" || selectedThread == null) return;
    const date = new Date();

    addMessage({
      id: "",
      object: "thread.message",
      created_at: Math.floor(date.getTime() / 1000),
      thread_id: "thread_4TQxpcPcMSUzhuJ10S1S3YNe",
      role: "user",
      content: [
        {
          type: "text",
          text: {
            value: message,
            annotations: [],
          },
        },
      ],
      file_ids: [],
      assistant_id: null,
      run_id: null,
      metadata: {},
    });

    createAssistantRun.mutateAsync(
      { threadId: selectedThread, message },
      {
        onSuccess: async (run) => {
          // @ts-expect-error I don't know how to type this right now so it knows it's a response
          const newRun = await run.json();
          setActiveRun(newRun.run);
        },
      },
    );

    if (messages.length === 0) {
      // summarise the first question as the title of the thread
      simpleCompletionMutation.mutateAsync(
        {
          prompt:
            "If this is the start of a threaded conversation, summarise the subject of the converation in as few words as possible: ",
          context: message,
        },
        {
          onSuccess: async (completion) => {
            // @ts-expect-error I don't know how to type this right now so it knows it's a response
            const newCompletion = await completion.json();
            threadsStore?.setThreadTitle(selectedThread, newCompletion.choices[0].message.content);
          },
        },
      );
    }
  };

  return (
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
      ref={editorRef}
    >
      <ClearEditorPlugin />
      <SendButtonPlugin onClick={submitMessage} disabled={selectedThread == null} />
      <EnterKeySubmitPlugin onKeyDown={submitMessage} />
      <FocusComposerPlugin selectedThread={selectedThread} />
    </ChatComposer>
  );
};
/* eslint-enable camelcase */
