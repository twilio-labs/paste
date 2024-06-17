import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageActionCardProps extends HTMLPasteProps<"div"> {
  children?: NonNullable<React.ReactNode>;
  /**
   * Label for the action card for screen readers
   *
   * @type {string}
   * @memberof AIChatMessageActionGroupProps
   */
  "aria-label": string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE_ACTION_CARD"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageActionCardProps
   */
  element?: BoxElementProps["element"];
}

export const AIChatMessageActionCard = React.forwardRef<HTMLDivElement, AIChatMessageActionCardProps>(
  ({ children, element = "AI_CHAT_MESSAGE_ACTION_CARD", ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      element={element}
      display="inline-flex"
      alignItems="flex-start"
      columnGap="space30"
      color="colorTextIcon"
      lineHeight="lineHeight30"
      fontSize="fontSize30"
      fontWeight="fontWeightMedium"
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

AIChatMessageActionCard.displayName = "AIChatMessageActionCard";
