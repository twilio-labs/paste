import { Anchor } from "@twilio-paste/anchor";
import type { AnchorProps } from "@twilio-paste/anchor";
import type { BoxElementProps } from "@twilio-paste/box";
import { Truncate } from "@twilio-paste/truncate";
import * as React from "react";

import { MessageVariantContext } from "./MessageVariantContext";

export interface ChatAttachmentLinkProps extends AnchorProps {
  children: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_ATTACHMENT_LINK"
   * @type {BoxProps["element"]}
   * @memberof ChatAttachmentLinkProps
   */
  element?: BoxElementProps["element"];
}

const ChatAttachmentLink = React.forwardRef<HTMLAnchorElement, ChatAttachmentLinkProps>(
  ({ children, href, element = "CHAT_ATTACHMENT_LINK", ...props }, ref) => {
    const variant = React.useContext(MessageVariantContext);
    return (
      <Anchor
        href={href}
        ref={ref}
        element={element}
        variant={variant === "inbound" ? "default" : "inverse"}
        {...props}
      >
        <Truncate title={children}>{children}</Truncate>
      </Anchor>
    );
  },
);

ChatAttachmentLink.displayName = "ChatAttachmentLink";

export { ChatAttachmentLink };
