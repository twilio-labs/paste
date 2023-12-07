import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { PageHeaderContext } from "./PageHeader";

export interface PageHeaderPrefixProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'PAGE_HEADER_PREFIX'
   * @type {BoxProps['element']}
   * @memberof PageHeaderPrefixProps
   */
  element?: BoxProps["element"];
}

const PageHeaderPrefix = React.forwardRef<HTMLDivElement, PageHeaderPrefixProps>(
  ({ element = "PAGE_HEADER_PREFIX", children, ...props }, ref) => {
    const { size } = React.useContext(PageHeaderContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        gridArea="prefix"
        marginRight={size === "compact" ? "space30" : "space40"}
        alignSelf="start"
      >
        {children}
      </Box>
    );
  },
);

PageHeaderPrefix.displayName = "PageHeaderPrefix";

export { PageHeaderPrefix };
