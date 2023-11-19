import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps, BoxStyleProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { MessageVariantContext } from "./MessageVariantContext";
import type { MessageVariants } from "./MessageVariantContext";

export interface ChatMessageProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   *
   * @default null
   * @type {MessageVariants}
   * @memberof ChatMessageProps
   */
  variant: MessageVariants;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_MESSAGE"
   * @type {BoxProps["element"]}
   * @memberof ChatMessageProps
   */
  element?: BoxElementProps["element"];
}

const messageVariantStyles: {
  [key in MessageVariants]: {
    marginLeft?: BoxStyleProps["marginLeft"];
    marginRight?: BoxStyleProps["marginRight"];
  };
} = {
  inbound: {
    marginRight: "space70",
  },
  outbound: {
    marginLeft: "space70",
  },
};

export const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ children, variant, element = "CHAT_MESSAGE", ...props }, ref) => {
    return (
      <MessageVariantContext.Provider value={variant}>
        <Box
          role="listitem"
          display="flex"
          flexDirection="column"
          ref={ref}
          element={element}
          variant={variant}
          {...messageVariantStyles[variant]}
          {...safelySpreadBoxProps(props)}
        >
          {children}
        </Box>
      </MessageVariantContext.Provider>
    );
  },
);

ChatMessage.displayName = "ChatMessage";
