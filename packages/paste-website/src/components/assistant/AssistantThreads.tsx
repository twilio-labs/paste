import { useListboxPrimitiveState } from "@twilio-paste/listbox-primitive";
import * as React from "react";

import { useDeleteThreadMutation } from "../../api/assistantAPIs";
import { useAssistantMessagesStore } from "../../stores/assistantMessagesStore";
import { type AssistantThread, useAssistantThreadsStore } from "../../stores/assistantThreadsStore";
import useStoreWithLocalStorage from "../../stores/useStore";
import { formatTimestamp } from "../../utils/formatTimestamp";
import { ThreadList, ThreadListItem, ThreadListMeta, ThreadListTitle } from "./ThreadList";

export const AssistantThreads: React.FC<React.PropsWithChildren> = () => {
  const listboxState = useListboxPrimitiveState();
  const threadsStore = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state);
  const deleteThreadMutation = useDeleteThreadMutation();
  const resetMessages = useAssistantMessagesStore((state) => state.resetMessages);

  const handleThreadDelete = (threadID: AssistantThread["id"]): void => {
    deleteThreadMutation.mutate(threadID, {
      onSuccess: async () => {
        if (threadsStore?.deleteThread != null) {
          threadsStore?.deleteThread(threadID);
        }
        if (threadsStore?.selectedThreadID === threadID) {
          resetMessages();
        }
      },
    });
  };

  const handleThreadSelect = (threadID: AssistantThread["id"]): void => {
    if (threadsStore?.setSelectedThread != null) {
      threadsStore?.setSelectedThread(threadID);
    }
  };

  if (threadsStore?.threads === undefined) return null;

  return (
    <ThreadList {...listboxState}>
      {threadsStore?.threads.map((thread) => (
        <ThreadListItem
          {...listboxState}
          key={thread.id}
          selected={thread.selected}
          onSelect={(): void => {
            handleThreadSelect(thread.id);
          }}
          onDelete={(): void => {
            handleThreadDelete(thread.id);
          }}
        >
          <ThreadListTitle key={`${thread.id}-title`}>
            {/* @ts-expect-error threadTitle is a custom prop on metadata */}
            {thread.metadata?.threadTitle ?? thread.id}
          </ThreadListTitle>
          <ThreadListMeta key={`${thread.id}-meta`}>{formatTimestamp(thread.created_at)}</ThreadListMeta>
        </ThreadListItem>
      ))}
    </ThreadList>
  );
};
