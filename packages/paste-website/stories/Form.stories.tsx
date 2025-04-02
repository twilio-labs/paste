import { ErrorMessage } from "@hookform/error-message";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { Callout, CalloutHeading, CalloutList, CalloutListItem, CalloutText } from "@twilio-paste/callout";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHead,
  DataGridHeader,
  DataGridRow,
} from "@twilio-paste/data-grid";
import { DatePicker } from "@twilio-paste/date-picker";
import { Form, FormControl, FormSection, FormSectionDescription, FormSectionHeading } from "@twilio-paste/form";
import { Heading } from "@twilio-paste/heading";
import { HelpText } from "@twilio-paste/help-text";
import { ArrowBackIcon } from "@twilio-paste/icons/esm/ArrowBackIcon";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from "@twilio-paste/modal";
import {
  PageHeader,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderKeyword,
  PageHeaderParagraph,
  PageHeaderSetting,
} from "@twilio-paste/page-header";
import { Paragraph } from "@twilio-paste/paragraph";
import { Popover, PopoverButton, PopoverContainer } from "@twilio-paste/popover";
import {
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepSeparator,
  ProgressSteps,
} from "@twilio-paste/progress-steps";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import { Option, Select } from "@twilio-paste/select";
import { Separator } from "@twilio-paste/separator";
import { Text } from "@twilio-paste/text";
import { useUID, useUIDSeed } from "@twilio-paste/uid-library";
import type { JSX } from "react";
import * as React from "react";
import { UseFormRegister, useForm, useFormState } from "react-hook-form";

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
        Add new contact
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Add new contact
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormControl>
              <Box>
                <Label htmlFor={name}>Full name</Label>
                <Input name="name" id={name} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={email}>Email address</Label>
                <Input name="email" id={email} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={phone}>Phone number</Label>
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
        <PopoverButton variant="primary">Edit phone number</PopoverButton>
        <Popover aria-label="Popover" width="size40">
          <Form>
            <Heading as="h2" variant="heading40">
              Edit phone number
            </Heading>
            <FormControl>
              <Box>
                <Label htmlFor={phone}>Phone number</Label>
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
                <Label htmlFor={tax}>Tax number</Label>
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

type FormValues = {
  country: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};
const InputWithError = React.memo(
  ({
    id,
    label,
    placeholder,
    registerName,
    registerOptions,
    insertAfter,
    errors,
    register,
  }: {
    id: string;
    label: string;
    placeholder: string;
    registerName: keyof FormValues;
    registerOptions: any;
    insertAfter?: React.ReactNode;
    errors: Record<string, any>;
    register: UseFormRegister<FormValues>;
  }) => {
    return (
      <Box>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          type="text"
          placeholder={placeholder}
          {...register(registerName, registerOptions)}
          insertAfter={insertAfter ? insertAfter : undefined}
          hasError={!!errors[registerName]}
        />
        <ErrorMessage
          errors={errors}
          name={registerName}
          render={({ message }) => (
            <HelpText variant="error" id={id} data-cy={`${registerName}-error`}>
              {message}
            </HelpText>
          )}
        />
      </Box>
    );
  },
);

export const ErrorState = (): JSX.Element => {
  const { control, handleSubmit, register, setFocus } = useForm<FormValues>({
    defaultValues: {
      country: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    },
  });
  const { errors } = useFormState({ control });
  const seed = useUIDSeed();

  return (
    <Box maxWidth="608px" margin="auto" marginTop="space140">
      <Heading as="h1" variant="heading10">
        Main address
      </Heading>
      <Paragraph>
        This information will be used for taxation purposes. For US customers, this is your service address. For
        international customers, this is your permanent place of establishment (e.g. head office.)
      </Paragraph>
      {Object.keys(errors).length > 0 ? (
        <Callout variant="error">
          <CalloutHeading as="h4">Missing values</CalloutHeading>
          <CalloutText>Enter values for all required fields</CalloutText>
          <CalloutList as="ul">
            {Object.keys(errors).map((errorKey) => (
              <CalloutListItem key={errorKey}>
                <Button
                  variant="link"
                  onClick={() => {
                    setFocus(errorKey as keyof FormValues);
                  }}
                >
                  <Text as="span" fontWeight="fontWeightNormal" color="colorTextLink">
                    {errorKey}
                  </Text>
                </Button>
              </CalloutListItem>
            ))}
          </CalloutList>
        </Callout>
      ) : null}
      <Box marginTop="space50" maxWidth="296px">
        <Form>
          <InputWithError
            id={seed("country")}
            label="Country"
            placeholder="Enter country"
            registerName="country"
            registerOptions={{
              required: "Country is required",
            }}
            insertAfter={<SearchIcon color="colorTextIcon" decorative />}
            errors={errors}
            register={register}
          />
          <InputWithError
            id={seed("address")}
            label="Address line 1"
            placeholder="Enter address"
            registerName="address"
            registerOptions={{
              required: "Address is required",
            }}
            errors={errors}
            register={register}
          />
          <InputWithError
            id={seed("city")}
            label="City"
            placeholder="Enter city"
            registerName="city"
            registerOptions={{
              required: "City is required",
            }}
            errors={errors}
            register={register}
          />
          <InputWithError
            id={seed("state")}
            label="State"
            placeholder="Enter state"
            registerName="state"
            registerOptions={{
              required: "State is required",
            }}
            errors={errors}
            register={register}
          />
          <InputWithError
            id={seed("zip")}
            label="Zip code"
            placeholder="Enter zip code"
            registerName="zip"
            registerOptions={{
              required: "Zip code is required",
            }}
            errors={errors}
            register={register}
          />

          <Box>
            <Button
              variant="primary"
              onClick={() => {
                handleSubmit(() => {})();
                setTimeout(() => {
                  const firstError = Object.keys(errors)[0];
                  if (firstError) {
                    setFocus(firstError as keyof FormValues);
                  }
                }, 100);
              }}
            >
              Save
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

ErrorState.parameters = {
  padding: false,
};

export const ValidationOnSubmit = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>("");
  const [formState, setFormState] = React.useState<"default" | "loading" | "error" | "success">("default");
  const previousFormState = React.useRef<"default" | "error" | "success">("default");
  const vatID = useUID();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    previousFormState.current = formState === "loading" ? previousFormState.current : formState;
    setFormState("loading");

    setTimeout(() => {
      const vatRegex = /^[A-Z]{2}\d{9}$/;
      if (vatRegex.test(selectedValue || "")) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    }, 1000);
  }

  const helpTextContent = {
    default: "Use the following format: IEXXXXXXXXX",
    error: "Enter VAT in this format: IEXXXXXXXXX",
    success: "VAT number validated",
  };

  return (
    <Box maxWidth="size30" margin="auto" marginTop="space130">
      <Form>
        <FormControl>
          <Box>
            <Label htmlFor={vatID}>Enter a valid VAT number</Label>
            <Input
              name="vat"
              id={vatID}
              type="text"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            />
            <HelpText variant={formState === "loading" ? previousFormState.current : formState}>
              {formState === "loading" ? helpTextContent[previousFormState.current] : helpTextContent[formState]}
            </HelpText>
          </Box>
        </FormControl>
      </Form>
      <Box marginTop="space130">
        <Button variant="primary" loading={formState === "loading"} onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

ValidationOnSubmit.parameters = {
  padding: false,
};

export const ConfirmationForm = (): JSX.Element => {
  const TableComponent = () => {
    return (
      <DataGrid aria-label="Answer table">
        <DataGridHead>
          <DataGridRow>
            <DataGridHeader>Field name</DataGridHeader>
            <DataGridHeader>Answer</DataGridHeader>
            <DataGridHeader textAlign="right">Action</DataGridHeader>
          </DataGridRow>
        </DataGridHead>
        <DataGridBody>
          <DataGridRow>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell textAlign="right">
              <Button variant="link">Change</Button>
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell textAlign="right">
              <Button variant="link">Change</Button>
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell textAlign="right">
              <Button variant="link">Change</Button>
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell textAlign="right">
              <Button variant="link">Change</Button>
            </DataGridCell>
          </DataGridRow>
        </DataGridBody>
      </DataGrid>
    );
  };
  return (
    <Box display="flex" width="100%" justifyContent="center" paddingX="space10">
      <Box paddingTop="space130" paddingBottom="space160" width="size70" maxWidth="size80">
        <PageHeader>
          <PageHeaderSetting>
            <ProgressSteps>
              <ProgressStepComplete as="div">Label</ProgressStepComplete>
              <ProgressStepSeparator />
              <ProgressStepComplete as="div">Label</ProgressStepComplete>
              <ProgressStepSeparator />
              <ProgressStepCurrent as="div">Label</ProgressStepCurrent>
            </ProgressSteps>
          </PageHeaderSetting>
          <PageHeaderDetails>
            <PageHeaderKeyword>Confirmation</PageHeaderKeyword>
            <PageHeaderHeading>Check and confirm your answers</PageHeaderHeading>
            <PageHeaderParagraph>
              See all your selected answers below. You can also change them if you need to.
            </PageHeaderParagraph>
          </PageHeaderDetails>
        </PageHeader>
        <Box display="flex" flexDirection="column" rowGap="space130">
          <Box display="flex" flexDirection="column" rowGap="space130" role="list">
            <Form>
              <Box display="flex" role="listitem">
                <Box width="size10" flexShrink={0}>
                  <Text
                    as="span"
                    color="colorTextWeak"
                    fontWeight="fontWeightSemibold"
                    fontSize="fontSize60"
                    lineHeight="lineHeight60"
                  >
                    1
                  </Text>
                </Box>
                <Box width="100%">
                  <FormSection>
                    <FormSectionHeading variant="heading30">Step 1</FormSectionHeading>
                    <FormSectionDescription>Paragraph</FormSectionDescription>
                    <TableComponent />
                  </FormSection>
                </Box>
              </Box>
              <Box display="flex" role="listitem">
                <Box width="size10" flexShrink={0}>
                  <Text
                    as="span"
                    color="colorTextWeak"
                    fontWeight="fontWeightSemibold"
                    fontSize="fontSize60"
                    lineHeight="lineHeight60"
                  >
                    2
                  </Text>
                </Box>
                <Box width="100%">
                  <FormSection>
                    <FormSectionHeading variant="heading30">Step 2</FormSectionHeading>
                    <FormSectionDescription>Paragraph</FormSectionDescription>
                    <TableComponent />
                  </FormSection>
                </Box>
              </Box>
            </Form>
          </Box>
          <Box>
            <Separator orientation="horizontal" />
            <Box
              display="flex"
              justifyContent="space-between"
              columnGap="space40"
              marginTop="space50"
              alignItems="center"
            >
              <Button variant="secondary">
                <ArrowBackIcon decorative />
                Back
              </Button>
              <ButtonGroup>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Finish</Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
ConfirmationForm.parameters = {
  padding: false,
};
