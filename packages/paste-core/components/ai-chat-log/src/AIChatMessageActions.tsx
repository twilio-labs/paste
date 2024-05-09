import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageActionsProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_MESSAGE_META_ITEM"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageMetaItemProps
   */
  element?: BoxElementProps["element"];
}

export const AIChatMessageActions = React.forwardRef<HTMLDivElement, AIChatMessageActionsProps>(
  ({ children, element = "AI_CHAT_MESSAGE_ACTIONS", ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      element={element}
      display="flex"
      alignItems="flex-start"
      columnGap="space30"
      color="colorText"
      lineHeight="lineHeight50"
      fontSize="fontSize40"
    >
      {children}
    </Box>
  ),
);

AIChatMessageActions.displayName = "AIChatMessageActions";
