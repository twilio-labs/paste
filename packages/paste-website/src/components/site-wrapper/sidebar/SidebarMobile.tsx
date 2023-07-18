import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Sidebar, SidebarHeader, SidebarBody, SidebarHeaderIconButton, SidebarHeaderLabel} from '@twilio-paste/sidebar';
import {LogoTwilioIcon} from '@twilio-paste/icons/esm/LogoTwilioIcon';

import {SidebarNavigation} from './SidebarNavigation';

export interface SidebarMobileProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mainContentSkipLinkID: string;
  sidebarNavigationSkipLinkID: string;
  topbarSkipLinkID: string;
}

const SidebarMobile: React.FC<React.PropsWithChildren<SidebarMobileProps>> = ({
  collapsed,
  mainContentSkipLinkID,
  sidebarNavigationSkipLinkID,
  topbarSkipLinkID,
}) => {
  return (
    <Box display={['block', 'none']}>
      <Sidebar
        variant="default"
        collapsed={collapsed}
        mainContentSkipLinkID={mainContentSkipLinkID}
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="/">
            <LogoTwilioIcon decorative={false} title="Twilio Paste" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Paste</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation />
        </SidebarBody>
      </Sidebar>
    </Box>
  );
};

SidebarMobile.displayName = 'SidebarMobile';
export {SidebarMobile};
