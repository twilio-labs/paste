import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatLogProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default '{constantCase component-name}'
   * @type {BoxProps['element']}
   * @memberof AIChatLogProps
   */
  element?: BoxProps["element"];
}

export const AIChatLog = React.forwardRef<HTMLDivElement, AIChatLogProps>(
  ({ element = "AI_CHAT_LOG", children, ...props }, ref) => {
    return (
      <Box role="log" padding="space70" element={element} ref={ref} {...safelySpreadBoxProps(props)}>
        <Box
          as="div"
          role="list"
          margin="space0"
          padding="space0"
          display="flex"
          flexDirection="column"
          rowGap="space130"
        >
          {children}
        </Box>
      </Box>
    );
  },
);

AIChatLog.displayName = "AIChatLog";
