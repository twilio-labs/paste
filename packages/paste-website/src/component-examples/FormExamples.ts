export const singleColumnForm = `
const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('address-heading')}>
      <Heading
        as="h3"
        variant="heading30"
        id={seed('address-heading')}
        marginBottom='space0'
      >
        Create new address
      </Heading>
      <FormControl>
        <Label htmlFor={seed('address-type')}>Address type</Label>
        <Select id={seed('address-type')} name="address-type">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
        </Select>
      </FormControl>
      <FormControl>
        <Label htmlFor={seed('friendly-name')}>Friendly name</Label>
        <Input
          type="text"
          id={seed('friendly-name')}
          name="friendly-name"
          placeholder="Add friendly name"
        />
      </FormControl>
      <FormControl>
        <RadioGroup
          legend="Address implementation"
          name="address-implementation"
        >
          <Radio
            value="conversations"
            helpText="Supports both inbound and outbound SMS and attachments."
          >
            Conversations
          </Radio>
          <Radio
            value="legacy"
            helpText="Supports inbound SMS."
          >
            Legacy
          </Radio>
        </RadioGroup>
      </FormControl>
      <FormActions>
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim();

export const twoColumnForm = `
const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('date-time-heading')}>
      <Heading as="h3" variant="heading30" id={seed('date-time-heading')} marginBottom='space0'>
        Custom date/time range
      </Heading>
      <Paragraph marginBottom="space0">
        All dates/times in UTC. Usage data available up to 7 days.
      </Paragraph>
      <FormControlTwoColumn>
        <FormControl>
          <Label htmlFor={seed('start-date')}>
            Start date
          </Label>
          <DatePicker id={seed('start-date')}/>
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('end-date')}>
            End date
          </Label>
          <DatePicker id={seed('end-date')}/>
        </FormControl>
      </FormControlTwoColumn>
      <FormControlTwoColumn>
        <FormControl>
          <Label htmlFor={seed('start-time')}>
            Start time
          </Label>
          <TimePicker id={seed('start-time')}/>
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('end-time')}>
            End time
          </Label>
          <TimePicker id={seed('end-time')}/>
        </FormControl>
      </FormControlTwoColumn>
      <FormActions>
        <Button variant="primary">Apply</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim();

export const horizontalForm = `
const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('access-profile-heading')}>
      <Heading
        as="h3"
        variant="heading30"
        id={seed('access-profile-heading')}
        marginBottom='space0'
      >
        Choose Network Access Profile
      </Heading>
      <Paragraph marginBottom="space0">
        Network Access Profile specifies what networks your SIM's would connect to and how you will be billed.
      </Paragraph>
      <FormControl>
        <CheckboxGroup
          legend="Select number type"
          name="number-type"
          orientation="horizontal"
        >
          <Checkbox checked value="local">Local</Checkbox>
          <Checkbox value="mobile">Mobile</Checkbox>
          <Checkbox value="toll-free">Toll-free</Checkbox>
        </CheckboxGroup>
      </FormControl>
      <FormControl>
        <RadioGroup
          legend="Select payment method"
          name="payment-method"
          orientation="horizontal"
        >
          <Radio value="cc">Credit card</Radio>
          <Radio value="pp">PayPal</Radio>
          <Radio value="dd">Direct deposit</Radio>
        </RadioGroup>
      </FormControl>
      <FormActions>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim();

export const sectionsForm = `
const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('alarm-heading')}>
      <Heading
        as="h3"
        variant="heading30"
        id={seed('alarm-heading')}
        marginBottom='space0'
      >
        Create alarm
      </Heading>
      <Paragraph marginBottom="space0">
        Use alarms to get alerted to important events happening with your account.
      </Paragraph>
      <FormSection>
        <FormSectionHeading>
          Step 1
        </FormSectionHeading>
        <FormSectionDescription>
          Name your alarm and select the error code you’d like to set an alarm. Use the historical trend graph for reference.
        </FormSectionDescription>
        <FormControl>
          <Label htmlFor={seed('alarm-name')}>Alarm name</Label>
          <Input
            type="text"
            id={seed('alarm-name')}
            aria-describedby={seed('alarm-help-text')}
          />
          <HelpText id={seed('alarm-help-text')}>
            Consider a recognizable name related to its use case.
          </HelpText>
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('error-code')}>Select error code</Label>
          <Input
            id={seed('error-code')}
            type="text"
            value="11200 - HTTP retrieval failure"
            insertAfter={
              <SearchIcon color="colorTextIcon" decorative/>
            }
          />
        </FormControl>
      </FormSection>
      <Separator orientation="horizontal"/>
      <FormSection>
        <FormSectionHeading>
          Step 2
        </FormSectionHeading>
        <FormSectionDescription>
          Determine when the alarm should be activated.
        </FormSectionDescription>
        <FormControl>
          <Label htmlFor={seed('num-errors')}>
            Number of errors
          </Label>
          <Input
            type="text"
            id={seed('num-errors')}
            value="20"
          />
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('time-period')}>
            Time period
          </Label>
          <Select id={seed('time-period')}>
            <Option value="minute">Every minute</Option>
            <Option value="hour">Every hour</Option>
            <Option value="day">Every day</Option>
          </Select>
        </FormControl>
      </FormSection>
      <FormActions>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim();

export const formActionsExample = `
const FormActionsExample = () => {
  return (
    <FormActions>
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
    </FormActions>
  );
}

render(
  <FormActionsExample />
)
`.trim();

export const errorExample = `
const statesList = [
  {value: 'AK', name: 'Alaska'},
  {value: 'AL', name: 'Alabama'},
  {value: 'AZ', name: 'Arizona'},
  {value: 'CA', name: 'California'},
  {value: 'CO', name: 'Colorado'},
  {value: 'CT', name: 'Connecticut'},
  {value: 'ID', name: 'Idaho'},
  {value: 'IL', name: 'Illinois'},
  {value: 'IN', name: 'Indiana'},
  {value: 'KS', name: 'Kansas'},
  {value: 'KY', name: 'Kentucky'},
  {value: 'LA', name: 'Louisiana'},
  {value: 'MN', name: 'Minnesota'},
  {value: 'MO', name: 'Missouri'},
  {value: 'MS', name: 'Mississippi'},
  {value: 'MT', name: 'Montana'},
];

const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('settings-heading')}>
      <Heading
        id={seed('settings-heading')}
        variant="heading30"
        marginBottom="space0"
      >
        Settings
      </Heading>
      <Callout variant="error">
        <CalloutHeading as="h4">
          These fields are missing values:
        </CalloutHeading>
        <CalloutList as="ul">
          <CalloutListItem>Street address</CalloutListItem>
          <CalloutListItem>Zip code</CalloutListItem>
          <CalloutListItem>Email address</CalloutListItem>
        </CalloutList>
      </Callout>
      <FormControl>
        <Label htmlFor={seed('street-address')} required>
          Street address
        </Label>
        <Input
          id={seed('street-address')}
          type="text"
          hasError
          required
          aria-describedby={seed('street-address-error')}
        />
        <HelpText variant="error" id={seed('street-address-error')}>
          Enter a street address.
        </HelpText>
      </FormControl>
      <FormControlTwoColumn>
        <FormControl>
          <Label htmlFor={seed('state')}>State</Label>
          <Select id={seed('state')}>
            {statesList.map(({value, name}) => (
              <Option value={value} key={value}>
                {name}
              </Option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('zip')} required>
            Zip code
          </Label>
          <Input id={seed('zip')} aria-describedby={seed('zip-error')} type="text" hasError required />
          <HelpText variant="error" id={seed('zip-error')}>
            Enter a zip code.
          </HelpText>
        </FormControl>
      </FormControlTwoColumn>
      <FormControl>
        <Label htmlFor={seed('email')} required>
          Email address
        </Label>
        <Input
          id={seed('email')}
          aria-describedby={seed('email-error')}
          type="email"
          hasError
          required
          value="email@xyz.yxz"
        />
        <HelpText variant="error" id={seed('email-error')}>
          Enter an email address.
        </HelpText>
      </FormControl>
      <FormActions>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim();

export const maxWidthForm = `
const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('address-heading')} maxWidth="size30">
      <Heading
        as="h3"
        variant="heading30"
        id={seed('address-heading')}
        marginBottom='space0'
      >
        Create new address
      </Heading>
      <FormControl>
        <Label htmlFor={seed('address-type')}>Address type</Label>
        <Select id={seed('address-type')} name="address-type">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
        </Select>
      </FormControl>
      <FormControl>
        <Label htmlFor={seed('friendly-name')}>Friendly name</Label>
        <Input
          type="text"
          id={seed('friendly-name')}
          name="friendly-name"
          placeholder="Add friendly name"
        />
      </FormControl>
      <FormControl>
        <RadioGroup
          legend="Address implementation"
          name="address-implementation"
        >
          <Radio
            value="conversations"
            helpText="Supports both inbound and outbound SMS and attachments."
          >
            Conversations
          </Radio>
          <Radio
            value="legacy"
            helpText="Supports inbound SMS."
          >
            Legacy
          </Radio>
        </RadioGroup>
      </FormControl>
      <FormActions>
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim();

export const InterruptiveFormsExample = `
const FormExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();
  const name = useUID();
  const email = useUID();
  const phone = useUID();
  const birthday = useUID();
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="300px">
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

render(
  <FormExample />
)`.trim();

export const InlineFormsExample = `
const FormExample = () => {
  const popoverID = useUID();
  const phone = useUID();
  const country = useUID();
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="300px">
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

render(
  <FormExample />
)`.trim();

export const ConditionalFormsExample = `
const FormExample = () => {
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

render(
  <FormExample />
)`.trim();

export const InlineValidationFormsExample = `
const FormExample = () => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);
  const password = useUID();
  const isFourCharacter = selectedValue?.length >= 4;
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

render(
  <FormExample />
)`.trim();

export const ErrorStateFormExample = `
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
            <HelpText variant="error" id={id}>
              {message}
            </HelpText>
          )}
        />
      </Box>
    );
  },
);
const FormExample = () => {
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
          <CalloutHeading as="h4">Missing Values</CalloutHeading>
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

render(
  <FormExample />
)`.trim();

export const ValidationOnSubmitFormsExample = `
const FormExample = () => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>("");
  const [formState, setFormState] = React.useState<"default" | "loading" | "error" | "success">("default");
  const previousFormState = React.useRef<"default" | "error" | "success">("default");
  const vatID = useUID();
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    previousFormState.current = formState === "loading" ? previousFormState.current : formState;
    setFormState("loading");
    setTimeout(() => {
      const vatRegex = /^[A-Z]{2}\\d{9}$/;
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

render(
  <FormExample />
)`.trim();
