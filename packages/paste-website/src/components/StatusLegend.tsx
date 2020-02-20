import * as React from 'react';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';

export const StatusLegend: React.FC<{}> = () => (
  <Card>
    <Heading as="h4" variant="heading40">
      Component Status Details
    </Heading>
    <Text as="p" marginBottom="space20">
      <strong>Alpha</strong>: Component is safe to use in customer-facing products only with guidance from the design
      systems team.
    </Text>
    <Text as="p" marginBottom="space20">
      <strong>Beta</strong>: Component is safe to use in customer-facing products, but there may be (non-breaking)
      updates based on UX review and usability testing.
    </Text>
    <Text as="p" marginBottom="space20">
      <strong>Production</strong>: The component is stable.
    </Text>
  </Card>
);
