import * as React from 'react';
import {screen, render} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {CustomizationProvider} from '@twilio-paste/customization';
import {ChatMessage, ChatBubble} from '../src';

const CustomizationWrapper: React.FC = ({children}) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      CHAT_BUBBLE: {
        color: 'colorTextInverse',
        variants: {
          inbound: {backgroundColor: 'colorBackgroundPrimary'},
          outbound: {backgroundColor: 'colorBackgroundPrimaryDarker'},
        },
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

const CustomizationFooWrapper: React.FC = ({children}) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      foo_bubble: {
        color: 'colorTextInverse',
        variants: {
          inbound: {backgroundColor: 'colorBackgroundPrimary'},
          outbound: {backgroundColor: 'colorBackgroundPrimaryDarker'},
        },
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

describe('ChatBubble', () => {
  it('should render', () => {
    render(
      <ChatMessage variant="inbound">
        <ChatBubble>test</ChatBubble>
      </ChatMessage>
    );
    expect(screen.getByText('test')).toBeDefined();
  });
});

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const {container} = render(
      <ul>
        <ChatMessage variant="inbound">
          <ChatBubble>test</ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble>test</ChatBubble>
        </ChatMessage>
      </ul>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Customization', () => {
  it('should add custom styles to variants', () => {
    render(
      <>
        <ChatMessage variant="inbound">
          <ChatBubble data-testid="inbound-bubble">test</ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble data-testid="outbound-bubble">test</ChatBubble>
        </ChatMessage>
      </>,
      {wrapper: CustomizationWrapper}
    );

    const inboundBubble = screen.getByTestId('inbound-bubble');
    const outboundBubble = screen.getByTestId('outbound-bubble');

    expect(inboundBubble).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');
    expect(inboundBubble).toHaveStyleRule('color', 'rgb(255, 255, 255)');
    expect(outboundBubble).toHaveStyleRule('background-color', 'rgb(3, 11, 93)');
    expect(outboundBubble).toHaveStyleRule('color', 'rgb(255, 255, 255)');
  });

  it('should set element data attribute', () => {
    render(
      <>
        <ChatMessage variant="inbound">
          <ChatBubble data-testid="inbound-bubble">test</ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble data-testid="outbound-bubble">test</ChatBubble>
        </ChatMessage>
      </>,
      {wrapper: CustomizationWrapper}
    );

    const inboundBubble = screen.getByTestId('inbound-bubble');
    const outboundBubble = screen.getByTestId('outbound-bubble');

    expect(inboundBubble.getAttribute('data-paste-element')).toEqual('CHAT_BUBBLE');
    expect(outboundBubble.getAttribute('data-paste-element')).toEqual('CHAT_BUBBLE');
  });

  it('should add custom styles to variants with a custom element data attribute', () => {
    render(
      <>
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
      </>,
      {wrapper: CustomizationFooWrapper}
    );

    const inboundBubble = screen.getByTestId('inbound-bubble');
    const outboundBubble = screen.getByTestId('outbound-bubble');

    expect(inboundBubble).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');
    expect(inboundBubble).toHaveStyleRule('color', 'rgb(255, 255, 255)');
    expect(outboundBubble).toHaveStyleRule('background-color', 'rgb(3, 11, 93)');
    expect(outboundBubble).toHaveStyleRule('color', 'rgb(255, 255, 255)');
  });

  it('should set custom element data attribute', () => {
    render(
      <>
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
      </>,
      {wrapper: CustomizationFooWrapper}
    );

    const inboundBubble = screen.getByTestId('inbound-bubble');
    const outboundBubble = screen.getByTestId('outbound-bubble');

    expect(inboundBubble.getAttribute('data-paste-element')).toEqual('foo_bubble');
    expect(outboundBubble.getAttribute('data-paste-element')).toEqual('foo_bubble');
  });
});
