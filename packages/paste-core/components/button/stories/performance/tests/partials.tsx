import * as React from 'react';
import {Box} from '@twilio-paste/box';

export const Wrapper: React.FC = ({children}) => (
  <Box
    padding="space30"
    display="flex"
    alignItems="baseline"
    justifyContent="space-between"
    maxWidth="50%"
    columnGap="space80"
    verticalAlign="center"
  >
    {children}
  </Box>
);
Wrapper.displayName = 'PERF_TEST_WRAPPER';
