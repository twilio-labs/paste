import * as React from 'react';
import {StyledBase} from '@twilio-paste/theme';
import {Portal} from '@twilio-paste/reakit-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

const ToastPortal: React.FC = ({children, ...props}) => {
  return (
    <Portal>
      {/* import Paste Theme Based Styles due to portal positioning. */}
      <StyledBase>
        <Box {...safelySpreadBoxProps(props)} position="fixed" right="space40" top="space90" zIndex="zIndex90">
          {children}
        </Box>
      </StyledBase>
    </Portal>
  );
};

ToastPortal.displayName = 'ToastPortal';

export {ToastPortal};
