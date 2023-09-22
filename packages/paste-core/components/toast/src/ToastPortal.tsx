import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import { Portal } from '@twilio-paste/reakit-library';
import { StyledBase } from '@twilio-paste/theme';
import * as React from 'react';

import type { ToastPortalProps } from './types';

const ToastPortal = React.forwardRef<HTMLDivElement, ToastPortalProps>(({ children, left, ...props }, ref) => {
  return (
    <Portal>
      {/* import Paste Theme Based Styles due to portal positioning. */}
      <StyledBase>
        <Box
          {...safelySpreadBoxProps(props)}
          position="fixed"
          right="space40"
          top="space90"
          left={left}
          zIndex="zIndex90"
          ref={ref}
        >
          {children}
        </Box>
      </StyledBase>
    </Portal>
  );
});

ToastPortal.displayName = 'ToastPortal';

export { ToastPortal };
