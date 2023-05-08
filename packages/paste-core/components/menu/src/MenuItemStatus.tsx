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

const MenuItemStatus = React.forwardRef<HTMLDivElement, MenuItemStatusProps>(({children, variant, ...props}, ref) => {
  return (
    <MenuItem ref={ref} {...props} variant="default">
      <Box display="flex" flexDirection="row" columnGap="space20" alignItems="center">
        {StatusObject[variant].icon}
        {children}
      </Box>
    </MenuItem>
  );
});

MenuItemStatus.displayName = 'MenuItemStatus';

MenuItemStatus.propTypes = {
  children: PropTypes.node.isRequired,
};

export {MenuItemStatus};
