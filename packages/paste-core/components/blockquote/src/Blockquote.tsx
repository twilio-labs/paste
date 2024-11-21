import { Box, type BoxProps } from "@twilio-paste/box";
import { BlockquoteIcon } from "@twilio-paste/icons/esm/BlockquoteIcon";
import type { HTMLPasteProps } from "@twilio-paste/types";
import React from "react";

import { BlockquoteContext } from "./BlockquoteContext";

export interface BlockquoteProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'BLOCKQUOTE'
   * @type {BoxProps['element']}
   * @memberof BlockquoteProps
   */
  element?: BoxProps["element"];
  /**
   * The URL to the source of the quote
   * @type {string}
   * @memberof BlockquoteProps
   */
  url?: string;
}

export const Blockquote = React.forwardRef<HTMLDivElement, BlockquoteProps>(
  ({ children, element = "BLOCKQUOTE", url, ...props }, ref) => {
    return (
      <Box
        {...props}
        ref={ref}
        display="flex"
        columnGap="space50"
        alignItems="flex-start"
        lineHeight="lineHeight30"
        fontSize="fontSize30"
        element={element}
      >
        <BlockquoteIcon decorative={true} />
        <BlockquoteContext.Provider value={{ url }}>
          <Box>{children}</Box>
        </BlockquoteContext.Provider>
      </Box>
    );
  },
);

Blockquote.displayName = "Blockquote";
