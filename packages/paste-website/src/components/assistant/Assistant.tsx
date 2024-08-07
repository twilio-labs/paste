/* eslint-disable camelcase */
import type { ThreadMessage } from "openai/resources/beta/threads/messages/messages";
import * as React from "react";

import {
  useCreateAssistantRunMutation,
  useCreateThreadMutation,
  useSimpleCompletionMutation,
  useUpdateThreadMutation,
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
import { useAssistantToaster } from "./AssistantToaster";
import { AssistantHeader } from "./AsststantHeader";

const getMockMessage = ({ message }: { message: string }): ThreadMessage => {
  const date = new Date();

  return {
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
  };
};

export const Assistant: React.FC = () => {
  const threadsStore = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state);
  const createAssistantRun = useCreateAssistantRunMutation();
  const createThreadMutation = useCreateThreadMutation();
  const updateThreadMutation = useUpdateThreadMutation();
  const simpleCompletionMutation = useSimpleCompletionMutation();
  const setActiveRun = useAssistantRunStore((state) => state.setActiveRun);
  const addMessage = useAssistantMessagesStore((state) => state.addMessage);
  const messages = useAssistantMessagesStore((state) => state.messages);
  const assistantToaster = useAssistantToaster();

  if (threadsStore == null) return null;

  const handleMessageCreation = (message: string, threadId: string): void => {
    // add the new user message to the store to optimistically render it whilst we wait for openAI to do its thing
    addMessage(getMockMessage({ message }));

    // Create a new "assistant run" on the thread so that openAI processes the new message and updates the thread with a response
    createAssistantRun.mutate(
      { threadId, message },
      {
        onSuccess: (run: any) => {
          const newRun = run;
          setActiveRun(newRun.run);
        },
        onError(error) {
          assistantToaster.push({
            message: error.message,
            variant: "error",
          });
        },
      },
    );

    if (messages.length === 0) {
      /**
       * summarise the first question as the title of the
       * thread, if this is the first message in that thread
       * for it to appear in the thread list as an identifier
       * of the thread
       */
      simpleCompletionMutation.mutate(
        {
          prompt:
            "If this is the start of a threaded conversation, summarise the subject of the converation in as few words as possible: ",
          context: message,
        },
        {
          onSuccess: (completion: any) => {
            const newCompletion = completion;
            // update the thread title in the store
            threadsStore?.setThreadTitle(threadId, newCompletion.choices[0].message.content);
            // update the thread title in openAI
            updateThreadMutation.mutate({ id: threadId, threadTitle: newCompletion.choices[0].message.content });
          },
          onError(error) {
            assistantToaster.push({
              message: error.message,
              variant: "error",
            });
          },
        },
      );
    }
  };

  /**
   * From one of the canned new thread messages, create a new thread, select it, and then
   * create a new message run on the newly created thread.
   *
   * @param {string} message
   */
  const handleCannedThreadCreation = (message: string): void => {
    createThreadMutation.mutate(
      {},
      {
        onSuccess: (data: any) => {
          const newThread = data;
          if (threadsStore == null) return;
          threadsStore.createAndSelectThread(newThread);
          handleMessageCreation(message, newThread.id);
        },
        onError(error) {
          assistantToaster.push({
            message: error.message,
            variant: "error",
          });
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
