import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageActionsProps extends HTMLPasteProps<"div"> {
  /**
   *
   * @default null
   * @type {string}
   * @memberof AIChatMessageActionsProps
   */
  "aria-label": string;
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE_ACTIONS"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageActionsProps
   */
  element?: BoxElementProps["element"];
}

export const AIChatMessageActions = React.forwardRef<HTMLDivElement, AIChatMessageActionsProps>(
  ({ children, element = "AI_CHAT_MESSAGE_ACTIONS", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        display="flex"
        alignItems="center"
        columnGap="space30"
        fontWeight="fontWeightMedium"
      >
        {children}
      </Box>
    );
  },
);

AIChatMessageActions.displayName = "AIChatMessageActions";
