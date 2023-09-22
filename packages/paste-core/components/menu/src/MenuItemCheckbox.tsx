import { MenuPrimitiveItemCheckbox } from '@twilio-paste/menu-primitive';
import * as React from 'react';

import { MenuGroupContext } from './MenuGroup';
import { StyledMenuItem, getComputedVariant } from './MenuItem.styles';
import { MenuItemVariants } from './constants';
import type { MenuItemCheckboxProps } from './types';

const MenuItemCheckbox = React.forwardRef<HTMLDivElement, MenuItemCheckboxProps>(
  ({ as = StyledMenuItem, variant: _variant, element = 'MENU_ITEM_CHECKBOX', ...props }, ref) => {
    const isGrouped = React.useContext(MenuGroupContext) === MenuItemVariants.GROUP_ITEM;
    const variant = _variant ? getComputedVariant(_variant, isGrouped) : _variant;

    return <MenuPrimitiveItemCheckbox {...props} element={element} variant={variant} as={as} ref={ref} />;
  },
);

MenuItemCheckbox.displayName = 'MenuItemCheckbox';
export { MenuItemCheckbox };
