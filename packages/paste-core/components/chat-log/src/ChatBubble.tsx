import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps, BoxStyleProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { MessageVariantContext } from "./MessageVariantContext";
import type { MessageVariants } from "./MessageVariantContext";

export interface ChatBubbleProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_BUBBLE"
   * @type {BoxProps["element"]}
   * @memberof ChatBubbleProps
   */
  element?: BoxElementProps["element"];
}

const bubbleVariantStyles: {
  [key in MessageVariants]: BoxStyleProps;
} = {
  inbound: {
    backgroundColor: "colorBackgroundElevation",
    alignSelf: "flex-start",
  },
  outbound: {
    backgroundColor: "colorBackgroundInverseStrongerElevation",
    alignSelf: "flex-end",
    color: "colorTextInverse",
  },
};

export const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ children, element = "CHAT_BUBBLE", ...props }, ref) => {
    const variant = React.useContext(MessageVariantContext);

    return (
      <Box
        display="inline-block"
        fontSize="fontSize30"
        lineHeight="lineHeight20"
        borderRadius="borderRadius20"
        paddingY="space30"
        paddingX="space40"
        marginBottom="space30"
        wordWrap="break-word"
        maxWidth="100%"
        minWidth={0}
        element={element}
        ref={ref}
        variant={variant}
        whiteSpace="pre-wrap"
        {...bubbleVariantStyles[variant]}
        {...safelySpreadBoxProps(props)}
      >
        {children}
      </Box>
    );
  },
);

ChatBubble.displayName = "ChatBubble";
