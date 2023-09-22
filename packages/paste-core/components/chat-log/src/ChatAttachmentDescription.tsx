import type { BoxElementProps } from '@twilio-paste/box';
import { Text, safelySpreadTextProps } from '@twilio-paste/text';
import * as React from 'react';

import { MessageVariantContext } from './MessageVariantContext';

export interface ChatAttachmentDescriptionProps {
  children: string;
  element?: BoxElementProps['element'];
}

const ChatAttachmentDescription = React.forwardRef<HTMLElement, ChatAttachmentDescriptionProps>(
  ({ children, element = 'CHAT_ATTACHMENT_DESCRIPTION', ...props }, ref) => {
    const variant = React.useContext(MessageVariantContext);
    return (
      <Text
        {...safelySpreadTextProps(props)}
        element={element}
        ref={ref}
        as="div"
        fontSize="fontSize20"
        color={variant === 'inbound' ? 'colorTextWeak' : 'colorTextInverse'}
        lineHeight="lineHeight20"
      >
        {children}
      </Text>
    );
  },
);

ChatAttachmentDescription.displayName = 'ChatAttachmentDescription';

export { ChatAttachmentDescription };
