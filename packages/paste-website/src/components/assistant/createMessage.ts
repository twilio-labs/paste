/* eslint-disable camelcase */
import { useCreateAssistantRunMutation, useSimpleCompletionMutation } from "../../api/assistantAPIs";
import { useAssistantMessagesStore } from "../../stores/assistantMessagesStore";
import { useAssistantRunStore } from "../../stores/assistantRunStore";
import { useAssistantThreadsStore } from "../../stores/assistantThreadsStore";
import useStoreWithLocalStorage from "../../stores/useStore";

export const useCreateMessage = (message: string): void => {
  const threadsStore = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state);
  const selectedThread = threadsStore?.selectedThreadID;
  const addMessage = useAssistantMessagesStore((state) => state.addMessage);
  const messages = useAssistantMessagesStore((state) => state.messages);
  const setActiveRun = useAssistantRunStore((state) => state.setActiveRun);
  const createAssistantRun = useCreateAssistantRunMutation();
  const simpleCompletionMutation = useSimpleCompletionMutation();

  if (message === "" || selectedThread == null) return;

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
    /**
     * summarise the first question as the title of the
     * thread, if this is the first message in that thread
     * for it to appear in the thread list
     */
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
/* eslint-enable camelcase */
