import * as React from 'react';
import {Box} from '@twilio-paste/box';

export const InputChevronWrapper: React.FC<{children: React.ReactNode}> = ({children}) => (
  <Box
    alignItems="center"
    display="inline-flex"
    position="absolute"
    pointerEvents="none"
    right="space30"
    top="50%"
    transform="translateY(-50%)"
    zIndex="zIndex10"
  >
    {children}
  </Box>
);
