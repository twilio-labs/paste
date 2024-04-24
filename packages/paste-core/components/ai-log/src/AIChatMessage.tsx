import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps, BoxStyleProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

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
}

export const AIChatMessage = React.forwardRef<HTMLDivElement, AIChatMessageProps>(
  ({ children, element = "CHAT_MESSAGE", ...props }, ref) => {
    return (
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
    );
  },
);

AIChatMessage.displayName = "AIChatMessage";
