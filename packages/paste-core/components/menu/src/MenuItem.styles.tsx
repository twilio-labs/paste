import { secureExternalLink } from "@twilio-paste/anchor";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { SelectedIcon } from "@twilio-paste/icons/esm/SelectedIcon";
import * as React from "react";

import { MenuItemVariants } from "./constants";
import type { MenuItemProps, MenuItemVariant, MenuItemVariantStyles } from "./types";

const baseVariantStyles: MenuItemVariantStyles = {
  [MenuItemVariants.DEFAULT]: {
    color: "colorText",
    _hover: {
      color: "colorTextPrimary",
      backgroundColor: "colorBackgroundBodyElevationPrimary",
    },
    _focus: {
      color: "colorTextPrimary",
      backgroundColor: "colorBackgroundBodyElevationPrimary",
    },
    _checked: {
      backgroundColor: "colorBackgroundBodyElevationPrimary",
      color: "colorText",
    },
  },
  [MenuItemVariants.DESTRUCTIVE]: {
    color: "colorTextDestructive",
    _hover: {
      backgroundColor: "colorBackgroundDestructiveWeakest",
    },
    _focus: {
      backgroundColor: "colorBackgroundDestructiveWeakest",
    },
  },
};
const groupVariantStyles: MenuItemVariantStyles = {
  [MenuItemVariants.GROUP_ITEM]: {
    ...baseVariantStyles[MenuItemVariants.DEFAULT],
    paddingLeft: "space90",
  },
  [MenuItemVariants.DESTRUCTIVE_GROUP_ITEM]: {
    ...baseVariantStyles[MenuItemVariants.DESTRUCTIVE],
    paddingLeft: "space90",
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
}): BoxProps["color"] => {
  if (disabled || variant === MenuItemVariants.DESTRUCTIVE || variant === MenuItemVariants.DESTRUCTIVE_GROUP_ITEM) {
    return "inherit";
  }
  return "colorTextPrimary";
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
  ({ element = "STYLED_MENU_ITEM", href, variant = "default", tabIndex, children, ...props }, ref) => {
    return (
      <Box
        variant={variant}
        {...(href && secureExternalLink(href))}
        href={href}
        as={href ? "a" : "button"}
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
        outline="none"
        paddingY="space30"
        borderRadius="borderRadius30"
        marginY="space10"
        marginX="space20"
        cursor="pointer"
        paddingX="space70"
        width="fill-available"
        {...variantStyles[variant]}
        _checked_hover={
          {
            backgroundColor: "colorBackgroundWeakerElevation",
            color: variant === MenuItemVariants.DESTRUCTIVE ? "colorTextDestructive" : "colorTextPrimary",
            "& [data-paste-element='ICON']": {
              color: "colorTextIcon",
            },
          } as BoxProps["_checked_hover"]
        }
        _disabled={{
          color: "colorTextWeaker",
          cursor: "not-allowed",
          backgroundColor: "colorBackgroundWeaker",
          borderColor: "transparent",
        }}
        ref={ref}
      >
        {props["aria-checked"] != null ? (
          <Box as="span" display="flex" columnGap="space50" justifyContent="space-between" alignItems="center">
            {children}
            <Box as="span" visibility={props["aria-checked"] ? "visible" : "hidden"}>
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

StyledMenuItem.displayName = "StyledMenuItem";
