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
  SidePanelButton,
  SidePanelContainer,
  SidePanelHeader,
  SidePanelHeaderActions,
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
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <SidePanelContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <SidePanelWithContent />
      <SidePanelPushContentWrapper>
        <Box borderStyle="solid" borderColor="colorBorder" padding="space100" width="100%" overflow="auto">
          <SidePanelButton variant="secondary" pressed={!isOpen}>
            Toggle Side Panel
            {!isOpen && <ChevronDoubleLeftIcon decorative />}
            {isOpen && <ChevronDoubleRightIcon decorative />}
          </SidePanelButton>
        </Box>
      </SidePanelPushContentWrapper>
    </SidePanelContainer>
  );
};
Default.parameters = {
  padding: false,
};

export const Basic = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const sidePanelId = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();
  return (
    <>
      <SidebarWithContent topbarSkipLinkID={topbarSkipLinkID} mainContentSkipLinkID={mainContentSkipLinkID} />
      <SidebarPushContentWrapper collapsed={true} variant="compact">
        <Topbar id={topbarSkipLinkID}> </Topbar>
        <SidePanelContainer id={sidePanelId} isOpen={isOpen} setIsOpen={setIsOpen}>
          <SidePanelWithContent />
          <SidePanelPushContentWrapper>
            <Box paddingTop="space40" paddingLeft="space40" paddingRight="space40">
              <SidePanelButton variant="secondary">Toggle Side Panel</SidePanelButton>
            </Box>
          </SidePanelPushContentWrapper>
        </SidePanelContainer>
      </SidebarPushContentWrapper>
    </>
  );
};
Basic.parameters = {
  padding: false,
};

export const I18n = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);

  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();
  const sidePanelId = useUID();
  return (
    <Box>
      <SidebarWithContent topbarSkipLinkID={topbarSkipLinkID} mainContentSkipLinkID={mainContentSkipLinkID} />
      <SidebarPushContentWrapper collapsed={true} variant="compact">
        <Topbar id={topbarSkipLinkID}> </Topbar>
        <SidePanelContainer
          i18nCloseSidePanelTitle="cerrar panel lateral"
          i18nOpenSidePanelTitle="abrir panel lateral"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          id={sidePanelId}
        >
          <SidePanelPushContentWrapper>
            <Box paddingTop="space40" paddingLeft="space40" paddingRight="space40">
              <SidePanelButton variant="primary">Probar Panel Lateral</SidePanelButton>
            </Box>
          </SidePanelPushContentWrapper>
          <SidePanel label="el panel lateral">
            <SidePanelHeader>
              <Heading as="h5" variant="heading30" marginBottom="space0">
                Título
              </Heading>
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
        </SidePanelContainer>
      </SidebarPushContentWrapper>
    </Box>
  );
};

I18n.parameters = {
  padding: false,
};

export const ContentDemo = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);

  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();
  const sidePanelId = useUID();
  return (
    <Box>
      <SidebarWithContent topbarSkipLinkID={topbarSkipLinkID} mainContentSkipLinkID={mainContentSkipLinkID} />
      <SidebarPushContentWrapper collapsed={false} variant="compact">
        <Topbar id={topbarSkipLinkID}> </Topbar>
        <SidePanelContainer isOpen={isOpen} setIsOpen={setIsOpen} id={sidePanelId}>
          <SidePanelPushContentWrapper>
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
                <SidePanelButton variant="primary">Toggle Side Panel</SidePanelButton>
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
          <SidePanel label="the important side panel">
            <SidePanelHeader>
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
        </SidePanelContainer>
      </SidebarPushContentWrapper>
    </Box>
  );
};

ContentDemo.parameters = {
  padding: false,
};

export const Composed = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);

  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    <Box>
      {/* Sidebar can be placed anywhere - position fixed */}
      <SidebarWithContent topbarSkipLinkID={topbarSkipLinkID} mainContentSkipLinkID={mainContentSkipLinkID} />
      <SidebarPushContentWrapper collapsed={true} variant="compact">
        <Topbar id={topbarSkipLinkID}> </Topbar>
        <SidePanelContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <SidePanelPushContentWrapper>
            <MessagingInsightsContent mainContentSkipLinkID={mainContentSkipLinkID} />
          </SidePanelPushContentWrapper>
          {/* Side Panel can be placed anywhere - position fixed */}
          <SidePanelWithContent />
        </SidePanelContainer>
      </SidebarPushContentWrapper>
    </Box>
  );
};

Composed.parameters = {
  padding: false,
};

export const Customized = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
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
      <SidePanelContainer element="SPPW" isOpen={isOpen} setIsOpen={setIsOpen}>
        <SidePanelPushContentWrapper element="SPPCW">
          <Box borderStyle="solid" borderWidth="borderWidth20" borderColor="colorBorder">
            <Button variant="secondary" onClick={() => setIsOpen(!isOpen)}>
              Toggle Side Panel
            </Button>
          </Box>
        </SidePanelPushContentWrapper>
        <SidePanel label={label} element="SP">
          <SidePanelHeader element="SPH">
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
      </SidePanelContainer>
    </CustomizationProvider>
  );
};

Customized.parameters = {
  padding: false,
};
