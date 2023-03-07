import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {ToastPropTypes} from './propTypes';
import type {ToastProps} from './types';

const NeutralToast = React.forwardRef<HTMLDivElement, ToastProps>(({element = 'TOAST', variant, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      color="colorTextNeutral"
      backgroundColor="colorBackgroundNeutralWeakest"
      borderColor="colorBorderNeutralWeak"
      borderRadius="borderRadius30"
      borderStyle="solid"
      borderWidth="borderWidth10"
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

NeutralToast.displayName = 'NeutralToast';

NeutralToast.propTypes = ToastPropTypes;

export {NeutralToast};
