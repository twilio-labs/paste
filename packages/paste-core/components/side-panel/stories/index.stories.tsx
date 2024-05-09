/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable import/no-extraneous-dependencies */
import { Anchor } from "@twilio-paste/anchor";
import { Avatar } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge/";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Card } from "@twilio-paste/card";
import { ChatComposer } from "@twilio-paste/chat-composer";
import { ChatBubble, ChatLog, ChatMessage, ChatMessageMeta, ChatMessageMetaItem } from "@twilio-paste/chat-log";
import { Combobox } from "@twilio-paste/combobox";
import { DetailText } from "@twilio-paste/detail-text";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/disclosure";
import { Heading } from "@twilio-paste/heading";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import { ChevronDoubleLeftIcon } from "@twilio-paste/icons/esm/ChevronDoubleLeftIcon";
import { ChevronDoubleRightIcon } from "@twilio-paste/icons/esm/ChevronDoubleRightIcon";
import { ClearIcon } from "@twilio-paste/icons/esm/ClearIcon";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { Label } from "@twilio-paste/label";
import { Paragraph } from "@twilio-paste/paragraph";
import { Option, Select } from "@twilio-paste/select";
import { Separator } from "@twilio-paste/separator";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarHeaderIconButton,
  SidebarHeaderLabel,
  SidebarNavigation,
  SidebarNavigationItem,
  SidebarPushContentWrapper,
} from "@twilio-paste/sidebar";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@twilio-paste/tabs";
import { Text } from "@twilio-paste/text";
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

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Side Panel",
  component: SidePanel,
};

export const Default = (): React.ReactNode => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <SidePanelPageWrapper>
      <SidePanel collapsed={collapsed} label="my side panel" top="space0">
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
          <Box width="100%">
            <ChatLog>
              <ChatMessage variant="inbound">
                <ChatBubble>Hello, what can I help you with?</ChatBubble>
                <ChatMessageMeta aria-label="said by Gibby Radki at 3:35 PM">
                  <ChatMessageMetaItem>
                    <Avatar name="Gibby Radki" size="sizeIcon20" />
                    Gibby Radki ・ 3:35 PM
                  </ChatMessageMetaItem>
                </ChatMessageMeta>
              </ChatMessage>
              <ChatMessage variant="outbound">
                <ChatBubble>Hi! What is your return policy?</ChatBubble>
                <ChatMessageMeta aria-label="said by you at 3:35 PM">
                  <ChatMessageMetaItem>3:35 PM</ChatMessageMetaItem>
                </ChatMessageMeta>
              </ChatMessage>
              <ChatMessage variant="inbound">
                <ChatBubble>Hello, what can I help you with?</ChatBubble>
                <ChatMessageMeta aria-label="said by Gibby Radki at 3:35 PM">
                  <ChatMessageMetaItem>
                    <Avatar name="Gibby Radki" size="sizeIcon20" />
                    Gibby Radki ・ 3:35 PM
                  </ChatMessageMetaItem>
                </ChatMessageMeta>
              </ChatMessage>
              <ChatMessage variant="outbound">
                <ChatBubble>Hi! What is your return policy?</ChatBubble>
                <ChatMessageMeta aria-label="said by you at 3:35 PM">
                  <ChatMessageMetaItem>3:35 PM</ChatMessageMetaItem>
                </ChatMessageMeta>
              </ChatMessage>
            </ChatLog>
          </Box>
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
    </SidePanelPageWrapper>
  );
};
Default.parameters = {
  padding: false,
};

export const ContentDemo = (): React.ReactNode => {
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
        <SidebarBody>
          <SidebarNavigation aria-label={id}>
            <SidebarNavigationItem href="https://google.com" selected>
              Explore products
            </SidebarNavigationItem>
          </SidebarNavigation>
        </SidebarBody>
      </Sidebar>
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
                <Button variant="primary" onClick={() => setCollapsed(!collapsed)}>
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

  const id = useUID();
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();
  const selectedTabId = useUID();

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
        <SidebarBody>
          <SidebarNavigation aria-label={id}>
            <SidebarNavigationItem href="https://google.com" selected>
              Explore products
            </SidebarNavigationItem>
          </SidebarNavigation>
        </SidebarBody>
      </Sidebar>
      <SidebarPushContentWrapper collapsed={false} variant="compact">
        <Topbar id={topbarSkipLinkID}> </Topbar>
        <SidePanelPageWrapper>
          <SidePanelPushContentWrapper collapsed={collapsed}>
            <Box
              id={mainContentSkipLinkID}
              // width="100%"
              padding="space100"
              display="grid"
              gridTemplateAreas="'header actions' 'filters filters' 'content content'"
              alignItems="center"
              justifyContent="space-between"
              rowGap="space80"
              columnGap="space40"
            >
              <Box gridArea="header">
                <Heading as="h1" variant="heading10" marginBottom="space0">
                  Messaging Insights
                </Heading>
              </Box>
              <Box gridArea="actions" justifySelf="end">
                <Badge
                  variant="decorative20"
                  as="button"
                  onClick={() => {
                    setCollapsed(!collapsed);
                  }}
                >
                  <ArtificialIntelligenceIcon decorative />
                  Ask Intelligent Assistant
                </Badge>
              </Box>
              <Box gridArea="filters" marginTop="space80">
                <Disclosure variant="contained" visible>
                  <DisclosureHeading as="h2" variant="heading40">
                    Filters
                  </DisclosureHeading>
                  <DisclosureContent>
                    <Box
                      display="grid"
                      gridTemplateAreas="'time_range time_range . .' 'separator separator separator separator' 'field operator value clear' 'add_filter . . .'"
                      columnGap="space40"
                      rowGap="space70"
                      gridTemplateColumns="1fr 1fr 1fr min-content"
                      alignItems="end"
                    >
                      <Box gridArea="time_range">
                        <Combobox
                          items={["Past 24 hours", "Past 7 days", "Past 30 days"]}
                          initialSelectedItem="Past 7 days"
                          labelText="Time range"
                          helpText="Times shown in UTC"
                        />
                      </Box>
                      <Box gridArea="separator">
                        <Separator orientation="horizontal" />
                      </Box>
                      <Box gridArea="field">
                        <Label htmlFor="field">Field</Label>
                        <Select id="field">
                          <Option value=" "> </Option>
                        </Select>
                      </Box>
                      <Box gridArea="operator">
                        <Label htmlFor="operator">Operator</Label>
                        <Select id="operator">
                          <Option value=" "> </Option>
                        </Select>
                      </Box>
                      <Box gridArea="value">
                        <Label htmlFor="value">Value</Label>
                        <Select id="value">
                          <Option value=" "> </Option>
                        </Select>
                      </Box>
                      <Box gridArea="clear" paddingBottom="space20">
                        <Button variant="secondary_icon" size="reset">
                          <ClearIcon decorative={false} title="clear filters" />
                        </Button>
                      </Box>
                      <Box gridArea="add_filter">
                        <Button variant="link" size="reset">
                          <PlusIcon decorative /> Add filter
                        </Button>
                      </Box>
                    </Box>
                  </DisclosureContent>
                </Disclosure>
              </Box>
              <Box gridArea="content" overflow="auto">
                <Tabs selectedId={selectedTabId} baseId="horizontal-tabs-example">
                  <TabList aria-label="Horizontal product tabs">
                    <Tab id={selectedTabId}>Overview</Tab>
                    <Tab>Delivery</Tab>
                    <Tab>Responses</Tab>
                    <Tab>OTP</Tab>
                    <Tab>Latency</Tab>
                    <Tab>Scheduled</Tab>
                    <Tab>Deliverability</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Box
                        display="grid"
                        gridTemplateAreas="'health alerts'"
                        columnGap="space70"
                        gridTemplateColumns="1fr 1fr"
                      >
                        <Box gridArea="health">
                          <Card padding="space70">
                            <Text
                              as="h3"
                              fontWeight="fontWeightSemibold"
                              fontSize="fontSize60"
                              lineHeight="lineHeight50"
                              marginBottom="space30"
                            >
                              Your message deliverability health is Fair
                            </Text>
                            <Paragraph>
                              Twilio Messaging deliverability score is an indicator to check your messaging health at a
                              glance.
                            </Paragraph>
                          </Card>
                        </Box>
                        <Box gridArea="alerts">
                          <Card padding="space70">
                            <Text
                              as="h3"
                              fontWeight="fontWeightSemibold"
                              fontSize="fontSize60"
                              lineHeight="lineHeight50"
                            >
                              Alerts & recommendations
                            </Text>
                          </Card>
                        </Box>
                      </Box>
                    </TabPanel>
                    <TabPanel> </TabPanel>
                    <TabPanel> </TabPanel>
                    <TabPanel> </TabPanel>
                    <TabPanel> </TabPanel>
                    <TabPanel> </TabPanel>
                    <TabPanel> </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </SidePanelPushContentWrapper>
          {/* Can be placed anywhere - position fixed */}
          <SidePanel collapsed={collapsed} label="my side panel">
            <SidePanelHeader>
              <Heading as="h3" variant="heading30" marginBottom="space0">
                Heading
              </Heading>
              <SidePanelHeaderActions>
                <Button variant="secondary_icon" size="reset" onClick={() => setCollapsed(true)}>
                  <CloseIcon decorative={false} title="close side panel" size="sizeIcon50" />
                </Button>
              </SidePanelHeaderActions>
            </SidePanelHeader>
            <SidePanelBody>
              <Box width="100%">
                <ChatLog>
                  <ChatMessage variant="inbound">
                    <ChatBubble>Hello, what can I help you with?</ChatBubble>
                    <ChatMessageMeta aria-label="said by Gibby Radki at 3:35 PM">
                      <ChatMessageMetaItem>
                        <Avatar name="Gibby Radki" size="sizeIcon20" />
                        Gibby Radki ・ 3:35 PM
                      </ChatMessageMetaItem>
                    </ChatMessageMeta>
                  </ChatMessage>
                  <ChatMessage variant="outbound">
                    <ChatBubble>Hi! What is your return policy?</ChatBubble>
                    <ChatMessageMeta aria-label="said by you at 3:35 PM">
                      <ChatMessageMetaItem>3:35 PM</ChatMessageMetaItem>
                    </ChatMessageMeta>
                  </ChatMessage>
                  <ChatMessage variant="inbound">
                    <ChatBubble>Hello, what can I help you with?</ChatBubble>
                    <ChatMessageMeta aria-label="said by Gibby Radki at 3:35 PM">
                      <ChatMessageMetaItem>
                        <Avatar name="Gibby Radki" size="sizeIcon20" />
                        Gibby Radki ・ 3:35 PM
                      </ChatMessageMetaItem>
                    </ChatMessageMeta>
                  </ChatMessage>
                  <ChatMessage variant="outbound">
                    <ChatBubble>Hi! What is your return policy?</ChatBubble>
                    <ChatMessageMeta aria-label="said by you at 3:35 PM">
                      <ChatMessageMetaItem>3:35 PM</ChatMessageMetaItem>
                    </ChatMessageMeta>
                  </ChatMessage>
                </ChatLog>
                <ChatComposer
                  config={{
                    namespace: "customer-chat",
                    onError: (e) => {
                      throw e;
                    },
                  }}
                  initialValue="Are switch labels required in the context of a data grid? I'm exploring a UI that allows users to make the same configuration to every row in that data grid, and i'm wondering if there are any accessibility issues with having the column header in the top row with just the switch component in each of the row cells? the label gets pretty repetitive and we're expecting the table to have 20+ rows in this table, so trying to find ways to make it less visually crowded"
                  placeholder="Chat text"
                  ariaLabel="A basic chat composer"
                />
                <Box paddingX="space50" paddingTop="space30">
                  <DetailText>
                    This chatbot is powered by OpenAI. For more information, see the{" "}
                    <Anchor href="#">Customer AI Trust Principles</Anchor> and{" "}
                    <Anchor href="#">Twilio Privacy Notice.</Anchor>
                  </DetailText>
                </Box>
              </Box>
            </SidePanelBody>
          </SidePanel>
        </SidePanelPageWrapper>
      </SidebarPushContentWrapper>
    </Box>
  );
};

Composed.parameters = {
  padding: false,
};
