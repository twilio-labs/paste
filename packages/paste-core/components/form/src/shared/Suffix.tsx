import * as React from 'react';
import {Box} from '@twilio-paste/box';

const Suffix: React.FC = ({children}) => {
  if (children == null) return null;
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      backgroundColor="colorBackground"
      padding="space30"
      borderLeftWidth="borderWidth10"
      borderLeftColor="colorBorderLight"
      borderLeftStyle="solid"
      borderTopRightRadius="borderRadius20"
      borderBottomRightRadius="borderRadius20"
    >
      {children}
    </Box>
  );
};

Suffix.displayName = 'Prefix';

export {Suffix};
