/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable import/no-extraneous-dependencies */
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Heading } from "@twilio-paste/heading";
import { ChevronDoubleLeftIcon } from "@twilio-paste/icons/esm/ChevronDoubleLeftIcon";
import { ChevronDoubleRightIcon } from "@twilio-paste/icons/esm/ChevronDoubleRightIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { SidebarPushContentWrapper } from "@twilio-paste/sidebar";
import { useTheme } from "@twilio-paste/theme";
import { Topbar } from "@twilio-paste/topbar";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import {
  SidePanel,
  SidePanelBody,
  SidePanelHeader,
  SidePanelHeaderActions,
  SidePanelPageWrapper,
  SidePanelPushContentWrapper,
} from "../src";
import { MessagingInsightsContent } from "./components/MessagingInsightsContent";
import { SidePanelWithContent } from "./components/SidePanelWithContent";
import { SidebarWithContent } from "./components/SidebarWithContent";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Side Panel",
  component: SidePanel,
};

export const Default = (): React.ReactNode => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <SidePanelPageWrapper>
      <SidePanelWithContent collapsed={collapsed} setCollapsed={setCollapsed} />
      <SidePanelPushContentWrapper collapsed={collapsed}>
        <Box borderStyle="solid" borderColor="colorBorder" padding="space100" width="100%" overflow="auto">
          <Button variant="secondary" onClick={() => setCollapsed(!collapsed)} pressed={!collapsed}>
            Toggle Side Panel
            {collapsed && <ChevronDoubleLeftIcon decorative />}
            {!collapsed && <ChevronDoubleRightIcon decorative />}
          </Button>
        </Box>
      </SidePanelPushContentWrapper>
    </SidePanelPageWrapper>
  );
};
Default.parameters = {
  padding: false,
};

export const ContentDemo = (): React.ReactNode => {
  const [collapsed, setCollapsed] = React.useState(false);

  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();
  const sidePanelId = useUID();
  return (
    <Box>
      <SidebarWithContent topbarSkipLinkID={topbarSkipLinkID} mainContentSkipLinkID={mainContentSkipLinkID} />
      <SidebarPushContentWrapper collapsed={false} variant="compact">
        <Topbar id={topbarSkipLinkID}> </Topbar>
        <SidePanelPageWrapper>
          <SidePanelPushContentWrapper collapsed={collapsed}>
            <Box
              id={mainContentSkipLinkID}
              borderStyle="solid"
              borderWidth="borderWidth20"
              borderColor="colorBorder"
              padding="space100"
              width="100%"
            >
              I am a box with a gray border and I have width 100%
              <Box margin="space40">
                <Button
                  variant="primary"
                  onClick={() => setCollapsed(!collapsed)}
                  aria-expanded={!collapsed}
                  aria-controls={sidePanelId}
                >
                  Toggle Side Panel
                </Button>
              </Box>
              <Box
                borderStyle="solid"
                borderWidth="borderWidth20"
                borderColor="colorBorderDestructive"
                margin="space40"
                width="size50"
                height="size90"
              >
                I am a box with a red border and I have fixed height and width
              </Box>
            </Box>
          </SidePanelPushContentWrapper>
          <SidePanel collapsed={collapsed} label="side panel" id={sidePanelId}>
            <SidePanelHeader onXClick={() => setCollapsed(true)} i18nCloseButtonTitle="close side panel">
              <Heading as="h5" variant="heading30" marginBottom="space0">
                Heading
              </Heading>
              <SidePanelHeaderActions>
                <Button variant="secondary_icon" size="reset" onClick={() => {}}>
                  <MoreIcon decorative={false} title="open menu" size="sizeIcon50" />
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
        </SidePanelPageWrapper>
      </SidebarPushContentWrapper>
    </Box>
  );
};

ContentDemo.parameters = {
  padding: false,
};

export const Composed = (): React.ReactNode => {
  const [collapsed, setCollapsed] = React.useState(false);

  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    <Box>
      {/* Sidebar can be placed anywhere - position fixed */}
      <SidebarWithContent topbarSkipLinkID={topbarSkipLinkID} mainContentSkipLinkID={mainContentSkipLinkID} />
      <SidebarPushContentWrapper collapsed={false} variant="compact">
        <Topbar id={topbarSkipLinkID}> </Topbar>
        <SidePanelPageWrapper>
          <SidePanelPushContentWrapper collapsed={collapsed}>
            <MessagingInsightsContent
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              mainContentSkipLinkID={mainContentSkipLinkID}
            />
          </SidePanelPushContentWrapper>
          {/* Side Panel can be placed anywhere - position fixed */}
          <SidePanelWithContent collapsed={collapsed} setCollapsed={setCollapsed} />
        </SidePanelPageWrapper>
      </SidebarPushContentWrapper>
    </Box>
  );
};

Composed.parameters = {
  padding: false,
};

export const Customized = (): React.ReactNode => {
  const [collapsed, setCollapsed] = React.useState(false);
  const label = useUID();
  const theme = useTheme();

  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        SPPW: { margin: "space50" },
        SPPCW: { paddingRight: "space150" },
        SP: { top: "30px" },
        ANIMATED_SP_WRAPPER: { backgroundColor: "colorBackgroundPrimaryWeaker", borderRadius: "borderRadius80" },
        INNER_SP: { paddingBottom: "space40" },
        SPH: { borderBottomWidth: "borderWidth40" },
        SPHA: { justifyContent: "flex-start" },
        SPB: { width: "75%" },
      }}
    >
      <SidePanelPageWrapper element="SPPW">
        <SidePanelPushContentWrapper collapsed={collapsed} element="SPPCW">
          <Box borderStyle="solid" borderWidth="borderWidth20" borderColor="colorBorder">
            <Button variant="secondary" onClick={() => setCollapsed(!collapsed)}>
              Toggle Side Panel
            </Button>
          </Box>
        </SidePanelPushContentWrapper>
        <SidePanel label={label} collapsed={collapsed} element="SP">
          <SidePanelHeader element="SPH" onXClick={() => setCollapsed(true)} i18nCloseButtonTitle="close side panel">
            <Heading as="h3" variant="heading30" marginBottom="space0">
              Heading
            </Heading>
            <SidePanelHeaderActions element="SPHA">
              <Button variant="secondary_icon" size="reset" onClick={() => {}}>
                <MoreIcon decorative={false} title="open menu" size="sizeIcon50" />
              </Button>
            </SidePanelHeaderActions>
          </SidePanelHeader>
          <SidePanelBody element="SPB">
            <Box
              backgroundColor="colorBackgroundDecorative10Weakest"
              width="100%"
              borderBottomLeftRadius="borderRadius50"
              borderBottomRightRadius="borderRadius50"
            />
          </SidePanelBody>
        </SidePanel>
      </SidePanelPageWrapper>
    </CustomizationProvider>
  );
};

Customized.parameters = {
  padding: false,
};
