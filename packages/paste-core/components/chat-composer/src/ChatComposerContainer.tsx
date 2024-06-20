import type { BoxProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

export interface ChatComposerContainerProps {
  children?: React.ReactNode;
  /**
   * Styling of the container
   * @default 'default'
   * @type {'default' | 'contained''}
   * @memberof PageHeaderProps
   */
  variant?: "default" | "contained";
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'CHAT_COMPOSER_CONTAINER'
   * @type {BoxProps['element']}
   * @memberof PageHeaderProps
   */
  element?: BoxProps["element"];
}

export const ChatComposerContainer = React.forwardRef<HTMLDivElement, ChatComposerContainerProps>(
  ({ variant, element = "CHAT_COMPOSER_CONTAINER", children, ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      element={element}
      ref={ref}
      display="grid"
      gridTemplateRows="auto auto"
      gridTemplateAreas='"composer actions" "attatchments attatchments"'
      gridAutoColumns="1fr auto"
    >
      {children}
    </Box>
  ),
);

ChatComposerContainer.displayName = "ChatComposerContainer";
