import { Box, type BoxProps, safelySpreadBoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import React from "react";

import { BlockquoteContext } from "./BlockquoteContext";

export interface BlockquoteContentProps extends HTMLPasteProps<"blockquote"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'BLOCKQUOTE_CONTENT'
   * @type {BoxProps['element']}
   * @memberof BlockquoteContentProps
   */
  element?: BoxProps["element"];
}

export const BlockquoteContent = React.forwardRef<HTMLQuoteElement, BlockquoteContentProps>(
  ({ children, element = "BLOCKQUOTE_CONTENT", ...props }, ref) => {
    const { url } = React.useContext(BlockquoteContext);

    return (
      <Box {...safelySpreadBoxProps(props)} as="blockquote" margin="space0" ref={ref} element={element} cite={url}>
        {children}
      </Box>
    );
  },
);

BlockquoteContent.displayName = "BlockquoteContent";
