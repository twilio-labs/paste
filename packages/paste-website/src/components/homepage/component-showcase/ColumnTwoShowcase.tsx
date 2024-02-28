import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Callout, CalloutHeading, CalloutText } from "@twilio-paste/callout";
import { ChatComposer } from "@twilio-paste/chat-composer";
import {
  ChatBookend,
  ChatBookendItem,
  ChatBubble,
  ChatEvent,
  ChatLog,
  ChatMessage,
  ChatMessageMeta,
  ChatMessageMetaItem,
} from "@twilio-paste/chat-log";
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import { FilterIcon } from "@twilio-paste/icons/esm/FilterIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import * as React from "react";

export const ColumnTwoShowcase: React.FC = () => {
  const [followPressed, setFollowPressed] = React.useState(false);
  return (
    <Box
      element="COLUMN_2"
      display="flex"
      flexDirection="column"
      rowGap="space70"
      gridArea="bottom2"
      width="369px"
      position="relative"
    >
      <Callout variant="neutral">
        <CalloutHeading as="h2">Auto recharge disabled</CalloutHeading>
        <CalloutText>We recommend enabling auto recharge to keep your account active.</CalloutText>
      </Callout>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Button variant="primary" pressed={followPressed} onClick={() => setFollowPressed(!followPressed)}>
          {followPressed ? <CheckboxCheckIcon decorative /> : <PlusIcon decorative />}Follow
        </Button>
        <Button variant="destructive">Remove user</Button>
        <Button variant="destructive">
          <FilterIcon decorative />
          Apply filters
        </Button>
      </Box>
      <Box backgroundColor="colorBackgroundBody" borderRadius="borderRadius30">
        <ChatLog>
          <ChatBookend>
            <ChatBookendItem>Yesterday</ChatBookendItem>
            <ChatBookendItem>
              <strong>Chat Started</strong> ・ 3:34pm
            </ChatBookendItem>
          </ChatBookend>
          <ChatEvent>Gibby Radki has joined the chat・3:43pm</ChatEvent>
          <ChatMessage variant="outbound">
            <ChatBubble>I have shipped the item back, how long will it take to get the refund?</ChatBubble>
            <ChatMessageMeta aria-label="said by you at 3:45 PM">
              <ChatMessageMetaItem>3:45pm</ChatMessageMetaItem>
            </ChatMessageMeta>
          </ChatMessage>
          <ChatMessage variant="inbound">
            <ChatBubble>Hi Gibby</ChatBubble>
            <ChatBubble>You should receive the refund within 10 days</ChatBubble>
            <ChatBubble>Do you need help with anything else?</ChatBubble>
            <ChatMessageMeta aria-label="said by Gibby Radki at 3:47 PM">
              <ChatMessageMetaItem>
                <Avatar name="gibby radki" icon={UserIcon} size="sizeIcon30" />
                Gibby Radki · 3:47pm
              </ChatMessageMetaItem>
            </ChatMessageMeta>
          </ChatMessage>
        </ChatLog>
        <Box paddingX="space40" paddingY="space30">
          <ChatComposer
            config={{
              namespace: "customer-chat",
              onError: (e) => {
                throw e;
              },
            }}
            placeholder="Contact Owl Corp"
            ariaLabel="A basic chat composer"
          />
        </Box>
      </Box>
    </Box>
  );
};
