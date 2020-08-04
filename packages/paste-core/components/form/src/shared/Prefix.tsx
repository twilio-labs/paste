import * as React from 'react';
import {Box} from '@twilio-paste/box';

const Prefix: React.FC = ({children}) => {
  if (children == null) return null;
  return (
    <Box
      alignItems="flex-start"
      backgroundColor="colorBackground"
      borderBottomLeftRadius="borderRadius20"
      borderRightColor="colorBorderLighter"
      borderRightStyle="solid"
      borderRightWidth="borderWidth10"
      borderTopLeftRadius="borderRadius20"
      display="flex"
      lineHeight="lineHeight20"
      padding="space30"
    >
      {children}
    </Box>
  );
};

Prefix.displayName = 'Prefix';

export {Prefix};
