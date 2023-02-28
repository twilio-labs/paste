import * as React from 'react';
import {secureExternalLink} from '@twilio-paste/anchor';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';
import {MenuPrimitiveItem} from '@twilio-paste/menu-primitive';

import type {MenuItemProps, MenuItemVariant} from './types';
import {MenuGroupContext} from './MenuGroup';
import {MenuItemVariants} from './constants';

const variantStyles: Record<MenuItemVariant, BoxStyleProps> = {
  [MenuItemVariants.DEFAULT]: {
    color: 'colorText',
    _hover: {
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
  },
  [MenuItemVariants.GROUP_ITEM]: {
    paddingLeft: 'space90',
    color: 'colorText',
    _hover: {
      color: 'colorTextPrimary',
      backgroundColor: 'colorBackgroundPrimaryWeakest',
      borderColor: 'colorBorderPrimary',
    },
  },
  [MenuItemVariants.DESTRUCTIVE_GROUP_ITEM]: {
    color: 'colorTextLinkDestructive',
    paddingLeft: 'space90',
    _hover: {
      backgroundColor: 'colorBackgroundDestructiveWeakest',
      borderColor: 'colorBorderDestructive',
    },
  },
};

export const StyledMenuItem = React.forwardRef<HTMLDivElement | HTMLAnchorElement, MenuItemProps>(
  ({element = 'STYLED_MENU_ITEM', href, variant = 'default', tabIndex, children, ...props}, ref) => {
    return (
      <Box
        data-paste-variant={variant}
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
        {children}
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
