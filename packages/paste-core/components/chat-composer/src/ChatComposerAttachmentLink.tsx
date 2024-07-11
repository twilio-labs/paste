import { Anchor } from "@twilio-paste/anchor";
import type { AnchorProps } from "@twilio-paste/anchor";
import type { BoxElementProps } from "@twilio-paste/box";
import { Truncate } from "@twilio-paste/truncate";
import * as React from "react";

export interface ChatComposerAttachmentLinkProps extends AnchorProps {
  children: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_COMPOSER_ATTACHMENT_LINK"
   * @type {BoxProps["element"]}
   * @memberof ChatComposerAttachmentLinkProps
   */
  element?: BoxElementProps["element"];
}

const ChatComposerAttachmentLink = React.forwardRef<HTMLAnchorElement, ChatComposerAttachmentLinkProps>(
  ({ children, href, element = "CHAT_COMPOSER_ATTACHMENT_LINK", ...props }, ref) => {
    return (
      <Anchor href={href} ref={ref} element={element} variant="default" {...props}>
        <Truncate title={children}>{children}</Truncate>
      </Anchor>
    );
  },
);

ChatComposerAttachmentLink.displayName = "ChatComposerAttachmentLink";

export { ChatComposerAttachmentLink };
