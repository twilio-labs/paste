import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import * as React from "react";

export type SidebarFooterProps = BoxProps;

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
