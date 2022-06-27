import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import type {MessageVariants, ChatMessageProps} from './types';
import {messageVariantStyles} from './styles';
import {MessageVariantContext} from './MessageVariantContext';

const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
  ({children, variant, element = 'CHAT_MESSAGE', ...props}, ref) => {
    return (
      <MessageVariantContext.Provider value={variant}>
        <Box
          as="li"
          listStyleType="none"
          marginBottom="space80"
          ref={ref}
          element={element}
          variant={variant}
          _last={{marginBottom: 'space0'}}
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

ChatMessage.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['inbound', 'outbound'] as MessageVariants[]).isRequired,
  element: PropTypes.string,
};

export {ChatMessage};
