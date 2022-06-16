import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxElementProps} from '@twilio-paste/box';

import {Text} from '@twilio-paste/text';

export interface ChatAttachmentDescriptionProps {
  children: string;
  element?: BoxElementProps['element'];
}

const ChatAttachmentDescription = React.forwardRef<HTMLElement, ChatAttachmentDescriptionProps>(
  ({children, element = 'CHAT_ATTACHMENT_DESCRIPTION', ...props}, ref) => {
    return (
      <Text
        element={element}
        ref={ref}
        as="div"
        fontSize="fontSize20"
        color="colorTextWeaker"
        lineHeight="lineHeight10"
        {...props}
      >
        {children}
      </Text>
    );
  }
);

ChatAttachmentDescription.displayName = 'ChatAttachmentDescription';

ChatAttachmentDescription.propTypes = {
  children: PropTypes.string.isRequired,
  element: PropTypes.string,
};

export {ChatAttachmentDescription};
