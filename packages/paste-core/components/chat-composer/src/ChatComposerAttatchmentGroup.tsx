import type { BoxProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

export interface ChatComposerAttatchmentGroupProps {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'CHAT_COMPOSER_ATTATCHMENT_GROUP'
   * @type {BoxProps['element']}
   * @memberof PageHeaderProps
   */
  element?: BoxProps["element"];
}

export const ChatComposerAttatchmentGroup = React.forwardRef<HTMLDivElement, ChatComposerAttatchmentGroupProps>(
  ({ element = "CHAT_COMPOSER_ATTATCHMENT_GROUP", children, ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      element={element}
      ref={ref}
      gridArea="attatchments"
      width={"100px"}
      height={"100px"}
      backgroundColor={"colorBackgroundPrimaryWeakest"}
    >
      {children}
    </Box>
  ),
);

ChatComposerAttatchmentGroup.displayName = "ChatComposerAttatchmentGroup";
