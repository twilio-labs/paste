import * as React from 'react';
import {ChatMessage} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog',
};

export const InboundChatMessage = (): React.ReactNode => {
  return (
    <ChatMessage variant="inbound">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </ChatMessage>
  );
};

export const OutboundChatMessage = (): React.ReactNode => {
  return (
    <ChatMessage variant="outbound">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </ChatMessage>
  );
};
