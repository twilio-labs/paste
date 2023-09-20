import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface SidebarNavigationDisclosureHeadingWrapperProps extends React.ComponentPropsWithRef<'div'> {
  children: React.ReactNode;
  element?: BoxProps['element'];
}

export const SidebarNavigationDisclosureHeadingWrapper = React.forwardRef<
  HTMLDivElement,
  SidebarNavigationDisclosureHeadingWrapperProps
>(({element = 'SIDEBAR_NAVIGATION_DISCLOSURE_HEADING_WRAPPER', ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      element={element}
      ref={ref}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      columnGap="space30"
    />
  );
});

SidebarNavigationDisclosureHeadingWrapper.displayName = 'SidebarNavigationDisclosureHeadingWrapper';
