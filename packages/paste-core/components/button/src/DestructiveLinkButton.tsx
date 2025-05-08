import type { BoxStyleProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import merge from "deepmerge";
import * as React from "react";

import { BaseStyles, SizeStyles } from "./styles";
import type { DirectButtonProps } from "./types";

const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: "colorTextLinkDestructive",
  textAlign: "left",
  transition: "none",
  _hover: { color: "colorTextLinkDestructiveStrongest", textDecoration: "underline" },
  _active: { color: "colorTextLinkDestructiveStrongest", textDecoration: "underline" },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: "colorTextWeaker",
  textAlign: "left",
  _hover: { color: "colorTextWeaker" },
  _active: { color: "colorTextWeaker" },
  _focus: { color: "colorTextWeaker" },
});

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {
  color: "colorTextWeaker",
  textAlign: "left",
  _hover: { color: "colorTextLinkDestructiveWeak" },
  _active: { color: "colorTextLinkDestructiveWeak" },
  _focus: { color: "colorTextLinkDestructiveWeak" },
});

const linkSizeStyles = (size: keyof typeof SizeStyles): BoxStyleProps =>
  merge(SizeStyles[size], {
    borderRadius: "borderRadius20",
  });

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const DestructiveLinkButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({ size, buttonState, fullWidth, as = "a", ...props }, ref) => {
    // Must spread size styles after button styles
    return (
      <Box
        ref={ref}
        width={fullWidth ? "100%" : "auto"}
        {...safelySpreadBoxProps({ as, ...props })}
        {...ButtonStyleMapping[buttonState]}
        {...linkSizeStyles(size)}
      />
    );
  },
);

DestructiveLinkButton.displayName = "DestructiveLinkButton";

export { DestructiveLinkButton };
