import * as React from 'react';
import PropTypes from 'prop-types';
import {MenuPrimitiveItem} from '@twilio-paste/menu-primitive';

import type {MenuItemProps} from './types';
import {MenuGroupContext} from './MenuGroup';
import {MenuItemVariants} from './constants';
import {StyledMenuItem, getComputedVariant} from './MenuItem.styles';

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({as = StyledMenuItem, variant: _variant, element = 'MENU_ITEM', ...props}, ref) => {
    const isGrouped = React.useContext(MenuGroupContext) === MenuItemVariants.GROUP_ITEM;
    const variant = _variant ? getComputedVariant(_variant, isGrouped) : _variant;

    return <MenuPrimitiveItem {...props} element={element} variant={variant} as={as} ref={ref} />;
  }
);

export const MenuItemPropTypes = {
  href: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(MenuItemVariants)),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  element: PropTypes.string,
};

MenuItem.displayName = 'MenuItem';
MenuItem.propTypes = MenuItemPropTypes;
export {MenuItem};
