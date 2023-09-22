import * as React from 'react';
import { screen, render } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import { ChatBookend, ChatBookendItem } from '../src';

const CustomizationWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      CHAT_BOOKEND: {
        margin: 'space20',
      },
      CHAT_BOOKEND_ITEM: {
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
      MY_CHAT_BOOKEND: {
        margin: 'space20',
      },
      MY_CHAT_BOOKEND_ITEM: {
        color: 'colorText',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

describe('ChatBookend', () => {
  it('should render', () => {
    render(
      <ChatBookend>
        <ChatBookendItem>Today</ChatBookendItem>
      </ChatBookend>,
    );
    expect(screen.getByText('Today')).toBeDefined();
  });

  it('should have aria-label when pass the aria-label prop', () => {
    render(
      <ChatBookend data-testid="bookend" aria-label="Today">
        <ChatBookendItem>Today</ChatBookendItem>
      </ChatBookend>,
    );
    expect(screen.getByTestId('bookend')).toHaveAttribute('aria-label', 'Today');
  });
});

describe('Customization', () => {
  it('should add custom styles to components', () => {
    render(
      <ChatBookend data-testid="bookend">
        <ChatBookendItem>Today</ChatBookendItem>
      </ChatBookend>,
      { wrapper: CustomizationWrapper },
    );

    const bookend = screen.getByTestId('bookend');
    const bookendItem = screen.getByText('Today');

    expect(bookend).toHaveStyleRule('margin', '0.25rem');
    expect(bookendItem).toHaveStyleRule('color', 'rgb(18, 28, 45)');
  });

  it('should set element data attribute', () => {
    render(
      <ChatBookend data-testid="bookend">
        <ChatBookendItem>Today</ChatBookendItem>
      </ChatBookend>,
      { wrapper: CustomizationWrapper },
    );

    const bookend = screen.getByTestId('bookend');
    const bookendItem = screen.getByText('Today');

    expect(bookend.getAttribute('data-paste-element')).toEqual('CHAT_BOOKEND');
    expect(bookendItem.getAttribute('data-paste-element')).toEqual('CHAT_BOOKEND_ITEM');
  });

  it('should add custom styles to variants with a custom element data attribute', () => {
    render(
      <ChatBookend element="MY_CHAT_BOOKEND" data-testid="bookend">
        <ChatBookendItem element="MY_CHAT_BOOKEND_ITEM">Today</ChatBookendItem>
      </ChatBookend>,
      { wrapper: MyCustomizationWrapper },
    );

    const bookend = screen.getByTestId('bookend');
    const bookendItem = screen.getByText('Today');

    expect(bookend).toHaveStyleRule('margin', '0.25rem');
    expect(bookendItem).toHaveStyleRule('color', 'rgb(18, 28, 45)');
  });

  it('should set custom element data attribute', () => {
    render(
      <ChatBookend element="MY_CHAT_BOOKEND" data-testid="bookend">
        <ChatBookendItem element="MY_CHAT_BOOKEND_ITEM">Today</ChatBookendItem>
      </ChatBookend>,
      { wrapper: MyCustomizationWrapper },
    );

    const bookend = screen.getByTestId('bookend');
    const bookendItem = screen.getByText('Today');

    expect(bookend.getAttribute('data-paste-element')).toEqual('MY_CHAT_BOOKEND');
    expect(bookendItem.getAttribute('data-paste-element')).toEqual('MY_CHAT_BOOKEND_ITEM');
  });
});
