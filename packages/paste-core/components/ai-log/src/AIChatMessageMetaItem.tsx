import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageMetaItemProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  variant: "author" | "timestamp";
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_MESSAGE_META_ITEM"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageMetaItemProps
   */
  element?: BoxElementProps["element"];
}

const variantStyles = {
  author: {
    color: "colorText",
    lineHeight: "lineHeight50",
    fontSize: "fontSize40",
  },
  timestamp: {},
};

export const AIChatMessageMetaItem = React.forwardRef<HTMLDivElement, AIChatMessageMetaItemProps>(
  ({ children, element = "CHAT_MESSAGE_META_ITEM", ...props }, ref) => (
    <Box
      ref={ref}
      element={element}
      display="flex"
      alignItems="flex-start"
      columnGap="space30"
      color="colorText"
      lineHeight="lineHeight50"
      fontSize="fontSize40"
      {...variantStyles[props.variant]}
      {...safelySpreadBoxProps(props)}
    >
      {children}
    </Box>
  ),
);

AIChatMessageMetaItem.displayName = "AIChatMessageMetaItem";
