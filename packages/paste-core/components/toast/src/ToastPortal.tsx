import * as React from 'react';
import {StyledBase} from '@twilio-paste/theme';
import {Portal} from '@twilio-paste/reakit-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {ToastPortalPropTypes} from './propTypes';
import type {ToastPortalProps} from './types';

const ToastPortal = React.forwardRef<HTMLDivElement, ToastPortalProps>(({children, __console_patch, ...props}, ref) => {
  return (
    <Portal>
      {/* import Paste Theme Based Styles due to portal positioning. */}
      <StyledBase>
        <Box
          {...safelySpreadBoxProps(props)}
          position="fixed"
          right="space40"
          top="space90"
          zIndex="zIndex90"
          ref={ref}
          style={__console_patch ? {zIndex: 1999} : undefined}
        >
          {children}
        </Box>
      </StyledBase>
    </Portal>
  );
});

ToastPortal.displayName = 'ToastPortal';

if (process.env.NODE_ENV === 'development') {
  ToastPortal.propTypes = ToastPortalPropTypes;
}

export {ToastPortal};
