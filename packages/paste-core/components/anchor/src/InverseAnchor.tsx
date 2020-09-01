import * as React from 'react';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import {AnchorProps, AnchorPropTypes} from './types';

const InverseAnchor = React.forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => (
  <Text
    as="a"
    color="colorTextInverse"
    outline="none"
    ref={ref}
    textDecoration="underline"
    _active={{
      textDecoration: 'none',
    }}
    _focus={{
      boxShadow: 'shadowFocusInverse',
      color: 'colorTextInverseWeaker',
      textDecoration: 'none',
    }}
    _hover={{
      color: 'colorTextInverseWeaker',
      textDecoration: 'none',
    }}
    {...safelySpreadTextProps(props)}
  >
    {props.children}
  </Text>
));

InverseAnchor.displayName = 'InverseAnchor';

if (process.env.NODE_ENV === 'development') {
  InverseAnchor.propTypes = AnchorPropTypes;
}

export {InverseAnchor};
