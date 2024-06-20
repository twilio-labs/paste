import type { BoxProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

export interface ChatComposerActionGroupProps {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'CHAT_COMPOSER_ACTION_GROUP'
   * @type {BoxProps['element']}
   * @memberof PageHeaderProps
   */
  element?: BoxProps["element"];
}

export const ChatComposerActionGroup = React.forwardRef<HTMLDivElement, ChatComposerActionGroupProps>(
  ({ element = "CHAT_COMPOSER_ACTION_GROUP", children, ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      element={element}
      ref={ref}
      gridArea="actions"
      display="inline-flex"
      alignSelf="end"
      role="group"
      columnGap="space30"
      marginBottom="space30"
      marginLeft="space30"
    >
      {children}
    </Box>
  ),
);

ChatComposerActionGroup.displayName = "ChatComposerActionGroup";
