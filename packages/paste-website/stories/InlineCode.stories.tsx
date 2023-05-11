import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Callout, CalloutHeading, CalloutText} from '@twilio-paste/callout';
import {InlineCode} from '@twilio-paste/inline-code';

export const RegularInline = (): React.ReactNode => <InlineCode>string</InlineCode>;

export const AnchorInline = (): React.ReactNode => (
  <Anchor href="#">
    <InlineCode>string</InlineCode>
  </Anchor>
);

export const ExternalAnchorInline = (): React.ReactNode => (
  <Anchor href="#" showExternal>
    <InlineCode>string</InlineCode>
  </Anchor>
);

export const InParagraphInline = (): React.ReactNode => (
  <Box width="400px">
    <Callout variant="neutral" marginY="space70">
      <CalloutHeading as="h4">Remember!</CalloutHeading>
      <CalloutText>
        Provide the Avatar with an <InlineCode>icon</InlineCode> prop to display <InlineCode> an icon</InlineCode>. You
        must import the <InlineCode>icon</InlineCode>
        before passing it to the <InlineCode>icon</InlineCode> prop. You must still provide a{' '}
        <InlineCode>name</InlineCode> prop. The icon must be a Paste icon.
      </CalloutText>
    </Callout>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Website/Inline-Code',
  component: RegularInline,
};
