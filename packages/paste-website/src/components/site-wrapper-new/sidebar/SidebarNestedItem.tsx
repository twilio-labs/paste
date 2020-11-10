import * as React from 'react';
import {Box} from '@twilio-paste/box';

export const SidebarNestedItem: React.FC = props => {
  return (
    <Box as="li" marginTop="space20" marginBottom="space20" fontSize="fontSize30" lineHeight="lineHeight20">
      {props.children}
    </Box>
  );
};
