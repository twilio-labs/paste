import * as React from 'react';
import {Spinner} from '@twilio-paste/core/spinner';
import {Box} from '@twilio-paste/core/box';

export const Loading: React.FC = () => {
  return (
    <Box as="div">
      <Spinner decorative={false} title="Loading" />
    </Box>
  );
};
