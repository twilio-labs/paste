import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ToastPropTypes} from './propTypes';
import type {ToastProps} from './types';

const NeutralToast = React.forwardRef<HTMLDivElement, ToastProps>(({element = 'TOAST', variant, ...props}, ref) => {
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
      borderLeftColor="colorBorderNeutralWeak"
      // eslint-disable-next-line react/jsx-no-literals
      boxShadow="shadowHigh"
      element={element}
      // eslint-disable-next-line react/jsx-no-literals
      padding="space60"
      variant={variant}
      // eslint-disable-next-line react/jsx-no-literals
      width="size40"
    >
      {props.children}
    </Box>
  );
});

NeutralToast.displayName = 'NeutralToast';

NeutralToast.propTypes = ToastPropTypes;

export {NeutralToast};
