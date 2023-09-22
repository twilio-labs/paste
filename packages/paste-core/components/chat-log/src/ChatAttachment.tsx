import * as React from 'react';
import type { BoxElementProps } from '@twilio-paste/box';
import { Box } from '@twilio-paste/box';
import { MediaObject, MediaFigure, MediaBody } from '@twilio-paste/media-object';
import { Stack } from '@twilio-paste/stack';

import { MessageVariantContext } from './MessageVariantContext';

export interface ChatAttachmentProps {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  attachmentIcon: NonNullable<React.ReactNode>;
}

const ChatAttachment = React.forwardRef<HTMLDivElement, ChatAttachmentProps>(
  ({ children, element = 'CHAT_ATTACHMENT', attachmentIcon, ...props }, ref) => {
    const variant = React.useContext(MessageVariantContext);
    return (
      <MediaObject {...props} as="div" ref={ref} verticalAlign="center" element={element}>
        <MediaFigure as="div" spacing="space30">
          <Box color={variant === 'inbound' ? 'colorTextIcon' : 'colorTextInverse'} element={`${element}_ICON`}>
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

ChatAttachment.displayName = 'ChatAttachment';

export { ChatAttachment };
