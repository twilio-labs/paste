import type { BoxElementProps } from "@twilio-paste/box";
import { Box } from "@twilio-paste/box";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/media-object";
import { Stack } from "@twilio-paste/stack";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { MessageVariantContext } from "./MessageVariantContext";

export interface ChatAttachmentProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_ATTACHMENT"
   * @type {BoxProps["element"]}
   * @memberof ChatAttachmentProps
   */
  element?: BoxElementProps["element"];
  /**
   * Pass an icon to use for the attachment message. DownloadIcon recommended
   *
   * @default null
   * @type {NonNullable<React.ReactNode>}
   * @memberof ChatAttachmentProps
   */
  attachmentIcon: NonNullable<React.ReactNode>;
}

const ChatAttachment = React.forwardRef<HTMLDivElement, ChatAttachmentProps>(
  ({ children, element = "CHAT_ATTACHMENT", attachmentIcon, ...props }, ref) => {
    const variant = React.useContext(MessageVariantContext);
    return (
      <MediaObject {...props} as="div" ref={ref} verticalAlign="center" element={element}>
        <MediaFigure as="div" spacing="space30">
          <Box color={variant === "inbound" ? "colorTextIcon" : "colorTextInverse"} element={`${element}_ICON`}>
            {attachmentIcon}
          </Box>
        </MediaFigure>
        <MediaBody as="div" element={`${element}_BODY`}>
          <Stack orientation="vertical" spacing="space10">
            {children}
          </Stack>
        </MediaBody>
      </MediaObject>
    );
  },
);

ChatAttachment.displayName = "ChatAttachment";

export { ChatAttachment };
