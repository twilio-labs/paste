import type { BoxElementProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { Footnote } from "@twilio-paste/footnote";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageSourceProps extends HTMLPasteProps<"div"> {
  children: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE_SOURCE"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageSourceProps
   */
  element?: BoxElementProps["element"];
}

export const AIChatMessageSource = React.forwardRef<HTMLDivElement, AIChatMessageSourceProps>(
  ({ children, element = "AI_CHAT_MESSAGE_SOURCE", ...props }, ref) => {
    return (
      <Box as="span" ref={ref} element={element} paddingX="space10" {...safelySpreadBoxProps(props)}>
        <Footnote element={`${element}_FOOTNOTE`}>{children}</Footnote>
      </Box>
    );
  },
);

AIChatMessageSource.displayName = "AIChatMessageSource";
