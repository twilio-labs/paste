import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxElementProps} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {Stack} from '@twilio-paste/stack';

export interface ChatAttachmentProps {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  attachmentIcon: NonNullable<React.ReactNode>;
}

const ChatAttachment = React.forwardRef<HTMLDivElement, ChatAttachmentProps>(
  ({children, element = 'CHAT_ATTACHMENT', attachmentIcon, ...props}, ref) => {
    return (
      <MediaObject {...props} as="div" ref={ref} verticalAlign="center" element={element}>
        <MediaFigure as="div" spacing="space30">
          {attachmentIcon}
        </MediaFigure>
        <MediaBody as="div" element={`${element}_BODY`}>
          <Stack orientation="vertical" spacing="space10">
            {children}
          </Stack>
        </MediaBody>
      </MediaObject>
    );
  }
);

ChatAttachment.displayName = 'ChatAttachment';

ChatAttachment.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  attachmentIcon: PropTypes.node.isRequired,
};

export {ChatAttachment};
