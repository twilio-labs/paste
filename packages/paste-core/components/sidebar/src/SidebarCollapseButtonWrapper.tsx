import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import {SidebarContext} from './SidebarContext';

export const SidebarCollapseButtonWrapper = React.forwardRef<HTMLDivElement, BoxProps>(
  ({element = 'SIDEBAR_COLLAPSE_BUTTON_WRAPPER', ...props}, ref) => {
    const {collapsed} = React.useContext(SidebarContext);

    return (
      <Box
        position="absolute"
        bottom="space50"
        right={collapsed ? 'space60' : 'space50'}
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
      />
    );
  }
);

SidebarCollapseButtonWrapper.displayName = 'SidebarCollapseButtonWrapper';
