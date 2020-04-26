export const defaultExample = `
const ActiveDesktopClients = () => {
  return (
    <CheckboxGroup
      name="desktop"
      legend="Select the clients you would like to test."
    >
      <Checkbox id="apple_mail" value="apple_mail">
        Apple Mail
      </Checkbox>
      <Checkbox id="outlook" value="outlook">
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
  return (
    <CheckboxGroup
      name="ad_partners"
      legend="Which ad partnes would you like to advertise on?"
      helpText="Select at least 1 ad partner to create a campaign."
    >
      <Checkbox
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
  return (
    <CheckboxGroup
      name="api"
      legend="API Key Permissions"
      errorText="Please select at least one option."
    >
      <Checkbox id="full_access" value="full_access">
        Full Access
      </Checkbox>
      <Checkbox id="restricted_access" value="restricted_access">
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
  return (
    <CheckboxGroup
      name="email"
      legend="Email Notifications"
      helpText="We can remind yuou when one of your Buffer is looking a little empty."
      required
    >
      <Checkbox id="empty_buffer" value="empty_buffer">
        Empty Buffer
      </Checkbox>
      <Checkbox id="newsletter" value="newsletter">
        Newsletter
      </Checkbox>
      <Checkbox id="update_failures" value="update_failures">
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
