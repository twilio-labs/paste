import * as React from 'react';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';

export const StatusLegend: React.FC = () => (
  <Card>
    <Heading as="h4" variant="heading40">
      Component Status Details
    </Heading>
    <Text as="p" marginBottom="space20">
      <strong>Alpha</strong>: Component is safe to use in customer-facing products. Component API is <em>reasonably</em>{' '}
      stable outside of minor changes and additional props or features. <strong>N.B.</strong> This component has
      incomplete documentation, missing Sketch or Figma symbols and has not been through UX review.
    </Text>
    <Text as="p" marginBottom="space20">
      <strong>Beta</strong>: Component is safe to use in customer-facing products. Component API is stable outside of
      additional props or features. <strong>N.B.</strong> This component has likely not been through UX review.
    </Text>
    <Text as="p" marginBottom="space20">
      <strong>Production</strong>: The component is stable.
    </Text>
  </Card>
);
