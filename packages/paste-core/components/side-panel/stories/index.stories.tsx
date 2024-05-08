// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { ChevronDoubleLeftIcon } from "@twilio-paste/icons/esm/ChevronDoubleLeftIcon";
import { ChevronDoubleRightIcon } from "@twilio-paste/icons/esm/ChevronDoubleRightIcon";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import {
  Sidebar,
  SidebarHeader,
  SidebarHeaderIconButton,
  SidebarHeaderLabel,
  SidebarPushContentWrapper,
} from "@twilio-paste/sidebar";
import { Topbar } from "@twilio-paste/topbar";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { SidePanel, SidePanelBody, SidePanelHeader, SidePanelHeaderActions, SidePanelPushContentWrapper } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Side Panel",
  component: SidePanel,
};

export const Default = (): React.ReactNode => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <Box position="relative" element="THIS_WILL_BE_IN_API">
      <SidePanel collapsed={collapsed} label="my side panel">
        <SidePanelHeader>
          <Heading as="h5" variant="heading30" marginBottom="space0">
            Heading
          </Heading>
          <SidePanelHeaderActions>
            <Button variant="secondary_icon" size="reset" onClick={() => setCollapsed(true)}>
              <CloseIcon decorative={false} title="close side panel" size="sizeIcon50" />
            </Button>
          </SidePanelHeaderActions>
        </SidePanelHeader>
        <SidePanelBody>
          <Box
            width="100%"
            height="100%"
            backgroundColor="colorBackgroundDecorative10Weakest"
            borderBottomLeftRadius="borderRadius50"
            borderBottomRightRadius="borderRadius50"
          />
        </SidePanelBody>
      </SidePanel>
      <SidePanelPushContentWrapper collapsed={collapsed}>
        <Box borderStyle="solid" borderColor="colorBorder" padding="space100" width="100%" overflow="auto">
          <Button variant="secondary" onClick={() => setCollapsed(!collapsed)} pressed={!collapsed}>
            Toggle Side Panel
            {collapsed && <ChevronDoubleLeftIcon decorative />}
            {!collapsed && <ChevronDoubleRightIcon decorative />}
          </Button>
        </Box>
      </SidePanelPushContentWrapper>
    </Box>
  );
};
Default.parameters = {
  padding: false,
};

export const Composed = (): React.ReactNode => {
  const [collapsed, setCollapsed] = React.useState(false);

  const id = useUID();
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();
  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar
        aria-label={id}
        collapsed={false}
        variant="compact"
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Product name</SidebarHeaderLabel>
        </SidebarHeader>
      </Sidebar>
      <SidebarPushContentWrapper collapsed={false} variant="compact">
        <Topbar id={topbarSkipLinkID}>topbar children placeholder</Topbar>
        <Box position="relative" element="THIS_WILL_BE_IN_API">
          <SidePanelPushContentWrapper collapsed={collapsed}>
            <Box
              id={mainContentSkipLinkID}
              borderStyle="solid"
              borderColor="colorBorder"
              padding="space100"
              width="100%"
            >
              <Button variant="primary" onClick={() => setCollapsed(!collapsed)}>
                Toggle collapse SidePanel
              </Button>
              <Box backgroundColor="colorBackgroundAvailable" width="size50" height="size90" />
            </Box>
          </SidePanelPushContentWrapper>
          {/* Can be placed anywhere - position fixed */}
          <SidePanel collapsed={collapsed} label="my side panel">
            <SidePanelHeader>
              <Heading as="h5" variant="heading30" marginBottom="space0">
                Heading
              </Heading>
              <SidePanelHeaderActions>
                <Button variant="secondary_icon" size="reset" onClick={() => setCollapsed(true)}>
                  <CloseIcon decorative={false} title="close side panel" size="sizeIcon50" />
                </Button>
              </SidePanelHeaderActions>
            </SidePanelHeader>
            <SidePanelBody>
              <Box
                width="100%"
                height="100%"
                backgroundColor="colorBackgroundDecorative10Weakest"
                borderBottomLeftRadius="borderRadius50"
                borderBottomRightRadius="borderRadius50"
              />
            </SidePanelBody>
          </SidePanel>
        </Box>
      </SidebarPushContentWrapper>
    </Box>
  );
};

Composed.parameters = {
  padding: false,
};
