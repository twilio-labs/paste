import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageMetaProps extends HTMLPasteProps<"div"> {
  /**
   *
   * @default null
   * @type {string}
   * @memberof AIChatMessageMetaProps
   */
  "aria-label": string;
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_MESSAGE_META"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageMetaProps
   */
  element?: BoxElementProps["element"];
}

export const AIChatMessageMeta = React.forwardRef<HTMLDivElement, AIChatMessageMetaProps>(
  ({ children, element = "AI_CHAT_MESSAGE_META", ...props }, ref) => {
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

AIChatMessageMeta.displayName = "AIChatMessageMeta";
