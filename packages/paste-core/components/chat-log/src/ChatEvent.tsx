import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface ChatEventProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_EVENT"
   * @type {BoxProps["element"]}
   * @memberof ChatEventProps
   */
  element?: BoxElementProps["element"];
}

const ChatEvent = React.forwardRef<HTMLDivElement, ChatEventProps>(
  ({ children, element = "CHAT_EVENT", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        role="listitem"
        color="colorTextWeak"
        element={element}
        textAlign="center"
        lineHeight="lineHeight20"
        fontSize="fontSize20"
        fontWeight="fontWeightMedium"
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

ChatEvent.displayName = "ChatEvent";

export { ChatEvent };
