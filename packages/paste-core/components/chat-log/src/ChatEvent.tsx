import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';

export interface ChatEventProps {
  children?: React.ReactNode;
  element?: BoxElementProps['element'];
}

const ChatEvent = React.forwardRef<HTMLDivElement, ChatEventProps>(
  ({children, element = 'CHAT_EVENT', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        role="listitem"
        color="colorTextWeak"
        element={element}
        textAlign="center"
        lineHeight="lineHeight20"
        fontSize="fontSize20"
        fontWeight="fontWeightMedium"
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

ChatEvent.displayName = 'ChatEvent';

ChatEvent.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

export {ChatEvent};
