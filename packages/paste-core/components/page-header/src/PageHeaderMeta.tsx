import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { PageHeaderContext } from "./PageHeader";

export interface PageHeaderMetaProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'PAGE_HEADER_META'
   * @type {BoxProps['element']}
   * @memberof PageHeaderMetaProps
   */
  element?: BoxProps["element"];
}

const PageHeaderMeta = React.forwardRef<HTMLDivElement, PageHeaderMetaProps>(
  ({ element = "PAGE_HEADER_META", children, ...props }, ref) => {
    const { size } = React.useContext(PageHeaderContext);
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        gridArea="meta"
        marginTop={size === "compact" ? "space10" : "space40"}
        display="flex"
        flexWrap="wrap"
        columnGap={size === "compact" ? "space40" : "space50"}
        rowGap="space30"
        alignItems="center"
        maxWidth="size70"
        color="colorTextWeak"
        fontSize="fontSize20"
        lineHeight="lineHeight20"
        fontWeight="fontWeightMedium"
      >
        {children}
      </Box>
    );
  },
);

PageHeaderMeta.displayName = "PageHeaderMeta";

export { PageHeaderMeta };
