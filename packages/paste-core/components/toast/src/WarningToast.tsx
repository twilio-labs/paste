import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ToastProps, ToastPropTypes} from './types';

const WarningToast = React.forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      backgroundColor="colorBackgroundBody"
      borderColor="colorBorderLighter"
      borderRadius="borderRadius20"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderLeftWidth="borderWidth30"
      borderLeftColor="colorBorderWarningLight"
      boxShadow="shadowHigh"
      padding="space60"
      width="size40"
    >
      {props.children}
    </Box>
  );
});

WarningToast.displayName = 'WarningToast';

if (process.env.NODE_ENV === 'development') {
  WarningToast.propTypes = ToastPropTypes;
}

export {WarningToast};
