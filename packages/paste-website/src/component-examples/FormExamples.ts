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
