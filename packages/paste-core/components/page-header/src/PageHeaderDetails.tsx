import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { PageHeaderContext } from "./PageHeader";

export interface PageHeaderDetailsProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'PAGE_HEADER_DETAILS'
   * @type {BoxProps['element']}
   * @memberof PageHeaderDetailsProps
   */
  element?: BoxProps["element"];
}

const defaultGridTemplateAreas =
  '"keyword keyword keyword" "prefix heading actions" "meta meta meta" "paragraph paragraph paragraph"';
const compactGridTemplateAreas =
  '"keyword keyword keyword" "prefix heading actions" "prefix meta ." "paragraph paragraph paragraph"';

const PageHeaderDetails = React.forwardRef<HTMLDivElement, PageHeaderDetailsProps>(
  ({ element = "PAGE_HEADER_DETAILS", children, ...props }, ref) => {
    const { size } = React.useContext(PageHeaderContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        marginBottom={size === "compact" ? "space50" : "space130"}
        display="grid"
        gridTemplateColumns="min-content auto 1fr"
        gridTemplateRowsw="auto-fit"
        gridTemplateAreas={size === "compact" ? compactGridTemplateAreas : defaultGridTemplateAreas}
      >
        {children}
      </Box>
    );
  },
);

PageHeaderDetails.displayName = "PageHeaderDetails";

export { PageHeaderDetails };
