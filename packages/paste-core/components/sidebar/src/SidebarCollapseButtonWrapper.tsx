import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export const SidebarCollapseButtonWrapper = React.forwardRef<HTMLDivElement, BoxProps>(
  ({element = 'SIDEBAR_COLLAPSE_BUTTON_WRAPPER', ...props}, ref) => {
    return (
      <Box
        position="absolute"
        bottom="space50"
        right="space50"
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
      />
    );
  }
);

SidebarCollapseButtonWrapper.displayName = 'SidebarCollapseButtonWrapper';
