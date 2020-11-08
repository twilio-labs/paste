import * as React from 'react';
import {useUIDSeed} from '@twilio-paste/core/uid-library';
import {Box} from '@twilio-paste/core/box';
import {Alert} from '@twilio-paste/core/alert';
import {Heading} from '@twilio-paste/core/heading';

const Page3: React.FC = () => {
  const count = 200;
  const Alerts = [];
  const keySeed = useUIDSeed();
  for (let i = 0; i < count; i++) {
    Alerts[i] = (
      <Alert variant="error" key={keySeed(i)}>
        Alert
      </Alert>
    );
  }
  return (
    <Box>
      <Heading as="h2" variant="heading20">
        Paste - {process.env.NODE_ENV}
      </Heading>
      {Alerts.map(a => a)}
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default Page3;
