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
   * Sets the number of columns in the attachment grid
   * @default 2
   * @type number
   * @memberof ChatComposerAttachmentGroupProps
   */
  columns?: ResponsiveValue<number>;
}

export const ChatComposerAttachmentGroup = React.forwardRef<HTMLDivElement, ChatComposerAttachmentGroupProps>(
  ({ element = "CHAT_COMPOSER_ATTACHMENT_GROUP", columns = 2, children, ...props }, ref) => {
    const getColumnStyles = (): string | string[] => {
      if (Array.isArray(columns)) {
        return columns.map((column) => `repeat(${column}, minmax(0,1fr))`);
      }
      return `repeat(${columns}, 1fr)`;
    };
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        ref={ref}
        gridArea="2/1/3/3"
        role="group"
        display="grid"
        gridTemplateColumns={getColumnStyles()}
        flexWrap="wrap"
        columnGap="space40"
        paddingBottom="space30"
        paddingX="space10"
        rowGap="space40"
        marginTop="space50"
      >
        {children}
      </Box>
    );
  },
);

ChatComposerAttachmentGroup.displayName = "ChatComposerAttachmentGroup";
