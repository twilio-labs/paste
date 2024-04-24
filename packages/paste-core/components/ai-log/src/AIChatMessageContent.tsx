import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps, BoxStyleProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageContentProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_BUBBLE"
   * @type {BoxProps["element"]}
   * @memberof AIChatBubbleProps
   */
  element?: BoxElementProps["element"];
}

export const AIChatMessageContent = React.forwardRef<HTMLDivElement, AIChatMessageContentProps>(
  ({ children, element = "CHAT_MESSAGE_CONTENT", ...props }, ref) => {
    return (
      <Box
        display="inline-block"
        color="colorText"
        fontSize="fontSize30"
        lineHeight="lineHeight20"
        wordWrap="break-word"
        maxWidth="100%"
        minWidth={0}
        element={element}
        ref={ref}
        whiteSpace="pre-wrap"
        {...safelySpreadBoxProps(props)}
      >
        {children}
      </Box>
    );
  },
);

AIChatMessageContent.displayName = "AIChatMessageContent";
