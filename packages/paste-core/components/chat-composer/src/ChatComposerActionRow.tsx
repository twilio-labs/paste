import type { BoxProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

export interface ChatComposerActionRowProps {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'CHAT_COMPOSER_ACTION_GROUP'
   * @type {BoxProps['element']}
   * @memberof ChatComposerActionRowProps
   */
  element?: BoxProps["element"];
}

export const ChatComposerActionRow = React.forwardRef<HTMLDivElement, ChatComposerActionRowProps>(
  ({ element = "CHAT_COMPOSER_ACTION_ROW", children, ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      element={element}
      ref={ref}
      gridArea="2/2"
      gridColumn="1/-1"
      display="inline-flex"
      alignSelf="end"
      role="group"
      columnGap="space30"
      padding="space30"
      paddingRight="space20"
    >
      {children}
    </Box>
  ),
);

ChatComposerActionRow.displayName = "ChatComposerActionRow";
