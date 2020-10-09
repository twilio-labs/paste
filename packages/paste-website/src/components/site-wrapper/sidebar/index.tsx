import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {styled} from '@twilio-paste/styling-library';
import {SidebarNavigation} from './SidebarNavigation';
import {ContactUsMenu} from '../../ContactUsMenu';
import {STICKY_SIDEBAR_OFFSET} from '../../../constants';

const StyledSidebar = styled(Box)(() => ({
  height: `calc(100vh - ${STICKY_SIDEBAR_OFFSET}px)`,
  WebkitOverflowScrolling: 'touch',
}));

const Sidebar: React.FC = () => {
  return (
    <StyledSidebar
      backgroundColor="colorBackground"
      position="sticky"
      top={`${STICKY_SIDEBAR_OFFSET}px`}
      width="sizeSidebar"
      display="flex"
      flexDirection="column"
      zIndex="zIndex10"
    >
      <SidebarNavigation />
      <ContactUsMenu />
    </StyledSidebar>
  );
};

export {Sidebar};
