import * as React from 'react';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {secureExternalLink} from '@twilio-paste/anchor';
import {Button, ButtonProps} from '@twilio-paste/button';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {Separator, SeparatorProps} from '@twilio-paste/separator';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {
  useMenuPrimitiveState,
  MenuPrimitive,
  MenuPrimitiveProps,
  MenuPrimitiveItem,
  MenuPrimitiveItemProps,
  MenuPrimitiveButton,
  MenuPrimitiveButtonProps,
  MenuPrimitiveSeparator,
  MenuPrimitiveSeparatorProps,
} from '@twilio-paste/menu-primitive';

export type MenuProps = MenuPrimitiveProps & {'aria-label': string};
export interface MenuItemProps extends MenuPrimitiveItemProps {
  href?: string;
  as?: any;
}
export type MenuSeparatorProps = MenuPrimitiveSeparatorProps;
export type MenuButtonProps = MenuPrimitiveButtonProps & ButtonProps;
export type SubMenuButtonProps = MenuPrimitiveButtonProps;
interface StyledMenuItemProps extends BoxProps {
  href?: string;
}

const StyledMenu = React.forwardRef<HTMLDivElement, BoxProps>(({style, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor="colorBackgroundBody"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderColor="colorBorderLight"
      borderRadius="borderRadius20"
      boxShadow="shadowCard"
      maxWidth="size30"
      minWidth="size30"
      zIndex="zIndex10"
      _focus={{outline: 'none'}}
      style={style}
      ref={ref}
    />
  );
});

const StyledMenuItem = React.forwardRef<HTMLDivElement | HTMLAnchorElement, StyledMenuItemProps>(
  ({children, ...props}, ref) => {
    return (
      <Box
        {...(props.href && secureExternalLink(props.href))}
        {...safelySpreadBoxProps(props)}
        as="a"
        display="block"
        padding="space30"
        paddingLeft="space50"
        paddingRight="space50"
        textDecoration="none"
        _hover={{
          cursor: 'pointer',
        }}
        _focus={{
          outline: 'none',
          backgroundColor: 'colorBackgroundPrimaryLightest',
        }}
        _disabled={{cursor: 'not-allowed'}}
        ref={ref}
      >
        <Text
          as="div"
          color={props['aria-disabled'] ? 'colorTextWeaker' : 'colorTextLink'}
          textDecoration={props.tabIndex === 0 ? 'underline' : null}
        >
          {children}
        </Text>
      </Box>
    );
  }
);

const StyledMenuSeparator: React.FC<SeparatorProps> = props => {
  return <Separator {...props} orientation="horizontal" />;
};

const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return <MenuPrimitive {...props} as={StyledMenu} ref={ref} />;
});
Menu.displayName = 'Menu';
export {Menu};

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(({as = StyledMenuItem, ...props}, ref) => {
  return <MenuPrimitiveItem {...props} as={as} ref={ref} />;
});
MenuItem.displayName = 'MenuItem';
export {MenuItem};

const MenuSeparator: React.FC<MenuSeparatorProps> = props => {
  // as prop from reakit for some reason only accepts a string of `hr` but accepts components. any prevent type errors
  return <MenuPrimitiveSeparator {...props} as={StyledMenuSeparator as any} />;
};
MenuSeparator.displayName = 'MenuSeparator';
export {MenuSeparator};

const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>((props, ref) => {
  return (
    <MenuPrimitiveButton {...props} as={Button} ref={ref}>
      {props.children}
    </MenuPrimitiveButton>
  );
});
MenuButton.displayName = 'MenuButton';
export {MenuButton};

const SubMenuButton = React.forwardRef<HTMLButtonElement, SubMenuButtonProps>((props, ref) => {
  // MenuPrimitiveButton from reakit types `as` as HTML element names, but accepts components. any prevents type errors
  return (
    <MenuPrimitiveButton {...props} as={StyledMenuItem as any} ref={ref}>
      <MediaObject as="div" verticalAlign="center">
        <MediaBody as="div">{props.children}</MediaBody>
        <MediaFigure as="div" align="end" spacing="space20">
          <Box display="flex" transform="rotate(-90deg)">
            <ChevronDownIcon decorative size="sizeIcon20" />
          </Box>
        </MediaFigure>
      </MediaObject>
    </MenuPrimitiveButton>
  );
});
SubMenuButton.displayName = 'SubMenuButton';
export {SubMenuButton};

export {useMenuPrimitiveState as useMenuState};
