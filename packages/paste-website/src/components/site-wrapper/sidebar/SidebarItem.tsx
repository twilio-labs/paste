import * as React from 'react-16';
import {Box, BoxProps} from '@twilio-paste/box';

export const SidebarItem: React.FC<BoxProps> = (props) => {
  return (
    <Box
      as="li"
      margin="space20"
      fontSize={['fontSize50', 'fontSize50', 'fontSize30']}
      lineHeight="lineHeight20"
      {...props}
    />
  );
};
