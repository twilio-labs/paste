import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { AIMessageContext } from "./AIMessageContext";
import type { AIMessageVariants } from "./AIMessageContext";

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
   * @type {AIMessageVariants}
   * @memberof AIChatMessageProps
   */
  variant: AIMessageVariants;
  /**
   * Custom id for the message body
   *
   * @default unique ID
   * @type {string}
   * @memberof AIChatMessageProps
   */
  id?: string;
}

export const AIChatMessage = React.forwardRef<HTMLDivElement, AIChatMessageProps>(
  ({ children, element = "AI_CHAT_MESSAGE", variant, id, ...props }, ref) => {
    const AIChatMessageId = id || useUID();
    return (
      <AIMessageContext.Provider value={{ variant, id: AIChatMessageId }}>
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
      </AIMessageContext.Provider>
    );
  },
);

AIChatMessage.displayName = "AIChatMessage";
