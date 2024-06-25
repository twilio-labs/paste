import type { BoxProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { ResponsiveValue } from "@twilio-paste/styling-library";
import * as React from "react";

export interface ChatComposerAttachmentGroupProps {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'CHAT_COMPOSER_ATTACHMENT_GROUP'
   * @type {BoxProps['element']}
   * @memberof ChatComposerAttachmentGroupProps
   */
  element?: BoxProps["element"];
  /**
   * Sets the number of columns in the attachement grid
   * @default 2
   * @type number
   * @memberof ChatComposerAttachmentGroupProps
   */
  columns?: ResponsiveValue<number>;
}

export const ChatComposerAttachmentGroup = React.forwardRef<HTMLDivElement, ChatComposerAttachmentGroupProps>(
  ({ element = "CHAT_COMPOSER_ATTACHMENT_GROUP", columns = 2, children, ...props }, ref) => {
    const getColumnStyles = () => {
      if (columns instanceof Array) {
        return columns.map((column) => `repeat(${column}, minmax(0,1fr))`);
      }
      return `repeat(${columns}, 1fr)`;
    };
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        ref={ref}
        gridArea="attatchments"
        role="group"
        display="grid"
        gridTemplateColumns={getColumnStyles()}
        flexWrap="wrap"
        columnGap="space40"
        paddingTop="space50"
        paddingBottom="space30"
        paddingX="space0"
        rowGap="space40"
      >
        {children}
      </Box>
    );
  },
);

ChatComposerAttachmentGroup.displayName = "ChatComposerAttachmentGroup";
