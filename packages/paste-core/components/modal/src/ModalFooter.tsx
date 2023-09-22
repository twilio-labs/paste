import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxElementProps } from '@twilio-paste/box';
import type { HTMLPasteProps } from '@twilio-paste/types';
import * as React from 'react';

export interface ModalFooterProps extends HTMLPasteProps<'div'> {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
}
const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, element = 'MODAL_FOOTER', ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        flexShrink={0}
        display="flex"
        padding="space90"
        paddingTop="space0"
        as="div"
        element={element}
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);
ModalFooter.displayName = 'ModalFooter';

export { ModalFooter };
