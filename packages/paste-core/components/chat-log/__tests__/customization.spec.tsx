import * as React from 'react';
import {screen, render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {ChatMessage, ChatBubble} from '../src';

const customMessageStyles: PasteCustomCSS = {
  marginBottom: 'space100',
  variants: {
    inbound: {
      marginRight: 'space100',
    },
    outbound: {
      marginLeft: 'space100',
    },
  },
};

const customBubbleStyles: PasteCustomCSS = {
  color: 'colorTextInverse',
  variants: {
    inbound: {
      backgroundColor: 'colorBackgroundPrimary',
    },
    outbound: {
      backgroundColor: 'colorBackgroundPrimaryDarker',
    },
  },
};

const customizedElements: {[key: string]: PasteCustomCSS} = {
  CHAT_MESSAGE: customMessageStyles,
  CHAT_BUBBLE: customBubbleStyles,
};

const customizedFooElements: {[key: string]: PasteCustomCSS} = {
  foo_message: customMessageStyles,
  foo_bubble: customBubbleStyles,
};

describe('Customization', () => {
  it('should add custom styles to ChatMessage', () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme} elements={customizedElements}>
        <ChatMessage variant="inbound" data-testid="inbound-message">
          test
        </ChatMessage>
        <ChatMessage variant="outbound" data-testid="outbound-message">
          test
        </ChatMessage>
      </CustomizationProvider>
    );

    const inboundMessage = screen.getByTestId('inbound-message');
    expect(inboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
    expect(inboundMessage).toHaveStyleRule('margin-right', '2.25rem');

    const outboundMessage = screen.getByTestId('outbound-message');
    expect(outboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
    expect(outboundMessage).toHaveStyleRule('margin-left', '2.25rem');
  });

  it('should set element data attribute on ChatMessage', () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme} elements={customizedElements}>
        <ChatMessage variant="inbound" data-testid="inbound-message">
          test
        </ChatMessage>
      </CustomizationProvider>
    );

    const inboundMessage = screen.getByTestId('inbound-message');
    expect(inboundMessage.getAttribute('data-paste-element')).toEqual('CHAT_MESSAGE');
  });

  it('should add custom styles to ChatMessage with a custom element data attribute', () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme} elements={customizedFooElements}>
        <ChatMessage element="foo_message" variant="inbound" data-testid="inbound-message">
          test
        </ChatMessage>
        <ChatMessage element="foo_message" variant="outbound" data-testid="outbound-message">
          test
        </ChatMessage>
      </CustomizationProvider>
    );

    const inboundMessage = screen.getByTestId('inbound-message');
    expect(inboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
    expect(inboundMessage).toHaveStyleRule('margin-right', '2.25rem');

    const outboundMessage = screen.getByTestId('outbound-message');
    expect(outboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
    expect(outboundMessage).toHaveStyleRule('margin-left', '2.25rem');
  });

  it('should set custom element data attribute on ChatMessage', () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme} elements={customizedFooElements}>
        <ChatMessage element="foo_message" variant="inbound" data-testid="inbound-message">
          test
        </ChatMessage>
        <ChatMessage element="foo_message" variant="outbound" data-testid="outbound-message">
          test
        </ChatMessage>
      </CustomizationProvider>
    );
    const inboundMessage = screen.getByTestId('inbound-message');
    expect(inboundMessage.getAttribute('data-paste-element')).toEqual('foo_message');

    const outboundMessage = screen.getByTestId('outbound-message');
    expect(outboundMessage.getAttribute('data-paste-element')).toEqual('foo_message');
  });

  it('should add custom styles to ChatBubble variants', () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme} elements={customizedElements}>
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

  it('should set element data attribute on ChatBubble', () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme} elements={customizedElements}>
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

    expect(inboundBubble.getAttribute('data-paste-element')).toEqual('CHAT_BUBBLE');
    expect(outboundBubble.getAttribute('data-paste-element')).toEqual('CHAT_BUBBLE');
  });

  it('should add custom styles to ChatBubble variants with a custom element data attribute', () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme} elements={customizedFooElements}>
        <ChatMessage variant="inbound">
          <ChatBubble element="foo_bubble" data-testid="inbound-bubble">
            test
          </ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble element="foo_bubble" data-testid="outbound-bubble">
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

  it('should set custom element data attribute on ChatBubbles', () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme} elements={customizedFooElements}>
        <ChatMessage variant="inbound">
          <ChatBubble element="foo_bubble" data-testid="inbound-bubble">
            test
          </ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble element="foo_bubble" data-testid="outbound-bubble">
            test
          </ChatBubble>
        </ChatMessage>
      </CustomizationProvider>
    );

    const inboundBubble = screen.getByTestId('inbound-bubble');
    const outboundBubble = screen.getByTestId('outbound-bubble');

    expect(inboundBubble.getAttribute('data-paste-element')).toEqual('foo_bubble');
    expect(outboundBubble.getAttribute('data-paste-element')).toEqual('foo_bubble');
  });
});
