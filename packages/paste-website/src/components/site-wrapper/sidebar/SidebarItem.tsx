import * as React from 'react';
import {Box} from '@twilio-paste/box';

export const SidebarItem: React.FC = props => {
  return (
    <Box as="li" margin="space20" fontSize="fontSize30" lineHeight="lineHeight20">
      {props.children}
    </Box>
  );
};
