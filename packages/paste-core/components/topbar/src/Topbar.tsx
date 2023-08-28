import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface TopbarProps extends HTMLPasteProps<'div'> {
  children: React.ReactNode;
  element?: BoxProps['element'];
  /**
   * Create a unique ID for the topbar and provide it to the Sidebar component for accessible skip links
   */
  id: string;
}

export const Topbar = React.forwardRef<HTMLDivElement, TopbarProps>(
  ({element = 'TOPBAR', id, children, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        id={id}
        ref={ref}
        element={element}
        width="100%"
        minHeight="sizeTopbar"
        backgroundColor="colorBackgroundWeak"
        borderBottomWidth="borderWidth10"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderWeaker"
        paddingX="space70"
        position="sticky"
        top="0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex="zIndex40"
      >
        {children}
      </Box>
    );
  }
);
Topbar.displayName = 'Topbar';
