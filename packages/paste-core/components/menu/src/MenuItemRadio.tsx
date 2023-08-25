import * as React from 'react';

import {MenuPrimitiveItemRadio} from '@twilio-paste/menu-primitive';

import type {MenuItemRadioProps} from './types';
import {MenuGroupContext} from './MenuGroup';
import {MenuItemVariants} from './constants';
import {StyledMenuItem, getComputedVariant} from './MenuItem.styles';

const MenuItemRadio = React.forwardRef<HTMLDivElement, MenuItemRadioProps>(
  ({as = StyledMenuItem, variant: _variant, element = 'MENU_ITEM_RADIO', ...props}, ref) => {
    const isGrouped = React.useContext(MenuGroupContext) === MenuItemVariants.GROUP_ITEM;
    const variant = _variant ? getComputedVariant(_variant, isGrouped) : _variant;

    return <MenuPrimitiveItemRadio {...props} element={element} variant={variant} as={as} ref={ref} />;
  }
);

MenuItemRadio.displayName = 'MenuItemRadio';
export {MenuItemRadio};
