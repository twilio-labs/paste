import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  element?: BoxProps['element'];
}

export const Topbar = React.forwardRef<HTMLDivElement, TopbarProps>(({element = 'TOPBAR', children, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      element={element}
      width="100%"
      backgroundColor="colorBackgroundWeak"
      boxShadow="shadowBorderWeaker"
      paddingX="space70"
      paddingY="space60"
      position="sticky"
      top="0"
    >
      {children}
    </Box>
  );
});
Topbar.displayName = 'Topbar';
