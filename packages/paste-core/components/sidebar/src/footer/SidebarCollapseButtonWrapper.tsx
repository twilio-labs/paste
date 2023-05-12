import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import {SidebarContext} from '../SidebarContext';

export const SidebarCollapseButtonWrapper = React.forwardRef<HTMLDivElement, BoxProps>(
  ({element = 'SIDEBAR_COLLAPSE_BUTTON_WRAPPER', ...props}, ref) => {
    const {collapsed} = React.useContext(SidebarContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        display="flex"
        justifyContent="flex-end"
        flexShrink={0}
        position="relative"
        paddingY="space50"
        paddingRight={collapsed ? 'space60' : 'space50'}
        transition="padding-right 100ms ease"
        ref={ref}
        element={element}
      />
    );
  }
);

SidebarCollapseButtonWrapper.displayName = 'SidebarCollapseButtonWrapper';
