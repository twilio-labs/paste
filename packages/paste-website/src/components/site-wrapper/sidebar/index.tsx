import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {styled} from '@twilio-paste/styling-library';
import {SidebarHeader} from './SidebarHeader';
import {SidebarNavigation} from './SidebarNavigation';
import {SIDEBAR_WIDTH} from '../constants';

const StyledSidebar = styled(Box)`
  height: 100vh;
  width: ${SIDEBAR_WIDTH};
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const Sidebar: React.FC<{}> = () => {
  return (
    <StyledSidebar
      backgroundColor="colorBackground"
      paddingTop="space70"
      paddingRight="space40"
      paddingBottom="space70"
      paddingLeft="space40"
    >
      <SidebarHeader siteTitle="Paste" siteSubTitle="Design System" />
      <SidebarNavigation />
    </StyledSidebar>
  );
};

export {Sidebar};
