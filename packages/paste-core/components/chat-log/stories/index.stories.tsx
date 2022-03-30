import * as React from 'react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {ChatMessage, ChatBubble} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog',
};

export const InboundChatMessage = (): React.ReactNode => {
  return (
    <ChatMessage variant="inbound">
      <ChatBubble>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </ChatBubble>
    </ChatMessage>
  );
};

export const OutboundChatMessage = (): React.ReactNode => {
  return (
    <ChatMessage variant="outbound">
      <ChatBubble>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ChatBubble>
    </ChatMessage>
  );
};

export const CustomizedMessages = (): React.ReactNode => {
  return (
    <CustomizationProvider
      baseTheme="default"
      elements={{
        CHAT_BUBBLE: {
          variants: {
            inbound: {
              color: 'colorTextInverse',
              backgroundColor: 'colorBackgroundPrimary',
            },
            outbound: {
              color: 'colorTextInverse',
              backgroundColor: 'colorBackgroundPrimaryDarker',
            },
          },
        },
      }}
    >
      <ChatMessage variant="inbound">
        <ChatBubble>test</ChatBubble>
      </ChatMessage>
      <ChatMessage variant="outbound">
        <ChatBubble>test</ChatBubble>
      </ChatMessage>
    </CustomizationProvider>
  );
};
