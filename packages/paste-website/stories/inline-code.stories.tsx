import * as React from 'react';
import {Anchor} from '@twilio-paste/core/anchor';
import {Box} from '@twilio-paste/core/box';
import {InlineCode} from '../src/components/Typography';
import {Callout, CalloutText, CalloutTitle} from '../src/components/callout';

export const RegularInline = (): React.ReactNode => <InlineCode>string</InlineCode>;

export const AnchorInline = (): React.ReactNode => (
  <InlineCode>
    <Anchor href="#">string</Anchor>
  </InlineCode>
);

export const ExternalAnchorInline = (): React.ReactNode => (
  <InlineCode>
    <Anchor href="#" showExternal>
      string
    </Anchor>
  </InlineCode>
);

export const InParagraphInline = (): React.ReactNode => (
  <Box width="400px">
    <Callout>
      <CalloutTitle as="h4">Remember!</CalloutTitle>
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
