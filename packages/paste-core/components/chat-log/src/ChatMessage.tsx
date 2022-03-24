import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';

type MessageVariants = 'inbound' | 'outbound';

export interface ChatMessageProps {
  children?: React.ReactNode;
  variant: MessageVariants;
  element?: string;
  // option 1
  meta?: React.ReactNode;
  // option 2
  timeStamp?: Date;
  avatar?: React.ReactNode;
  senderName?: string;
}

const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
  ({children, variant, element = 'CHAT_MESSAGE'}, ref) => {
    const variantColorMap: Record<MessageVariants, BoxStyleProps['backgroundColor']> = {
      inbound: 'colorBackground',
      outbound: 'colorBackgroundPrimaryWeakest',
    };

    return (
      <Box as="li" listStyleType="none">
        <Box
          fontSize="fontSize40"
          lineHeight="lineHeight20"
          borderRadius="borderRadius30"
          paddingY="space30"
          paddingX="space40"
          backgroundColor={variantColorMap[variant]}
          element={element}
          ref={ref}
        >
          {children}
        </Box>
      </Box>
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
