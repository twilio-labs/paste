import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';

export interface ChatLogProps {
  children?: React.ReactNode;
  element?: BoxElementProps['element'];
}

const ChatLog = React.forwardRef<HTMLDivElement, ChatLogProps>(({children, element = 'CHAT_LOG', ...props}, ref) => {
  return (
    <Box role="log" padding="space70" element={element} ref={ref} {...safelySpreadBoxProps(props)}>
      <Box
        as="div"
        role="list"
        margin="space0"
        padding="space0"
        overflowX="hidden"
        display="flex"
        flexDirection="column"
        rowGap="space80"
      >
        {children}
      </Box>
    </Box>
  );
});

ChatLog.displayName = 'ChatLog';

ChatLog.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

export {ChatLog};
