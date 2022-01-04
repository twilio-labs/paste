import * as React from 'react';
import {Box} from '@twilio-paste/box';

interface SidebarNestedListProps {
  level?: 1 | 2;
}

export const SidebarNestedList: React.FC<SidebarNestedListProps> = ({level, children}) => {
  return (
    <Box as="ul" padding="space0" margin="space0" listStyleType="none" textTransform="capitalize">
      {children}
    </Box>
  );
};
