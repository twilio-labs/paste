import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { DatePicker } from "@twilio-paste/date-picker";
import { Form, FormControl } from "@twilio-paste/form";
import { Heading } from "@twilio-paste/heading";
import { HelpText } from "@twilio-paste/help-text";
import { ArrowBackIcon } from "@twilio-paste/icons/esm/ArrowBackIcon";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from "@twilio-paste/modal";
import { Paragraph } from "@twilio-paste/paragraph";
import { Popover, PopoverButton, PopoverContainer } from "@twilio-paste/popover";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import { Option, Select } from "@twilio-paste/select";
import { Stack } from "@twilio-paste/stack";
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

export const ConditionalForm = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);
  const tax = useUID();
  return (
    <Box display="flex" justifyContent="center" marginTop="space130">
      <Box maxWidth="712px">
        <Heading as="h1" variant="heading10">
          Tax information
        </Heading>
        <Paragraph marginBottom="space0">
          Based on your jurisdiction, Twilio may need to collect tax on the services sold, in order to abide by local
          laws. Please provide your tax number so that we can apply this correctly to your invoice
        </Paragraph>

        <Box marginTop="space130">
          <RadioGroup
            name="uncontrolled-radio-group"
            legend="Can you provide a business tax number?"
            value={selectedValue}
            onChange={setSelectedValue}
          >
            <Radio id={useUID()} value="yes" name="uncontrolled-radio-group">
              Yes, I can provide a tax number
            </Radio>
            {selectedValue === "yes" ? (
              <Box paddingLeft="space70">
                <Label htmlFor={tax}>Tax Number</Label>
                <Input name="tax" id={tax} type="text" />
              </Box>
            ) : null}
            <Radio id={useUID()} value="no" name="uncontrolled-radio-group">
              No, I cannot provide a tax number
            </Radio>
          </RadioGroup>
        </Box>

        <Box marginTop="space130" display="flex" justifyContent="space-between" columnGap="space40" alignItems="center">
          <Button variant="secondary">
            <ArrowBackIcon decorative />
            Back
          </Button>
          <Button variant="primary" disabled={selectedValue === undefined}>
            Next <ArrowForwardIcon decorative />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

ConditionalForm.parameters = {
  padding: false,
};

export const InlineValidationForm = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);
  const password = useUID();
  const isFourCharacter = (selectedValue?.length as number) >= 4;
  const hasNumber = /\d/.test(selectedValue || "");
  const hasUppercase = /[A-Z]/.test(selectedValue || "");
  return (
    <Box maxWidth="size30" margin="auto" marginTop="space130">
      <Box>
        <Label htmlFor={password}>Password</Label>
        <Input
          name="password"
          id={password}
          type="password"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
      </Box>
      <HelpText variant={isFourCharacter ? "success" : "default"}>Atleast 4 character</HelpText>
      <HelpText variant={hasNumber ? "success" : "default"}>Atleast 1 number</HelpText>
      <HelpText variant={hasUppercase ? "success" : "default"}>Atleast 1 uppercase</HelpText>
    </Box>
  );
};

InlineValidationForm.parameters = {
  padding: false,
};
