import * as React from "react";
import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalHeading,
} from "@twilio-paste/modal";
import { NewIcon } from "@twilio-paste/icons/esm/NewIcon";
import { DarkModeFAQModal } from "./DarkModeFAQModal";
import { DarkModeBadgeButton } from "./DarkModeBadgeButton";

export const DarkModeBadge: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box display="flex" alignItems="center" marginLeft="space40">
      <DarkModeBadgeButton
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Stack orientation="horizontal" spacing="space20">
          New
          <NewIcon size="sizeIcon10" decorative={false} title="Find out more" />
        </Stack>
      </DarkModeBadgeButton>
      <Modal
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        size="wide"
        ariaLabelledby="dark-mode-modal"
      >
        <ModalHeader>
          <ModalHeading id="dark-mode-modal">Dark Mode FAQs</ModalHeading>
        </ModalHeader>
        <ModalBody>
          <DarkModeFAQModal />
        </ModalBody>
      </Modal>
    </Box>
  );
};
