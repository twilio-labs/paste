import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Paragraph } from "@twilio-paste/paragraph";
import type { ParagraphProps } from "@twilio-paste/paragraph";
import * as React from "react";

import { PageHeaderContext } from "./PageHeader";

export interface PageHeaderParagraphProps extends ParagraphProps {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'PAGE_HEADER_PARAGRAPH'
   * @type {BoxProps['element']}
   * @memberof PageHeaderParagraphProps
   */
  element?: BoxProps["element"];
}

const PageHeaderParagraph = React.forwardRef<HTMLDivElement, PageHeaderParagraphProps>(
  ({ element = "PAGE_HEADER_PARAGRAPH", children, ...props }, ref) => {
    const { size } = React.useContext(PageHeaderContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={`${element}_WRAPPER`}
        marginTop={size === "compact" ? "space40" : "space70"}
        gridArea="paragraph"
        maxWidth="size70"
      >
        <Paragraph element={element} ref={ref} marginBottom="space0">
          {children}
        </Paragraph>
      </Box>
    );
  },
);

PageHeaderParagraph.displayName = "PageHeaderParagraph";

export { PageHeaderParagraph };
