import { Box } from '@twilio-paste/box';
import * as React from 'react';

import type { TableOfContentsAnchorProps } from './types';

export const TableOfContentsAnchor: React.FC<React.PropsWithChildren<TableOfContentsAnchorProps>> = ({
  href,
  children,
  ...props
}) => {
  return (
    <Box
      {...props}
      as="a"
      href={href}
      data-cy="page-aside-anchor"
      color="colorTextWeak"
      textDecoration="none"
      display="inline-block"
      width="100%"
      borderLeftColor="transparent"
      borderLeftStyle="solid"
      borderLeftWidth="borderWidth20"
      _focus={{
        outline: 'none',
        borderLeftColor: 'colorBorderPrimaryStronger',
        color: 'colorTextLinkStronger',
      }}
      _hover={{
        borderLeftColor: 'colorBorderPrimaryStronger',
        color: 'colorTextLinkStronger',
      }}
    >
      {children}
    </Box>
  );
};
