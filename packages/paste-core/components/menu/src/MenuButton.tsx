import type { ButtonProps } from '@twilio-paste/button';
import { Button } from '@twilio-paste/button';
import type { MenuPrimitiveButtonProps } from '@twilio-paste/menu-primitive';
import { MenuPrimitiveButton } from '@twilio-paste/menu-primitive';
import * as React from 'react';

export type MenuButtonProps = MenuPrimitiveButtonProps & ButtonProps;

const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ element = 'MENU_BUTTON', ...props }, ref) => {
    return (
      <MenuPrimitiveButton {...props} element={element} as={Button} ref={ref}>
        {props.children}
      </MenuPrimitiveButton>
    );
  },
);

MenuButton.displayName = 'MenuButton';
export { MenuButton };
