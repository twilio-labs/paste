import * as React from 'react';
import {secureExternalLink} from '@twilio-paste/anchor';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {MenuPrimitiveItem} from '@twilio-paste/menu-primitive';
import type {MenuItemProps} from './types';
import {MenuItemVariants} from './constants';
import {MenuGroupContext} from './MenuGroup';

export const StyledMenuItem = React.forwardRef<HTMLDivElement | HTMLAnchorElement, MenuItemProps>((props, ref) => {
  return (
    <Box
      {...(props.href && secureExternalLink(props.href))}
      {...(props.href ? {as: 'a'} : {as: 'button'})}
      {...safelySpreadBoxProps(props)}
      color={props['aria-disabled'] ? 'colorTextWeaker' : 'colorText'}
      border="none"
      background="none"
      display="block"
      width="100%"
      textAlign="left"
      lineHeight="lineHeight30"
      paddingY="space30"
      paddingX={props.variant === MenuItemVariants.GROUP_ITEM ? 'space90' : 'space70'}
      textDecoration={props.tabIndex === 0 ? 'underline' : 'none'}
      _hover={{
        cursor: 'pointer',
      }}
      _focus={{
        color: 'colorTextLink',
        outline: 'none',
      }}
      _disabled={{cursor: 'not-allowed'}}
      ref={ref}
    >
      {props.children}
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
