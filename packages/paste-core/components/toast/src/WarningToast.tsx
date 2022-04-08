import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ToastPropTypes} from './propTypes';
import type {ToastProps} from './types';

const WarningToast = React.forwardRef<HTMLDivElement, ToastProps>(({element = 'TOAST', variant, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      // eslint-disable-next-line react/jsx-no-literals
      backgroundColor="colorBackgroundBody"
      // eslint-disable-next-line react/jsx-no-literals
      borderColor="colorBorderWeaker"
      // eslint-disable-next-line react/jsx-no-literals
      borderRadius="borderRadius20"
      // eslint-disable-next-line react/jsx-no-literals
      borderStyle="solid"
      // eslint-disable-next-line react/jsx-no-literals
      borderWidth="borderWidth10"
      // eslint-disable-next-line react/jsx-no-literals
      borderLeftWidth="borderWidth30"
      // eslint-disable-next-line react/jsx-no-literals
      borderLeftColor="colorBorderWarningWeak"
      // eslint-disable-next-line react/jsx-no-literals
      boxShadow="shadowHigh"
      // eslint-disable-next-line react/jsx-no-literals
      padding="space60"
      // eslint-disable-next-line react/jsx-no-literals
      width="size40"
      element={element}
      variant={variant}
    >
      {props.children}
    </Box>
  );
});

WarningToast.displayName = 'WarningToast';

WarningToast.propTypes = ToastPropTypes;

export {WarningToast};
