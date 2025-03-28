import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { DatePicker } from "@twilio-paste/date-picker";
import { Form, FormControl } from "@twilio-paste/form";
import { Heading } from "@twilio-paste/heading";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from "@twilio-paste/modal";
import { Popover, PopoverButton, PopoverContainer } from "@twilio-paste/popover";
import { Option, Select } from "@twilio-paste/select";
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
                <Input name="email" id={email} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={phone}>Phone Number</Label>
                <Input name="phone" id={phone} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={birthday}>Birthday</Label>
                <DatePicker name="birthday" id={birthday} />
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

export const InlineForms = (): JSX.Element => {
  const popoverID = useUID();
  const phone = useUID();
  const country = useUID();
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <PopoverContainer baseId={popoverID}>
        <PopoverButton variant="primary">Edit Phone Number</PopoverButton>
        <Popover aria-label="Popover" width="size40">
          <Form>
            <Heading as="h2" variant="heading40">
              Edit Phone Number
            </Heading>
            <FormControl>
              <Box>
                <Label htmlFor={phone}>Phone Number</Label>
                <Input name="phone" id={phone} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={country}>Country</Label>
                <Select id={country} name="country">
                  <Option value="in">India</Option>
                  <Option value="us">United States</Option>
                  <Option value="mx">Mexico</Option>
                  <Option value="ca">Canada</Option>
                  <Option value="br">Brazil</Option>
                  <Option value="ar">Argentina</Option>
                </Select>
              </Box>
            </FormControl>
          </Form>
          <Box marginTop="space130">
            <ButtonGroup>
              <Button onClick={() => {}} variant="primary">
                Save
              </Button>
              <Button onClick={() => {}} variant="secondary">
                Cancel
              </Button>
            </ButtonGroup>
          </Box>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

InlineForms.parameters = {
  padding: false,
};
