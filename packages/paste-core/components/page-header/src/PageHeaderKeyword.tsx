import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface PageHeaderKeywordProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'PAGE_HEADER_KEYWORD'
   * @type {BoxProps['element']}
   * @memberof PageHeaderKeywordProps
   */
  element?: BoxProps["element"];
}

const PageHeaderKeyword = React.forwardRef<HTMLDivElement, PageHeaderKeywordProps>(
  ({ element = "PAGE_HEADER_KEYWORD", children, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        marginBottom="space30"
        gridArea="keyword"
        display="flex"
        alignItems="center"
        columnGap="space30"
        flexWrap="wrap"
        rowGap="space30"
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

PageHeaderKeyword.displayName = "PageHeaderKeyword";

export { PageHeaderKeyword };
