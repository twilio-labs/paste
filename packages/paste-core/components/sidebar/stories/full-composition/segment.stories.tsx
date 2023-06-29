import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';
import {ProductSegmentIcon} from '@twilio-paste/icons/esm/ProductSegmentIcon';
import {ProductConnectionsIcon} from '@twilio-paste/icons/esm/ProductConnectionsIcon';
import {ProductReverseETLIcon} from '@twilio-paste/icons/esm/ProductReverseETLIcon';
import {ProductPrivacyIcon} from '@twilio-paste/icons/esm/ProductPrivacyIcon';
import {ProductProtocolsIcon} from '@twilio-paste/icons/esm/ProductProtocolsIcon';
import {ProductEngageIcon} from '@twilio-paste/icons/esm/ProductEngageIcon';
import {ProductSettingsIcon} from '@twilio-paste/icons/esm/ProductSettingsIcon';
import {ProductHomeIcon} from '@twilio-paste/icons/esm/ProductHomeIcon';
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
  SidebarPushContentWrapper,
  SidebarNavigation,
  SidebarNavigationDisclosure,
  SidebarNavigationDisclosureHeadingWrapper,
  SidebarNavigationDisclosureHeading,
  SidebarNavigationDisclosureContent,
  SidebarNavigationItem,
  SidebarBetaBadge,
} from '../../src';
import {SearchBox} from './components/SearchBox';
import {SupportMenu} from './components/SupportMenu';
import {NotificationsDialog} from './components/NotificationsDialog';
import {AppSwitcher} from './components/AppSwitcher';
import {UserDialogExample} from './components/UserDialogSegment';
import {WorkspaceSwitcherMenu} from './components/WorkspaceSwitcher';
import {UpgradeBadge} from './components/UpgradeBadge';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/FullCompositions',
};

/* eslint-disable react/jsx-max-depth */
export const Segment: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="compact">
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <ProductSegmentIcon size="sizeIcon20" decorative={false} title="Go to Segment homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Segment</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation hierarchical hideItemsOnCollapse>
            <SidebarNavigationItem href="https://google.com" icon={<ProductHomeIcon decorative />}>
              Home
            </SidebarNavigationItem>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading icon={<ProductConnectionsIcon decorative />} selected>
                  Connections
                </SidebarNavigationDisclosureHeading>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com" selected>
                  Overview
                </SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading icon={<ProductReverseETLIcon decorative />}>
                  Reverse ETL
                </SidebarNavigationDisclosureHeading>
                <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading icon={<ProductPrivacyIcon decorative />}>
                  Privacy
                </SidebarNavigationDisclosureHeading>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading icon={<ProductProtocolsIcon decorative />}>
                  Protocols
                </SidebarNavigationDisclosureHeading>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading icon={<ProductEngageIcon decorative />}>
                  Enagage
                </SidebarNavigationDisclosureHeading>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading icon={<ProductSettingsIcon decorative />}>
                  Settings
                </SidebarNavigationDisclosureHeading>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
          </SidebarNavigation>
        </SidebarBody>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <Topbar>
          <TopbarActions justify="start">
            <WorkspaceSwitcherMenu />
            <UpgradeBadge />
          </TopbarActions>
          <TopbarActions justify="end">
            <SearchBox />
            <SupportMenu />
            <NotificationsDialog />
            <AppSwitcher />
            <UserDialogExample />
          </TopbarActions>
        </Topbar>
        <Box padding="space70">
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </Box>
      </SidebarPushContentWrapper>
    </Box>
  );
};
/* eslint-enable react/jsx-max-depth */
Segment.parameters = {
  padding: false,
};
