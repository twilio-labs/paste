import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface PageHeaderSeparatorProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'PAGE_HEADER_SEPARATOR'
   * @type {BoxProps['element']}
   * @memberof PageHeaderSeparatorProps
   */
  element?: BoxProps["element"];
}

const PageHeaderSeparator = React.forwardRef<HTMLDivElement, PageHeaderSeparatorProps>(
  ({ element = "PAGE_HEADER_SEPARATOR", children, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        gridArea="content_barrier"
        marginBottom="space60"
      >
        {children}
      </Box>
    );
  },
);

PageHeaderSeparator.displayName = "PageHeaderSeparator";

export { PageHeaderSeparator };
