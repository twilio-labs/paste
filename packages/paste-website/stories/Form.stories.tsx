import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { DatePicker } from "@twilio-paste/date-picker";
import { Form, FormControl } from "@twilio-paste/form";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from "@twilio-paste/modal";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";
import type { JSX } from "react";

export default {
  title: "Website/FormExamples",
};

export const InterruptiveForms = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();
  const name = useUID();
  const email = useUID();
  const phone = useUID();
  const birthday = useUID();
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Button variant="primary" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Add New Contact
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormControl>
              <Box>
                <Label htmlFor={name}>Full Name</Label>
                <Input name="name" id={name} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={email}>Email Address</Label>
                <Input name="name" id={email} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={phone}>Phone Number</Label>
                <Input name="name" id={phone} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={birthday}>Birthday</Label>
                <DatePicker name="name" id={birthday} />
              </Box>
            </FormControl>
          </Form>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Save</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </Box>
  );
};

InterruptiveForms.parameters = {
  padding: false,
};
