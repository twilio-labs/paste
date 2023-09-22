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
  color: "colorTextPrimary",
  _hover: {
    color: "colorTextPrimaryStrongest",
  },
  _active: {
    color: "colorTextPrimaryStrongest",
  },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: "colorTextPrimary",
});

const disabledStyles = merge(BaseStyles.disabled, {
  color: "colorTextWeaker",
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const PrimaryIconButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({ size, buttonState, fullWidth, ...props }, ref) => {
    // Must spread size styles after button styles
    return (
      <Box
        ref={ref}
        width={fullWidth ? "100%" : "auto"}
        {...safelySpreadBoxProps(props)}
        {...ButtonStyleMapping[buttonState]}
        {...SizeStyles[size]}
      />
    );
  },
);
PrimaryIconButton.defaultProps = {
  as: "button",
};

PrimaryIconButton.displayName = "PrimaryIconButton";

export { PrimaryIconButton };
