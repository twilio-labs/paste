import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import type { Element } from "./types";

export interface OptionGroupProps extends HTMLPasteProps<"optgroup"> {
  /**
   * Sets the label of the option group.
   *
   * @type {string}
   * @memberof OptionGroupProps
   */
  label: string;
  /**
   * Must be `Option`.
   *
   * @type {NonNullable<React.ReactNode>}
   * @memberof OptionGroupProps
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "OPTION_GROUP"
   * @type {Element}
   * @memberof OptionGroupProps
   */
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
