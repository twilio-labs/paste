import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps, BoxStyleProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { AIMessageContext } from "./AIMessageContext";
import { useAnimatedText } from "./utils";

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
  /**
   * A callback when the animation is started
   *
   * @default false
   * @type {() => void}
   * @memberof AIChatMessageBodyProps
   */
  onAnimationStart?: () => void;
  /**
   * A callback when the animation is complete
   *
   * @default false
   * @type {() => void}
   * @memberof AIChatMessageBodyProps
   */
  onAnimationEnd?: () => void;
}

export const AIChatMessageBody = React.forwardRef<HTMLDivElement, AIChatMessageBodyProps>(
  (
    {
      children,
      size = "default",
      element = "AI_CHAT_MESSAGE_BODY",
      animated = false,
      onAnimationEnd,
      onAnimationStart,
      ...props
    },
    ref,
  ) => {
    const { id, variant } = React.useContext(AIMessageContext);
    const [showAnimation] = React.useState(animated && children !== undefined);
    const animationSpeed = size === "fullScreen" ? 8 : 10;
    const { animatedChildren, isAnimating } = useAnimatedText(children, animationSpeed, showAnimation);

    React.useEffect(() => {
      if (onAnimationStart && animated && isAnimating) {
        onAnimationStart();
      }

      if (animated && !isAnimating && onAnimationEnd) {
        onAnimationEnd();
      }
    }, [isAnimating, showAnimation]);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        {...Sizes[size]}
        display="inline-block"
        color="colorText"
        wordWrap="break-word"
        maxWidth={variant === "user" ? (size === "fullScreen" ? "530px" : "260px") : "100%"}
        minWidth={0}
        element={element}
        ref={ref}
        whiteSpace="pre-wrap"
        id={id}
        backgroundColor={variant === "user" ? "colorBackgroundWeakElevation" : "inherit"}
        paddingTop={variant === "user" ? (size === "fullScreen" ? "space50" : "space30") : "space0"}
        paddingBottom={variant === "user" ? "space20" : "space0"}
        paddingX={variant === "user" ? "space40" : "space0"}
        borderRadius={variant === "user" ? "borderRadius40" : "borderRadius0"}
      >
        {animatedChildren}
      </Box>
    );
  },
);

AIChatMessageBody.displayName = "AIChatMessageBody";
