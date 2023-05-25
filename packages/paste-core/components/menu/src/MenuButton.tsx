import * as React from 'react';
import type {MenuPrimitiveButtonProps} from '@twilio-paste/menu-primitive';
import {MenuPrimitiveButton} from '@twilio-paste/menu-primitive';
import type {ButtonProps} from '@twilio-paste/button';
import {Button, ButtonPropTypes} from '@twilio-paste/button';

export type MenuButtonProps = MenuPrimitiveButtonProps & ButtonProps;

const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(({element = 'MENU_BUTTON', ...props}, ref) => {
  return (
    <MenuPrimitiveButton {...props} element={element} as={Button} ref={ref}>
      {props.children}
    </MenuPrimitiveButton>
  );
});

export const MenuButtonPropTypes = ButtonPropTypes;

MenuButton.displayName = 'MenuButton';
MenuButton.propTypes = MenuButtonPropTypes;
export {MenuButton};
