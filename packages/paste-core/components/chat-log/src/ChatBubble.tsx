import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';

import type {ChatBubbleProps} from './types';
import {MessageVariantContext} from './ChatMessage';
import {bubbleVariantStyles} from './styles';

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(({children, element = 'CHAT_BUBBLE'}, ref) => {
  const variant = React.useContext(MessageVariantContext);

  return (
    <Box
      fontSize="fontSize40"
      lineHeight="lineHeight20"
      borderRadius="borderRadius30"
      paddingY="space30"
      paddingX="space40"
      element={element}
      ref={ref}
      {...bubbleVariantStyles[variant]}
    >
      {children}
    </Box>
  );
});

ChatBubble.displayName = 'ChatBubble';

ChatBubble.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

export {ChatBubble};
