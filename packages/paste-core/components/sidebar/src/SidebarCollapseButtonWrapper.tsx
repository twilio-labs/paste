import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import {SidebarContext} from './SidebarContext';

export const SidebarCollapseButtonWrapper = React.forwardRef<HTMLDivElement, BoxProps>(
  ({element = 'SIDEBAR_COLLAPSE_BUTTON_WRAPPER', ...props}, ref) => {
    const {collapsed} = React.useContext(SidebarContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        display="flex"
        justifyContent="flex-end"
        position="relative"
        height="sizeSquare100"
        marginY="space50"
        marginRight={collapsed ? 'space60' : 'space50'}
        transition="margin-right 100ms ease"
        ref={ref}
        element={element}
      />
    );
  }
);

SidebarCollapseButtonWrapper.displayName = 'SidebarCollapseButtonWrapper';
