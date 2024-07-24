import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import type { SidePanelFooterProps } from "./types";

const SidePanelFooter = React.forwardRef<HTMLDivElement, SidePanelFooterProps>(
  ({ element = "SIDE_PANEL_FOOTER", variant = "default", children, justifyContent = "flex-start", ...props }, ref) => {
    return (
      <Box
        width="100%"
        paddingX={variant === "chat" ? "space50" : "space70"}
        paddingBottom="space50"
        paddingTop={variant === "chat" ? "space0" : "space50"}
        boxShadow={variant === "chat" ? "none" : "shadow"}
        marginBottom="spaceNegative70"
        zIndex="zIndex20"
        display="flex"
        columnGap="space40"
        rowGap="space40"
        justifyContent={justifyContent}
        flexWrap="wrap"
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
      >
        {children}
      </Box>
    );
  },
);

SidePanelFooter.displayName = "SidePanelFooter";

export { SidePanelFooter };
