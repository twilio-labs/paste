import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {ButtonProps} from '@twilio-paste/button';
import {secureExternalLink} from '@twilio-paste/anchor';
import type {HTMLPasteProps} from '@twilio-paste/types';

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

export interface SidebarNavigationItemProps extends HTMLPasteProps<'a'> {
  href: ButtonProps['href'];
  children: React.ReactNode;
  element?: BoxProps['element'];
  selected?: boolean;
  icon?: React.ReactNode;
}

const SidebarNavigationItem = React.forwardRef<HTMLAnchorElement, SidebarNavigationItemProps>(
  ({element = 'SIDEBAR_NAVIGATION_ITEM', selected, children, icon, ...props}, ref) => {
    const {collapsed, variant} = React.useContext(SidebarContext);
    const {disclosure} = React.useContext(SidebarNavigationDisclosureContext);
    const {hideItemsOnCollapse, hierarchical} = React.useContext(SidebarNavigationContext);
    const isCompact = variant === 'compact';
    const [visible, setVisible] = React.useState(!isCompact ? true : !collapsed);
    const timeout = React.useRef(0);

    React.useEffect(() => {
      clearTimeout(timeout.current);
      // If not compact mode, we don't show/hide item titles
      if (!isCompact) {
        return;
      }

      // @ts-expect-error timeout is a number
      timeout.current = setTimeout(() => {
        setVisible(!collapsed);
      }, 120);
    }, [collapsed, isCompact]);

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
        width: collapsed ? '36px' : '100%',
      }),
      [isNested, selected, collapsed, hideItemsOnCollapse, hierarchical]
    );

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        {...(props.href ? secureExternalLink(props.href) : {})}
        ref={ref}
        element={element}
        as="a"
        aria-current={selected ? 'page' : undefined}
        {...styles}
      >
        {icon && (
          <Box as="span" color={selected ? 'colorTextInverse' : 'colorTextIconInverse'}>
            {icon}
          </Box>
        )}
        <Box
          as="span"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          columnGap="space20"
          transition="all 120ms ease"
          flexGrow={1}
          float={visible ? 'none' : 'left'}
          opacity={visible ? 1 : 0}
          whiteSpace={visible ? 'normal' : 'nowrap'}
        >
          {collapsed ? null : children}
        </Box>
      </Box>
    );
  }
);
SidebarNavigationItem.displayName = 'SidebarNavigationItem';

export {SidebarNavigationItem};
