import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import type {asTags} from '@twilio-paste/heading';
import type {BoxProps} from '@twilio-paste/box';

export interface CalloutHeadingProps extends Partial<Omit<HTMLHeadingElement, 'children'>> {
  as?: asTags;
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

export const CalloutHeading = React.forwardRef<HTMLHeadingElement, CalloutHeadingProps>(
  ({element = 'CALLOUT_HEADING', children, as = 'h3', ...props}, ref) => (
    <Text
      {...safelySpreadTextProps(props)}
      as={as}
      ref={ref}
      element={element}
      color="currentColor"
      lineHeight="lineHeight40"
    >
      {children}
    </Text>
  )
);

CalloutHeading.displayName = 'CalloutHeading';
CalloutHeading.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'label', 'span', 'header'] as asTags[]).isRequired,
};
