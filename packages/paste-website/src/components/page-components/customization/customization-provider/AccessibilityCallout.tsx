import { Anchor } from '@twilio-paste/anchor';
import { Callout, CalloutHeading, CalloutText } from '@twilio-paste/callout';

export const AccessibilityCallout = (): JSX.Element => {
  return (
    <Callout variant="warning" marginY="space70">
      <CalloutHeading as="h2">Need to check the accessibility of your colors?</CalloutHeading>
      <CalloutText>
        Checkout{' '}
        <Anchor href="https://www.aremycolorsaccessible.com" showExternal>
          aremycolorsaccessible.com
        </Anchor>{' '}
        to make sure your colors meet at least AA accessibility requirements.{' '}
        <Anchor href="https://accessibility.blog.gov.uk/2016/06/17/colour-contrast-why-does-it-matter/" showExternal>
          Read more about why this is important here
        </Anchor>
        .
      </CalloutText>
    </Callout>
  );
};
