import * as React from 'react';
import {Callout, CalloutTitle, CalloutText} from '../../../callout';
import {InlineCode} from '../../../Typography';

export const ProgrammableAppsCallout: React.FC = () => {
  return (
    <Callout variant="warning">
      <CalloutTitle as="h2">Only for use in Programmable UIs such as Flex </CalloutTitle>
      <CalloutText>
        The <InlineCode>CustomizationProvider</InlineCode> should NOT be used unless you are providing a Programmable
        UI. Any non-programmable UI’s such as Twilio Console or SendGrid, should continue to use the Paste Theme
        Provider with the default theme.
      </CalloutText>
    </Callout>
  );
};
