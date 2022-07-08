import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';

export interface ChatBookendProps {
  children?: string;
  element?: BoxElementProps['element'];
}

const ChatBookend = React.forwardRef<HTMLDivElement, ChatBookendProps>(
  ({children, element = 'CHAT_BOOKEND', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        color="colorTextWeak"
        element={element}
        display="flex"
        justifyContent="center"
        lineHeight="lineHeight20"
        fontSize="fontSize20"
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

ChatBookend.displayName = 'ChatBookend';

ChatBookend.propTypes = {
  children: PropTypes.string,
  element: PropTypes.string,
};

export {ChatBookend};
