import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useWindowSize } from "@twilio-paste/utils";
import * as React from "react";

import type { Variants } from "../types";

export interface SidebarOverlayContentWrapperProps extends HTMLPasteProps<"div"> {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDEBAR_OVERLAY_CONTENT_WRAPPER"
   * @type {BoxProps["element"]}
   * @memberof SidebarOverlayContentWrapperProps
   */
  element?: BoxProps["element"];
  /**
   * Whether the sidebar is collapsed / closed.
   *
   * @default false
   * @type {boolean}
   * @memberof SidebarOverlayContentWrapperProps
   */
  collapsed?: boolean;
  /**
   * Whether the sidebar should hide completely or collapse into a fixed width bar.
   *
   * @default "default"
   * @type {Variants}
   * @memberof SidebarOverlayContentWrapperProps
   */
  variant?: Variants;
}

export const SidebarOverlayContentWrapper = React.forwardRef<HTMLDivElement, SidebarOverlayContentWrapperProps>(
  ({ variant = "default", element = "SIDEBAR_OVERLAY_CONTENT_WRAPPER", children, ...props }, ref) => {
    const { breakpointIndex } = useWindowSize();
    const isMobile = breakpointIndex === 0;

    if (!isMobile && variant === "compact") {
      return (
        <Box display="flex" justifyContent="flex-start">
          <Box role="presentation" width="sizeSidebarCompact" height="100%" minHeight="1px" flexShrink={0} />
          <Box {...safelySpreadBoxProps(props)} element={element} as="div" ref={ref} width="100%">
            {children}
          </Box>
        </Box>
      );
    }
    return (
      <Box {...safelySpreadBoxProps(props)} element={element} as="div" ref={ref}>
        {children}
      </Box>
    );
  },
);
SidebarOverlayContentWrapper.displayName = "SidebarOverlayContentWrapper";
