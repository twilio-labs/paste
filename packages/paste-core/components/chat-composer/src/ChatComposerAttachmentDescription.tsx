import type { BoxElementProps } from "@twilio-paste/box";
import { Text, safelySpreadTextProps } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface ChatComposerAttachmentDescriptionProps extends HTMLPasteProps<"div"> {
  children: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_COMPOSER_ATTACHMENT_DESCRIPTION"
   * @type {BoxProps["element"]}
   * @memberof ChatComposerAttachmentDescriptionProps
   */
  element?: BoxElementProps["element"];
}

const ChatComposerAttachmentDescription = React.forwardRef<HTMLElement, ChatComposerAttachmentDescriptionProps>(
  ({ children, element = "CHAT_COMPOSER_ATTACHMENT_DESCRIPTION", ...props }, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        element={element}
        ref={ref}
        as="div"
        fontSize="fontSize20"
        color="colorTextWeak"
        lineHeight="lineHeight20"
      >
        {children}
      </Text>
    );
  },
);

ChatComposerAttachmentDescription.displayName = "ChatComposerAttachmentDescription";

export { ChatComposerAttachmentDescription };
