import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';

import type {MessageVariants, ChatMessageProps} from './types';
import {messageVariantStyles} from './styles';

export const MessageVariantContext = React.createContext<MessageVariants>('inbound');

const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
  ({children, variant, element = 'CHAT_MESSAGE'}, ref) => {
    return (
      <MessageVariantContext.Provider value={variant}>
        <Box as="li" listStyleType="none" ref={ref} element={element} {...messageVariantStyles[variant]}>
          {children}
        </Box>
      </MessageVariantContext.Provider>
    );
  }
);

ChatMessage.displayName = 'ChatMessage';

ChatMessage.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['inbound', 'outbound'] as MessageVariants[]).isRequired,
  element: PropTypes.string,
};

export {ChatMessage};
