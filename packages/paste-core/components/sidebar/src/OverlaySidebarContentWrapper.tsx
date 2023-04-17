import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {useWindowSize} from '@twilio-paste/utils';

import type {Variants} from './types';

export interface OverlaySidebarContentWrapper extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  element?: BoxProps['element'];
  collapsed?: boolean;
  variant?: Variants;
}

export const OverlaySidebarContentWrapper = React.forwardRef<HTMLDivElement, OverlaySidebarContentWrapper>(
  ({variant = 'default', element = 'OVERLAY_SIDEBAR_CONTENT_WRAPPER', children, ...props}, ref) => {
    const {breakpointIndex} = useWindowSize();
    const isMobile = breakpointIndex === 0;

    if (!isMobile && variant === 'compact') {
      return (
        <Box display="flex" justifyContent="flex-start">
          <Box role="presentation" width="sizeSidebarCompact" height="100%" minHeight="1px" />
          <Box {...safelySpreadBoxProps(props)} element={element} as="div" ref={ref}>
            {children}
          </Box>
        </Box>
      );
    }
    return (
      <Box {...safelySpreadBoxProps(props)} element={element} as="div" ref={ref}>
        {children}
      </Box>
    );
  }
);
OverlaySidebarContentWrapper.displayName = 'OverlaySidebarContentWrapper';
