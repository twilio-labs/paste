import { animated } from "@twilio-paste/animation-library";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { ThemeShape } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { set } from "lodash";
import * as React from "react";
import { text } from "stream/consumers";

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
  /**
   * Whether the text should be animated with type writer effect
   *
   * @default false
   * @type {boolean}
   * @memberof AIChatMessageBodyTypeWriterProps
   */
  animated?: boolean;
}

export const AIChatMessageBodyTypeWriter = React.forwardRef<HTMLDivElement, AIChatMessageBodyTypeWriterProps>(
  ({ children, variant = "default", element = "AI_CHAT_MESSAGE_BODY", animated, ...props }, ref) => {
    const [animatedText, setAnimatedText] = React.useState("");
    const [textOfChild, setTextOfChild] = React.useState("");

    const findNestedElementText = (children: React.ReactNode): string => {
      let text = "";

      React.Children.forEach(children, (child) => {
        if (typeof child === "string") {
          text += child;
        } else if (React.isValidElement(child)) {
          text += findNestedElementText(child.props.children);
        }
      });

      return text;
    };

    React.useEffect(() => {
      let text=  "";
      React.Children.forEach(children, (child) => {
        if (typeof child === "string") {
          text += child;
        } else if (React.isValidElement(child)) {
          text += findNestedElementText(child.props.children);
        }
      });

      setTextOfChild(text);

    }, []);

    React.useEffect(() => {
      let interval: NodeJS.Timeout;

      if (animated) {
        interval = setInterval(() => {
          if (textOfChild.length > animatedText.length) {
            setAnimatedText((prevText) => prevText + textOfChild[prevText.length]);
          } else {
            clearInterval(interval);
          }
        }, 25);
      }

      return () => clearInterval(interval);
    }, [textOfChild, animatedText, animated]);

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
        {animated ? animatedText : children}
      </Box>
    );
  },
);

AIChatMessageBodyTypeWriter.displayName = "AIChatMessageBodyTypeWriter";
