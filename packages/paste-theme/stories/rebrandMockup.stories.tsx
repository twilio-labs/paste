// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { AIChatLog, AIChatMessage, AIChatMessageAuthor, AIChatMessageBody } from "@twilio-paste/ai-chat-log";
import { Alert } from "@twilio-paste/alert";
import type { AlertProps } from "@twilio-paste/alert";
import { Anchor } from "@twilio-paste/anchor";
import type { AvatarProps } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import type { ButtonProps } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { Callout, CalloutHeading, CalloutText } from "@twilio-paste/callout";
import type { CalloutProps } from "@twilio-paste/callout";
import { Card } from "@twilio-paste/card";
import { ChatComposer, ChatComposerActionGroup, ChatComposerContainer } from "@twilio-paste/chat-composer";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/disclosure";
import type { DisclosureHeadingProps } from "@twilio-paste/disclosure";
import { DisplayHeading } from "@twilio-paste/display-heading";
import { FormPill, FormPillGroup, useFormPillState } from "@twilio-paste/form-pill-group";
import { Heading } from "@twilio-paste/heading";
import { AuthenticationIcon } from "@twilio-paste/icons/esm/AuthenticationIcon";
import { InformationIcon } from "@twilio-paste/icons/esm/InformationIcon";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import { ProductHomeIcon } from "@twilio-paste/icons/esm/ProductHomeIcon";
import { ProductJourneysIcon } from "@twilio-paste/icons/esm/ProductJourneysIcon";
import { TokenIcon } from "@twilio-paste/icons/esm/TokenIcon";
import { Input } from "@twilio-paste/input";
import { Paragraph } from "@twilio-paste/paragraph";
import { RadioButton, RadioButtonGroup } from "@twilio-paste/radio-button-group";
import { Option, Select } from "@twilio-paste/select";
import {
  Sidebar,
  SidebarBody,
  SidebarCollapseButton,
  SidebarFooter,
  SidebarHeader,
  SidebarHeaderIconButton,
  SidebarHeaderLabel,
  SidebarNavigation,
  SidebarNavigationItem,
  SidebarPushContentWrapper,
} from "@twilio-paste/sidebar";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import { TextArea } from "@twilio-paste/textarea";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { ThemeProvider } from "../src/themeProvider";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Theme/Themes",
  component: ThemeProvider,
};

const ContentCard = ({ number, text }: { number: string; text: string }): JSX.Element => (
  <Card paddingTop="space40" paddingBottom="space70" paddingRight="space40" paddingLeft="space70">
    <Box display="grid" gridTemplateRows="min-content min-content auto min-content" height="size20">
      <Box display="flex" justifyContent="flex-end" alignItems="flex-start">
        <Button variant="secondary_icon" size="circle_small">
          <InformationIcon decorative={false} title="Information" size="sizeIcon20" />
        </Button>
      </Box>
      <Heading variant="heading10" as="span">
        {number}
      </Heading>
      <Paragraph marginBottom="space0">{text}</Paragraph>
      <Box alignSelf="end">
        <Anchor href="#">View all</Anchor>
      </Box>
    </Box>
  </Card>
);

export const RebrandMockup = (): React.ReactNode => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();
  const pillState = useFormPillState();
  return (
    <Box backgroundColor="colorBackgroundBody">
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={pushSidebarCollapsed}
        variant="compact"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation aria-label="home">
            <SidebarNavigationItem
              href="#"
              selected
              icon={<ProductHomeIcon decorative={false} title="Admin" size="sizeIcon50" />}
            >
              Home
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="#"
              icon={<AuthenticationIcon decorative={false} title="Authentication" size="sizeIcon50" />}
            >
              Authentication
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="#"
              icon={<ProductJourneysIcon decorative={false} title="Journeys" size="sizeIcon50" />}
            >
              Journeys
            </SidebarNavigationItem>
            <SidebarNavigationItem href="#" icon={<TokenIcon decorative={false} title="Token" size="sizeIcon50" />}>
              Token
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
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <div id={topbarSkipLinkID} />
        <Box padding="space70" id={mainContentSkipLinkID}>
          <DisplayHeading variant="displayHeading30" as="h1">
            Performance and trends
          </DisplayHeading>
          <Callout variant="neutral" onDismiss={() => {}}>
            <CalloutHeading as="h2">Recommendation</CalloutHeading>
            <CalloutText>Get quick insights based on your latest Twilio data with Unified Profiles</CalloutText>
          </Callout>
          <Box marginY="space70">
            <FormPillGroup {...pillState} aria-label="Products:">
              <FormPill {...pillState} selected onDismiss={() => {}}>
                Region: NAMER
              </FormPill>
              <FormPill {...pillState}>Date and time</FormPill>
              <FormPill {...pillState}>Currency</FormPill>
              <FormPill {...pillState}>Status</FormPill>
            </FormPillGroup>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(8, 1fr)"
            gridTemplateRows="auto auto"
            gridTemplateAreas="'card1 card1 card2 card2 card3 card3 card4 card4' 'map map map map map ai ai ai'"
            columnGap="space50"
            rowGap="space50"
          >
            <Box gridArea="card1">
              <ContentCard number="299,531" text="Allowed verification attempts" />
            </Box>
            <Box gridArea="card2">
              <ContentCard number="155,622" text="Fraud blocked attempts" />
            </Box>
            <Box gridArea="card3">
              <ContentCard number="71.84%" text="Success rate" />
            </Box>
            <Box gridArea="card4">
              <ContentCard number="$22,767.17" text="Estimated cost savings (USD)" />
            </Box>
            <Box gridArea="map">
              <Card>
                <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                  <Text
                    as="span"
                    color="colorTextWeak"
                    fontSize="fontSize60"
                    lineHeight="lineHeight60"
                    fontWeight="fontWeightSemibold"
                  >
                    Conversion rate
                  </Text>
                  <RadioButtonGroup attached name="view" aria-label="choose view" legend="">
                    <RadioButton value="country" checked>
                      By country
                    </RadioButton>
                    <RadioButton value="channel">By channel</RadioButton>
                    <RadioButton value="fraud">By fraud scenario</RadioButton>
                  </RadioButtonGroup>
                </Box>
              </Card>
            </Box>
            <Box gridArea="ai">
              <Card>
                <Box>
                  <Box>
                    <RadioButtonGroup attached name="foo" aria-label="choose view" legend="">
                      <RadioButton value="country" checked>
                        Orchestration assistant
                      </RadioButton>
                      <RadioButton value="channel">Control panel</RadioButton>
                    </RadioButtonGroup>
                  </Box>
                  <AIChatLog>
                    <AIChatMessage variant="bot">
                      <AIChatMessageAuthor aria-label="ai said">Good Bot</AIChatMessageAuthor>
                      <AIChatMessageBody>Hello, what can I help you with?</AIChatMessageBody>
                    </AIChatMessage>
                    <AIChatMessage variant="user">
                      <AIChatMessageAuthor aria-label="You said at 2:36pm">Gibby Radki</AIChatMessageAuthor>
                      <AIChatMessageBody>Hi! Can you help me with my user interface?</AIChatMessageBody>
                    </AIChatMessage>
                    <AIChatMessage variant="bot">
                      <AIChatMessageAuthor aria-label="ai said">Good Bot</AIChatMessageAuthor>
                      Of course! What do you need help with?
                    </AIChatMessage>
                    <AIChatMessage variant="bot">
                      <AIChatMessageAuthor aria-label="ai said">Good Bot</AIChatMessageAuthor>
                      <AIChatMessageBody>
                        I&apos;m happy to help with any questions you have about user interfaces, accessibility, or the
                        Twilio Paste design system. Just ask!
                      </AIChatMessageBody>
                    </AIChatMessage>
                    <AIChatMessage variant="user">
                      <AIChatMessageAuthor aria-label="You said at 2:39pm">Gibby Radki</AIChatMessageAuthor>
                      <AIChatMessageBody>My question is about the Switch component.</AIChatMessageBody>
                    </AIChatMessage>
                    <AIChatMessage variant="bot">
                      <AIChatMessageAuthor aria-label="ai said">Good Bot</AIChatMessageAuthor>
                      <AIChatMessageBody>
                        A <Anchor href="https://paste.twilio.design/components/switch">Switch</Anchor> is an interactive
                        binary control. What other information about the Paste Switch component can I help with?
                      </AIChatMessageBody>
                    </AIChatMessage>
                  </AIChatLog>
                  <ChatComposerContainer variant="contained">
                    <ChatComposer
                      maxHeight="size10"
                      config={{
                        namespace: "customer-chat",
                        onError: (e) => {
                          throw e;
                        },
                      }}
                      initialValue="Are switch labels required? What about "
                      placeholder="Chat text"
                      ariaLabel="A basic chat composer"
                    />
                    <ChatComposerActionGroup>
                      <Button variant="secondary_icon" size="reset">
                        xx
                      </Button>
                    </ChatComposerActionGroup>
                  </ChatComposerContainer>
                </Box>
              </Card>
            </Box>
          </Box>
        </Box>
      </SidebarPushContentWrapper>
    </Box>
  );
};
