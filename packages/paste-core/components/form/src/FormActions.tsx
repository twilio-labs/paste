import * as React from 'react';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';

export interface FormActionsProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  element?: BoxProps['element'];
  children: React.ReactNode;
}

export const FormActions = React.forwardRef<HTMLDivElement, FormActionsProps>(
  ({ children, element = 'FORM_ACTIONS', ...props }, ref) => (
    <Box
      ref={ref}
      element={element}
      {...safelySpreadBoxProps(props)}
      display="flex"
      flexDirection="row"
      columnGap="space40"
      marginTop="space60"
    >
      {children}
    </Box>
  ),
);

FormActions.displayName = 'FormActions';
