import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';
import {LogoTwilioIcon} from '@twilio-paste/icons/esm/LogoTwilioIcon';
// ONLY for storybook stacked view not to complain on duplicates. aria-label should be carefully selected strings
import {useUID} from '@twilio-paste/uid-library';
// import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@twilio-paste/tabs';
import {Menu, MenuButton, MenuItem, MenuSeparator, useMenuState} from '@twilio-paste/menu';
import {ProductContactCenterTasksIcon} from '@twilio-paste/icons/esm/ProductContactCenterTasksIcon';
import {MoreIcon} from '@twilio-paste/icons/esm/MoreIcon';

import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarHeaderIconButton,
  SidebarCollapseButton,
  SidebarFooter,
  SidebarPushContentWrapper,
  SidebarBetaBadge,
  SidebarNavigation,
  SidebarNavigationDisclosure,
  SidebarNavigationDisclosureHeadingWrapper,
  SidebarNavigationDisclosureHeading,
  SidebarNavigationDisclosureContent,
  SidebarNavigationItem,
  useSidebarNavigationDisclosureState,
} from '../src';
import type {SidebarNavigationDisclosureInitialState, SidebarNavigationDisclosureStateReturn} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Navigation',
};

const onClick = (): void => {};

export const Default: StoryFn = () => {
  const id = useUID();
  const menu = useMenuState();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  /* eslint-disable react/jsx-max-depth */
  return (
    <Box>
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="default">
        {/* Header */}
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          {/* Nav */}
          <SidebarNavigation hierarchical hideItemsOnCollapse>
            <SidebarNavigationItem
              href="https://www.google.com"
              onClick={() => {
                setPushSidebarCollapsed(!pushSidebarCollapsed);
              }}
              icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
            >
              This item closes the sidebar
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              selected
              icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
            >
              Go to Google.com
            </SidebarNavigationItem>
            <SidebarNavigationDisclosure visible>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading
                  icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
                  selected
                >
                  Heading
                </SidebarNavigationDisclosureHeading>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                  <SidebarBetaBadge as="button">Beta</SidebarBetaBadge>
                  <MenuButton {...menu} variant="inverse_link" size="icon_small">
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
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem
                  href="https://www.google.com"
                  onClick={() => {
                    setPushSidebarCollapsed(!pushSidebarCollapsed);
                  }}
                >
                  This item closes the sidebar
                </SidebarNavigationItem>
                <SidebarNavigationDisclosure visible>
                  <SidebarNavigationDisclosureHeadingWrapper>
                    <SidebarNavigationDisclosureHeading selected>Heading</SidebarNavigationDisclosureHeading>
                    <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                  </SidebarNavigationDisclosureHeadingWrapper>
                  <SidebarNavigationDisclosureContent>
                    <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
                    <SidebarNavigationItem href="https://www.google.com" selected>
                      Navigation Item
                    </SidebarNavigationItem>
                    <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
                  </SidebarNavigationDisclosureContent>
                </SidebarNavigationDisclosure>
                <SidebarNavigationItem href="https://google.com" selected>
                  Go to Google.com
                </SidebarNavigationItem>
                <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationDisclosure>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading
                  icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
                  selected
                >
                  Voice Intelligence
                </SidebarNavigationDisclosureHeading>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                  <SidebarBetaBadge as="button">Beta</SidebarBetaBadge>
                </Box>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem href="https://www.google.com">
                  Very Very long level two nav item
                </SidebarNavigationItem>
                <SidebarNavigationDisclosure>
                  <SidebarNavigationDisclosureHeadingWrapper>
                    <SidebarNavigationDisclosureHeading
                      icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
                      selected
                    >
                      Very Very long level two nav item
                    </SidebarNavigationDisclosureHeading>
                    <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                  </SidebarNavigationDisclosureHeadingWrapper>
                  <SidebarNavigationDisclosureContent>
                    <SidebarNavigationItem href="https://www.google.com">
                      Very long level three nav item
                    </SidebarNavigationItem>
                    <SidebarNavigationItem href="https://www.google.com" selected>
                      Very long level three nav item
                    </SidebarNavigationItem>
                    <SidebarNavigationItem href="https://www.google.com">
                      Very long level three nav item
                    </SidebarNavigationItem>
                  </SidebarNavigationDisclosureContent>
                </SidebarNavigationDisclosure>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationItem href="#">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
            <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
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

export const FlatCompact: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return (
    /* eslint-disable react/jsx-max-depth */
    <Box>
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="compact">
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="https://www.google.com">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation>
            <SidebarNavigationItem
              href="https://www.google.com"
              onClick={() => {
                setPushSidebarCollapsed(!pushSidebarCollapsed);
              }}
              icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
            >
              This item closes the sidebar
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              selected
              icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
            >
              Go to Google.com
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://www.google.com"
              icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
            >
              This item closes the sidebar
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
            >
              Go to Google.com
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
            >
              Go to Google.com
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
        <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
          Toggle Push Sidebar
        </Button>
      </SidebarPushContentWrapper>
    </Box>
  );
  /* eslint-enable react/jsx-max-depth */
};
FlatCompact.parameters = {
  padding: false,
};

export const HierarchicalCompact: StoryFn = () => {
  const id = useUID();
  const menu = useMenuState();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return (
    /* eslint-disable react/jsx-max-depth */
    <Box>
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="compact">
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="https://www.google.com">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation hierarchical hideItemsOnCollapse>
            <SidebarNavigationItem
              href="https://www.google.com"
              onClick={() => {
                setPushSidebarCollapsed(!pushSidebarCollapsed);
              }}
              icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
            >
              This item closes the sidebar
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              selected
              icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
            >
              Go to Google.com
            </SidebarNavigationItem>
            <SidebarNavigationDisclosure visible>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading
                  icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
                  selected
                >
                  Heading
                </SidebarNavigationDisclosureHeading>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                  <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                  <MenuButton {...menu} variant="inverse_link" size="icon_small">
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
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationDisclosure visible>
                  <SidebarNavigationDisclosureHeadingWrapper>
                    <SidebarNavigationDisclosureHeading selected>Heading</SidebarNavigationDisclosureHeading>
                    <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                  </SidebarNavigationDisclosureHeadingWrapper>
                  <SidebarNavigationDisclosureContent>
                    <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
                    <SidebarNavigationItem href="https://www.google.com" selected>
                      Navigation Item
                    </SidebarNavigationItem>
                    <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
                  </SidebarNavigationDisclosureContent>
                </SidebarNavigationDisclosure>
                <SidebarNavigationItem
                  href="https://www.google.com"
                  onClick={() => {
                    setPushSidebarCollapsed(!pushSidebarCollapsed);
                  }}
                >
                  Navigation Item
                </SidebarNavigationItem>
                <SidebarNavigationItem href="https://google.com" selected>
                  Navigation Item
                </SidebarNavigationItem>
                <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
              </SidebarNavigationDisclosureContent>
            </SidebarNavigationDisclosure>
            <SidebarNavigationItem href="https://google.com">Go to Somewhere</SidebarNavigationItem>
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
        <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
          Toggle Push Sidebar
        </Button>
      </SidebarPushContentWrapper>
    </Box>
  );
  /* eslint-enable react/jsx-max-depth */
};
HierarchicalCompact.parameters = {
  padding: false,
};

interface UseDelayedDisclosureStateProps extends SidebarNavigationDisclosureInitialState {
  delay: number;
}
const useDelayedDisclosureState = ({
  delay,
  ...initialState
}: UseDelayedDisclosureStateProps): SidebarNavigationDisclosureStateReturn => {
  const disclosure = useSidebarNavigationDisclosureState(initialState);
  const [transitioning, setTransitioning] = React.useState(false);
  return {
    ...disclosure,
    transitioning,
    toggle: () => {
      setTransitioning(true);
      setTimeout(() => {
        disclosure.toggle();
        setTransitioning(false);
      }, delay);
    },
  };
};

export const StateHookDisclosure: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  // Custom state hook to control state of disclosure
  const {transitioning, ...disclosure} = useDelayedDisclosureState({
    delay: 1000,
  });
  const clickableHeading = disclosure.visible ? 'Hide with delay' : 'Show with delay';

  return (
    /* eslint-disable react/jsx-max-depth */
    <Box>
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="compact">
        <SidebarHeader>
          <SidebarHeaderIconButton as="button">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation>
            <SidebarNavigationDisclosure state={disclosure}>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading icon={<ProductContactCenterTasksIcon decorative />} selected>
                  {transitioning ? 'Please wait...' : clickableHeading}
                </SidebarNavigationDisclosureHeading>
              </SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureContent>
                <SidebarNavigationItem
                  href="https://www.google.com"
                  onClick={() => {
                    setPushSidebarCollapsed(!pushSidebarCollapsed);
                  }}
                >
                  Navigation Item
                </SidebarNavigationItem>
                <SidebarNavigationItem href="https://google.com" selected>
                  Go to google.com
                </SidebarNavigationItem>
                <SidebarNavigationItem href="https://www.google.com">Navigation Item</SidebarNavigationItem>
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
        <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
          Toggle Sidebar
        </Button>
      </SidebarPushContentWrapper>
    </Box>
  );
  /* eslint-enable react/jsx-max-depth */
};
StateHookDisclosure.parameters = {
  padding: false,
};
