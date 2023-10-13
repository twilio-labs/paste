import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface ChatBookendItemProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_BOOKEND_ITEM"
   * @type {BoxProps["element"]}
   * @memberof ChatBookendItemProps
   */
  element?: BoxProps["element"];
}

const ChatBookendItem = React.forwardRef<HTMLDivElement, ChatBookendItemProps>(
  ({ children, element = "CHAT_BOOKEND_ITEM", ...props }, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} as="div" element={element} ref={ref}>
        {children}
      </Box>
    );
  },
);

ChatBookendItem.displayName = "ChatBookendItem";

export { ChatBookendItem };
