import { type Thread } from "openai/resources/beta/threads/threads";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AssistantThread = Thread & {
  selected: boolean;
};
type State = { threads: AssistantThread[]; selectedThreadID: string | undefined };
type Actions = {
  createThread: (newThread: AssistantThread) => void;
  deleteThread: (threadId: string) => void;
  setSelectedThread: (threadId: string) => void;
  setThreadTitle: (threadId: string, title: string) => void;
};

export const useAssistantThreadsStore = create<State & Actions>()(
  persist(
    (set) => ({
      threads: [],
      selectedThreadID: undefined,
      createThread: (newThread) => {
        set((state) => ({ threads: [...state.threads, newThread] }));
      },
      deleteThread: (id) => {
        set((state) => ({
          threads: state.threads.filter((thread) => thread.id !== id),
          selectedThreadID: id === state.selectedThreadID ? undefined : state.selectedThreadID,
        }));
      },
      setSelectedThread: (id) => {
        set((state) => ({
          threads: state.threads.map((thread) => ({
            ...thread,
            selected: thread.id === id,
          })),
          selectedThreadID: id,
        }));
      },
      setThreadTitle: (id, title) => {
        set((state) => ({
          threads: state.threads.map((thread) => ({
            ...thread,
            // @ts-expect-error bad types, metadata is an object not any
            metadata: thread.id === id ? { ...thread.metadata, threadTitle: title } : thread.metadata,
          })),
        }));
      },
    }),
    {
      name: "threads-storage", // unique name for local storage
    },
  ),
);
