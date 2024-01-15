import * as React from "react";
import { useShallow } from "zustand/react/shallow";

import { useAssistantThreadsStore } from "../../stores/assistantThreadsStore";
import useStoreWithLocalStorage from "../../stores/useStore";
import { AssistantCanvas } from "./AssistantCanvas";
import { AssistantComposer } from "./AssistantComposer";
import { AsssistantLayout } from "./AssistantLayout";
import { AssistantThreads } from "./AssistantThreads";
import { AssistantHeader } from "./AsststantHeader";

export const Assistant: React.FC = () => {
  const selectedThread = useStoreWithLocalStorage(
    useAssistantThreadsStore,
    useShallow((state) => state.selectedThreadID),
  );

  return (
    <AsssistantLayout.Window>
      <AsssistantLayout.Threads>
        <AsssistantLayout.ThreadsHeader>
          <AssistantHeader />
        </AsssistantLayout.ThreadsHeader>
        <AssistantThreads />
      </AsssistantLayout.Threads>
      <AsssistantLayout.Canvas>
        {selectedThread == null && <div>Empty select</div>}
        {selectedThread != null && <AssistantCanvas selectedThreadID={selectedThread} />}
        <AsssistantLayout.Composer>
          <AssistantComposer />
        </AsssistantLayout.Composer>
      </AsssistantLayout.Canvas>
    </AsssistantLayout.Window>
  );
};
