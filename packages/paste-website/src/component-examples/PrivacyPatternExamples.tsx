import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';

export const PrivacyExample = `
<>
  <Label htmlFor="input">Friendly name</Label>
  <Input id="input" type="text" aria-describedby="help-text" value="My favorite service" />
  <HelpText id="help-text">
    Avoid entering{' '}
    <Anchor
      href="https://www.twilio.com/docs/glossary/what-is-personally-identifiable-information-pii"
      showExternal
    >
      personal data
    </Anchor>{' '}
    like your name, email address, or phone number.
  </HelpText>
</>
`.trim();

export const FriendlyName = `
<>
  <Heading as="h2" variant='heading20'>Create new service</Heading>
  <Label htmlFor="input">Friendly name</Label>
  <Input id="input" type="text" aria-describedby="help-text" value="My favorite service" />
  <HelpText id="help-text">
    Avoid entering{' '}
    <Anchor
      href="https://www.twilio.com/docs/glossary/what-is-personally-identifiable-information-pii"
      showExternal
    >
      personal data
    </Anchor>{' '}
    like your name, email address, or phone number.
  </HelpText>
  <Box marginTop="space60">
    <Button variant='primary'>Create</Button>
  </Box>
</>
`.trim();

export const WithHelpText = `
<>
  <Label htmlFor="input">Friendly name</Label>
  <Input id="input" type="text" aria-describedby="help-text" value="My favorite service" />
  <HelpText id="help-text">
    This is the name the end user sees in your Verify message. Avoid entering{' '}
    <Anchor
      href="https://www.twilio.com/docs/glossary/what-is-personally-identifiable-information-pii"
      showExternal
    >
      personal data
    </Anchor>{' '}
    like your name, email address, or phone number.
  </HelpText>
</>`.trim();

export const WithErrorText = `
const hasError = true

const PrivacyPatternError = () => {
  return (
    <>
      <Label htmlFor="input">Friendly name</Label>
      <Input id="input" type="text" aria-describedby="help-text" value="Service #3" />
      {hasError ? <HelpText variant='error' id="help-text">Friendly name cannot contain special characters.</HelpText>
        :
        <>
          <HelpText id="help-text">
            This is the name the end user sees in your Verify message. Avoid entering{' '}
            <Anchor
              href="https://www.twilio.com/docs/glossary/what-is-personally-identifiable-information-pii"
              showExternal
            >
              personal data
            </Anchor>{' '}
            like your name, email address, or phone number.
          </HelpText>
        </>}
    </>
  );
};

render(<PrivacyPatternError />)
`.trim();

export const dontText = `Update the copy specific to a particular field as that may encourage inconsistencies across the customer experience. If the default copy doesn’t work for your use case, please ${(
  <Anchor href="https://github.com/twilio-labs/paste/discussions">create a GitHub Discussion</Anchor>
)} to discuss adding a new variant.`;
