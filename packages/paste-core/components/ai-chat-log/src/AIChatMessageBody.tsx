import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps, BoxStyleProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { AIMessageContext } from "./AIMessageContext";
import useAnimatedText from "./utils";

const Sizes: Record<string, BoxStyleProps> = {
  default: {
    fontSize: "fontSize30",
    lineHeight: "lineHeight30",
  },
  fullScreen: {
    fontSize: "fontSize40",
    lineHeight: "lineHeight40",
  },
};

export interface AIChatMessageBodyProps extends HTMLPasteProps<"div"> {
  id?: never; // id is passed down through the context from AIChatMessage for a11y (aria-controls on the rewrite button)
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE_BODY"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageBodyProps
   */
  element?: BoxElementProps["element"];
  /**
   * Use a larger font size and line height for fullscreen experiences.
   *
   * @default "default"
   * @type {"default" | "fullScreen"}
   * @memberof AIChatMessageBodyProps
   */
  size?: "default" | "fullScreen";
  /**
   * Whether the text should be animated with type writer effect
   *
   * @default false
   * @type {boolean}
   * @memberof AIChatMessageBodyProps
   */
  animated?: boolean;
}

export const AIChatMessageBody = React.forwardRef<HTMLDivElement, AIChatMessageBodyProps>(
  ({ children, size = "default", element = "AI_CHAT_MESSAGE_BODY", animated = false, ...props }, ref) => {
    const { id } = React.useContext(AIMessageContext);
    const childrenToRender = animated ? useAnimatedText(children) : children;

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        {...Sizes[size]}
        display="inline-block"
        color="colorText"
        wordWrap="break-word"
        maxWidth="100%"
        minWidth={0}
        element={element}
        ref={ref}
        whiteSpace="pre-wrap"
        id={id}
      >
        {childrenToRender}
      </Box>
    );
  },
);

AIChatMessageBody.displayName = "AIChatMessageBody";
