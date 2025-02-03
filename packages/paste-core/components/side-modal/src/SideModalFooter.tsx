import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface SideModalFooterProps extends HTMLPasteProps<"div"> {
  /**
   * Child components to render into the SideModalFooter
   *
   * @type {NonNullable<React.ReactNode>}
   * @memberof SideModalFooterProps
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDE_MODAL_FOOTER"
   * @type {BoxElementProps["element"]}
   * @memberof SideModalFooterProps
   */
  element?: BoxElementProps["element"];
}
const SideModalFooter = React.forwardRef<HTMLDivElement, SideModalFooterProps>(
  ({ children, element = "SIDE_MODAL_FOOTER", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        element={element}
        ref={ref}
        paddingRight="space90"
        paddingLeft="space90"
        paddingBottom="space90"
        display="flex"
      >
        {children}
      </Box>
    );
  },
);
SideModalFooter.displayName = "SideModalFooter";

export { SideModalFooter };
