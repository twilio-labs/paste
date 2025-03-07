import type { BoxStyleProps } from "@twilio-paste/box";
import { Box } from "@twilio-paste/box";
import merge from "deepmerge";
import * as React from "react";

import { BaseStyles, SizeStyles } from "./styles";
import type { DirectButtonProps } from "./types";

const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  fontWeight: "inherit",
  color: "inherit",
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, { fontSize: "inherit", fontWeight: "inherit" });

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, { fontSize: "inherit", fontWeight: "inherit" });

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const ResetButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({ size, buttonState, fullWidth, as = "button", ...props }, ref) => {
    // Must spread size styles after button styles
    return (
      <Box
        ref={ref}
        width={fullWidth ? "100%" : "auto"}
        {...ButtonStyleMapping[buttonState]}
        {...SizeStyles[size]}
        as={as}
        {...(props as any)}
      />
    );
  },
);

ResetButton.displayName = "ResetButton";

export { ResetButton };
