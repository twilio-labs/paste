import * as React from 'react';
import {secureExternalLink} from '@twilio-paste/anchor';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {MenuPrimitiveItem} from '@twilio-paste/menu-primitive';
import type {MenuItemProps} from './types';
import {MenuItemVariants} from './constants';
import {MenuGroupContext} from './MenuGroup';

export const StyledMenuItem = React.forwardRef<HTMLDivElement | HTMLAnchorElement, MenuItemProps>(
  ({element = 'STYLED_MENU_ITEM', ...props}, ref) => {
    return (
      <Box
        {...(props.href && secureExternalLink(props.href))}
        as={props.href ? 'a' : 'button'}
        {...safelySpreadBoxProps(props)}
        element={element}
        appearance="none"
        background="none"
        border="none"
        color={
          props['aria-disabled']
            ? 'colorTextWeaker'
            : props.variant === MenuItemVariants.DESTRUCTIVE
            ? 'colorTextLinkDestructive'
            : 'colorText'
        }
        display="block"
        textAlign="left"
        fontFamily="inherit"
        fontSize="fontSize30"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight30"
        margin="space0"
        outline="none"
        paddingY="space30"
        paddingX={props.variant === MenuItemVariants.GROUP_ITEM ? 'space90' : 'space70'}
        textDecoration={props.tabIndex === 0 ? 'underline' : 'none'}
        width="100%"
        _hover={{
          cursor: 'pointer',
        }}
        _focus={{
          color: `${
            props.variant === MenuItemVariants.DESTRUCTIVE ? 'colorTextLinkDestructiveStronger' : 'colorTextLink'
          }`,
        }}
        _disabled={{cursor: 'not-allowed'}}
        ref={ref}
      >
        {props.children}
      </Box>
    );
  }
);

StyledMenuItem.displayName = 'StyledMenuItem';

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({as = StyledMenuItem, variant: _variant, element = 'MENU_ITEM', ...props}, ref) => {
    const variant = _variant || React.useContext(MenuGroupContext);
    return <MenuPrimitiveItem {...props} element={element} variant={variant} as={as} ref={ref} />;
  }
);
MenuItem.displayName = 'MenuItem';
export {MenuItem};
