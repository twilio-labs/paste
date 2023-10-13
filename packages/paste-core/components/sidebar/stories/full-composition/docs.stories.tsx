import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import { InPageNavigation, InPageNavigationItem } from "@twilio-paste/in-page-navigation";
import { Topbar, TopbarActions } from "@twilio-paste/topbar";
// ONLY for storybook stacked view not to complain on duplicates. aria-label should be carefully selected strings
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import {
  Sidebar,
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
} from "../../src";
import { AppSwitcher } from "./components/AppSwitcher";
import { NotificationsDialog } from "./components/NotificationsDialog";
import { SearchBox } from "./components/SearchBox";
import { SupportMenu } from "./components/SupportMenu";
import { UpgradeBadge } from "./components/UpgradeBadge";
import { UserDialogExample } from "./components/UserDialogSegment";
import { WorkspaceSwitcherMenu } from "./components/WorkspaceSwitcher";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Sidebar/FullCompositions",
};

/* eslint-disable react/jsx-max-depth */
export const Docs: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);
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
        collapsed={pushSidebarCollapsed}
        variant="compact"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Twilio Docs homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Docs</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation aria-label={id} hierarchical hideItemsOnCollapse>
            <SidebarNavigationItem href="https://google.com" selected>
              Twilio CLI
            </SidebarNavigationItem>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading>Examples</SidebarNavigationDisclosureHeading>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading>General usage</SidebarNavigationDisclosureHeading>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading>Getting started</SidebarNavigationDisclosureHeading>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationItem href="https://google.com">Plugins</SidebarNavigationItem>
            <SidebarNavigationItem href="https://google.com">Quick start</SidebarNavigationItem>
            <SidebarNavigationItem href="https://google.com">Uninstall</SidebarNavigationItem>
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
        <Topbar id={topbarSkipLinkID}>
          <TopbarActions justify="start" aria-label={topbarSkipLinkID}>
            <InPageNavigation aria-label={`Product ${topbarSkipLinkID}`} marginBottom="space0">
              <InPageNavigationItem href="#" currentPage>
                Messaging
              </InPageNavigationItem>
              <InPageNavigationItem href="#">Voice</InPageNavigationItem>
              <InPageNavigationItem href="#">Serverless</InPageNavigationItem>
              <InPageNavigationItem href="#">Video</InPageNavigationItem>
              <InPageNavigationItem href="#">Studio</InPageNavigationItem>
            </InPageNavigation>
          </TopbarActions>
          <TopbarActions justify="end">
            <SearchBox />
            <Box
              as="a"
              href="#"
              color="colorText"
              textDecoration="none"
              fontWeight="fontWeightMedium"
              _hover={{ textDecoration: "underline" }}
            >
              Log in
            </Box>
            <Box
              as="a"
              href="#"
              color="colorText"
              textDecoration="none"
              fontWeight="fontWeightMedium"
              _hover={{ textDecoration: "underline" }}
            >
              Sign up
            </Box>
          </TopbarActions>
        </Topbar>
        <Box padding="space70" id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </Box>
      </SidebarPushContentWrapper>
    </Box>
  );
};
/* eslint-enable react/jsx-max-depth */
Docs.parameters = {
  padding: false,
};
