import * as React from 'react';
import {Box} from '@twilio-paste/core/box';
import {Card} from '@twilio-paste/core/card';
import {Heading} from '@twilio-paste/core/heading';
import {Text} from '@twilio-paste/core/text';

const ComponentCardHeader: React.FC = ({children}) => {
  return (
    <Heading as="h4" variant="heading40">
      {children}
    </Heading>
  );
};

const ComponentCardIllustration: React.FC = ({children}) => {
  return (
    <Box marginLeft="auto" marginRight="auto" maxWidth="size20">
      {children}
    </Box>
  );
};

const ComponentCardFooter: React.FC = ({children}) => {
  return (
    <Text as="span" display="inline-block" fontWeight="fontWeightSemibold" marginTop="space30">
      {children}
    </Text>
  );
};

const ComponentCard: React.FC = ({children}) => {
  return (
    <Box marginBottom="space60">
      <Card>
        <Text as="div" textAlign="center">
          {children}
        </Text>
      </Card>
    </Box>
  );
};

export {ComponentCard, ComponentCardHeader, ComponentCardIllustration, ComponentCardFooter};
