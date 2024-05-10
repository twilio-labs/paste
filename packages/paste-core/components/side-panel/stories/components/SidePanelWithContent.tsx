// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Anchor } from "@twilio-paste/anchor";
import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ChatComposer } from "@twilio-paste/chat-composer";
import { ChatBubble, ChatLog, ChatMessage, ChatMessageMeta, ChatMessageMetaItem } from "@twilio-paste/chat-log";
import { DetailText } from "@twilio-paste/detail-text";
import { Heading } from "@twilio-paste/heading";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import * as React from "react";

import { SidePanel, SidePanelBody, SidePanelHeader, SidePanelHeaderActions } from "../../src";

export const SidePanelWithContent: React.FC<
  React.PropsWithChildren<{ collapsed: boolean; setCollapsed: (collapsed) => void }>
> = ({ collapsed, setCollapsed }) => {
  return (
    <SidePanel collapsed={collapsed} label="my side panel">
      <SidePanelHeader>
        <ArtificialIntelligenceIcon decorative size="sizeIcon50" color="colorTextIcon" />
        <Heading as="h3" variant="heading30" marginBottom="space0">
          Assistant
        </Heading>
        <SidePanelHeaderActions>
          <Button variant="secondary_icon" size="reset" onClick={() => {}}>
            <MoreIcon decorative={false} title="open menu" size="sizeIcon50" />
          </Button>
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
  );
};
