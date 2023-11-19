import { Avatar } from "@twilio-paste/avatar";
import { ChatBubble, ChatLog, ChatMessage, ChatMessageMeta, ChatMessageMetaItem } from "@twilio-paste/chat-log";
import * as React from "react";

export const ChatHeroExample: React.FC = () => (
  <ChatLog aria-label="example chat log">
    <ChatMessage variant="inbound">
      <ChatBubble>Did you hear? The Conversations UI Kit is out now!</ChatBubble>
      <ChatMessageMeta aria-label="said by Gibby Radki at 4:30 PM">
        <ChatMessageMetaItem>
          <Avatar name="Gibby Radki" size="sizeIcon20" />
          Gibby Radki ・ 4:30 PM
        </ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
    <ChatMessage variant="outbound">
      <ChatBubble>
        No way!{" "}
        <span role="img" aria-label="Raised hands and party popper emoji">
          🙌 🎉
        </span>
      </ChatBubble>
      <ChatMessageMeta aria-label="said by you at 4:31 PM">
        <ChatMessageMetaItem>4:31 PM</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  </ChatLog>
);
