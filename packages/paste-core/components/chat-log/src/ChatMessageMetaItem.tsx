import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface ChatMessageMetaItemProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_MESSAGE_META_ITEM"
   * @type {BoxProps["element"]}
   * @memberof ChatMessageMetaItemProps
   */
  element?: BoxElementProps["element"];
}

export const ChatMessageMetaItem = React.forwardRef<HTMLDivElement, ChatMessageMetaItemProps>(
  ({ children, element = "CHAT_MESSAGE_META_ITEM", ...props }, ref) => (
    <Box
      ref={ref}
      element={element}
      display="flex"
      alignItems="flex-start"
      columnGap="space30"
      color="colorTextWeak"
      lineHeight="lineHeight20"
      fontSize="fontSize20"
      {...safelySpreadBoxProps(props)}
    >
      {children}
    </Box>
  ),
);

ChatMessageMetaItem.displayName = "ChatMessageMetaItem";
