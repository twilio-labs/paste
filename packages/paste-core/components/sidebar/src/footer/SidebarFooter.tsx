import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export type SidebarFooterProps = HTMLPasteProps<"div"> & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDEBAR_FOOTER"
   * @type {BoxProps["element"]}
   */
  element?: BoxProps["element"];
};

export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ element = "SIDEBAR_FOOTER", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        flexShrink={0}
        position="relative"
        padding="space60"
        transition="padding-right 100ms ease"
        ref={ref}
        element={element}
      />
    );
  },
);

SidebarFooter.displayName = "SidebarFooter";
