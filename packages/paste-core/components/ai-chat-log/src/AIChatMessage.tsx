import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";
import { MessageVariantContext, MessageVariants } from "./MessageVariantContext";

export interface AIChatMessageProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_MESSAGE"
   * @type {BoxProps["element"]}
   * @memberof ChatMessageProps
   */
  element?: BoxElementProps["element"];
  /**
   *
   * @default null
   * @type {MessageVariants}
   * @memberof ChatMessageProps
   */
  variant: MessageVariants;
}

export const AIChatMessage = React.forwardRef<HTMLDivElement, AIChatMessageProps>(
  ({ children, element = "AI_CHAT_MESSAGE", variant, ...props }, ref) => {
    return (
      <MessageVariantContext.Provider value={variant}>
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
      </MessageVariantContext.Provider>
    );
  },
);

AIChatMessage.displayName = "AIChatMessage";
