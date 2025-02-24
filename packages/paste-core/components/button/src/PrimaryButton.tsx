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
  backgroundColor: "colorBackgroundPrimary",
  boxShadow: "shadowBorderPrimary",
  _hover: {
    color: "colorTextPrimary",
    backgroundColor: "colorBackgroundBody",
    boxShadow: "shadowBorderPrimary",
  },
  _focus: {
    boxShadow: "shadowFocus",
  },
  _active: {
    color: "colorTextPrimaryStrong",
    backgroundColor: "colorBackgroundPrimaryWeakest",
    boxShadow: "shadowBorderPrimaryStrong",
  },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: "colorTextPrimary",
  backgroundColor: "colorBackgroundBody",
  boxShadow: "shadowBorderWeak",
});

const disabledStyles = merge(BaseStyles.disabled, {
  color: "colorTextWeakest",
  backgroundColor: "colorBackgroundStrong",
  boxShadow: "shadowBorderWeaker",
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const PrimaryButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({ size, buttonState, fullWidth, as = "button", ...props }, ref) => {
    // Must spread size styles after button styles
    return (
      <Box
        ref={ref}
        as={as}
        width={fullWidth ? "100%" : "auto"}
        {...safelySpreadBoxProps(props)}
        {...ButtonStyleMapping[buttonState]}
        {...SizeStyles[size]}
      />
    );
  },
);

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };
