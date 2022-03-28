import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ToastPropTypes} from './propTypes';
import type {ToastProps} from './types';

const SuccessToast = React.forwardRef<HTMLDivElement, ToastProps>(({element = 'TOAST', variant, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      backgroundColor="colorBackgroundBody"
      borderColor="colorBorderWeaker"
      borderRadius="borderRadius20"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderLeftWidth="borderWidth30"
      borderLeftColor="colorBorderSuccessWeak"
      boxShadow="shadowHigh"
      element={element}
      padding="space60"
      variant={variant}
      width="size40"
    >
      {props.children}
    </Box>
  );
});

SuccessToast.displayName = 'SuccessToast';

SuccessToast.propTypes = ToastPropTypes;

export {SuccessToast};
