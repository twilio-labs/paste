import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { AIMessageVariantContext } from "./AIMessageVariantContext";
import type { AIMessageVariants } from "./AIMessageVariantContext";

export interface AIChatMessageProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageProps
   */
  element?: BoxElementProps["element"];
  /**
   * The variant of the message to distiguish between user and bot messages
   *
   * @default null
   * @type {AIMessageVariants}
   * @memberof AIChatMessageProps
   */
  variant: AIMessageVariants;
}

export const AIChatMessage = React.forwardRef<HTMLDivElement, AIChatMessageProps>(
  ({ children, element = "AI_CHAT_MESSAGE", variant, ...props }, ref) => {
    return (
      <AIMessageVariantContext.Provider value={variant}>
        <Box
          role="listitem"
          display="flex"
          flexDirection="column"
          rowGap="space40"
          ref={ref}
          element={element}
          {...safelySpreadBoxProps(props)}
        >
          {children}
        </Box>
      </AIMessageVariantContext.Provider>
    );
  },
);

AIChatMessage.displayName = "AIChatMessage";
