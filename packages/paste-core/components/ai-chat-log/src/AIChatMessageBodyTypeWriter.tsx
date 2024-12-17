import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { ThemeShape } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";
import { useAnimatedText } from "./utils";

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

export interface AIChatMessageBodyTypeWriterProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE_BODY_TYPE_WRITER"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageBodyTypeWriterProps
   */
  element?: BoxElementProps["element"];
  /**
   * Override the font size for full screen experiences.
   *
   * @default "default"
   * @type {"default" | "fullScreen"}
   * @memberof AIChatMessageBodyTypeWriterProps
   */
  variant?: "default" | "fullScreen";
  /**
   * Whether the text should be animated with type writer effect
   *
   * @default true
   * @type {boolean}
   * @memberof AIChatMessageBodyTypeWriterProps
   */
  animated?: boolean;
}

export const AIChatMessageBodyTypeWriter = React.forwardRef<HTMLDivElement, AIChatMessageBodyTypeWriterProps>(
  ({ children, variant = "default", element = "AI_CHAT_MESSAGE_BODY_TYPE_WRITER", animated = true, onAnimationEnd, onAnimationStart, ...props }, ref) => {
    const animatedChildren = useAnimatedText(children);

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
        {animated
          ? animatedChildren
          : children}
      </Box>
    );
  },
);

AIChatMessageBodyTypeWriter.displayName = "AIChatMessageBodyTypeWriter";
