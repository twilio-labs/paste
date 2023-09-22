import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ProductConnectionsIcon } from "@twilio-paste/icons/esm/ProductConnectionsIcon";
import { ProductEngageIcon } from "@twilio-paste/icons/esm/ProductEngageIcon";
import { ProductHomeIcon } from "@twilio-paste/icons/esm/ProductHomeIcon";
import { ProductPrivacyIcon } from "@twilio-paste/icons/esm/ProductPrivacyIcon";
import { ProductProtocolsIcon } from "@twilio-paste/icons/esm/ProductProtocolsIcon";
import { ProductReverseETLIcon } from "@twilio-paste/icons/esm/ProductReverseETLIcon";
import { ProductSegmentIcon } from "@twilio-paste/icons/esm/ProductSegmentIcon";
import { ProductSettingsIcon } from "@twilio-paste/icons/esm/ProductSettingsIcon";
import { Topbar, TopbarActions } from "@twilio-paste/topbar";
// ONLY for storybook stacked view not to complain on duplicates. aria-label should be carefully selected strings
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import {
  Sidebar,
  SidebarBetaBadge,
  SidebarBody,
  SidebarCollapseButton,
  SidebarFooter,
  SidebarHeader,
  SidebarHeaderIconButton,
  SidebarHeaderLabel,
  SidebarNavigation,
  SidebarNavigationDisclosure,
  SidebarNavigationDisclosureContent,
  SidebarNavigationDisclosureHeading,
  SidebarNavigationDisclosureHeadingWrapper,
  SidebarNavigationItem,
  SidebarPushContentWrapper,
} from "../../../src";
import { AppSwitcher } from "./AppSwitcher";
import { NotificationsDialog } from "./NotificationsDialog";
import { SearchBox } from "./SearchBox";
import { SupportMenu } from "./SupportMenu";
import { UpgradeBadge } from "./UpgradeBadge";
import { UserDialogExample } from "./UserDialogSegment";
import { WorkspaceSwitcherMenu } from "./WorkspaceSwitcher";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Sidebar/FullCompositions",
};

/* eslint-disable react/jsx-max-depth */
export const Segment: React.FC<React.PropsWithChildren<{ collapsed: boolean; setCollapsed: (collapsed) => void }>> = ({
  collapsed,
  setCollapsed,
}) => {
  const id = useUID();
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    <Box minWidth="1200px">
      {/* Can be placed anywhere - position fixed */}
      <Sidebar
        aria-label={id}
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={collapsed}
        variant="compact"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <ProductSegmentIcon size="sizeIcon20" decorative={false} title="Go to Segment homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Segment</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation aria-label={id} hierarchical hideItemsOnCollapse>
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
            onClick={() => setCollapsed(!collapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={collapsed} variant="compact">
        <Topbar id={topbarSkipLinkID}>
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
        <Box padding="space70" id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setCollapsed(!collapsed)}>
            Toggle Push Sidebar
          </Button>
        </Box>
      </SidebarPushContentWrapper>
    </Box>
  );
};
/* eslint-enable react/jsx-max-depth */
