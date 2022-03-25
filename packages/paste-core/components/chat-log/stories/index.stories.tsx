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

// it('should add custom styles to Card', (): void => {
//   render(
//     <CustomizationProvider
//       baseTheme="default"
//       elements={{CARD: {backgroundColor: 'colorBackground', borderColor: 'colorBorderDestructive'}}}
//     >
//       <Card data-testid="customizable-card">Custom card</Card>
//     </CustomizationProvider>
//   );
//   const renderedCard = screen.getByTestId('customizable-card');
//   expect(renderedCard).toHaveStyleRule('background-color', 'rgb(244,244,246)');
//   expect(renderedCard).toHaveStyleRule('border-color', 'rgb(214,31,31)');
// });

// it('should add custom styles to Card with a custom element data attribute', (): void => {
//   render(
//     <CustomizationProvider
//       baseTheme="default"
//       elements={{foo: {backgroundColor: 'colorBackground', borderColor: 'colorBorderDestructive'}}}
//     >
//       <Card element="foo" data-testid="customizable-card">
//         Custom card
//       </Card>
//     </CustomizationProvider>
//   );
//   const renderedCard = screen.getByTestId('customizable-card');
//   expect(renderedCard).toHaveStyleRule('background-color', 'rgb(244,244,246)');
//   expect(renderedCard).toHaveStyleRule('border-color', 'rgb(214,31,31)');
// });
