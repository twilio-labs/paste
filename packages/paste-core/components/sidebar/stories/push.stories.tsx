import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';
// ONLY for storybook stacked view not to complain on duplicates. aria-label should be carefully selected strings
import {useUID} from '@twilio-paste/uid-library';
// import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@twilio-paste/tabs';
import {Menu, MenuButton, MenuItem, MenuSeparator, useMenuState} from '@twilio-paste/menu';
import {ProductContactCenterTasksIcon} from '@twilio-paste/icons/esm/ProductContactCenterTasksIcon';
import {MoreIcon} from '@twilio-paste/icons/esm/MoreIcon';

import {
  Sidebar,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarHeaderIconButton,
  SidebarCollapseButton,
  SidebarCollapseButtonWrapper,
  SidebarPushContentWrapper,
  SidebarBetaBadge,
  SidebarNavigation,
  SidebarNavigationDisclosure,
  SidebarNavigationDisclosureHeading,
  SidebarNavigationDisclosureContent,
  SidebarNavigationItem,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Push',
};

const onClick = (): void => {};

export const Default: StoryFn = () => {
  const id = useUID();
  const menu = useMenuState();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);

  /* eslint-disable react/jsx-max-depth */
  return (
    <Box>
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="default">
        {/* Header */}
        <SidebarHeader>
          <SidebarHeaderIconButton>
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        {/* Nav */}
        <SidebarNavigation>
          <SidebarNavigationItem>Navigation Item</SidebarNavigationItem>
          <SidebarNavigationItem selected>Navigation Item</SidebarNavigationItem>

          <SidebarNavigationDisclosure>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <SidebarNavigationDisclosureHeading selected>
                <ProductContactCenterTasksIcon decorative={false} title="Description of icon" />
                <Box marginLeft="space20">Heading</Box>
              </SidebarNavigationDisclosureHeading>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                <MenuButton {...menu} variant="secondary_icon">
                  <MoreIcon decorative={false} title="More" />
                </MenuButton>
                <Menu {...menu} aria-label="Preferences">
                  <MenuItem {...menu} onClick={onClick}>
                    Settings
                  </MenuItem>
                  <MenuItem {...menu} href="http://www.google.com" onClick={onClick}>
                    Has a link
                  </MenuItem>
                  <MenuItem {...menu} variant="destructive" href="http://www.google.com" onClick={onClick}>
                    Destructive link
                  </MenuItem>
                  <MenuItem {...menu} disabled>
                    Extensions
                  </MenuItem>
                  <MenuSeparator {...menu} />
                  <MenuItem {...menu} onClick={onClick}>
                    Keyboard shortcuts
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationDisclosure>
                <SidebarNavigationDisclosureHeading selected>
                  <ProductContactCenterTasksIcon decorative={false} title="Description of icon" />
                  <Box marginLeft="space20">Heading</Box>
                </SidebarNavigationDisclosureHeading>
                <SidebarNavigationDisclosureContent>
                  <SidebarNavigationItem>Navigation Item</SidebarNavigationItem>
                  <SidebarNavigationItem selected>Navigation Item</SidebarNavigationItem>
                  <SidebarNavigationItem>Navigation Item</SidebarNavigationItem>
                </SidebarNavigationDisclosureContent>
              </SidebarNavigationDisclosure>

              <SidebarNavigationItem>Navigation Item</SidebarNavigationItem>
              <SidebarNavigationItem selected>Navigation Item</SidebarNavigationItem>
              <SidebarNavigationItem>Navigation Item</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
        </SidebarNavigation>
        {/* Footer */}
        <SidebarCollapseButtonWrapper>
          <SidebarCollapseButton
            onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarCollapseButtonWrapper>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="default">
        <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
          Toggle Push Sidebar
        </Button>
      </SidebarPushContentWrapper>
    </Box>
  );
  /* eslint-enable react/jsx-max-depth */
};
Default.parameters = {
  padding: false,
};

export const Compact: StoryFn = () => {
  const id = useUID();
  const menu = useMenuState();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);

  return (
    /* eslint-disable react/jsx-max-depth */
    <Box>
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="compact">
        <SidebarHeader>
          <SidebarHeaderIconButton>
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarNavigation>
          <SidebarNavigationItem>Navigation Item</SidebarNavigationItem>
          <SidebarNavigationItem selected>Navigation Item</SidebarNavigationItem>
          <SidebarNavigationDisclosure>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <SidebarNavigationDisclosureHeading selected>
                <ProductContactCenterTasksIcon decorative={false} title="Description of icon" />
                <Box marginLeft="space20">Heading</Box>
              </SidebarNavigationDisclosureHeading>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                <MenuButton {...menu} variant="secondary_icon">
                  <MoreIcon decorative={false} title="More" />
                </MenuButton>
                <Menu {...menu} aria-label="Preferences">
                  <MenuItem {...menu} onClick={onClick}>
                    Settings
                  </MenuItem>
                  <MenuItem {...menu} href="http://www.google.com" onClick={onClick}>
                    Has a link
                  </MenuItem>
                  <MenuItem {...menu} variant="destructive" href="http://www.google.com" onClick={onClick}>
                    Destructive link
                  </MenuItem>
                  <MenuItem {...menu} disabled>
                    Extensions
                  </MenuItem>
                  <MenuSeparator {...menu} />
                  <MenuItem {...menu} onClick={onClick}>
                    Keyboard shortcuts
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationDisclosure>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <SidebarNavigationDisclosureHeading selected>
                    <ProductContactCenterTasksIcon decorative={false} title="Description of icon" />
                    <Box marginLeft="space20">Heading</Box>
                  </SidebarNavigationDisclosureHeading>
                  <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                </Box>
                <SidebarNavigationDisclosureContent>
                  <SidebarNavigationItem>Navigation Item</SidebarNavigationItem>
                  <SidebarNavigationItem selected>Navigation Item</SidebarNavigationItem>
                  <SidebarNavigationItem>Navigation Item</SidebarNavigationItem>
                </SidebarNavigationDisclosureContent>
              </SidebarNavigationDisclosure>
              <SidebarNavigationItem>Navigation Item</SidebarNavigationItem>
              <SidebarNavigationItem selected>Navigation Item</SidebarNavigationItem>
              <SidebarNavigationItem>Navigation Item</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
        </SidebarNavigation>
        <SidebarCollapseButtonWrapper>
          <SidebarCollapseButton
            onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarCollapseButtonWrapper>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
          Toggle Push Sidebar
        </Button>
      </SidebarPushContentWrapper>
    </Box>
  );
  /* eslint-enable react/jsx-max-depth */
};
Compact.parameters = {
  padding: false,
};
