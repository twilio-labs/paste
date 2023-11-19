import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { asTags } from "@twilio-paste/heading";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface CodeBlockHeaderProps extends HTMLPasteProps<asTags> {
  children: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CODE_BLOCK_HEADER"
   * @type {BoxElementProps["element"]}
   * @memberof CodeBlockHeaderProps
   */
  element?: BoxProps["element"];
  /**
   * Heading level to render
   *
   * @default "h3"
   * @type {asTags}
   * @memberof CodeBlockHeaderProps
   */
  as?: asTags;
}

export const CodeBlockHeader = React.forwardRef<HTMLHeadingElement, CodeBlockHeaderProps>(
  ({ children, element = "CODE_BLOCK_HEADER", as = "h3", ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      element={element}
      as={as}
      backgroundColor="colorBackgroundInverseStrong"
      color="colorTextInverse"
      paddingY="space50"
      paddingX="space70"
      margin="space0"
      borderTopLeftRadius="borderRadius20"
      borderTopRightRadius="borderRadius20"
      fontWeight="fontWeightSemibold"
      fontSize="fontSize30"
    >
      {children}
    </Box>
  ),
);

CodeBlockHeader.displayName = "CodeBlockHeader";
