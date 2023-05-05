import * as React from 'react';
import {secureExternalLink} from '@twilio-paste/anchor';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {MenuPrimitiveItem, MenuPrimitiveItemCheckbox, MenuPrimitiveItemRadio} from '@twilio-paste/menu-primitive';
import {SelectedIcon} from '@twilio-paste/icons/esm/SelectedIcon';

import type {MenuItemProps, MenuItemCheckboxProps, MenuItemRadioProps, MenuItemVariantStyles} from './types';
import {MenuGroupContext} from './MenuGroup';
import {MenuItemVariants} from './constants';

const baseVariantStyles: MenuItemVariantStyles = {
  [MenuItemVariants.DEFAULT]: {
    color: 'colorText',
    _hover: {
      color: 'colorTextPrimary',
      backgroundColor: 'colorBackgroundPrimaryWeakest',
      borderColor: 'colorBorderPrimary',
    },
    _focus: {
      color: 'colorTextPrimary',
      backgroundColor: 'colorBackgroundPrimaryWeakest',
      borderColor: 'colorBorderPrimary',
    },
  },
  [MenuItemVariants.DESTRUCTIVE]: {
    color: 'colorTextLinkDestructive',
    _hover: {
      backgroundColor: 'colorBackgroundDestructiveWeakest',
      borderColor: 'colorBorderDestructive',
    },
    _focus: {
      backgroundColor: 'colorBackgroundDestructiveWeakest',
      borderColor: 'colorBorderDestructive',
    },
  },
};
const groupVariantStyles: MenuItemVariantStyles = {
  [MenuItemVariants.GROUP_ITEM]: {
    ...baseVariantStyles[MenuItemVariants.DEFAULT],
    paddingLeft: 'space90',
  },
  [MenuItemVariants.DESTRUCTIVE_GROUP_ITEM]: {
    ...baseVariantStyles[MenuItemVariants.DESTRUCTIVE],
    paddingLeft: 'space90',
  },
};
const variantStyles: MenuItemVariantStyles = {
  ...baseVariantStyles,
  ...groupVariantStyles,
};

export const StyledMenuItem = React.forwardRef<HTMLDivElement | HTMLAnchorElement, MenuItemProps>(
  ({element = 'STYLED_MENU_ITEM', href, variant = 'default', tabIndex, children, ...props}, ref) => {
    return (
      <Box
        variant={variant}
        {...(href && secureExternalLink(href))}
        href={href}
        as={href ? 'a' : 'button'}
        {...safelySpreadBoxProps(props)}
        element={element}
        appearance="none"
        background="none"
        border="none"
        display="block"
        textAlign="left"
        fontFamily="inherit"
        fontSize="fontSize30"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight30"
        margin="space0"
        outline="none"
        paddingY="space30"
        borderLeftStyle="solid"
        borderLeftWidth="borderWidth20"
        borderColor="transparent"
        cursor="pointer"
        paddingX="space70"
        width="100%"
        {...variantStyles[variant]}
        _disabled={{
          color: 'colorTextWeaker',
          cursor: 'not-allowed',
          backgroundColor: 'colorBackgroundBody',
          borderColor: 'transparent',
        }}
        ref={ref}
      >
        {props['aria-checked'] === true ? (
          <Box as="span" display="flex" justifyContent="space-between" alignItems="center">
            {children}
            <SelectedIcon decorative color={props.disabled ? 'colorTextWeaker' : 'colorTextPrimary'} />
          </Box>
        ) : (
          children
        )}
      </Box>
    );
  }
);

StyledMenuItem.displayName = 'StyledMenuItem';

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({as = StyledMenuItem, variant: _variant, element = 'MENU_ITEM', ...props}, ref) => {
    let variant = _variant;
    const isGrouped = React.useContext(MenuGroupContext) === MenuItemVariants.GROUP_ITEM;
    if (isGrouped && _variant === MenuItemVariants.DESTRUCTIVE) variant = MenuItemVariants.DESTRUCTIVE_GROUP_ITEM;
    else if (isGrouped) variant = MenuItemVariants.GROUP_ITEM;

    return <MenuPrimitiveItem {...props} element={element} variant={variant} as={as} ref={ref} />;
  }
);
MenuItem.displayName = 'MenuItem';
export {MenuItem};

const MenuItemCheckbox = React.forwardRef<HTMLDivElement, MenuItemCheckboxProps>(
  ({as = StyledMenuItem, variant: _variant, element = 'MENU_ITEM_CHECKBOX', ...props}, ref) => {
    let variant = _variant;
    const isGrouped = React.useContext(MenuGroupContext) === MenuItemVariants.GROUP_ITEM;
    if (isGrouped && _variant === MenuItemVariants.DESTRUCTIVE) variant = MenuItemVariants.DESTRUCTIVE_GROUP_ITEM;
    else if (isGrouped) variant = MenuItemVariants.GROUP_ITEM;

    return <MenuPrimitiveItemCheckbox {...props} element={element} variant={variant} as={as} ref={ref} />;
  }
);
MenuItemCheckbox.displayName = 'MenuItemCheckbox';
export {MenuItemCheckbox};

const MenuItemRadio = React.forwardRef<HTMLDivElement, MenuItemRadioProps>(
  ({as = StyledMenuItem, variant: _variant, element = 'MENU_ITEM_RADIO', ...props}, ref) => {
    let variant = _variant;
    const isGrouped = React.useContext(MenuGroupContext) === MenuItemVariants.GROUP_ITEM;
    if (isGrouped && _variant === MenuItemVariants.DESTRUCTIVE) variant = MenuItemVariants.DESTRUCTIVE_GROUP_ITEM;
    else if (isGrouped) variant = MenuItemVariants.GROUP_ITEM;

    return <MenuPrimitiveItemRadio {...props} element={element} variant={variant} as={as} ref={ref} />;
  }
);
MenuItemRadio.displayName = 'MenuItemRadio';
export {MenuItemRadio};
