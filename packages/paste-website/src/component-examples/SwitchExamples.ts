export const basicSwitch = `
const SwitchExample = () => (
  <Switch name="settings" value="notifications">
    Notifications
  </Switch>
);

render(
  <SwitchExample />
)
`.trim();

export const helpTextSwitch = `
const SwitchExample = () => {
  return (
    <Switch value="privacy-program-enrollment" helpText={<Anchor href="#" showExternal>Read more about the program</Anchor>}>
      Enroll in Privacy Program
    </Switch>
  );
}

render(
  <SwitchExample />
)
`.trim();

export const requiredSwitch = `
const SwitchExample = () => {
  return (
    <Switch required value="newsletter-updates">Opt into newsletter updates</Switch>
  );
}

render(
  <SwitchExample />
)
`.trim();

export const disabledSwitch = `
const SwitchExample = () => {
  return (
    <Switch disabled helpText="Your account must have a verified email for this feature.">
      Enable email notifications
    </Switch>
  );
}

render(
  <SwitchExample />
)
`.trim();

export const onSwitch = `
const SwitchExample = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <Switch checked={checked} onChange={() => setChecked(!checked)}>
      Enable SMS notifications
    </Switch>
  );
}

render(
  <SwitchExample />
)
`.trim();

export const disabledOnSwitch = `
const SwitchExample = () => {
  return (
    <Switch checked disabled helpText="Your account must have a verified email for this feature.">
      Enroll in paperless notifications
    </Switch>
  )
}
render(
  <SwitchExample />
)
`.trim();

export const uncontrolledSwitch = `
const SwitchExample = () => {
  const switchRef = React.useRef(null);
  return (
    <Switch ref={switchRef} name="settings" value="notifications">
      Notifications
    </Switch>
  )
}

render(
  <SwitchExample />
)
`.trim();

export const controlledSwitch = `
const SwitchExample = () => {
  const [on, setOn] = React.useState(false);

  return (
    <Switch checked={on} onChange={() => setOn(!on)}>
      Notifications
    </Switch>
  )
}
render(
  <SwitchExample />
)
`.trim();

export const switchGroup = `
const SwitchExample = () => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);

  return (
    <SwitchGroup
      name="email-notifications"
      legend={
        <Text as="span" color="currentColor">
          Adjust your email notification settings
        </Text>
      }
      helpText={<Text as="span">To learn more about configurable settings, visit our <Anchor href="#">help center</Anchor>.</Text>}
    >
      <Switch
        value="marketing-updates"
        checked={checked1}
        onChange={() => {
          setChecked1(!checked);
        }}
        helpText={
          <Text as="span" color="currentColor">
            Periodic sales and promotions from our partners.
          </Text>
        }
      >
        Marketing emails
      </Switch>
      <Switch
        value="product-updates"
        checked={checked2}
        onChange={() => {
          setChecked2(!checked2);
        }}
        helpText="Get the latest news and updates about our products."
      >
        Product updates
      </Switch>
      <Switch
        value="account-updates"
        checked={checked3}
        onChange={() => {
          setChecked3(!checked3);
        }}
        helpText="Get the latest news and updates about your account."
      >
        Account updates
      </Switch>
    </SwitchGroup>
  );
}

render(
  <SwitchExample />
)
`.trim();

export const switchGroupInternationalized = `
const SwitchExample = () => {
  return (
    <SwitchGroup
      orientation="horizontal"
      name="days"
      legend="Jours préférés"
      i18nRequiredLabel="(requis)"
      required
    >
      <Switch value="monday">
        Lundi
      </Switch>
      <Switch value="tuesday">
        Mardi
      </Switch>
      <Switch value="wednesday">
        Mercredi
      </Switch>
      <Switch value="thursday">
        Jeudi
      </Switch>
      <Switch value="friday">
        Vendredi
      </Switch>
    </SwitchGroup>
  )
}

render(
  <SwitchExample />
)
`.trim();
