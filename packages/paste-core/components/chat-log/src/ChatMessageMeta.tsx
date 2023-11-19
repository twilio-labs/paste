import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { MessageVariantContext } from "./MessageVariantContext";

export interface ChatMessageMetaProps extends HTMLPasteProps<"div"> {
  /**
   *
   * @default null
   * @type {string}
   * @memberof ChatMessageMetaProps
   */
  "aria-label": string;
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_MESSAGE_META"
   * @type {BoxProps["element"]}
   * @memberof ChatMessageMetaProps
   */
  element?: BoxElementProps["element"];
}

export const ChatMessageMeta = React.forwardRef<HTMLDivElement, ChatMessageMetaProps>(
  ({ children, element = "CHAT_MESSAGE_META", ...props }, ref) => {
    const variant = React.useContext(MessageVariantContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        display="flex"
        justifyContent={variant === "inbound" ? "flex-start" : "flex-end"}
        textAlign={variant === "outbound" ? "right" : "left"}
        alignItems="center"
        variant={variant}
        columnGap="space30"
        fontWeight="fontWeightMedium"
      >
        {children}
      </Box>
    );
  },
);

ChatMessageMeta.displayName = "ChatMessageMeta";
