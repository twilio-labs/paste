import { useQuery, useQueryClient } from "@tanstack/react-query";

import { useAssistantRunStore } from "../../stores/assistantRunStore";
import { useAssistantThreadsStore } from "../../stores/assistantThreadsStore";
import useStoreWithLocalStorage from "../../stores/useStore";

/**
 * When an assistant thread run is active, poll the server for updates.
 * When the run is complete, invalidate the messages query to refetch
 * the thread messages.
 *
 * @return {*}
 */
export const AssistantMessagePoller: React.FC = () => {
  const queryClient = useQueryClient();
  const selectedThread = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state.selectedThreadID);
  const activeRun = useAssistantRunStore((state) => state.activeRun);
  const setActiveRun = useAssistantRunStore((state) => state.setActiveRun);

  useQuery({
    queryKey: ["assistant-active-run", selectedThread, activeRun?.id],
    queryFn: async () => {
      if (selectedThread == null || activeRun?.id == null) return {};
      const response = await fetch("/api/paste-assistant-run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ threadId: selectedThread, runId: activeRun?.id }),
      });
      const runDetails = await response.json();
      if (runDetails.status === "completed") {
        setActiveRun(undefined);
        queryClient.invalidateQueries({ queryKey: ["assistant-messages"] });
      } else {
        // reset the active run to the latest run details so we can montior the status of the run
        setActiveRun(runDetails);
      }

      return runDetails;
    },
    notifyOnChangeProps: ["data", "error"],
    // Poll every second
    refetchInterval: 1000,
  });
  return null;
};
