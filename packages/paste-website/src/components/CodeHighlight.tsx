import * as React from 'react';

import {Box} from '@twilio-paste/box';

export const CodeHighlight: React.FC<{children: React.ReactNode}> = ({children}) => (
  <Box
    as="code"
    backgroundColor="colorBackground"
    fontWeight="fontWeightMedium"
    fontSize="fontSize20"
    lineHeight="lineHeight10"
    paddingX="space30"
    paddingY="space20"
    borderRadius="borderRadius20"
  >
    {children}
  </Box>
);
