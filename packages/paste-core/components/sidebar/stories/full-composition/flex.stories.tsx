import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';
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
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarHeaderIconButton,
  SidebarCollapseButton,
  SidebarFooter,
  SidebarOverlayContentWrapper,
  SidebarNavigation,
  SidebarNavigationItem,
} from '../../src';
import {StatusMenuExample} from './components/StatusMenu';
import {SupportMenu} from './components/SupportMenu';
import {AppSwitcher} from './components/AppSwitcher';
import {UserDialogExample} from './components/UserDialog';
import {DebuggerAction} from './components/DebuggerAction';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/FullCompositions',
};

export const Flex: StoryFn = () => {
  const id = useUID();
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(true);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label={id} collapsed={overlaySidebarExpanded} variant="compact">
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarNavigation>
          <SidebarNavigationItem
            href="https://google.com"
            selected
            icon={<ProductContactCenterAdminIcon decorative={false} title="Admin" />}
          >
            Admin
          </SidebarNavigationItem>
          <SidebarNavigationItem
            href="https://google.com"
            icon={<ProductContactCenterTasksIcon decorative title="Agent dashboard" />}
          >
            Agent dashboard
          </SidebarNavigationItem>
          <SidebarNavigationItem
            href="https://google.com"
            icon={<ProductContactCenterTeamsIcon decorative title="Teams view" />}
          >
            Teams view
          </SidebarNavigationItem>
          <SidebarNavigationItem
            href="https://google.com"
            icon={<ProductContactCenterQueuesIcon decorative title="Queue stats" />}
          >
            Queue stats
          </SidebarNavigationItem>
          <SidebarNavigationItem href="https://google.com" icon={<ProductPrivacyIcon decorative title="Privacy" />}>
            Privacy
          </SidebarNavigationItem>
          <SidebarNavigationItem href="https://google.com" icon={<ProductUsageIcon decorative title="Insights" />}>
            Insights
          </SidebarNavigationItem>
        </SidebarNavigation>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarOverlayContentWrapper collapsed={overlaySidebarExpanded} variant="compact">
        <Topbar>
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
        <Box padding="space70">
          <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
            Toggle Overlay Sidebar
          </Button>
        </Box>
      </SidebarOverlayContentWrapper>
    </Box>
  );
};
Flex.parameters = {
  padding: false,
};
