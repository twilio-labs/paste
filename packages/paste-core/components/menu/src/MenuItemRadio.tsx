import * as React from 'react';
import PropTypes from 'prop-types';
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

export const MenuItemRadioPropTypes = {
  href: PropTypes.string,
  variant: PropTypes.oneOf([Object.values(MenuItemVariants)]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  element: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
};

MenuItemRadio.displayName = 'MenuItemRadio';
MenuItemRadio.propTypes = MenuItemRadioPropTypes;
export {MenuItemRadio};
