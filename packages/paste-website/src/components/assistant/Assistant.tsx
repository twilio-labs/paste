import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";

import { useAssistantRunStore } from "../../stores/assistantRunStore";
import { useAssistantThreadsStore } from "../../stores/assistantThreadsStore";
import useStoreWithLocalStorage from "../../stores/useStore";
import { AssistantCanvas } from "./AssistantCanvas";
import { AssistantComposer } from "./AssistantComposer";
import { AsssistantLayout } from "./AssistantLayout";
import { AssistantThreads } from "./AssistantThreads";
import { AssistantHeader } from "./AsststantHeader";

/**
 * When an assistant thread run is active, poll the server for updates.
 * When the run is complete, invalidate the messages query to refetch
 * the thread messages.
 *
 * @return {*}
 */
const ActiveRunPoller: React.FC = () => {
  const queryClient = useQueryClient();
  const selectedThread = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state.selectedThreadID);
  const { activeRun, setActiveRun } = useAssistantRunStore();

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
    // Poll every 500ms
    refetchInterval: 500,
  });
  return null;
};

export const Assistant: React.FC = () => {
  const selectedThread = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state.selectedThreadID);
  const { activeRun } = useAssistantRunStore();

  return (
    <AsssistantLayout.Window>
      <AsssistantLayout.Threads>
        <AsssistantLayout.ThreadsHeader>
          <AssistantHeader />
        </AsssistantLayout.ThreadsHeader>
        <AssistantThreads />
      </AsssistantLayout.Threads>
      <AsssistantLayout.Canvas>
        {activeRun != null && <ActiveRunPoller />}
        {selectedThread == null && <div>Empty select</div>}
        {selectedThread != null && <AssistantCanvas selectedThreadID={selectedThread} />}
        <AsssistantLayout.Composer>
          <AssistantComposer />
        </AsssistantLayout.Composer>
      </AsssistantLayout.Canvas>
    </AsssistantLayout.Window>
  );
};
