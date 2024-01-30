import { type Thread } from "openai/resources/beta/threads/threads";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type AssistantThread = Thread & {
  selected: boolean;
};
type State = { threads: AssistantThread[]; selectedThreadID: string | undefined };
type Actions = {
  createThread: (newThread: AssistantThread) => void;
  createAndSelectThread: (newThread: AssistantThread) => void;
  deleteThread: (threadId: string) => void;
  setSelectedThread: (threadId: string) => void;
  setThreadTitle: (threadId: string, title: string) => void;
};

export const useAssistantThreadsStore = create<State & Actions>()(
  devtools(
    // persist middleware adds the thread list to localstorage
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
        createAndSelectThread: (newThread) => {
          set((state) => ({
            threads: [
              // deselect any current threads
              ...state.threads.map((thread) => ({
                ...thread,
                selected: false,
              })),
              // add new thread and set it to selected
              { ...newThread, selected: true },
            ],
            selectedThreadID: newThread.id,
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
  ),
);
