import type { BoxStyleProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import merge from "deepmerge";
import * as React from "react";

import { BaseStyles, SizeStyles, ToggleIconButtonStyles } from "./styles";
import type { DirectButtonProps } from "./types";

/*
 * defensively resetting 'color' on pseudostyles from over zealous
 * legacy global styles "a {...}" when button is set as an anchor
 */
const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: "colorTextIcon",
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
  _pressed: {
    backgroundColor: "colorBackgroundStrong",
    color: "colorTextWeak",
  },
  _pressed_hover: {
    backgroundColor: "colorBackgroundStrong",
    color: "colorTextWeak",
  },
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const SecondaryIconButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({ size, buttonState, fullWidth, pressed, as = "button", ...props }, ref) => {
    const toggleStyles = pressed === undefined ? {} : ToggleIconButtonStyles;

    // Must spread size styles after button styles
    return (
      <Box
        ref={ref}
        as={as}
        aria-pressed={pressed}
        width={fullWidth ? "100%" : "auto"}
        {...safelySpreadBoxProps(props)}
        {...toggleStyles}
        {...ButtonStyleMapping[buttonState]}
        {...SizeStyles[size]}
      />
    );
  },
);

SecondaryIconButton.displayName = "SecondaryIconButton";

export { SecondaryIconButton };
