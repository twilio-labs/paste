export const singleCheckboxExample = `
const SingleCheckbox = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <Checkbox
      checked={checked}
      id="blm"
      value="blm"
      name="blm"
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Black lives matter
    </Checkbox>
  );
};

render(
  <SingleCheckbox />
)
`.trim();

export const helpTextCheckboxExample = `
const CheckboxHelpText = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <Checkbox
      id="enabled"
      value="enabled"
      name="enabled"
      helpText="Determines if certificate validation is performed on all Twilio originated requests"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Enable SSL Certificate Validation
    </Checkbox>
  );
};

render(
  <CheckboxHelpText />
)
`.trim();

export const requiredCheckboxExample = `
const RequiredCheckbox = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <Checkbox
      id="delete"
      value="delete"
      name="delete"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
      required
    >
      Confirm this message should be deleted
    </Checkbox>
  );
};

render(
  <RequiredCheckbox />
)
`.trim();

export const checkboxDisclaimerExample = `
const CheckboxDisclaimerText = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <CheckboxDisclaimer
      id="disclaimer"
      value="disclaimer"
      name="disclaimer"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      <Text as="span">
        I declare the information provided above is accurate. I acknowledge that Twilio will process the information provided above for the purpose of identity verification, and will be sharing it with my local telecomm providers or authorities where required by local law. I understand that Twilio phone numbers may be taken out of service for inaccurate or false information.
      </Text>
    </CheckboxDisclaimer>
  );
};

render(
  <CheckboxDisclaimerText />
)
`.trim();

export const defaultExample = `
const ActiveDesktopClients = () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const handleChange1 = (event) => setChecked1(event.target.checked);
  const handleChange2 = (event) => setChecked2(event.target.checked);

  return (
    <CheckboxGroup
      name="desktop"
      legend="Select the clients you would like to test."
    >
      <Checkbox id="apple_mail" value="apple_mail" checked={checked1 === true} onChange={handleChange1}>
        Apple Mail
      </Checkbox>
      <Checkbox id="outlook" value="outlook" checked={checked2 === true} onChange={handleChange2}>
        Outlook
      </Checkbox>
    </CheckboxGroup>
  );
};

render(
  <ActiveDesktopClients />
)
`.trim();

export const helpTextExample = `
const AdPartners = () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const handleChange1 = (event) => setChecked1(event.target.checked);
  const handleChange2 = (event) => setChecked2(event.target.checked);

  return (
    <CheckboxGroup
      name="ad_partners"
      legend="Which ad partnes would you like to advertise on?"
      helpText="Select at least 1 ad partner to create a campaign."
    >
      <Checkbox
        checked={checked1 === true}
        onChange={handleChange1}
        id="facebook"
        value="facebook"
        helpText={
          <Text as="span" color="currentColor">
            Questions? <Anchor href="http://paste.twilio.com">Click here to learn more</Anchor>.
          </Text>
        }
      >
        Facebook
      </Checkbox>
      <Checkbox
        checked={checked2 === true}
        onChange={handleChange2}
        id="instagram"
        value="instagram"
        helpText={
          <Text as="span" color="currentColor">
            Questions? <Anchor href="http://paste.twilio.com">Click here to learn more</Anchor>.
          </Text>
        }
      >
        Outlook
      </Checkbox>
    </CheckboxGroup>
  );
};

render(
  <AdPartners />
)
`.trim();

export const indeterminateExample = `
const Results = () => {
  const [checkedItems, setCheckedItems] = React.useState([true, false]);

  const allChecked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;

  const checkboxRef = React.createRef();

  return (
    <CheckboxGroup isSelectAll name="results" legend="Include in Results">
      <Checkbox
        id="select_all"
        checked={allChecked}
        indeterminate={indeterminate}
        ref={checkboxRef}
        onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Select all
      </Checkbox>
      <Checkbox
        id="identity"
        checked={checkedItems[0]}
        onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
      >
        Identity Carrier
      </Checkbox>
      <Checkbox
        id="caller_name"
        checked={checkedItems[1]}
        onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
      >
        Caller Name
      </Checkbox>
    </CheckboxGroup>
  );
};

render(
  <Results />
)
`.trim();

export const errorExample = `
const APIPermissions = () => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);

  return (
    <CheckboxGroup
      name="api"
      legend="API Key Permissions"
      errorText="Please select at least one option."
    >
      <Checkbox
        id="full_access"
        value="full_access"
        checked={checked1}
        onChange={(event) => {
          setChecked1(event.currentTarget.checked);
        }}
      >
        Full Access
      </Checkbox>
      <Checkbox
        id="restricted_access"
        value="restricted_access"
        checked={checked2}
        onChange={(event) => {
          setChecked2(event.currentTarget.checked);
        }}
      >
        Restricted Access
      </Checkbox>
    </CheckboxGroup>
  );
};

render(
  <APIPermissions />
)
`.trim();

export const requiredExample = `
const EmailNotifications = () => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  return (
    <CheckboxGroup
      name="email"
      legend="Email Notifications"
      helpText="We can remind yuou when one of your Buffer is looking a little empty."
      required
    >
      <Checkbox
        id="empty_buffer"
        value="empty_buffer"
        checked={checked1}
        onChange={(event) => {
          setChecked1(event.currentTarget.checked);
        }}
      >
        Empty Buffer
      </Checkbox>
      <Checkbox
        id="newsletter"
        value="newsletter"
        checked={checked2}
        onChange={(event) => {
          setChecked2(event.currentTarget.checked);
        }}
      >
        Newsletter
      </Checkbox>
      <Checkbox
        id="update_failures"
        value="update_failures"
        checked={checked3}
        onChange={(event) => {
          setChecked3(event.currentTarget.checked);
        }}
      >
        Update Failures
      </Checkbox>
    </CheckboxGroup>
  );
};

render(
  <EmailNotifications />
)
`.trim();

export const disabledExample = `
const Capabilities = () => {
  return (
    <CheckboxGroup
      name="capabilities"
      legend="Capabilities"
      orientation="horizontal"
      disabled
    >
      <Checkbox id="voice" value="voice">
        Voice
      </Checkbox>
      <Checkbox id="fax" value="fax">
        Fax
      </Checkbox>
      <Checkbox id="sms" value="sms">
        SMS
      </Checkbox>
    </CheckboxGroup>
  );
};

render(
  <Capabilities />
)
`.trim();
