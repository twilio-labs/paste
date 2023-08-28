import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface SideModalFooterProps extends HTMLPasteProps<'div'> {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
}
const SideModalFooter = React.forwardRef<HTMLDivElement, SideModalFooterProps>(
  ({children, element = 'SIDE_MODAL_FOOTER', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        element={element}
        ref={ref}
        paddingRight="space90"
        paddingLeft="space90"
        paddingBottom="space90"
        display="flex"
      >
        {children}
      </Box>
    );
  }
);
SideModalFooter.displayName = 'SideModalFooter';

export {SideModalFooter};
