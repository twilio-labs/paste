import * as React from "react";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalHeading,
} from "@twilio-paste/modal";
import { NewIcon } from "@twilio-paste/icons/esm/NewIcon";
import { DarkModeFAQModal } from "./DarkModeFAQModal";

export const DarkModeBadge: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box display="flex" alignItems="center" marginLeft="space40">
      <Badge
        as="button"
        variant="new"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        New
        <NewIcon size="sizeIcon10" decorative={false} title="Find out more" />
      </Badge>
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
