import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {ButtonProps} from '@twilio-paste/button';

import {SidebarContext} from '../SidebarContext';
import {SidebarNavigationDisclosureContext} from './SidebarNavigationDisclosureContext';
import {
  sidebarNavigationItemStyles,
  sidebarNavigationItemNestedStyles,
  sidebarNavigationItemSelectedStyles,
  sidebarNavigationItemCollapsedStyles,
  sidebarNavigationItemHierarchicalStyles,
} from './styles';
import {SidebarNavigationContext} from './SidebarNavigationContext';

export interface SidebarNavigationItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: ButtonProps['href'];
  children: React.ReactNode;
  element?: BoxProps['element'];
  selected?: boolean;
  icon?: React.ReactNode;
}

const SidebarNavigationItem = React.forwardRef<HTMLAnchorElement, SidebarNavigationItemProps>(
  ({element = 'SIDEBAR_NAVIGATION_ITEM', selected, children, icon, ...props}, ref) => {
    const {collapsed} = React.useContext(SidebarContext);
    const {disclosure} = React.useContext(SidebarNavigationDisclosureContext);
    const {hideItemsOnCollapse, hierarchical} = React.useContext(SidebarNavigationContext);
    // If there is any disclosure context, that indicates that this component is nested
    const isNested = disclosure != null;

    const styles = React.useMemo(
      () => ({
        ...sidebarNavigationItemStyles,
        ...(hierarchical && sidebarNavigationItemHierarchicalStyles),
        ...(isNested && sidebarNavigationItemNestedStyles),
        ...(collapsed && sidebarNavigationItemCollapsedStyles),
        ...(selected && sidebarNavigationItemSelectedStyles),
        display: collapsed && hideItemsOnCollapse ? 'none' : 'flex',
      }),
      [isNested, selected, collapsed, hideItemsOnCollapse, hierarchical]
    );

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        as="a"
        aria-current={selected ? 'page' : undefined}
        {...styles}
      >
        <Box as="span" color={selected ? 'colorTextInverse' : 'colorTextIconInverse'}>
          {icon}
        </Box>
        {collapsed ? null : children}
      </Box>
    );
  }
);
SidebarNavigationItem.displayName = 'SidebarNavigationItem';
SidebarNavigationItem.propTypes = {
  children: PropTypes.string.isRequired,
  element: PropTypes.string,
  selected: PropTypes.bool,
};

export {SidebarNavigationItem};
