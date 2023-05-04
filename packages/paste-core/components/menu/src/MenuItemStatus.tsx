import * as React from 'react';
import PropTypes from 'prop-types';
import type {ValueOf} from '@twilio-paste/types';
import {Box} from '@twilio-paste/box';
import {StatusIcons} from '@twilio-paste/badge';
import type {StatusNames} from '@twilio-paste/badge';

import {MenuItem} from './MenuItem';
import type {MenuItemProps} from './types';

type MenuItemStatusVariant = ValueOf<typeof StatusNames>;

export interface MenuItemStatusProps extends Omit<MenuItemProps, 'variant'> {
  variant: MenuItemStatusVariant;
}

const MenuItemStatus = React.forwardRef<HTMLDivElement, MenuItemStatusProps>(({children, variant, ...props}, ref) => {
  return (
    <MenuItem ref={ref} {...props} variant="default">
      <Box display="flex" flexDirection="row" columnGap="space20" alignItems="center">
        {StatusIcons[variant]}
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
