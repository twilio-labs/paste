import * as React from 'react';

import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import type {BoxProps} from '@twilio-paste/box';

export interface CalloutTextProps extends Partial<Omit<HTMLParagraphElement, 'children'>> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

export const CalloutText = React.forwardRef<HTMLParagraphElement, CalloutTextProps>(
  ({element = 'CALLOUT_TEXT', children, ...props}, ref) => (
    <Text
      {...safelySpreadTextProps(props)}
      as="p"
      ref={ref}
      element={element}
      color="currentColor"
      lineHeight="lineHeight40"
    >
      {children}
    </Text>
  )
);

CalloutText.displayName = 'CalloutText';
