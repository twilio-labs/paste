import * as React from 'react';
import {Box} from '@twilio-paste/box';

const Prefix: React.FC = ({children}) => {
  if (children == null) return null;
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      backgroundColor="colorBackground"
      padding="space30"
      borderRightWidth="borderWidth10"
      borderRightColor="colorBorderLight"
      borderRightStyle="solid"
      borderTopLeftRadius="borderRadius20"
      borderBottomLeftRadius="borderRadius20"
    >
      {children}
    </Box>
  );
};

Prefix.displayName = 'Prefix';

export {Prefix};
