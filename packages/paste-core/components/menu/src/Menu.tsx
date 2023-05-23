import * as React from 'react';
import PropTypes from 'prop-types';
import type {BoxElementProps} from '@twilio-paste/box';
import {safelySpreadBoxProps, Box} from '@twilio-paste/box';
import {MenuPrimitive} from '@twilio-paste/menu-primitive';

import type {MenuProps} from './types';

const StyledMenu = React.forwardRef<HTMLDivElement, BoxElementProps>(({style, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor="colorBackgroundBody"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderColor="colorBorderWeaker"
      borderRadius="borderRadius30"
      boxShadow="shadow"
      maxWidth="size30"
      minWidth="size20"
      zIndex="zIndex20"
      paddingY="space30"
      _focus={{outline: 'none'}}
      style={style}
      ref={ref}
    />
  );
});

StyledMenu.displayName = 'StyledMenu';

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({element = 'MENU', ...props}, ref) => {
  return <MenuPrimitive {...props} element={element} as={StyledMenu} ref={ref} />;
});

export const MenuPropTypes = {
  element: PropTypes.string,
  hideOnClickOutside: PropTypes.bool,
  disabled: PropTypes.bool,
};

Menu.displayName = 'Menu';
Menu.propTypes = MenuPropTypes;
export {Menu};
