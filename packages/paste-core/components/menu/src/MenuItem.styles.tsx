import * as React from 'react';
import { secureExternalLink } from '@twilio-paste/anchor';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import { SelectedIcon } from '@twilio-paste/icons/esm/SelectedIcon';

import type { MenuItemProps, MenuItemVariantStyles, MenuItemVariant } from './types';
import { MenuItemVariants } from './constants';

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
    color: 'colorTextDestructive',
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

const getCheckedIconColor = ({
  disabled,
  variant,
}: {
  disabled?: boolean;
  variant: MenuItemVariant;
}): BoxProps['color'] => {
  if (disabled || variant === MenuItemVariants.DESTRUCTIVE || variant === MenuItemVariants.DESTRUCTIVE_GROUP_ITEM) {
    return 'inherit';
  }
  return 'colorTextPrimary';
};

export const getComputedVariant = (variant: MenuItemVariant, isGrouped: boolean): MenuItemVariant => {
  if (isGrouped) {
    if (variant === MenuItemVariants.DESTRUCTIVE) {
      return MenuItemVariants.DESTRUCTIVE_GROUP_ITEM;
    }
    return MenuItemVariants.GROUP_ITEM;
  }
  return variant;
};

export const StyledMenuItem = React.forwardRef<HTMLDivElement | HTMLAnchorElement, MenuItemProps>(
  ({ element = 'STYLED_MENU_ITEM', href, variant = 'default', tabIndex, children, ...props }, ref) => {
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
        {props['aria-checked'] != null ? (
          <Box as="span" display="flex" columnGap="space50" justifyContent="space-between" alignItems="center">
            {children}
            <Box as="span" visibility={props['aria-checked'] ? 'visible' : 'hidden'}>
              <SelectedIcon decorative color={getCheckedIconColor({ disabled: props.disabled, variant })} />
            </Box>
          </Box>
        ) : (
          children
        )}
      </Box>
    );
  },
);

StyledMenuItem.displayName = 'StyledMenuItem';
