import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { ProductLookupIcon } from "@twilio-paste/icons/esm/ProductLookupIcon";
import { ProductMessagingIcon } from "@twilio-paste/icons/esm/ProductMessagingIcon";
import { ProductVideoIcon } from "@twilio-paste/icons/esm/ProductVideoIcon";
import { Menu, MenuButton, MenuItem, useMenuState } from "@twilio-paste/menu";
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
  SidebarNavigationSeparator,
  SidebarPushContentWrapper,
} from "../../../src";
import { AccountMenu } from "./AccountMenu";
import { AccountSwitcherMenu } from "./AccountSwitcher";
import { AppSwitcher } from "./AppSwitcher";
import { BillingMenu } from "./BillingMenu";
import { SearchBox } from "./SearchBox";
import { SupportMenu } from "./SupportMenu";
import { TrialBadge } from "./TrialBadge";
import { UserDialogExample } from "./UserDialogConsole";

const onClick = (): void => {};

/* eslint-disable react/jsx-max-depth */
export const Console: React.FC<React.PropsWithChildren<{ collapsed: boolean; setCollapsed: (collapsed) => void }>> = ({
  collapsed,
  setCollapsed,
}) => {
  const id = useUID();
  const menu = useMenuState();
  const menuLookup = useMenuState();
  const menuVideo = useMenuState();
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    <Box minWidth="1200px">
      {/* Can be placed anywhere - position fixed */}
      <Sidebar
        aria-label={id}
        collapsed={collapsed}
        variant="compact"
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation aria-label={id} hierarchical hideItemsOnCollapse>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading icon={<ProductMessagingIcon decorative />} selected>
                  Messaging
                </SidebarNavigationDisclosureHeading>
                <MenuButton {...menu} variant="inverse_link" size="icon_small">
                  <MoreIcon decorative={false} title="More" />
                </MenuButton>
                <Menu {...menu} aria-label="Preferences">
                  <MenuItem {...menu} onClick={onClick}>
                    Unpin from sidebar
                  </MenuItem>
                  <MenuItem {...menu} href="http://www.google.com">
                    Go to docs
                  </MenuItem>
                </Menu>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
                <SidebarNavigationDisclosure>
                  <SidebarNavigationDisclosureHeadingWrapper>
                    <SidebarNavigationDisclosureHeading selected>Try it out</SidebarNavigationDisclosureHeading>
                  </SidebarNavigationDisclosureHeadingWrapper>
                  <SidebarNavigationDisclosureContent>
                    <SidebarNavigationItem href="https://google.com">Send an SMS</SidebarNavigationItem>
                    <SidebarNavigationItem href="https://google.com" selected>
                      Send a Whatsapp message
                    </SidebarNavigationItem>
                  </SidebarNavigationDisclosureContent>
                </SidebarNavigationDisclosure>
                <SidebarNavigationItem href="https://google.com">Services</SidebarNavigationItem>
                <SidebarNavigationDisclosure>
                  <SidebarNavigationDisclosureHeadingWrapper>
                    <SidebarNavigationDisclosureHeading>Senders</SidebarNavigationDisclosureHeading>
                    <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                  </SidebarNavigationDisclosureHeadingWrapper>
                  <SidebarNavigationDisclosureContent>
                    <SidebarNavigationItem href="https://google.com">Addons</SidebarNavigationItem>
                    <SidebarNavigationItem href="https://google.com">Navigation Item</SidebarNavigationItem>
                    <SidebarNavigationItem href="https://google.com">Navigation Item</SidebarNavigationItem>
                  </SidebarNavigationDisclosureContent>
                </SidebarNavigationDisclosure>
                <SidebarNavigationDisclosure>
                  <SidebarNavigationDisclosureHeadingWrapper>
                    <SidebarNavigationDisclosureHeading>Settings</SidebarNavigationDisclosureHeading>
                  </SidebarNavigationDisclosureHeadingWrapper>
                  <SidebarNavigationDisclosureContent>
                    <SidebarNavigationItem href="#">
                      Addons <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                    </SidebarNavigationItem>
                    <SidebarNavigationItem href="https://google.com">Navigation Item</SidebarNavigationItem>
                    <SidebarNavigationItem href="https://google.com">Navigation Item</SidebarNavigationItem>
                  </SidebarNavigationDisclosureContent>
                </SidebarNavigationDisclosure>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading icon={<ProductLookupIcon decorative />}>
                  Lookup
                </SidebarNavigationDisclosureHeading>
                <MenuButton {...menuLookup} variant="inverse_link" size="icon_small">
                  <MoreIcon decorative={false} title="More" />
                </MenuButton>
                <Menu {...menuLookup} aria-label="Preferences">
                  <MenuItem {...menuLookup} onClick={onClick}>
                    Unpin from sidebar
                  </MenuItem>
                  <MenuItem {...menuLookup} href="http://www.google.com">
                    Go to docs
                  </MenuItem>
                </Menu>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com">Lookup a phone number</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationSeparator />
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading icon={<ProductVideoIcon decorative />}>
                  Video
                </SidebarNavigationDisclosureHeading>
                <MenuButton {...menuVideo} variant="inverse_link" size="icon_small">
                  <MoreIcon decorative={false} title="More" />
                </MenuButton>
                <Menu {...menuVideo} aria-label="Preferences">
                  <MenuItem {...menuVideo} onClick={onClick}>
                    Unpin from sidebar
                  </MenuItem>
                  <MenuItem {...menuVideo} href="http://www.google.com">
                    Go to docs
                  </MenuItem>
                </Menu>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
              <SidebarNavigationSeparator />
            </SidebarNavigationDisclosure>
            <SidebarNavigationItem href="https://google.com">
              Explore products <PlusIcon decorative />
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

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={collapsed} variant="compact">
        <Topbar id={topbarSkipLinkID}>
          <TopbarActions justify="start">
            <AccountSwitcherMenu />
            <TrialBadge />
          </TopbarActions>
          <TopbarActions justify="end">
            <SearchBox />
            <AccountMenu />
            <BillingMenu />
            <SupportMenu />
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
