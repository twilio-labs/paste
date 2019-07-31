import * as React from 'react';
import {Box} from '@twilio-paste/box';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = props => {
  return (
    <Box
      backgroundColor="colorBackgroundRowStriped"
      paddingTop="space70"
      paddingRight="space40"
      paddingBottom="space70"
      paddingLeft="space40"
    >
      {props.children}
    </Box>
  );
};

export {Sidebar};
