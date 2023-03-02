import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';

import {MessageVariantContext} from './MessageVariantContext';

export interface ChatMessageMetaProps {
  ['aria-label']: string;
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
}

export const ChatMessageMeta = React.forwardRef<HTMLDivElement, ChatMessageMetaProps>(
  ({children, element = 'CHAT_MESSAGE_META', ...props}, ref) => {
    const variant = React.useContext(MessageVariantContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        display="flex"
        justifyContent={variant === 'inbound' ? 'flex-start' : 'flex-end'}
        textAlign={variant === 'outbound' ? 'right' : 'left'}
        alignItems="center"
        variant={variant}
        columnGap="space40"
        fontWeight="fontWeightMedium"
      >
        {children}
      </Box>
    );
  }
);

ChatMessageMeta.displayName = 'ChatMessageMeta';

ChatMessageMeta.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};
