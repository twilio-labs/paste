import * as React from 'react';
import {ValueOf} from '@twilio-paste/types';
import {Box, BoxElementProps, safelySpreadBoxProps} from '@twilio-paste/box';
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

export const MenuItemVariants = {
  DEFAULT: 'default',
  GROUP_ITEM: 'group_item',
} as const;
type MenuItemVariants = ValueOf<typeof MenuItemVariants>;

export type MenuProps = MenuPrimitiveProps & {'aria-label': string};
export interface MenuItemProps extends MenuPrimitiveItemProps {
  href?: string;
  variant?: MenuItemVariants;
  as?: any;
}
export interface MenuGroupProps {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}
export type MenuSeparatorProps = MenuPrimitiveSeparatorProps;
export type MenuButtonProps = MenuPrimitiveButtonProps & ButtonProps;
export type SubMenuButtonProps = MenuPrimitiveButtonProps;

const MenuGroupContext = React.createContext<MenuItemVariants>(MenuItemVariants.DEFAULT);

const StyledMenu = React.forwardRef<HTMLDivElement, BoxElementProps>(({style, ...props}, ref) => {
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
      minWidth="size20"
      zIndex="zIndex20"
      paddingTop="space40"
      paddingBottom="space40"
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

const StyledMenuItem = React.forwardRef<HTMLDivElement | HTMLAnchorElement, MenuItemProps>((props, ref) => {
  return (
    // @ts-ignore It's fine
    <Box
      {...(props.href && secureExternalLink(props.href))}
      {...safelySpreadBoxProps(props)}
      as="a"
      display="block"
      paddingTop="space20"
      paddingBottom="space20"
      paddingLeft={props.variant === MenuItemVariants.GROUP_ITEM ? 'space90' : 'space70'}
      paddingRight="space70"
      textDecoration="none"
      _hover={{
        cursor: 'pointer',
        backgroundColor: 'colorBackgroundPrimaryLightest',
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
        color={props['aria-disabled'] ? 'colorTextWeaker' : 'colorText'}
        textDecoration={props.tabIndex === 0 ? 'underline' : null}
      >
        {props.children}
      </Text>
    </Box>
  );
});

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({as = StyledMenuItem, variant: _variant, ...props}, ref) => {
    const variant = _variant || React.useContext(MenuGroupContext);
    return <MenuPrimitiveItem {...props} variant={variant} as={as} ref={ref} />;
  }
);
MenuItem.displayName = 'MenuItem';
export {MenuItem};

const MenuGroup = React.forwardRef<HTMLDivElement, MenuGroupProps>(({label, icon, children, ...props}, ref) => {
  return (
    <MenuGroupContext.Provider value={MenuItemVariants.GROUP_ITEM}>
      <Box {...safelySpreadBoxProps(props)} role="presentation" aria-label={label} textDecoration="none" ref={ref}>
        <Box
          display="flex"
          alignItems="center"
          paddingLeft={icon != null ? 'space50' : 'space70'}
          paddingRight="space70"
          paddingTop="space20"
          paddingBottom="space20"
          cursor="default"
        >
          {React.isValidElement(icon) ? (
            <Box flexShrink={0} size="sizeIcon30">
              {React.cloneElement(icon, {iconColor: 'colorTextIcon'})}
            </Box>
          ) : null}
          <Text
            as="div"
            color="colorText"
            role="presentation"
            fontWeight="fontWeightBold"
            paddingLeft={icon != null ? 'space20' : undefined}
          >
            {label}
          </Text>
        </Box>
        {children}
      </Box>
    </MenuGroupContext.Provider>
  );
});
MenuGroup.displayName = 'MenuGroup';
export {MenuGroup};

const StyledMenuSeparator: React.FC<SeparatorProps> = props => {
  return <Separator {...props} orientation="horizontal" verticalSpacing="space30" />;
};

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
