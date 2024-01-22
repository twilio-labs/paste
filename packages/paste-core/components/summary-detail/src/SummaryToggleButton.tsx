import { Box, type BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ChevronDisclosureIcon } from "@twilio-paste/icons/esm/ChevronDisclosureIcon";
import * as React from "react";

interface SummaryToggleButtonProps {
  element?: BoxProps["element"];
  "aria-expanded"?: boolean;
}
export const SummaryToggleButton = React.forwardRef<HTMLButtonElement, SummaryToggleButtonProps>(
  ({ element = "SUMMARY_TOGGLE_BUTTON", ...props }, ref) => {
    const rotation = props["aria-expanded"] ? "90" : "0";
    return (
      <Button
        variant="reset"
        size="reset"
        width="sizeIcon40"
        height="sizeIcon40"
        borderRadius="borderRadius20"
        ref={ref}
        element={element}
        {...props}
      >
        <Box as="span" element={`${element}_ICON_WRAPPER`} transform={`translateX(0) rotate(${rotation}deg)`}>
          <ChevronDisclosureIcon decorative={false} title="expand" size="sizeIcon40" element={`${element}_ICON}`} />
        </Box>
      </Button>
    );
  },
);
SummaryToggleButton.displayName = "SummaryToggleButton";
