import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import * as React from "react";

export interface ChatMessageMetaItemProps {
  children: NonNullable<React.ReactNode>;
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
