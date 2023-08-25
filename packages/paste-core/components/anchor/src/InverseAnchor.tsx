import * as React from 'react';
import {Box} from '@twilio-paste/box';

import type {AnchorProps} from './types';

const InverseAnchor = React.forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => (
  <Box
    {...props}
    as="a"
    color="colorTextInverse"
    fontSize="inherit"
    fontWeight="inherit"
    lineHeight="inherit"
    outline="none"
    ref={ref}
    textDecoration="underline"
    _active={{
      color: 'colorTextInverse',
      textDecoration: 'none',
    }}
    _focus={{
      boxShadow: 'shadowFocusInverse',
      color: 'colorTextInverse',
      textDecoration: 'underline',
    }}
    _hover={{
      color: 'colorTextInverse',
      textDecoration: 'none',
    }}
  >
    {props.children}
  </Box>
));

InverseAnchor.displayName = 'InverseAnchor';

export {InverseAnchor};
