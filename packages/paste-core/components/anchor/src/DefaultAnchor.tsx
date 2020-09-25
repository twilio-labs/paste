import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {AnchorProps, AnchorPropTypes} from './types';

const DefaultAnchor = React.forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => (
  <Box
    {...props}
    as="a"
    color="colorTextLink"
    fontSize="inherit"
    fontWeight="inherit"
    lineHeight="inherit"
    outline="none"
    ref={ref}
    textDecoration="underline"
    _active={{
      color: 'colorTextLinkDarker',
      textDecoration: 'none',
    }}
    _focus={{
      boxShadow: 'shadowFocus',
      color: 'colorTextLinkDarker',
      textDecoration: 'none',
    }}
    _hover={{
      color: 'colorTextLinkDarker',
      textDecoration: 'none',
    }}
  >
    {props.children}
  </Box>
));

DefaultAnchor.displayName = 'DefaultAnchor';

if (process.env.NODE_ENV === 'development') {
  DefaultAnchor.propTypes = AnchorPropTypes;
}

export {DefaultAnchor};
