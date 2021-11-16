import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {TableOfContentsAnchorProps} from './types';

export const TableOfContentsAnchor: React.FC<TableOfContentsAnchorProps> = ({href, children, ...props}) => {
  return (
    <Box
      {...props}
      as="a"
      href={href}
      data-cy="page-aside-anchor"
      color="inherit"
      textDecoration="none"
      display="inline-block"
    >
      {children}
    </Box>
  );
};
