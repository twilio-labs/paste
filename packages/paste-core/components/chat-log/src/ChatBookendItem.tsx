import * as React from 'react';
import PropTypes from 'prop-types';
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

ChatBookendItem.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

export {ChatBookendItem};
