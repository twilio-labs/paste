import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';
import {LogoTwilioIcon} from '@twilio-paste/icons/esm/LogoTwilioIcon';
import {ProductMessagingIcon} from '@twilio-paste/icons/esm/ProductMessagingIcon';
import {ProductVideoIcon} from '@twilio-paste/icons/esm/ProductVideoIcon';
import {ProductLookupIcon} from '@twilio-paste/icons/esm/ProductLookupIcon';
import {PlusIcon} from '@twilio-paste/icons/esm/PlusIcon';
import {MoreIcon} from '@twilio-paste/icons/esm/MoreIcon';
// ONLY for storybook stacked view not to complain on duplicates. aria-label should be carefully selected strings
import {useUID} from '@twilio-paste/uid-library';
import {Topbar, TopbarActions} from '@twilio-paste/topbar';
import {Menu, MenuButton, MenuItem, useMenuState} from '@twilio-paste/menu';

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
  SidebarNavigationItem,
  SidebarNavigationDisclosure,
  SidebarNavigationDisclosureHeading,
  SidebarNavigationDisclosureHeadingWrapper,
  SidebarNavigationDisclosureContent,
  SidebarNavigationSeparator,
  SidebarBetaBadge,
} from '../../src';
import {AccountSwitcherMenu} from './components/AccountSwitcher';
import {TrialBadge} from './components/TrialBadge';
import {SearchBox} from './components/SearchBox';
import {SupportMenu} from './components/SupportMenu';
import {AppSwitcher} from './components/AppSwitcher';
import {UserDialogExample} from './components/UserDialogConsole';
import {AccountMenu} from './components/AccountMenu';
import {BillingMenu} from './components/BillingMenu';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/FullCompositions',
};

const onClick = (): void => {};

/* eslint-disable react/jsx-max-depth */
export const Console: StoryFn = () => {
  const id = useUID();
  const menu = useMenuState();
  const menuLookup = useMenuState();
  const menuVideo = useMenuState();
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar
        collapsed={pushSidebarCollapsed}
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
            onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <Topbar topbarSkipLinkID={topbarSkipLinkID}>
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
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </Box>
      </SidebarPushContentWrapper>
    </Box>
  );
};
/* eslint-enable react/jsx-max-depth */
Console.parameters = {
  padding: false,
};
