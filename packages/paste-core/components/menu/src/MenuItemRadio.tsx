import { MenuPrimitiveItemRadio } from '@twilio-paste/menu-primitive';
import * as React from 'react';

import { MenuGroupContext } from './MenuGroup';
import { StyledMenuItem, getComputedVariant } from './MenuItem.styles';
import { MenuItemVariants } from './constants';
import type { MenuItemRadioProps } from './types';

const MenuItemRadio = React.forwardRef<HTMLDivElement, MenuItemRadioProps>(
  ({ as = StyledMenuItem, variant: _variant, element = 'MENU_ITEM_RADIO', ...props }, ref) => {
    const isGrouped = React.useContext(MenuGroupContext) === MenuItemVariants.GROUP_ITEM;
    const variant = _variant ? getComputedVariant(_variant, isGrouped) : _variant;

    return <MenuPrimitiveItemRadio {...props} element={element} variant={variant} as={as} ref={ref} />;
  },
);

MenuItemRadio.displayName = 'MenuItemRadio';
export { MenuItemRadio };
