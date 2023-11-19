import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface SidebarNavigationDisclosureHeadingWrapperProps extends HTMLPasteProps<"div"> {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDEBAR_NAVIGATION_DISCLOSURE_HEADING_WRAPPER"
   * @type {BoxProps["element"]}
   * @memberof SidebarNavigationDisclosureHeadingWrapperProps
   */
  element?: BoxProps["element"];
}

export const SidebarNavigationDisclosureHeadingWrapper = React.forwardRef<
  HTMLDivElement,
  SidebarNavigationDisclosureHeadingWrapperProps
>(({ element = "SIDEBAR_NAVIGATION_DISCLOSURE_HEADING_WRAPPER", ...props }, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      element={element}
      ref={ref}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      columnGap="space30"
    />
  );
});

SidebarNavigationDisclosureHeadingWrapper.displayName = "SidebarNavigationDisclosureHeadingWrapper";
