import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import * as React from "react";

import { useCreateThreadMutation } from "../../api/assistantAPIs";
import { Logo } from "../../assets/Logo";
import { useAssistantThreadsStore } from "../../stores/assistantThreadsStore";
import useStoreWithLocalStorage from "../../stores/useStore";

export const AssistantHeader: React.FC = () => {
  const threadStore = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state);
  const createThreadMutation = useCreateThreadMutation();

  const handleCreateNewThread = (): void => {
    createThreadMutation.mutate(
      {},
      {
        onSuccess: async (data) => {
          // @ts-expect-error I don't know how to type this right now so it knows it's a response
          const newThread = await data.json();
          if (threadStore == null) return;
          threadStore.createAndSelectThread(newThread);
        },
      },
    );
  };

  return (
    <>
      <Heading as="h2" variant="heading40" marginBottom="space0">
        <Box display="flex" alignItems="center" columnGap="space30">
          <Logo size={20} /> Assistant
        </Box>
      </Heading>
      <Button variant="secondary" size="icon_small" onClick={handleCreateNewThread}>
        <PlusIcon decorative={false} title="Create new assistant thread" />
      </Button>
    </>
  );
};
