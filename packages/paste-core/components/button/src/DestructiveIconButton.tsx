import type { BoxStyleProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import merge from "deepmerge";
import * as React from "react";

import { BaseStyles, SizeStyles } from "./styles";
import type { DirectButtonProps } from "./types";

/*
 * defensively resetting 'color' on pseudostyles from over zealous
 * legacy global styles "a {...}" when button is set as an anchor
 */
const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: "colorTextDestructive",
  _hover: {
    color: "colorTextDestructiveStrongest",
  },
  _active: {
    color: "colorTextDestructiveStrongest",
  },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: "colorTextWeaker",
});

const disabledStyles = merge(BaseStyles.disabled, {
  color: "colorTextWeaker",
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const DestructiveIconButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({ size, buttonState, fullWidth, as = "button", ...props }, ref) => {
    // Must spread size styles after button styles
    return (
      <Box
        ref={ref}
        width={fullWidth ? "100%" : "auto"}
        {...safelySpreadBoxProps({ as, ...props })}
        {...ButtonStyleMapping[buttonState]}
        {...SizeStyles[size]}
      />
    );
  },
);

DestructiveIconButton.displayName = "DestructiveIconButton";

export { DestructiveIconButton };
