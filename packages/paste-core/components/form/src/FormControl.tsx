import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface FormControlProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  element?: BoxProps['element'];
  children: React.ReactNode;
}

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({children, element = 'FORM_CONTROL', ...props}, ref) => (
    <Box ref={ref} flexGrow={1} element={element} {...safelySpreadBoxProps(props)}>
      {children}
    </Box>
  )
);

FormControl.displayName = 'FormControl';
