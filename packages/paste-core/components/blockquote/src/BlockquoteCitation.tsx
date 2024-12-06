import { Anchor } from "@twilio-paste/anchor";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import React from "react";

import { BlockquoteContext } from "./BlockquoteContext";

export interface BlockquoteCitationProps extends HTMLPasteProps<"div"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'BLOCKQUOTE_CITATION'
   * @type {BoxProps['element']}
   * @memberof BlockquoteCitationProps
   */
  element?: BoxProps["element"];

  /**
   * The author of the quote
   * @type {string}
   * @memberof BlockquoteCitationProps
   */
  author: string;

  /**
   * The source of the quote
   * @type {string}
   * @memberof BlockquoteCitationProps
   */
  source?: string;
}

export const BlockquoteCitation = React.forwardRef<HTMLDivElement, BlockquoteCitationProps>(
  ({ element = "BLOCKQUOTE_CITATION", author, source, ...props }, ref) => {
    const { url } = React.useContext(BlockquoteContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        marginTop="space30"
        marginBottom="space0"
        as="p"
        element={element}
        ref={ref}
      >
        —{" "}
        <Text as="span" fontWeight="fontWeightSemibold" element={`${element}_AUTHOR`}>
          {author}
        </Text>
        {source ? (
          <>
            ,{" "}
            <Box as="cite" fontStyle="normal" element={`${element}_CITE`}>
              {url ? (
                <Anchor href={url} showExternal element={`${element}_ANCHOR`}>
                  {source}
                </Anchor>
              ) : (
                <Text as="span" element={`${element}_TEXT`}>
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

BlockquoteCitation.displayName = "BlockquoteCitation";
