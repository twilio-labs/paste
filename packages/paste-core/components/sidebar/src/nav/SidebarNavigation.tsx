import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {styled, css} from '@twilio-paste/styling-library';
import {Disclosure, DisclosureHeading, DisclosureContent} from '@twilio-paste/disclosure';

const SidebarNavigationWrapper = styled(Box)(({theme}) => {
  const colorA = theme.backgroundColors.colorBackgroundInverse;
  const colorB = theme.backgroundColors.colorBackgroundInverseStrongest;
  return css({
    maxHeight: '100%',
    overflow: 'auto',
    overflowScrolling: 'touch',
    flexGrow: 1,
    background: `linear-gradient(
      ${colorA} 30%,
      rgba(255, 255, 255, 0)
    ) center top,
    linear-gradient(
      rgba(255, 255, 255, 0),
      ${colorA} 70%
    ) center bottom,
    radial-gradient(
      farthest-side at 50% 0,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0)
    ) center top,
    radial-gradient(
      farthest-side at 50% 100%,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0)
    ) center bottom`,

    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 40px, 100% 40px, 100% 14px, 100% 14px',
    backgroundAttachment: `local, local, scroll, scroll`,
    padding: 'space50',

    '::-webkit-scrollbar': {
      width: '10px',
    },
    // Track
    '::-webkit-scrollbar-track': {
      background: 'colorBackgroundInverseStronger',
    },
    // Handle
    '::-webkit-scrollbar-thumb': {
      background: '#394762',
      borderRadius: '10px',
    },
    // Handle on hover
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  });
});

export interface SidebarNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  element?: BoxProps['element'];
}

export const SidebarNavigation = React.forwardRef<HTMLDivElement, SidebarNavigationProps>(
  ({element = 'SIDEBAR_NAVIGATION', children}, ref) => {
    return (
      <SidebarNavigationWrapper element={element} ref={ref}>
        {children}
      </SidebarNavigationWrapper>
    );
  }
);
SidebarNavigation.displayName = 'SidebarNavigation';
