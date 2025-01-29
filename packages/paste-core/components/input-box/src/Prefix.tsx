import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { BackgroundColor, BorderColor } from "@twilio-paste/style-props";
import * as React from "react";

import type { Variants } from "./types";

export interface PrefixProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  /*
   * Requiring element here instead of extending directly from BoxProps.
   * This ensures an element prop is always passed on these composite components.
   */
  element: BoxProps["element"];
  variant?: Variants;
}

const Prefix = React.forwardRef<HTMLDivElement, PrefixProps>(
  ({ children, disabled, element = "PREFIX", variant }, ref) => {
    let backgroundColor = "colorBackgroundBodyElevation" as BackgroundColor;

    if (disabled && variant === "inverse") {
      backgroundColor = "none";
    } else if (variant === "inverse") {
      backgroundColor = "colorBackgroundInverseElevation";
    } else if (disabled) {
      backgroundColor = "none";
    }

    if (children == null) return null;
    return (
      <Box
        alignItems="flex-start"
        backgroundColor={backgroundColor}
        borderBottomLeftRadius="borderRadius20"
        borderTopLeftRadius="borderRadius20"
        display="flex"
        element={`${element}_PREFIX`}
        lineHeight="lineHeight20"
        padding="space30"
        variant={variant}
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

Prefix.displayName = "Prefix";

export { Prefix };
