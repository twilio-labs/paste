import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Sidebar, SidebarHeader, SidebarBody, SidebarHeaderIconButton, SidebarHeaderLabel} from '@twilio-paste/sidebar';
import {LogoTwilioIcon} from '@twilio-paste/icons/esm/LogoTwilioIcon';

import {SidebarNavigation} from './SidebarNavigation';

export interface SidebarDesktopProps {
  mainContentSkipLinkID: string;
  sidebarNavigationSkipLinkID: string;
  topbarSkipLinkID: string;
}

const SidebarDesktop: React.FC<React.PropsWithChildren<SidebarDesktopProps>> = ({
  mainContentSkipLinkID,
  sidebarNavigationSkipLinkID,
  topbarSkipLinkID,
}) => {
  return (
    <Box display={['none', 'block']}>
      <Sidebar
        variant="default"
        collapsed={false}
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

SidebarDesktop.displayName = 'SidebarDesktop';
export {SidebarDesktop};
