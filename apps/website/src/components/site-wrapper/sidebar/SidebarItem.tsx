import * as React from 'react';
import {Box} from '@twilio-paste/box';

interface SidebarItemProps {
  children: React.ReactNode;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({children}) => {
  return (
    <Box as="li" fontSize={['fontSize50', 'fontSize50', 'fontSize30']} lineHeight="lineHeight20">
      {children}
    </Box>
  );
};
