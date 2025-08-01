import type { BoxElementProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageSourceProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageSourceProps
   */
  element?: BoxElementProps["element"];
}

export const AIChatMessageSource = React.forwardRef<HTMLDivElement, AIChatMessageSourceProps>(
  ({ children, element = "AI_CHAT_MESSAGE_SOURCE", ...props }, ref) => {
    return (
      <Box
        as="sup"
        ref={ref}
        element={element}
        verticalAlign="inherit"
        fontSize="inherit"
        paddingX="space10"
        color="colorTextWeak"
        {...safelySpreadBoxProps(props)}
      >
        [{children}]
      </Box>
    );
  },
);

AIChatMessageSource.displayName = "AIChatMessageSource";
