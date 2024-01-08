import type { BoxProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import type { HeadingVariants, asTags as AsTags } from "@twilio-paste/heading";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { PageHeaderContext } from "./PageHeader";

export interface PageHeaderHeadingProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * The HTML element to render.
   *
   * @type {AsTags}
   * @memberof HeadingProps
   */
  as?: AsTags;
  /**
   * Style variant to apply to the heading, affects the visual appearance of the heading.
   *
   * @default 'heading10' for default size, 'heading20' for compact size
   * @type {HeadingVariants}
   * @memberof HeadingProps
   */
  variant?: HeadingVariants;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'PAGE_HEADER_HEADING'
   * @type {BoxProps['element']}
   * @memberof PageHeaderHeadingProps
   */
  element?: BoxProps["element"];
}

const PageHeaderHeading = React.forwardRef<HTMLDivElement, PageHeaderHeadingProps>(
  ({ element = "PAGE_HEADER_HEADING", children, as = "h1", variant, ...props }, ref) => {
    const { size } = React.useContext(PageHeaderContext);
    const defaultVariant = size === "compact" ? "heading30" : "heading10";
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={`${element}_WRAPPER`}
        gridArea="heading"
        alignSelf="center"
        maxWidth="size70"
      >
        <Heading ref={ref} element={element} as={as} variant={variant || defaultVariant} marginBottom="space0">
          {children}
        </Heading>
      </Box>
    );
  },
);

PageHeaderHeading.displayName = "PageHeaderHeading";

export { PageHeaderHeading };
