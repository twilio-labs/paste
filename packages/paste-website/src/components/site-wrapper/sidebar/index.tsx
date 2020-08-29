import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {styled} from '@twilio-paste/styling-library';
import {SidebarHeader} from './SidebarHeader';
import {SidebarNavigation} from './SidebarNavigation';
import {SIDEBAR_WIDTH} from '../../../constants';
import {getMainContentComputedOffset} from '../../../utils/stickyUtils';
import {SiteBodyContext} from '../SiteBodyContext';

interface SideBarProps {
  isPasteTheme: boolean;
}

const StyledSidebar = styled(Box)<SideBarProps>(({isPasteTheme}) => ({
  height: `calc(100vh - ${getMainContentComputedOffset(isPasteTheme)}px)`,
  width: SIDEBAR_WIDTH,
  WebkitOverflowScrolling: 'touch',
}));

const Sidebar: React.FC = () => {
  const {isPasteTheme} = React.useContext(SiteBodyContext);
  return (
    <StyledSidebar
      backgroundColor="colorBackground"
      isPasteTheme={isPasteTheme}
      paddingTop="space70"
      paddingRight="space40"
      paddingBottom="space70"
      paddingLeft="space40"
      overflow="auto"
      position="sticky"
      top={`${getMainContentComputedOffset(isPasteTheme)}px`}
    >
      <SidebarHeader siteTitle="Paste" siteSubTitle="Design System" />
      <SidebarNavigation />
    </StyledSidebar>
  );
};

export {Sidebar};
