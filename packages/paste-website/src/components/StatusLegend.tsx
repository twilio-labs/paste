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
      <strong>Alpha</strong>: Component is a candidate for testing in products with guidance from the design systems
      team. If {"you 're"} planning on using one of these components, check in with the Paste team first through{' '}
      <strong>#help-design-system</strong> in Slack.
    </Text>
    <Text as="p" marginBottom="space20">
      <strong>Beta</strong>: Component is a candidate for prototypes and beta products.
    </Text>
    <Text as="p" marginBottom="space20">
      <strong>Production</strong>: The component is stable.
    </Text>
  </Card>
);
