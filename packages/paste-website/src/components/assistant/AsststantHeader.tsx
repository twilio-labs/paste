import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import * as React from "react";

import { useCreateThreadMutation } from "../../api/assistantAPIs";
import { Logo } from "../../assets/Logo";
import { useAssistantThreadsStore } from "../../stores/assistantThreadsStore";
import useStoreWithLocalStorage from "../../stores/useStore";
import { useAssistantToaster } from "./AssistantToaster";

export const AssistantHeader: React.FC = () => {
  const threadStore = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state);
  const createThreadMutation = useCreateThreadMutation();
  const assistantToaster = useAssistantToaster();

  const handleCreateNewThread = (): void => {
    createThreadMutation.mutate(
      {},
      {
        onSuccess: (data: any) => {
          if (threadStore == null) return;
          threadStore.createAndSelectThread(data);
        },
        onError: (error) => {
          assistantToaster.push({
            message: error.message,
            variant: "error",
          });
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
