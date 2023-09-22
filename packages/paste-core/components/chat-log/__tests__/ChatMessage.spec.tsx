import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { ChatMessage } from '../src';

const CustomizationWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      CHAT_MESSAGE: {
        marginBottom: 'space100',
        variants: {
          inbound: { marginRight: 'space100' },
          outbound: { marginLeft: 'space100' },
        },
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

const CustomizationFooWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      FOO_MESSAGE: {
        marginBottom: 'space100',
        variants: {
          inbound: { marginRight: 'space100' },
          outbound: { marginLeft: 'space100' },
        },
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

describe('ChatMessage', () => {
  it('should render a list element', () => {
    render(<ChatMessage variant="inbound">test</ChatMessage>);
    expect(screen.getByRole('listitem')).toBeDefined();
  });
});

describe('Customization', () => {
  it('should add custom styles', () => {
    render(
      <>
        <ChatMessage variant="inbound" data-testid="inbound-message">
          test
        </ChatMessage>
        <ChatMessage variant="outbound" data-testid="outbound-message">
          test
        </ChatMessage>
      </>,
      { wrapper: CustomizationWrapper },
    );

    const inboundMessage = screen.getByTestId('inbound-message');
    expect(inboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
    expect(inboundMessage).toHaveStyleRule('margin-right', '2.25rem');

    const outboundMessage = screen.getByTestId('outbound-message');
    expect(outboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
    expect(outboundMessage).toHaveStyleRule('margin-left', '2.25rem');
  });

  it('should set element data attribute', () => {
    render(
      <>
        <ChatMessage variant="inbound" data-testid="inbound-message">
          test
        </ChatMessage>
        <ChatMessage variant="outbound" data-testid="outbound-message">
          test
        </ChatMessage>
      </>,
      { wrapper: CustomizationWrapper },
    );

    const inboundMessage = screen.getByTestId('inbound-message');
    expect(inboundMessage.getAttribute('data-paste-element')).toEqual('CHAT_MESSAGE');

    const outboundMessage = screen.getByTestId('outbound-message');
    expect(outboundMessage.getAttribute('data-paste-element')).toEqual('CHAT_MESSAGE');
  });

  it('should add custom styles with a custom element data attribute', () => {
    render(
      <>
        <ChatMessage element="FOO_MESSAGE" variant="inbound" data-testid="inbound-message">
          test
        </ChatMessage>
        <ChatMessage element="FOO_MESSAGE" variant="outbound" data-testid="outbound-message">
          test
        </ChatMessage>
      </>,
      { wrapper: CustomizationFooWrapper },
    );

    const inboundMessage = screen.getByTestId('inbound-message');
    expect(inboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
    expect(inboundMessage).toHaveStyleRule('margin-right', '2.25rem');

    const outboundMessage = screen.getByTestId('outbound-message');
    expect(outboundMessage).toHaveStyleRule('margin-bottom', '2.25rem');
    expect(outboundMessage).toHaveStyleRule('margin-left', '2.25rem');
  });

  it('should set custom element data attribute', () => {
    render(
      <>
        <ChatMessage element="FOO_MESSAGE" variant="inbound" data-testid="inbound-message">
          test
        </ChatMessage>
        <ChatMessage element="FOO_MESSAGE" variant="outbound" data-testid="outbound-message">
          test
        </ChatMessage>
      </>,
      { wrapper: CustomizationFooWrapper },
    );
    const inboundMessage = screen.getByTestId('inbound-message');
    const outboundMessage = screen.getByTestId('outbound-message');

    expect(inboundMessage.getAttribute('data-paste-element')).toEqual('FOO_MESSAGE');
    expect(outboundMessage.getAttribute('data-paste-element')).toEqual('FOO_MESSAGE');
  });
});
