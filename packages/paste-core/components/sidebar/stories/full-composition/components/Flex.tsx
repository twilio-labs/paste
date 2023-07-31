import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';
import {ProductContactCenterAdminIcon} from '@twilio-paste/icons/esm/ProductContactCenterAdminIcon';
import {ProductContactCenterTasksIcon} from '@twilio-paste/icons/esm/ProductContactCenterTasksIcon';
import {ProductContactCenterTeamsIcon} from '@twilio-paste/icons/esm/ProductContactCenterTeamsIcon';
import {ProductPrivacyIcon} from '@twilio-paste/icons/esm/ProductPrivacyIcon';
import {ProductContactCenterQueuesIcon} from '@twilio-paste/icons/esm/ProductContactCenterQueuesIcon';
import {ProductUsageIcon} from '@twilio-paste/icons/esm/ProductUsageIcon';
// ONLY for storybook stacked view not to complain on duplicates. aria-label should be carefully selected strings
import {useUID} from '@twilio-paste/uid-library';
import {Topbar, TopbarActions} from '@twilio-paste/topbar';

import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarHeaderIconButton,
  SidebarCollapseButton,
  SidebarFooter,
  SidebarOverlayContentWrapper,
  SidebarNavigation,
  SidebarNavigationItem,
} from '../../../src';
import {StatusMenuExample} from './StatusMenu';
import {SupportMenu} from './SupportMenu';
import {AppSwitcher} from './AppSwitcher';
import {UserDialogExample} from './UserDialogFlex';
import {DebuggerAction} from './DebuggerAction';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/FullCompositions',
};

export const Flex: React.FC<React.PropsWithChildren<{collapsed: boolean; setCollapsed: (collapsed) => void}>> = ({
  collapsed,
  setCollapsed,
}) => {
  const id = useUID();
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    <Box minWidth="1200px">
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={collapsed}
        variant="compact"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation aria-label={id}>
            <SidebarNavigationItem
              href="https://google.com"
              selected
              icon={<ProductContactCenterAdminIcon decorative={false} title="Admin" />}
            >
              Admin
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductContactCenterTasksIcon decorative={false} title="Agent dashboard" />}
            >
              Agent dashboard
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductContactCenterTeamsIcon decorative={false} title="Teams view" />}
            >
              Teams view
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductContactCenterQueuesIcon decorative={false} title="Queue stats" />}
            >
              Queue stats
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductPrivacyIcon decorative={false} title="Privacy" />}
            >
              Privacy
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductUsageIcon decorative={false} title="Insights" />}
            >
              Insights
            </SidebarNavigationItem>
          </SidebarNavigation>
        </SidebarBody>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setCollapsed(!collapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>

      <SidebarOverlayContentWrapper collapsed={collapsed} variant="compact">
        <Topbar id={topbarSkipLinkID}>
          <TopbarActions justify="start">
            <StatusMenuExample />
          </TopbarActions>
          <TopbarActions justify="end">
            <SupportMenu />
            <DebuggerAction />
            <AppSwitcher />
            <UserDialogExample />
          </TopbarActions>
        </Topbar>
        <Box padding="space70" id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setCollapsed(!collapsed)}>
            Toggle Overlay Sidebar
          </Button>
        </Box>
      </SidebarOverlayContentWrapper>
    </Box>
  );
};
