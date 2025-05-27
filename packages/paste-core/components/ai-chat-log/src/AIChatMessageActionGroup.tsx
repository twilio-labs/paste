import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageActionGroupProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE_ACTION_GROUP"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageActionGroupProps
   */
  element?: BoxElementProps["element"];
}

export const AIChatMessageActionGroup = React.forwardRef<HTMLDivElement, AIChatMessageActionGroupProps>(
  ({ children, element = "AI_CHAT_MESSAGE_ACTION_GROUP", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        columnGap="space40"
        fontWeight="fontWeightMedium"
      >
        {children}
      </Box>
    );
  },
);

AIChatMessageActionGroup.displayName = "AIChatMessageActionGroup";
