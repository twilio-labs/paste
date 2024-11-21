import { Anchor } from "@twilio-paste/anchor";
import { Box, type BoxProps } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import React from "react";

import { BlockquoteContext } from "./BlockquoteContext";

export interface BlockquoteSourceProps extends HTMLPasteProps<"div"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'BLOCKQUOTE_SOURCE'
   * @type {BoxProps['element']}
   * @memberof BlockquoteSourceProps
   */
  element?: BoxProps["element"];

  /**
   * The author of the quote
   * @type {string}
   * @memberof BlockquoteSourceProps
   */
  author: string;

  /**
   * The source of the quote
   * @type {string}
   * @memberof BlockquoteSourceProps
   */
  source?: string;
}

export const BlockquoteSource = React.forwardRef<HTMLDivElement, BlockquoteSourceProps>(
  ({ element = "BLOCKQUOTE_SOURCE", author, source, ...props }, ref) => {
    const { url } = React.useContext(BlockquoteContext);

    return (
      <Box marginTop="space30" as="p" element={element} {...props} ref={ref}>
        —{" "}
        <Text as="span" fontWeight="fontWeightSemibold">
          {author}
        </Text>
        {source ? (
          <>
            ,{" "}
            <Box as="cite" fontStyle="normal">
              {url ? (
                <Anchor href={url} showExternal>
                  {source}
                </Anchor>
              ) : (
                <Text as="span" fontStyle="italic">
                  {source}
                </Text>
              )}
            </Box>
          </>
        ) : null}
      </Box>
    );
  },
);

BlockquoteSource.displayName = "BlockquoteSource";
