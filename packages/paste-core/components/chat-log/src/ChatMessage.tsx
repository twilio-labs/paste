import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps, BoxElementProps} from '@twilio-paste/box';

import {MessageVariantContext} from './MessageVariantContext';
import type {MessageVariants} from './MessageVariantContext';

export interface ChatMessageProps {
  children?: React.ReactNode;
  variant: MessageVariants;
  element?: BoxElementProps['element'];
}

const messageVariantStyles: {
  [key in MessageVariants]: {
    marginLeft?: BoxStyleProps['marginLeft'];
    marginRight?: BoxStyleProps['marginRight'];
  };
} = {
  inbound: {
    marginRight: 'space70',
  },
  outbound: {
    marginLeft: 'space70',
  },
};

export const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
  ({children, variant, element = 'CHAT_MESSAGE', ...props}, ref) => {
    return (
      <MessageVariantContext.Provider value={variant}>
        <Box
          role="listitem"
          display="flex"
          flexDirection="column"
          ref={ref}
          element={element}
          variant={variant}
          {...messageVariantStyles[variant]}
          {...safelySpreadBoxProps(props)}
        >
          {children}
        </Box>
      </MessageVariantContext.Provider>
    );
  }
);

ChatMessage.displayName = 'ChatMessage';
