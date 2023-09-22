import * as React from 'react';
import { Alert } from '@twilio-paste/core/alert';
import { Stack } from '@twilio-paste/core/stack';
import { Text } from '@twilio-paste/core/text';

const AlertPreview = (): JSX.Element => {
  return (
    <Stack orientation="vertical" spacing="space90">
      <Alert variant="neutral">
        <Text as="span">
          <strong>Martin Luther King, Jr.:</strong> We may have all come on different ships, but we’re in the same boat
          now.
        </Text>
      </Alert>
      <Alert variant="warning">
        <Text as="span">
          <strong>James Baldwin:</strong> Love takes off masks that we fear we cannot live without and know we cannot
          live within.
        </Text>
      </Alert>
      <Alert variant="error">
        <Text as="span">
          <strong>Toni Morrison:</strong> You wanna fly, you got to give up the shit that weighs you down.
        </Text>
      </Alert>
    </Stack>
  );
};

export { AlertPreview };
