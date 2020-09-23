import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ToastProps, ToastPropTypes} from './types';

const SuccessToast: React.FC<ToastProps> = props => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor="colorBackgroundBody"
      borderColor="colorBorderLighter"
      borderRadius="borderRadius20"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderLeftWidth="borderWidth30"
      borderLeftColor="colorBorderSuccessLight"
      boxShadow="shadowHigh"
      padding="space60"
      width="size40"
    >
      {props.children}
    </Box>
  );
};

SuccessToast.displayName = 'SuccessToast';

if (process.env.NODE_ENV === 'development') {
  SuccessToast.propTypes = ToastPropTypes;
}

export {SuccessToast};
