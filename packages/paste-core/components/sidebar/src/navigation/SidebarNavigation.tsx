import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {styled, css} from '@twilio-paste/styling-library';
import type {ThemeShape} from '@twilio-paste/theme';

import {SidebarContext} from '../SidebarContext';

const SidebarNavigationWrapper = styled.div(({theme}: {theme: ThemeShape}) => {
  const {colorBackgroundInverse, colorBackgroundInverseStronger} = theme.backgroundColors;

  return css({
    overflowScrolling: 'touch',
    background: `linear-gradient(
      ${colorBackgroundInverse} 30%,
      rgba(255, 255, 255, 0)
    ) center top,
    linear-gradient(
      rgba(255, 255, 255, 0),
      ${colorBackgroundInverse} 70%
    ) center bottom,
    radial-gradient(
      farthest-side at 50% 0,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    ) center top,
    radial-gradient(
      farthest-side at 50% 100%,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    ) center bottom`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 40px, 100% 40px, 100% 14px, 100% 14px',
    backgroundAttachment: `local, local, scroll, scroll`,
    // Scrollbar
    '::-webkit-scrollbar': {
      width: '10px',
    },
    // Track
    '::-webkit-scrollbar-track': {
      background: colorBackgroundInverse,
    },
    // Handle
    '::-webkit-scrollbar-thumb': {
      background: colorBackgroundInverseStronger,
      borderRadius: '10px',
    },
    // Handle on hover
    '::-webkit-scrollbar-thumb:hover': {
      background: colorBackgroundInverseStronger,
    },
  });
});

export interface SidebarNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  element?: BoxProps['element'];
}

export const SidebarNavigation = React.forwardRef<HTMLDivElement, SidebarNavigationProps>(
  ({element = 'SIDEBAR_NAVIGATION', children}, ref) => {
    const {collapsed} = React.useContext(SidebarContext);
    return (
      <Box
        as={SidebarNavigationWrapper as any}
        element={element}
        ref={ref}
        opacity={collapsed ? 0 : 1}
        transition="opacity 150ms ease"
        maxHeight="100%"
        overflowY="auto"
        overflowX="hidden"
        padding="space50"
        flexGrow={1}
      >
        {children}
      </Box>
    );
  }
);
SidebarNavigation.displayName = 'SidebarNavigation';
