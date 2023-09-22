import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { ChatEvent } from '../src';

const CustomizationWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      CHAT_EVENT: {
        color: 'colorText',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

const MyCustomizationWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      MY_CHAT_EVENT: {
        color: 'colorText',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

describe('ChatEvent', () => {
  it('should render', () => {
    render(
      <ChatEvent data-testid="event">
        <strong>Lauren Gardner</strong> has left the chat ・3:42 PM
      </ChatEvent>,
    );
    expect(screen.getByTestId('event')).toBeDefined();
  });

  it('should have aria-label when pass the aria-label prop', () => {
    render(
      <ChatEvent data-testid="event" aria-label="Lauren Gardner has left the chat at 3:42 PM">
        <strong>Lauren Gardner</strong> has left the chat ・3:42 PM
      </ChatEvent>,
    );
    expect(screen.getByTestId('event')).toHaveAttribute('aria-label', 'Lauren Gardner has left the chat at 3:42 PM');
  });
});

describe('Customization', () => {
  it('should add custom styles to variants', () => {
    render(
      <ChatEvent data-testid="event">
        <strong>Lauren Gardner</strong> has left the chat ・3:42 PM
      </ChatEvent>,
      { wrapper: CustomizationWrapper },
    );

    const event = screen.getByTestId('event');

    expect(event).toHaveStyleRule('color', 'rgb(18, 28, 45)');
  });

  it('should set element data attribute', () => {
    render(
      <ChatEvent data-testid="event">
        <strong>Lauren Gardner</strong> has left the chat ・3:42 PM
      </ChatEvent>,
      { wrapper: CustomizationWrapper },
    );

    const event = screen.getByTestId('event');

    expect(event.getAttribute('data-paste-element')).toEqual('CHAT_EVENT');
  });

  it('should add custom styles to variants with a custom element data attribute', () => {
    render(
      <ChatEvent data-testid="event" element="MY_CHAT_EVENT">
        <strong>Lauren Gardner</strong> has left the chat ・3:42 PM
      </ChatEvent>,
      { wrapper: MyCustomizationWrapper },
    );

    const event = screen.getByTestId('event');

    expect(event).toHaveStyleRule('color', 'rgb(18, 28, 45)');
  });

  it('should set custom element data attribute', () => {
    render(
      <ChatEvent data-testid="event" element="MY_CHAT_EVENT">
        <strong>Lauren Gardner</strong> has left the chat ・3:42 PM
      </ChatEvent>,
      { wrapper: CustomizationWrapper },
    );

    const event = screen.getByTestId('event');

    expect(event.getAttribute('data-paste-element')).toEqual('MY_CHAT_EVENT');
  });
});
