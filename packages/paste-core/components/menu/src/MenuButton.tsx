import * as React from 'react';
import type {MenuPrimitiveButtonProps} from '@twilio-paste/menu-primitive';
import {MenuPrimitiveButton} from '@twilio-paste/menu-primitive';
import type {ButtonProps} from '@twilio-paste/button';
import {Button} from '@twilio-paste/button';

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
