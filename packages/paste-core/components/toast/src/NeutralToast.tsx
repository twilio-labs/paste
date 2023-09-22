import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import * as React from 'react';

import type { ToastProps } from './types';

const NeutralToast = React.forwardRef<HTMLDivElement, ToastProps>(({ element = 'TOAST', variant, ...props }, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      color="colorTextNeutral"
      width={['100%', 'size40', 'size40']}
      backgroundColor="colorBackgroundNeutralWeakest"
      borderColor="colorBorderNeutralWeak"
      borderRadius="borderRadius30"
      borderStyle="solid"
      borderWidth="borderWidth10"
      boxShadow="shadowHigh"
      element={element}
      padding="space60"
      variant={variant}
    >
      {props.children}
    </Box>
  );
});

NeutralToast.displayName = 'NeutralToast';

export { NeutralToast };
