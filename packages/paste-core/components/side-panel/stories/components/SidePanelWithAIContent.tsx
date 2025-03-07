// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { AIChatLog, AIChatMessage, AIChatMessageAuthor, AIChatMessageBody } from "@twilio-paste/ai-chat-log";
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ChatComposer, ChatComposerActionGroup, ChatComposerContainer } from "@twilio-paste/chat-composer";
import { Heading } from "@twilio-paste/heading";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import * as React from "react";

import { SidePanel, SidePanelBody, SidePanelFooter, SidePanelHeader, SidePanelHeaderActions } from "../../src";

export const SidePanelWithAIContent: React.FC<React.PropsWithChildren> = () => {
  return (
    <SidePanel label="intelligent assistant ai bot side panel">
      <SidePanelHeader>
        <ArtificialIntelligenceIcon decorative size="sizeIcon50" color="colorTextIcon" />
        <Heading as="h3" variant="heading30" marginBottom="space0">
          Assistant
        </Heading>
        <SidePanelHeaderActions>
          <Button variant="secondary_icon" size="reset" onClick={() => {}}>
            <MoreIcon decorative={false} title="open menu" size="sizeIcon50" />
          </Button>
        </SidePanelHeaderActions>
      </SidePanelHeader>
      <SidePanelBody>
        <Box width="100%">
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
                I&apos;m happy to help with any questions you have about user interfaces, accessibility, or the Twilio
                Paste design system. Just ask!
              </AIChatMessageBody>
            </AIChatMessage>
            <AIChatMessage variant="user">
              <AIChatMessageAuthor aria-label="You said at 2:39pm">Gibby Radki</AIChatMessageAuthor>
              <AIChatMessageBody>My question is about the Switch component.</AIChatMessageBody>
            </AIChatMessage>
            <AIChatMessage variant="bot">
              <AIChatMessageAuthor aria-label="ai said">Good Bot</AIChatMessageAuthor>
              <AIChatMessageBody>
                A <Anchor href="https://paste.twilio.design/components/switch">Switch</Anchor> is an interactive binary
                control. What other information about the Paste Switch component can I help with?
              </AIChatMessageBody>
            </AIChatMessage>
          </AIChatLog>
        </Box>
      </SidePanelBody>
      <SidePanelFooter variant="chat">
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
              <AttachIcon decorative={false} title="attach files to the message" />
            </Button>
            <Button variant="primary_icon" size="reset">
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </SidePanelFooter>
    </SidePanel>
  );
};
