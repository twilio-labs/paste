import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Portal} from '@twilio-paste/reakit-library';
import {Stack} from '@twilio-paste/stack';
import {StyledBase} from '@twilio-paste/theme';
import {ToastContainerProps, ToastContainerPropTypes} from './types';

const ToastContainer: React.FC<ToastContainerProps> = ({children, ...props}) => {
  return (
    <Portal>
      {/* import Paste Theme Based Styles due to portal positioning. */}
      <StyledBase>
        <Box {...safelySpreadBoxProps(props)} position="fixed" right="space40" top="space40" zIndex="zIndex90">
          <Stack orientation="vertical" spacing="space40">
            {children}
          </Stack>
        </Box>
      </StyledBase>
    </Portal>
  );
};

ToastContainer.displayName = 'ToastContainer';

if (process.env.NODE_ENV === 'development') {
  ToastContainer.propTypes = ToastContainerPropTypes;
}

export {ToastContainer};
