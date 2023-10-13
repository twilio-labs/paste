import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import type { Element } from "./types";

export interface OptionGroupProps extends HTMLPasteProps<"optgroup"> {
  label: string;
  children: NonNullable<React.ReactNode>;
  element?: Element;
}

const OptionGroup = React.forwardRef<HTMLOptGroupElement, OptionGroupProps>(
  ({ label, children, element = "OPTION_GROUP", ...props }, ref) => (
    <Box
      ref={ref}
      label={label}
      {...safelySpreadBoxProps(props)}
      element={element}
      as="optgroup"
      backgroundColor="inherit"
      color="inherit"
      fontFamily="inherit"
      fontWeight="fontWeightMedium"
      fontStyle="normal"
      margin="space20"
    >
      {children}
    </Box>
  ),
);

OptionGroup.displayName = "OptionGroup";

export { OptionGroup };
