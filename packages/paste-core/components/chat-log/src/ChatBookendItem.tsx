import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';

export interface ChatBookendItemProps {
  children?: React.ReactNode;
  element?: BoxElementProps['element'];
}

const ChatBookendItem = React.forwardRef<HTMLDivElement, ChatBookendItemProps>(
  ({children, element = 'CHAT_BOOKEND_ITEM', ...props}, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} as="div" element={element} ref={ref}>
        {children}
      </Box>
    );
  }
);

ChatBookendItem.displayName = 'ChatBookendItem';

export {ChatBookendItem};
