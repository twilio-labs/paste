import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {StatusObject} from '@twilio-paste/badge';
import type {StatusBadgeVariants} from '@twilio-paste/badge';

import {MenuItem} from './MenuItem';
import type {MenuItemProps} from './types';

type MenuItemStatusVariant = StatusBadgeVariants;

export interface MenuItemStatusProps extends Omit<MenuItemProps, 'variant'> {
  variant: MenuItemStatusVariant;
}

const MenuItemStatus = React.forwardRef<HTMLDivElement, MenuItemStatusProps>(
  ({children, variant, element = 'MENU_ITEM_STATUS', ...props}, ref) => {
    return (
      <MenuItem ref={ref} element={element} {...props} variant="default">
        <Box display="flex" flexDirection="row" columnGap="space20" alignItems="center">
          {StatusObject[variant].icon}
          {children}
        </Box>
      </MenuItem>
    );
  }
);

MenuItemStatus.displayName = 'MenuItemStatus';

MenuItemStatus.propTypes = {
  href: PropTypes.string,
  variant: PropTypes.oneOf([Object.keys(StatusObject)]).isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  element: PropTypes.string,
};

export {MenuItemStatus};
