import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Callout, CalloutTitle, CalloutText} from '../../../callout';

export const AccessibilityCallout: React.FC = () => {
  return (
    <Callout variant="warning">
      <CalloutTitle as="h2">Need to check the accessibility of your colors?</CalloutTitle>
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
