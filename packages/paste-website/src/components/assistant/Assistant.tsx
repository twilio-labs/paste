/* eslint-disable camelcase */
import * as React from "react";

import {
  useCreateAssistantRunMutation,
  useCreateThreadMutation,
  useSimpleCompletionMutation,
} from "../../api/assistantAPIs";
import { useAssistantMessagesStore } from "../../stores/assistantMessagesStore";
import { useAssistantRunStore } from "../../stores/assistantRunStore";
import { useAssistantThreadsStore } from "../../stores/assistantThreadsStore";
import useStoreWithLocalStorage from "../../stores/useStore";
import { AssistantCanvas } from "./AssistantCanvas";
import { AssistantComposer } from "./AssistantComposer";
import { AssistantEmptyState } from "./AssistantEmptyState";
import { AsssistantLayout } from "./AssistantLayout";
import { AssistantThreads } from "./AssistantThreads";
import { AssistantHeader } from "./AsststantHeader";

export const Assistant: React.FC = () => {
  const threadsStore = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state);
  const createAssistantRun = useCreateAssistantRunMutation();
  const createThreadMutation = useCreateThreadMutation();
  const simpleCompletionMutation = useSimpleCompletionMutation();
  const setActiveRun = useAssistantRunStore((state) => state.setActiveRun);
  const addMessage = useAssistantMessagesStore((state) => state.addMessage);
  const messages = useAssistantMessagesStore((state) => state.messages);

  if (threadsStore == null) return null;

  const handleMessageCreation = (message: string, threadId: string): void => {
    const date = new Date();

    // add the new user message to the store to optimistically render it
    addMessage({
      id: "",
      object: "thread.message",
      created_at: Math.floor(date.getTime() / 1000),
      thread_id: "xxxx",
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

    createAssistantRun.mutate(
      { threadId, message },
      {
        onSuccess: async (run) => {
          // @ts-expect-error I don't know how to type this right now so it knows it's a response
          const newRun = await run.json();
          setActiveRun(newRun.run);
        },
      },
    );

    if (messages.length === 0) {
      /**
       * summarise the first question as the title of the
       * thread, if this is the first message in that thread
       * for it to appear in the thread list
       */
      simpleCompletionMutation.mutate(
        {
          prompt:
            "If this is the start of a threaded conversation, summarise the subject of the converation in as few words as possible: ",
          context: message,
        },
        {
          onSuccess: async (completion) => {
            // @ts-expect-error I don't know how to type this right now so it knows it's a response
            const newCompletion = await completion.json();
            threadsStore?.setThreadTitle(threadId, newCompletion.choices[0].message.content);
          },
        },
      );
    }
  };

  const handleCannedThreadCreation = (message: string): void => {
    createThreadMutation.mutate(
      {},
      {
        onSuccess: async (data) => {
          // @ts-expect-error I don't know how to type this right now so it knows it's a response
          const newThread = await data.json();
          if (threadsStore == null) return;
          threadsStore.createAndSelectThread(newThread);
          handleMessageCreation(message, newThread.id);
        },
      },
    );
  };

  return (
    <AsssistantLayout.Window>
      <AsssistantLayout.Threads>
        <AsssistantLayout.ThreadsHeader>
          <AssistantHeader />
        </AsssistantLayout.ThreadsHeader>
        <AssistantThreads />
      </AsssistantLayout.Threads>
      <AsssistantLayout.Canvas>
        {threadsStore.selectedThreadID == null && (
          <AssistantEmptyState onCannedThreadCreation={handleCannedThreadCreation} />
        )}
        {threadsStore.selectedThreadID != null && <AssistantCanvas selectedThreadID={threadsStore.selectedThreadID} />}
        <AsssistantLayout.Composer>
          <AssistantComposer onMessageCreation={handleMessageCreation} />
        </AsssistantLayout.Composer>
      </AsssistantLayout.Canvas>
    </AsssistantLayout.Window>
  );
};
/* eslint-enable camelcase */
