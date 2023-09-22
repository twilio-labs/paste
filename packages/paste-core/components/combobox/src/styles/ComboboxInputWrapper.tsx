import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import * as React from 'react';

export interface ComboboxInputWrapperProps {
  children: NonNullable<React.ReactNode>;
}

const ComboboxInputWrapper = React.forwardRef<HTMLDivElement, ComboboxInputWrapperProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} ref={ref} display="flex" position="relative" width="100%">
        {children}
      </Box>
    );
  },
);

ComboboxInputWrapper.displayName = 'ComboboxInputWrapper';

export { ComboboxInputWrapper };
