import * as React from 'react';
import {Box} from '@twilio-paste/box';

const Suffix: React.FC = ({children}) => {
  if (children == null) return null;
  return (
    <Box
      alignItems="flex-start"
      backgroundColor="colorBackground"
      borderBottomRightRadius="borderRadius20"
      borderLeftColor="colorBorderLighter"
      borderLeftStyle="solid"
      borderLeftWidth="borderWidth10"
      borderTopRightRadius="borderRadius20"
      display="flex"
      lineHeight="lineHeight20"
      padding="space30"
    >
      {children}
    </Box>
  );
};

Suffix.displayName = 'Suffix';

export {Suffix};
