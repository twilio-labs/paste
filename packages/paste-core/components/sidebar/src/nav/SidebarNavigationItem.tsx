import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';

import {SidebarNavigationDisclosureContext} from './SidebarNavigationDisclosureContext';
import {
  sidebarNavigationLabelStyles,
  sidebarNavigationLabelNestedStyles,
  sidebarNavigationItemSelectedStyles,
} from './styles';

export interface SidebarNavigationItemProps extends React.ComponentPropsWithRef<'div'> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
  selected?: boolean;
}

const SidebarNavigationItem = React.forwardRef<HTMLDivElement, SidebarNavigationItemProps>(
  ({element = 'SIDEBAR_NAVIGATION_ITEM', selected, children, ...props}, ref) => {
    const theme = useTheme();
    const {disclosure} = React.useContext(SidebarNavigationDisclosureContext);
    // Any disclosure context means we're nested
    const isNested = disclosure != null;

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="button"
        background="none"
        border="none"
        outline="none"
        variant="reset"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        overflow="hidden"
        ref={ref}
        element={element}
        {...(isNested ? sidebarNavigationLabelNestedStyles(theme) : sidebarNavigationLabelStyles)}
        {...(selected && sidebarNavigationItemSelectedStyles)}
      >
        {children}
      </Box>
    );
  }
);
SidebarNavigationItem.displayName = 'SidebarNavigationItem';
SidebarNavigationItem.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  selected: PropTypes.bool,
};

export {SidebarNavigationItem};
