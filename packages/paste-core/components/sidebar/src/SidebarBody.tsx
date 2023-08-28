import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface SidebarBodyProps extends HTMLPasteProps<'div'> {
  children: React.ReactNode;
  element?: BoxProps['element'];
}

export const SidebarBody = React.forwardRef<HTMLDivElement, SidebarBodyProps>(
  ({element = 'SIDEBAR_BODY', children, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        element={element}
        ref={ref}
        maxHeight="100%"
        overflow="hidden"
        flexGrow={1}
      >
        {children}
      </Box>
    );
  }
);
SidebarBody.displayName = 'SidebarBody';
