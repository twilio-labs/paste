import type { BoxStyleProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import merge from "deepmerge";
import * as React from "react";

import { BaseStyles, SizeStyles } from "./styles";
import type { DirectButtonProps } from "./types";

const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: "colorTextPrimary",
  textAlign: "left",
  transition: "none",
  _hover: { color: "colorTextPrimaryStrongest", textDecoration: "underline" },
  _active: { color: "colorTextPrimaryStrongest", textDecoration: "underline" },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: "colorTextWeaker",
  textAlign: "left",
});

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {
  color: "colorTextWeaker",
  textAlign: "left",
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const LinkButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({ size, buttonState, fullWidth, as = "a", ...props }, ref) => {
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

LinkButton.displayName = "LinkButton";

export { LinkButton };
