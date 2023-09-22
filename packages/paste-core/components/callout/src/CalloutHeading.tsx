import type { BoxProps } from '@twilio-paste/box';
import type { asTags } from '@twilio-paste/heading';
import { Text, safelySpreadTextProps } from '@twilio-paste/text';
import * as React from 'react';

export interface CalloutHeadingProps extends Partial<Omit<HTMLHeadingElement, 'children'>> {
  as?: asTags;
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

export const CalloutHeading = React.forwardRef<HTMLHeadingElement, CalloutHeadingProps>(
  ({ element = 'CALLOUT_HEADING', children, as = 'h3', ...props }, ref) => (
    <Text
      {...safelySpreadTextProps(props)}
      as={as}
      ref={ref}
      element={element}
      color="currentColor"
      lineHeight="lineHeight40"
      fontWeight="fontWeightSemibold"
    >
      {children}
    </Text>
  ),
);

CalloutHeading.displayName = 'CalloutHeading';
