import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface SidebarHeaderProps extends HTMLPasteProps<'button'> {
  children: React.ReactNode;
  element?: BoxProps['element'];
}

export const SidebarHeader = React.forwardRef<HTMLButtonElement, SidebarHeaderProps>(
  ({element = 'SIDEBAR_HEADER', children, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        ref={ref}
        paddingX="space60"
        minHeight="sizeTopbar"
        borderBottomWidth="borderWidth10"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderInverseWeaker"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexShrink={0}
        columnGap="space50"
        overflow="hidden"
      >
        {children}
      </Box>
    );
  }
);

SidebarHeader.displayName = 'SidebarHeader';
