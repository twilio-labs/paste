import * as React from 'react';
import type {BoxProps} from '@twilio-paste/box';
import {Box} from '@twilio-paste/box';

interface SidebarItemProps extends BoxProps {
  nested?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({children, nested, ...props}) => {
  return (
    <Box
      as="li"
      margin="space20"
      marginBottom={nested ? 'space20' : undefined}
      fontSize={['fontSize50', 'fontSize50', 'fontSize30']}
      lineHeight="lineHeight20"
      {...props}
    >
      {children}
    </Box>
  );
};
