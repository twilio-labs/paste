import { type Run } from "openai/resources/beta/threads/runs";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = { activeRun: Run | undefined; lastActiveRun: Run | undefined };
type Actions = { setActiveRun: (newRun: Run | undefined) => void; clearLastActiveRun: () => void };

export const useAssistantRunStore = create<State & Actions>()(
  devtools((set) => ({
    activeRun: undefined,
    lastActiveRun: undefined,
    setActiveRun: (newRun) => {
      set((prevState) => ({
        ...prevState,
        activeRun: newRun,
        lastActiveRun: !newRun ? prevState.lastActiveRun : newRun,
      }));
    },
    clearLastActiveRun: () => {
      set((prevState) => ({ ...prevState, lastActiveRun: undefined }));
    },
  })),
);
