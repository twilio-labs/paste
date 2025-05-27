import type { BoxElementProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { Separator } from "@twilio-paste/separator";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { AILogContext } from "./AILogContext";

export interface AIChatEventProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_EVENT"
   * @type {BoxProps["element"]}
   * @memberof AIChatEventProps
   */
  element?: BoxElementProps["element"];
  /**
   * The variant of the message to distiguish between user and bot messages
   *
   * @default false
   * @type Boolean
   * @memberof AIChatEventProps
   */
  withSeparator?: boolean;
}

export const AIChatEvent = React.forwardRef<HTMLDivElement, AIChatEventProps>(
  ({ children, element = "AI_CHAT_MESSAGE", withSeparator, ...props }, ref) => {
    const { size } = React.useContext(AILogContext);

    return (
      <Box
        display="flex"
        justifyContent="center"
        columnGap="space10"
        alignItems="center"
        color="colorTextWeak"
        fontSize="fontSize20"
        fontWeight="fontWeightMedium"
        ref={ref}
        element={element}
        marginY={size === "fullScreen" ? "space50" : "space0"}
        {...safelySpreadBoxProps(props)}
      >
        {withSeparator && (
          <Box flexGrow={1}>
            <Separator orientation="horizontal" />
          </Box>
        )}
        {children}
        {withSeparator && (
          <Box flexGrow={1}>
            <Separator orientation="horizontal" />
          </Box>
        )}
      </Box>
    );
  },
);

AIChatEvent.displayName = "AIChatEvent";
