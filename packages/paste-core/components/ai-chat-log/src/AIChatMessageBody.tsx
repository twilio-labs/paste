import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps, BoxStyleProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { css, styled } from "@twilio-paste/styling-library";
import { AILogContext, type AILogSizes } from "./AILogContext";
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
   * @deprecated Use the `size` prop on the AIChatLog component instead.
   * @default "default"
   * @type {AILogSizes}
   * @memberof AIChatMessageBodyProps
   */
  size?: AILogSizes;
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
  /**
   * The timestamp of the message
   *
   * @default undefined
   * @type {string}
   * @memberof AIChatMessageBodyProps
   */
  timestamp?: string;
}

const StyledBox = styled(Box)(
  css({
    "& p:first-of-type": {
      marginTop: "0",
    },
    "& p:last-of-type": {
      marginBottom: "0",
    },
  }),
);

export const AIChatMessageBody = React.forwardRef<HTMLDivElement, AIChatMessageBodyProps>(
  (
    {
      children,
      size = "default",
      element = "AI_CHAT_MESSAGE_BODY",
      animated = false,
      onAnimationEnd,
      onAnimationStart,
      timestamp,
      ...props
    },
    ref,
  ) => {
    const { id, variant } = React.useContext(AIMessageContext);
    const { size: sizeContext } = React.useContext(AILogContext);
    const [showAnimation] = React.useState(animated && children !== undefined);
    const isFullScreen = size === "fullScreen" || sizeContext === "fullScreen";
    const animationSpeed = isFullScreen ? 8 : 10;
    const { animatedChildren, isAnimating } = useAnimatedText(children, animationSpeed, showAnimation);

    const commonStyles: BoxStyleProps = {
      paddingY: isFullScreen ? "space50" : "space30",
      paddingX: "space40",
      borderRadius: "borderRadius40",
      maxWidth: isFullScreen ? "530px" : "260px",
    };

    const Styles: Record<string, BoxStyleProps> = {
      bot: {
        backgroundColor: "inherit",
        padding: "space0",
        borderRadius: "borderRadius0",
        maxWidth: "100%",
      },
      user: {
        ...commonStyles,
        backgroundColor: "colorBackgroundWeakElevation",
      },
      agent: {
        ...commonStyles,
        backgroundColor: "colorBackgroundBody",
        boxShadow: "shadowElevation05",
      },
    };

    React.useEffect(() => {
      if (onAnimationStart && animated && isAnimating) {
        onAnimationStart();
      }

      if (animated && !isAnimating && onAnimationEnd) {
        onAnimationEnd();
      }
    }, [isAnimating, showAnimation]);

    return (
      <StyledBox
        {...safelySpreadBoxProps(props)}
        {...Sizes[sizeContext || size]}
        display="inline-block"
        color="colorText"
        wordWrap="break-word"
        minWidth={0}
        element={element}
        ref={ref}
        whiteSpace="pre-wrap"
        id={id}
        marginBottom={isFullScreen ? "space30" : "space0"}
        {...Styles[variant]}
      >
        {animatedChildren}
        {timestamp && (
          <Box
            fontSize="fontSize20"
            color="colorTextWeak"
            marginTop="space30"
            element={`${element}_TIMESTAMP`}
            textAlign={variant === "bot" ? "left" : "right"}
          >
            {timestamp}
          </Box>
        )}
      </StyledBox>
    );
  },
);

AIChatMessageBody.displayName = "AIChatMessageBody";
