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
  color: "colorTextInverse",
  backgroundColor: "colorBackgroundDestructive",
  boxShadow: "shadowBorderDestructive",
  _hover: {
    color: "colorTextDestructive",
    backgroundColor: "colorBackgroundBody",
    boxShadow: "shadowBorderDestructive",
  },
  _focus: {
    boxShadow: "shadowFocus",
  },
  _active: {
    color: "colorTextDestructive",
    backgroundColor: "colorBackgroundDestructiveWeakest",
    boxShadow: "shadowBorderDestructive",
  },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: "colorTextWeaker",
  backgroundColor: "colorBackgroundBody",
  boxShadow: "shadowBorderWeaker",
});

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {
  color: "colorTextWeakest",
  backgroundColor: "colorBackgroundStrong",
  boxShadow: "shadowBorderWeaker",
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const DestructiveButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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

DestructiveButton.displayName = "DestructiveButton";

export { DestructiveButton };
