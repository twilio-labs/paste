import { Box } from "@twilio-paste/box";
import { Modal, ModalBody, ModalHeader, ModalHeading, type ModalProps } from "@twilio-paste/modal";
import * as React from "react";

type SearchModal = Pick<ModalProps, "isOpen" | "onDismiss" | "initialFocusRef" | "ariaLabelledby"> & {
  children: NonNullable<React.ReactNode>;
};
export const SearchModal: React.FC<React.PropsWithChildren<SearchModal>> = ({
  isOpen,
  ariaLabelledby,
  onDismiss,
  initialFocusRef,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      ariaLabelledby={ariaLabelledby}
      size="default"
      onDismiss={onDismiss}
      initialFocusRef={initialFocusRef}
    >
      <ModalHeader>
        <ModalHeading as="h3" id={ariaLabelledby}>
          <Box display="flex" alignItems="center" columnGap="space30">
            Search documentation and discussions
          </Box>
        </ModalHeading>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};
