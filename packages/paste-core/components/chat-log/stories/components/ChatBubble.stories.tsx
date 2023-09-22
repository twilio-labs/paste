import type { StoryFn } from "@storybook/react";
import * as React from "react";

import { ChatBubble, ChatLog, ChatMessage } from "../../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/ChatLog",
};

export const InboundChatMessage: StoryFn = () => (
  <ChatLog>
    <ChatMessage variant="inbound">
      <ChatBubble>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </ChatBubble>
    </ChatMessage>
  </ChatLog>
);

export const OutboundChatMessage: StoryFn = () => (
  <ChatLog>
    <ChatMessage variant="outbound">
      <ChatBubble>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ChatBubble>
    </ChatMessage>
  </ChatLog>
);
