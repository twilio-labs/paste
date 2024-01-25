import { Box, type BoxProps, type BoxStyleProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { DisclosurePrimitive, type DisclosurePrimitiveProps } from "@twilio-paste/disclosure-primitive";
import { ChevronDisclosureIcon } from "@twilio-paste/icons/esm/ChevronDisclosureIcon";
import * as React from "react";

import { SummaryDetailContext } from "./SummaryDetailContext";

export interface SummaryDetailToggleButtonProps
  extends Omit<DisclosurePrimitiveProps, "baseId" | "toggle" | "tabIndex" | keyof BoxStyleProps> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'SUMMARY_TOGGLE_BUTTON'
   * @type {BoxProps['element']}
   * @memberof SummaryDetailToggleButtonProps
   */
  element?: BoxProps["element"];
}

const ToggleButton = React.forwardRef<HTMLButtonElement, SummaryDetailToggleButtonProps>((props, ref) => {
  const rotation = props["aria-expanded"] ? "90" : "0";
  // Only use aria-labelledby if aria-label is not provided
  const ariaLabelledBy = props["aria-label"] ? undefined : props["aria-labelledby"];

  return (
    <Button
      ref={ref}
      variant="reset"
      size="reset"
      width="sizeIcon30"
      height="sizeIcon30"
      borderRadius="borderRadius20"
      _hover={{ backgroundColor: "colorBackground" }}
      {...props}
      aria-labelledby={ariaLabelledBy}
    >
      <Box as="span" element={`${props.element}_ICON_WRAPPER`} transform={`translateX(0) rotate(${rotation}deg)`}>
        <ChevronDisclosureIcon decorative={true} size="sizeIcon30" element={`${props.element}_ICON}`} />
      </Box>
    </Button>
  );
});
ToggleButton.displayName = "ToggleButton";

export const SummaryDetailToggleButton = React.forwardRef<HTMLButtonElement, SummaryDetailToggleButtonProps>(
  ({ element = "SUMMARY_DETAIL_TOGGLE_BUTTON", ...props }, ref) => {
    const context = React.useContext(SummaryDetailContext);

    return (
      <DisclosurePrimitive
        {...props}
        as={ToggleButton}
        {...context}
        ref={ref}
        element={element}
        aria-labelledby={context?.headerId}
      />
    );
  },
);
SummaryDetailToggleButton.displayName = "SummaryDetailToggleButton";
