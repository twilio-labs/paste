import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import {
  sidebarNavigationLabelStyles,
  sidebarNavigationLabelNestedStyles,
  sidebarNavigationItemSelectedStyles,
} from './styles';

export interface SidebarNavigationItemProps extends React.ComponentPropsWithRef<'div'> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
  variant?: 'default' | 'nested';
  selected?: boolean;
}

const SidebarNavigationItem = React.forwardRef<HTMLDivElement, SidebarNavigationItemProps>(
  ({element = 'SIDEBAR_NAVIGATION_ITEM', variant, selected, children, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="button"
        background="none"
        border="none"
        outline="none"
        variant="reset"
        ref={ref}
        element={element}
        {...(variant === 'nested' ? sidebarNavigationLabelNestedStyles : sidebarNavigationLabelStyles)}
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
  variant: PropTypes.oneOf(['default', 'nested']),
  selected: PropTypes.bool,
};

export {SidebarNavigationItem};
