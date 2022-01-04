import * as React from 'react';
import type {BoxProps} from '@twilio-paste/box';
import {Box} from '@twilio-paste/box';

interface SidebarItemProps extends BoxProps {
  level?: 0 | 1 | 2;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({level = 0, children, ...props}) => {
  return (
    <Box
      as="li"
      margin="space20"
      marginBottom={level > 0 ? 'space20' : undefined}
      fontSize={['fontSize50', 'fontSize50', 'fontSize30']}
      lineHeight="lineHeight20"
      {...props}
    >
      {children}
    </Box>
  );
};
