import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { ThemeShape } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

const Variants = {
  default: {
    fontSize: "fontSize30" as ThemeShape["fontSizes"],
    lineHeight: "lineHeight30" as ThemeShape["lineHeights"],
  },
  fullScreen: {
    fontSize: "fontSize40" as ThemeShape["fontSizes"],
    lineHeight: "lineHeight40" as ThemeShape["lineHeights"],
  },
};

export interface AIChatMessageBodyProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_BUBBLE"
   * @type {BoxProps["element"]}
   * @memberof AIChatBubbleProps
   */
  element?: BoxElementProps["element"];
  /**
   * Override the font size for full screen experiences.
   *
   * @default "CHAT_BUBBLE"
   * @type {"default" | "fullScreen"}
   * @memberof AIChatBubbleProps
   */
  variant?: "default" | "fullScreen";
}

export const AIChatMessageBody = React.forwardRef<HTMLDivElement, AIChatMessageBodyProps>(
  ({ children, variant = "default", element = "AI_CHAT_MESSAGE_BODY", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        {...Variants[variant]}
        display="inline-block"
        color="colorText"
        wordWrap="break-word"
        maxWidth="100%"
        minWidth={0}
        element={element}
        ref={ref}
        whiteSpace="pre-wrap"
      >
        {children}
      </Box>
    );
  },
);

AIChatMessageBody.displayName = "AIChatMessageBody";
