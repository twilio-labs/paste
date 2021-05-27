import * as React from 'react';
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
      borderColor="colorBorderWeak"
      borderRadius="borderRadius20"
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

const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return <MenuPrimitive {...props} as={StyledMenu} ref={ref} />;
});
Menu.displayName = 'Menu';
export {Menu};
