import * as React from 'react';
import * as PropTypes from 'prop-types';
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

    const hasMultipleChildren = React.Children.count(children) > 1;

    return (
      <Box
        ref={ref}
        element={element}
        display="flex"
        justifyContent={hasMultipleChildren ? 'space-between' : 'flex-end'}
        textAlign={!hasMultipleChildren ? 'right' : undefined}
        alignItems="center"
        variant={variant}
        columnGap="space40"
        {...safelySpreadBoxProps(props)}
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
