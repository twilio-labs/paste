import { type Run } from "openai/resources/beta/threads/runs";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = { activeRun: Run | undefined };
type Actions = { setActiveRun: (newRun: Run | undefined) => void };

export const useAssistantRunStore = create<State & Actions>()(
  devtools((set) => ({
    activeRun: undefined,
    setActiveRun: (newRun) => {
      set(() => ({ activeRun: newRun }));
    },
  })),
);
