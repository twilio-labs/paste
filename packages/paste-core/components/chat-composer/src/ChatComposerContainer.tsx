import type { BoxProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { ThemeShape } from "@twilio-paste/theme";
import * as React from "react";

import { ChatComposerContext } from "./ChatComposerContext";

const Styles = {
  default: {},
  contained: {
    borderWidth: "borderWidth10" as ThemeShape["borderWidths"],
    borderStyle: "solid",
    borderRadius: "borderRadius30" as ThemeShape["radii"],
    borderColor: "colorBorderWeaker" as ThemeShape["borderColors"],
    boxShadow: "shadowBorderLow" as ThemeShape["shadows"],
  },
};

export interface ChatComposerContainerProps {
  children?: React.ReactNode;
  /**
   * Styling of the container
   * @default 'default'
   * @type {'default' | 'contained''}
   * @memberof ChatComposerContainerProps
   */
  variant?: "default" | "contained";
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'CHAT_COMPOSER_CONTAINER'
   * @type {BoxProps['element']}
   * @memberof ChatComposerContainerProps
   */
  element?: BoxProps["element"];
  /**
   * Sets the maximum height of the composer before scrolling
   * @default 'size20'
   * @type {BoxProps['maxHeight']}
   * @memberof ChatComposerContainerProps
   */
  maxHeight?: BoxProps["maxHeight"];
}

export const ChatComposerContainer = React.forwardRef<HTMLDivElement, ChatComposerContainerProps>(
  ({ variant = "default", element = "CHAT_COMPOSER_CONTAINER", maxHeight = "size30", children, ...props }, ref) => {
    const [isDisabled, setIsDisabled] = React.useState(false);

    return (
      <ChatComposerContext.Provider value={{ isDisabled, setIsDisabled }}>
        <Box
          {...safelySpreadBoxProps(props)}
          element={element}
          ref={ref}
          display="grid"
          gridTemplateRows="auto auto"
          gridTemplateAreas='"composer actions" "attatchments attatchments"'
          gridAutoColumns="1fr auto"
          disabled={isDisabled}
          aria-disabled={isDisabled}
          _disabled={{
            color: "colorTextWeaker",
            backgroundColor: "colorBackground",
          }}
          padding="space50"
          maxHeight={maxHeight}
          overflowY="auto"
          {...Styles[variant]}
        >
          {children}
        </Box>
      </ChatComposerContext.Provider>
    );
  },
);

ChatComposerContainer.displayName = "ChatComposerContainer";
