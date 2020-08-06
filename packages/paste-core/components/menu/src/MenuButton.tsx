import * as React from 'react';
import {MenuPrimitiveButton, MenuPrimitiveButtonProps} from '@twilio-paste/menu-primitive';
import {ButtonProps, Button} from '@twilio-paste/button';

export type MenuButtonProps = MenuPrimitiveButtonProps & ButtonProps;

const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>((props, ref) => {
  return (
    <MenuPrimitiveButton {...props} as={Button} ref={ref}>
      {props.children}
    </MenuPrimitiveButton>
  );
});
MenuButton.displayName = 'MenuButton';
export {MenuButton};
