import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps, BoxElementProps} from '@twilio-paste/box';

import {MessageVariantContext} from './MessageVariantContext';
import type {MessageVariants} from './MessageVariantContext';

export interface ChatBubbleProps {
  children?: React.ReactNode;
  element?: BoxElementProps['element'];
}

const bubbleVariantStyles: {
  [key in MessageVariants]: BoxStyleProps;
} = {
  inbound: {
    backgroundColor: 'colorBackground',
    alignSelf: 'flex-start',
  },
  outbound: {
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    alignSelf: 'flex-end',
  },
};

export const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({children, element = 'CHAT_BUBBLE', ...props}, ref) => {
    const variant = React.useContext(MessageVariantContext);

    return (
      <Box
        display="inline-block"
        fontSize="fontSize30"
        lineHeight="lineHeight20"
        borderRadius="borderRadius30"
        paddingY="space30"
        paddingX="space40"
        marginBottom="space30"
        element={element}
        ref={ref}
        variant={variant}
        {...bubbleVariantStyles[variant]}
        {...safelySpreadBoxProps(props)}
      >
        {children}
      </Box>
    );
  }
);

ChatBubble.displayName = 'ChatBubble';

ChatBubble.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};
