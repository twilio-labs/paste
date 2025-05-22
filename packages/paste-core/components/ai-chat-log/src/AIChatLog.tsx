import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { AILogContext, type AILogSizes } from "./AILogContext";

export interface AIChatLogProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'AI_CHAT_LOG'
   * @type {BoxProps['element']}
   * @memberof AIChatLogProps
   */
  element?: BoxProps["element"];
  /**
   * Use a larger font size and line height for fullscreen experiences.
   *
   * @default "default"
   * @type {AILogSizes}
   * @memberof AIChatLogProps
   */
  size?: AILogSizes;
}

export const AIChatLog = React.forwardRef<HTMLDivElement, AIChatLogProps>(
  ({ element = "AI_CHAT_LOG", children, size, ...props }, ref) => {
    return (
      <AILogContext.Provider value={{ size }}>
        <Box role="log" paddingY="space70" element={element} ref={ref} {...safelySpreadBoxProps(props)}>
          <Box
            as="div"
            role="list"
            margin="space0"
            padding="space0"
            display="flex"
            flexDirection="column"
            rowGap="space70"
            element={`${element}_LIST`}
          >
            {children}
          </Box>
        </Box>
      </AILogContext.Provider>
    );
  },
);

AIChatLog.displayName = "AIChatLog";
