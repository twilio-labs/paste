import * as React from 'react';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';
import {Paragraph} from '@twilio-paste/paragraph';
import {Anchor} from '@twilio-paste/anchor';

export const StatusLegend: React.FC = () => (
  <Card>
    <Heading as="h4" variant="heading40">
      Component Status Details
    </Heading>
    <Paragraph>
      Components and their APIs are versioned adhering to{' '}
      <Anchor href="https://semver.org/" showExternal>
        Semantic Versioning
      </Anchor>
      . All components are safe to use in customer-facing products regardless of "status". Components status is a
      reflection of completeness, not stability.
    </Paragraph>
    <Text as="p" lineHeight="lineHeight40" marginBottom="space20">
      <strong>Alpha</strong>: This component has incomplete documentation, missing Sketch or Figma symbols, has not been
      through DSYS committee review and has not been through UX review.
    </Text>
    <Text as="p" lineHeight="lineHeight40" marginBottom="space20">
      <strong>Beta</strong>: This component may not have been through DSYS committee review or UX review.
    </Text>
    <Text as="p" lineHeight="lineHeight40" marginBottom="space20">
      <strong>Production</strong>: The component has met all our requirements for completeness.
    </Text>
  </Card>
);
