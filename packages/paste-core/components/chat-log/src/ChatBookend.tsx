import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface ChatBookendProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_BOOKEND"
   * @type {BoxProps["element"]}
   * @memberof ChatBookendProps
   */
  element?: BoxElementProps["element"];
}

const ChatBookend = React.forwardRef<HTMLDivElement, ChatBookendProps>(
  ({ children, element = "CHAT_BOOKEND", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        role="listitem"
        color="colorTextWeak"
        element={element}
        textAlign="center"
        marginBottom="space20"
        lineHeight="lineHeight20"
        fontSize="fontSize20"
        fontWeight="fontWeightMedium"
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

ChatBookend.displayName = "ChatBookend";

export { ChatBookend };
