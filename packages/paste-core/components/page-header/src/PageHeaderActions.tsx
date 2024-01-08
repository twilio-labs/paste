import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { PageHeaderContext } from "./PageHeader";

export interface PageHeaderActionsProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'PAGE_HEADER_ACTIONS'
   * @type {BoxProps['element']}
   * @memberof PageHeaderActionsProps
   */
  element?: BoxProps["element"];
}

const PageHeaderActions = React.forwardRef<HTMLDivElement, PageHeaderActionsProps>(
  ({ element = "PAGE_HEADER_ACTIONS", children, ...props }, ref) => {
    const { size } = React.useContext(PageHeaderContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        gridArea="actions"
        justifySelf="end"
        alignSelf="start"
        paddingLeft="space70"
        lineHeight={size === "compact" ? "lineHeight60" : "lineHeight90"}
        flexWrap="wrap"
      >
        {children}
      </Box>
    );
  },
);

PageHeaderActions.displayName = "PageHeaderActions";

export { PageHeaderActions };
