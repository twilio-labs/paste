import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxElementProps } from '@twilio-paste/box';
import * as React from 'react';

export interface ChatBookendProps {
  children?: React.ReactNode;
  element?: BoxElementProps['element'];
}

const ChatBookend = React.forwardRef<HTMLDivElement, ChatBookendProps>(
  ({ children, element = 'CHAT_BOOKEND', ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        role="listitem"
        color="colorTextWeak"
        element={element}
        textAlign="center"
        marginBottom="space20"
        lineHeight="lineHeight20"
        fontSize="fontSize20"
        fontWeight="fontWeightMedium"
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

ChatBookend.displayName = 'ChatBookend';

export { ChatBookend };
