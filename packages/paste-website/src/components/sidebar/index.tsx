import * as React from 'react';
import {Box} from '@twilio-paste/box';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = props => {
  return (
    <Box
      backgroundColor="colorBackgroundRowStriped"
      paddingTop={24}
      paddingRight={12}
      paddingBottom={24}
      paddingLeft={12}
    >
      {props.children}
    </Box>
  );
};

export {Sidebar};
