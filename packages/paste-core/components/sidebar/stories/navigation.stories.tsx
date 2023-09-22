import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { ProductConnectionsIcon } from "@twilio-paste/icons/esm/ProductConnectionsIcon";
import { ProductContactCenterAdminIcon } from "@twilio-paste/icons/esm/ProductContactCenterAdminIcon";
import { ProductContactCenterQueuesIcon } from "@twilio-paste/icons/esm/ProductContactCenterQueuesIcon";
import { ProductContactCenterTasksIcon } from "@twilio-paste/icons/esm/ProductContactCenterTasksIcon";
import { ProductContactCenterTeamsIcon } from "@twilio-paste/icons/esm/ProductContactCenterTeamsIcon";
import { ProductEngageIcon } from "@twilio-paste/icons/esm/ProductEngageIcon";
import { ProductFlexIcon } from "@twilio-paste/icons/esm/ProductFlexIcon";
import { ProductHomeIcon } from "@twilio-paste/icons/esm/ProductHomeIcon";
import { ProductPrivacyIcon } from "@twilio-paste/icons/esm/ProductPrivacyIcon";
import { ProductProtocolsIcon } from "@twilio-paste/icons/esm/ProductProtocolsIcon";
import { ProductReverseETLIcon } from "@twilio-paste/icons/esm/ProductReverseETLIcon";
import { ProductSegmentIcon } from "@twilio-paste/icons/esm/ProductSegmentIcon";
import { ProductSettingsIcon } from "@twilio-paste/icons/esm/ProductSettingsIcon";
import { ProductUsageIcon } from "@twilio-paste/icons/esm/ProductUsageIcon";
// import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@twilio-paste/tabs';
import { Menu, MenuButton, MenuItem, MenuSeparator, useMenuState } from "@twilio-paste/menu";
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
  type SidebarNavigationDisclosureInitialState,
  type SidebarNavigationDisclosureStateReturn,
  SidebarNavigationItem,
  SidebarPushContentWrapper,
  useSidebarNavigationDisclosureState,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Sidebar/Navigation",
};

const onClick = (): void => {};

export const Default: StoryFn = () => {
  const id = useUID();
  const menu = useMenuState();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  /* eslint-disable react/jsx-max-depth */
  return (
    <Box>
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={pushSidebarCollapsed}
        variant="default"
      >
        {/* Header */}
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          {/* Nav */}
          <SidebarNavigation aria-label={id} hierarchical hideItemsOnCollapse>
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
              href="https://google.com"
              icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
            >
              Include children <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
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
                <SidebarNavigationItem href="https://www.google.com">
                  Include children <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                </SidebarNavigationItem>
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
        <div id={topbarSkipLinkID} />
        <div id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </div>
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
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    /* eslint-disable react/jsx-max-depth */
    <Box>
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={pushSidebarCollapsed}
        variant="compact"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="https://www.google.com">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation aria-label={id}>
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
        <div id={topbarSkipLinkID} />
        <div id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </div>
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
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    /* eslint-disable react/jsx-max-depth */
    <Box>
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={pushSidebarCollapsed}
        variant="compact"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="https://www.google.com">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation aria-label={id} hierarchical hideItemsOnCollapse>
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
        <div id={topbarSkipLinkID} />
        <div id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </div>
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
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  // Custom state hook to control state of disclosure
  const { transitioning, ...disclosure } = useDelayedDisclosureState({
    delay: 1000,
  });
  const clickableHeading = disclosure.visible ? "Hide with delay" : "Show with delay";

  return (
    /* eslint-disable react/jsx-max-depth */
    <Box>
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={pushSidebarCollapsed}
        variant="compact"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="button">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation aria-label={id}>
            <SidebarNavigationDisclosure state={disclosure}>
              <SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureHeading icon={<ProductContactCenterTasksIcon decorative />} selected>
                  {transitioning ? "Please wait..." : clickableHeading}
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
        <div id={topbarSkipLinkID} />
        <div id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </div>
      </SidebarPushContentWrapper>
    </Box>
  );
  /* eslint-enable react/jsx-max-depth */
};
StateHookDisclosure.parameters = {
  padding: false,
};

export const FlexExample: StoryFn = () => {
  const id = useUID();
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(false);
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    /* eslint-disable react/jsx-max-depth */
    <Box>
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={overlaySidebarExpanded}
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
            onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>

      <SidebarPushContentWrapper collapsed={overlaySidebarExpanded} variant="compact">
        <div id={topbarSkipLinkID} />
        <Box id={mainContentSkipLinkID} padding="space70">
          <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
            Toggle Push Sidebar
          </Button>
        </Box>
      </SidebarPushContentWrapper>
    </Box>
  );
  /* eslint-enable react/jsx-max-depth */
};
FlexExample.parameters = {
  padding: false,
};

export const SegmentExample: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    /* eslint-disable react/jsx-max-depth */
    <Box>
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={pushSidebarCollapsed}
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
            onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <div id={topbarSkipLinkID} />
        <Box padding="space70" id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </Box>
      </SidebarPushContentWrapper>
    </Box>
  );
  /* eslint-enable react/jsx-max-depth */
};
SegmentExample.parameters = {
  padding: false,
};
