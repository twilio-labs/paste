import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface PageHeaderInPageNavigationProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'PAGE_HEADER_IN_PAGE_NAVIGATION'
   * @type {BoxProps['element']}
   * @memberof PageHeaderInPageNavigationProps
   */
  element?: BoxProps["element"];
}

const PageHeaderInPageNavigation = React.forwardRef<HTMLDivElement, PageHeaderInPageNavigationProps>(
  ({ element = "PAGE_HEADER_IN_PAGE_NAVIGATION", children, ...props }, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} ref={ref} element={element} gridArea="content_barrier">
        {children}
      </Box>
    );
  },
);

PageHeaderInPageNavigation.displayName = "PageHeaderInPageNavigation";

export { PageHeaderInPageNavigation };
