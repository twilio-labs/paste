import * as React from 'react';
import {Box} from '@twilio-paste/box';

export const InputChevronWrapper = React.forwardRef<HTMLDivElement, {children: React.ReactNode}>(({children}, ref) => (
  <Box
    alignItems="center"
    display="inline-flex"
    position="absolute"
    pointerEvents="none"
    right="space30"
    top="50%"
    transform="translateY(-50%)"
    zIndex="zIndex10"
    ref={ref}
  >
    {children}
  </Box>
));
