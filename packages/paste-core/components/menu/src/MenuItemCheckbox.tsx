import * as React from 'react';
import PropTypes from 'prop-types';
import {MenuPrimitiveItemCheckbox} from '@twilio-paste/menu-primitive';

import type {MenuItemCheckboxProps} from './types';
import {MenuGroupContext} from './MenuGroup';
import {MenuItemVariants} from './constants';
import {StyledMenuItem, getComputedVariant} from './MenuItem.styles';

const MenuItemCheckbox = React.forwardRef<HTMLDivElement, MenuItemCheckboxProps>(
  ({as = StyledMenuItem, variant: _variant, element = 'MENU_ITEM_CHECKBOX', ...props}, ref) => {
    const isGrouped = React.useContext(MenuGroupContext) === MenuItemVariants.GROUP_ITEM;
    const variant = _variant ? getComputedVariant(_variant, isGrouped) : _variant;

    return <MenuPrimitiveItemCheckbox {...props} element={element} variant={variant} as={as} ref={ref} />;
  }
);

export const MenuItemCheckboxPropTypes = {
  href: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(MenuItemVariants)),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  element: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
};

MenuItemCheckbox.displayName = 'MenuItemCheckbox';
MenuItemCheckbox.propTypes = MenuItemCheckboxPropTypes;
export {MenuItemCheckbox};
