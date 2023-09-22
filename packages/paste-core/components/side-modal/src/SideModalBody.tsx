import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import type { HTMLPasteProps } from '@twilio-paste/types';
import * as React from 'react';

interface SideModalBodyProps extends HTMLPasteProps<'div'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const SideModalBody = React.forwardRef<HTMLDivElement, SideModalBodyProps>(
  ({ children, element = 'SIDE_MODAL_BODY', ...props }, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} element={element} ref={ref} overflowY="auto" padding="space90">
        {children}
      </Box>
    );
  },
);

SideModalBody.displayName = 'SideModalBody';
export { SideModalBody };
