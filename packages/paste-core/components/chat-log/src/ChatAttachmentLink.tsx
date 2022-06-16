import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Anchor} from '@twilio-paste/anchor';
import type {AnchorProps} from '@twilio-paste/anchor';
import type {BoxElementProps} from '@twilio-paste/box';
import {Truncate} from '@twilio-paste/truncate';

export interface ChatAttachmentLinkProps extends AnchorProps {
  children: string;
  element?: BoxElementProps['element'];
}

const ChatAttachmentLink = React.forwardRef<HTMLElement, ChatAttachmentLinkProps>(
  ({children, href, element = 'CHAT_ATTACHMENT_LINK', ...props}, ref) => {
    return (
      <Anchor href={href} ref={ref} element={element} {...props}>
        <Truncate title={children}>{children}</Truncate>
      </Anchor>
    );
  }
);

ChatAttachmentLink.displayName = 'ChatAttachmentLink';

ChatAttachmentLink.propTypes = {
  children: PropTypes.string.isRequired,
  element: PropTypes.string,
};

export {ChatAttachmentLink};
