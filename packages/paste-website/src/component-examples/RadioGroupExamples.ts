export const verticalExample = `
const CampaignRadioGroup = () => {
  const [value, setValue] = React.useState();
  return (
    <RadioGroup
      name="campaign"
      value={value}
      legend="When should your campaign run?"
      helpText="We recommend at least two weeks."
      onChange={newValue => {
        setValue(newValue);
      }}
    >
      <Radio
        id="ongoing"
        value="ongoing"
        name="campaign"
      >
        Run my ads as ongoing
      </Radio>
      <Radio
        id="enddate"
        value="enddate"
        name="campaign"
      >
        Set a start and end date
      </Radio>
    </RadioGroup>
  );
};

render(
  <CampaignRadioGroup />
)
`.trim();

export const disabledPreSelectedExample = `
const AccountRadioGroup = () => {
  const [value, setValue] = React.useState('accountSid');
  return (
    <RadioGroup
      name="account"
      value={value}
      legend="How should we identify your account?"
      onChange={newValue => {
        setValue(newValue);
      }}
    >
      <Radio
        id="accountSid"
        value="accountSid"
        name="account"
      >
        Account SID
      </Radio>
      <Radio
        id="messageSid"
        value="messageSid"
        name="account"
      >
        Message SID
      </Radio>
    </RadioGroup>
  );
};

render(
  <AccountRadioGroup />
)
`.trim();

export const horizontalExample = `
const PaymentMethodRadioGroup = () => {
  const [value, setValue] = React.useState('credit');
  return (
    <RadioGroup
      name="payment"
      value={value}
      legend="Select payment method"
      onChange={newValue => {
        setValue(newValue);
      }}
      orientation="horizontal"
    >
      <Radio
        id="credit"
        value="credit"
        name="payment"
      >
        Credit Card
      </Radio>
      <Radio
        id="paypal"
        value="paypal"
        name="payment"
      >
        PayPal
      </Radio>
    </RadioGroup>
  );
};

render(
  <PaymentMethodRadioGroup />
)
`.trim();

export const defaultExample = `
const NetworkRadioGroup = () => {
  const [value, setValue] = React.useState('lowest');
  return (
    <RadioGroup
      name="network"
      value={value}
      legend="Choose Network Access Profile"
      helpText="Network Access Profile specifies what networks your SIM's would connect to and how you will be billed."
      onChange={newValue => {
        setValue(newValue);
      }}
    >
      <Radio
        id="lowest"
        value="lowest"
        name="network"
      >
        Select lowest priced networks globally
      </Radio>
      <Radio
        id="existing"
        value="existing"
        name="network"
      >
        Select existing network access profile
      </Radio>
      <Radio
        id="new"
        value="new"
        name="network"
      >
        Create new network access profile
      </Radio>
    </RadioGroup>
  );
};

render(
  <NetworkRadioGroup />
)
`.trim();

export const requiredExample = `
const SslRadioGroup = () => {
  const [value, setValue] = React.useState('on');
  return (
    <RadioGroup
      name="ssl"
      value={value}
      legend="SSL Certificate Validation"
      helpText="Determines if certificate validation is performed on all Twilio originated requests."
      onChange={newValue => {
        setValue(newValue);
      }}
      required
    >
      <Radio
        id="on"
        value="on"
        name="ssl"
      >
        Validation on
      </Radio>
      <Radio
        id="off"
        value="off"
        name="ssl"
      >
        Validation off
      </Radio>
    </RadioGroup>
  );
};

render(
  <SslRadioGroup />
)
`.trim();

export const errorExample = `
const CriteriaRadioGroup = () => {
  const [value, setValue] = React.useState();
  return (
    <RadioGroup
      name="exit"
      value={value}
      legend="Exit Criteria"
      errorText="Select an exit criteria."
      onChange={newValue => {
        setValue(newValue);
      }}
    >
      <Radio
        id="automation"
        value="automation"
        name="exit"
      >
        Contact have received all emails in the automation.
      </Radio>
      <Radio
        id="entry"
        value="entry"
        name="exit"
      >
        Contacts no longer meet entry criteria
      </Radio>
    </RadioGroup>
  );
};

render(
  <CriteriaRadioGroup />
)
`.trim();

export const disabledExample = `
const DisabledRadio = () => {
  const [value, setValue] = React.useState('disabled_automation');
  return (
    <RadioGroup
      name="disabled_exit"
      value={value}
      legend="Exit Criteria"
      onChange={newValue => {
        setValue(newValue);
      }}
      disabled
    >
      <Radio
        id="disabled_automation"
        value="disabled_automation"
        name="disabled_exit"
      >
        Contact have received all emails in the automation.
      </Radio>
      <Radio
        id="disabled_entry"
        value="disabled_entry"
        name="disabled_exit"
      >
        Contacts no longer meet entry criteria
      </Radio>
    </RadioGroup>
  );
};

render(
  <DisabledRadio />
)
`.trim();

export const i18nExample = `
const PaymentMethodRadioGroup = () => {
  const [value, setValue] = React.useState('credit');
  return (
    <RadioGroup
      name="payment"
      value={value}
      legend="Choisissez votre mode de paiement"
      onChange={newValue => {
        setValue(newValue);
      }}
      required
      i18nRequiredLabel="(requis)"
    >
      <Radio
        id="credit"
        value="credit"
        name="payment"
      >
        Carte de crédit
      </Radio>
      <Radio
        id="paypal"
        value="paypal"
        name="payment"
      >
        PayPal
      </Radio>
    </RadioGroup>
  );
};

render(
  <PaymentMethodRadioGroup />
)
`.trim();

export const uncontrolledRadioGroup = `
const NetworkRadioGroup = () => {
  return (
    <RadioGroup
      name="uncontrolled-radio-group"
      legend="Choose Network Access Profile"
      helpText="Network Access Profile specifies what networks your SIM's would connect to and how you will be billed."
    >
      <Radio
        id={useUID()}
        value="lowest"
        name="uncontrolled-radio-group"
      >
        Select lowest priced networks globally
      </Radio>
      <Radio
        id={useUID()}
        value="existing"
        name="uncontrolled-radio-group"
      >
        Select existing network access profile
      </Radio>
      <Radio
        id={useUID()}
        value="new"
        name="uncontrolled-radio-group"
        defaultChecked
      >
        Create new network access profile
      </Radio>
    </RadioGroup>
  );
};

render(
  <NetworkRadioGroup />
)
`.trim();

export const controlledRadioGroup = `
const NetworkRadioGroup = () => {
  const [value, setValue] = React.useState('lowest');
  return (
    <RadioGroup
      name="controlled-radio-group"
      legend="Choose Network Access Profile"
      helpText="Network Access Profile specifies what networks your SIM's would connect to and how you will be billed."
      value={value}
      onChange={newValue => {
        setValue(newValue);
      }}
    >
      <Radio
        id={useUID()}
        value="lowest"
        name="controlled-radio-group"
      >
        Select lowest priced networks globally
      </Radio>
      <Radio
        id={useUID()}
        value="existing"
        name="controlled-radio-group"
      >
        Select existing network access profile
      </Radio>
      <Radio
        id={useUID()}
        value="new"
        name="controlled-radio-group"
      >
        Create new network access profile
      </Radio>
    </RadioGroup>
  );
};

render(
  <NetworkRadioGroup />
)
`.trim();
