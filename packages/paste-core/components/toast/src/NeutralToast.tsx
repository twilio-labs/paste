import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ToastProps, ToastPropTypes} from './types';

const NeutralToast = React.forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
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
      borderLeftColor="colorBorderNeutral"
      boxShadow="shadowHigh"
      padding="space60"
      width="size40"
    >
      {props.children}
    </Box>
  );
});

NeutralToast.displayName = 'NeutralToast';

if (process.env.NODE_ENV === 'development') {
  NeutralToast.propTypes = ToastPropTypes;
}

export {NeutralToast};
