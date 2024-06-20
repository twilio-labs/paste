import type { BoxProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

export interface ChatComposerAttachmentGroupProps {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'CHAT_COMPOSER_ATTACHMENT_GROUP'
   * @type {BoxProps['element']}
   * @memberof PageHeaderProps
   */
  element?: BoxProps["element"];
}

export const ChatComposerAttachmentGroup = React.forwardRef<HTMLDivElement, ChatComposerAttachmentGroupProps>(
  ({ element = "CHAT_COMPOSER_ATTACHMENT_GROUP", children, ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      element={element}
      ref={ref}
      gridArea="attatchments"
      role="group"
      display="inline-flex"
      columnGap="space40"
      overflowX={"auto"}
      paddingTop="space50"
      paddingBottom="space20"
      paddingX="space40"
    >
      {children}
    </Box>
  ),
);

ChatComposerAttachmentGroup.displayName = "ChatComposerAttachmentGroup";
