import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
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
  /**
   * Remove the bottom margin
   * @type {"space0" | "space70"}
   * @memberof BlockquoteProps
   */
  marginBottom?: "space0" | "space70";
}

export const Blockquote = React.forwardRef<HTMLDivElement, BlockquoteProps>(
  ({ children, element = "BLOCKQUOTE", url, marginBottom = "space70", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        display="flex"
        columnGap="space50"
        alignItems="flex-start"
        lineHeight="lineHeight30"
        fontSize="fontSize30"
        marginBottom={marginBottom}
        element={element}
      >
        <BlockquoteIcon element={`${element}_ICON`} decorative={true} color="colorTextIcon" />
        <BlockquoteContext.Provider value={{ url }}>
          <Box element={`INNER_${element}`}>{children}</Box>
        </BlockquoteContext.Provider>
      </Box>
    );
  },
);

Blockquote.displayName = "Blockquote";
