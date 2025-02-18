import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface SidebarHeaderProps extends HTMLPasteProps<"div"> {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDEBAR_HEADER"
   * @type {BoxProps["element"]}
   * @memberof SidebarHeaderProps
   */
  element?: BoxProps["element"];
}

export const SidebarHeader = React.forwardRef<HTMLButtonElement, SidebarHeaderProps>(
  ({ element = "SIDEBAR_HEADER", children, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        ref={ref}
        paddingX="space60"
        minHeight="sizeTopbar"
        borderBottomWidth="borderWidth10"
        // borderBottomStyle="solid"
        borderBottomColor="colorBorderInverseWeaker"
        boxShadow="shadowElevationBottomInverse05"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexShrink={0}
        columnGap="space50"
        overflow="hidden"
      >
        {children}
      </Box>
    );
  },
);

SidebarHeader.displayName = "SidebarHeader";
