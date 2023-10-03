import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface ChatLogProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_LOG"
   * @type {BoxProps["element"]}
   * @memberof ChatLogProps
   */
  element?: BoxElementProps["element"];
}

const ChatLog = React.forwardRef<HTMLDivElement, ChatLogProps>(({ children, element = "CHAT_LOG", ...props }, ref) => {
  return (
    <Box role="log" padding="space70" element={element} ref={ref} {...safelySpreadBoxProps(props)}>
      <Box as="div" role="list" margin="space0" padding="space0" display="flex" flexDirection="column" rowGap="space80">
        {children}
      </Box>
    </Box>
  );
});

ChatLog.displayName = "ChatLog";

export { ChatLog };
