import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageActionProps extends HTMLPasteProps<"div"> {
  children?: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE_ACTION"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageActionProps
   */
  element?: BoxElementProps["element"];
}

export const AIChatMessageAction = React.forwardRef<HTMLDivElement, AIChatMessageActionProps>(
  ({ children, element = "AI_CHAT_MESSAGE_ACTION", ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      element={element}
      display="inline-flex"
      alignItems="flex-start"
      columnGap="space30"
      color="colorTextIcon"
      lineHeight="lineHeight20"
      fontSize="fontSize20"
      backgroundColor="colorBackgroundBody"
      boxShadow="shadowBorderWeaker"
      borderRadius="borderRadius30"
      paddingX="space30"
      paddingY="space20"
    >
      {children}
    </Box>
  ),
);

AIChatMessageAction.displayName = "AIChatMessageAction";
