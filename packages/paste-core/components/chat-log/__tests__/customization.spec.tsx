import * as React from 'react';
import {screen, render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {ChatMessage, ChatBubble} from '../src';

describe('Customization', () => {
  it('should add custom styles to ChatMessage', () => {
    render(
      <CustomizationProvider baseTheme="default" elements={{CHAT_MESSAGE: {marginBottom: 'space100'}}}>
        <ChatMessage variant="inbound" data-testid="inbound-message">
          test
        </ChatMessage>
      </CustomizationProvider>
    );

    const inboundMessage = screen.getByTestId('inbound-message');
    expect(inboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
  });

  it('should add custom styles to ChatMessage with a custom element data attribute', () => {
    render(
      <CustomizationProvider baseTheme="default" elements={{foo: {marginBottom: 'space100'}}}>
        <ChatMessage element="foo" variant="inbound" data-testid="inbound-message">
          test
        </ChatMessage>
      </CustomizationProvider>
    );

    const inboundMessage = screen.getByTestId('inbound-message');
    expect(inboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
  });

  it('should add custom styles to ChatBubble variants', () => {
    render(
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
          <ChatBubble data-testid="inbound-bubble">test</ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble data-testid="outbound-bubble">test</ChatBubble>
        </ChatMessage>
      </CustomizationProvider>
    );

    const inboundBubble = screen.getByTestId('inbound-bubble');
    const outboundBubble = screen.getByTestId('outbound-bubble');

    expect(inboundBubble).toHaveStyleRule('background-color', 'rgb(2,99,224)');
    expect(inboundBubble).toHaveStyleRule('color', 'rgb(255,255,255)');
    expect(outboundBubble).toHaveStyleRule('background-color', 'rgb(3,11,93)');
    expect(outboundBubble).toHaveStyleRule('color', 'rgb(255,255,255)');
  });

  it('should add custom styles to ChatBubble variants with a custom element data attribute', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          foo: {
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
          <ChatBubble element="foo" data-testid="inbound-bubble">
            test
          </ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble element="foo" data-testid="outbound-bubble">
            test
          </ChatBubble>
        </ChatMessage>
      </CustomizationProvider>
    );

    const inboundBubble = screen.getByTestId('inbound-bubble');
    const outboundBubble = screen.getByTestId('outbound-bubble');

    expect(inboundBubble).toHaveStyleRule('background-color', 'rgb(2,99,224)');
    expect(inboundBubble).toHaveStyleRule('color', 'rgb(255,255,255)');
    expect(outboundBubble).toHaveStyleRule('background-color', 'rgb(3,11,93)');
    expect(outboundBubble).toHaveStyleRule('color', 'rgb(255,255,255)');
  });
});
