import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

export const SiteMain: React.FC<React.PropsWithChildren<HTMLPasteProps<'div'>>> = ({children, ...props}) => {
  return (
    <Box as="main" backgroundColor="colorBackgroundBody" position="relative" {...props}>
      {children}
    </Box>
  );
};
