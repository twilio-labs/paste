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

export const Default: StoryFn = () => {
  const id = useUID();
  const menu = useMenuState();
  const onClick = () => {};

  return (
    <Box>
      <Sidebar aria-label={id} collapsed={false} variant="default">
        <SidebarHeader>
          <SidebarHeaderIconButton>
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarNavigation>
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
                  <SidebarNavigationDisclosureHeading variant="nested" selected>
                    <ProductContactCenterTasksIcon decorative={false} title="Description of icon" />
                    <Box marginLeft="space20">Heading</Box>
                  </SidebarNavigationDisclosureHeading>
                  <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                </Box>
                <SidebarNavigationDisclosureContent>
                  <SidebarNavigationItem variant="nested">Navigation Item</SidebarNavigationItem>
                  <SidebarNavigationItem variant="nested" selected>
                    Navigation Item
                  </SidebarNavigationItem>
                  <SidebarNavigationItem variant="nested">Navigation Item</SidebarNavigationItem>
                </SidebarNavigationDisclosureContent>
              </SidebarNavigationDisclosure>
              <SidebarNavigationItem variant="nested">Navigation Item</SidebarNavigationItem>
              <SidebarNavigationItem variant="nested" selected>
                Navigation Item
              </SidebarNavigationItem>
              <SidebarNavigationItem variant="nested">Navigation Item</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
        </SidebarNavigation>
        <SidebarCollapseButtonWrapper>
          <SidebarCollapseButton onClick={onClick} i18nCollapseLabel="Close sidebar" i18nExpandLabel="Open sidebar" />
        </SidebarCollapseButtonWrapper>
      </Sidebar>
    </Box>
  );
};
Default.parameters = {
  padding: false,
};

export const Compact: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="compact">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader>
            <SidebarHeaderIconButton>
              <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
            </SidebarHeaderIconButton>
            <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
          </SidebarHeader>
          <SidebarBetaBadge as="button">Beta</SidebarBetaBadge>
          <SidebarCollapseButtonWrapper>
            <SidebarCollapseButton
              onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarCollapseButtonWrapper>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
          Toggle Push Sidebar
        </Button>
      </SidebarPushContentWrapper>
    </Box>
  );
};
Compact.parameters = {
  padding: false,
};
