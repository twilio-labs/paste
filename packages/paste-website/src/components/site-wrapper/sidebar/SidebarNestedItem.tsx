import * as React from 'react';
import {Box} from '@twilio-paste/box';

export const SidebarNestedItem: React.FC = (props) => {
  return (
    <Box
      as="li"
      marginTop="space20"
      marginBottom="space20"
      fontSize={['fontSize50', 'fontSize50', 'fontSize30']}
      lineHeight="lineHeight20"
    >
      {props.children}
    </Box>
  );
};
