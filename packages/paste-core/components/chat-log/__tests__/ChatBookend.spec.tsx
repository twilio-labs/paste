import * as React from 'react';
import {screen, render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {ChatBookend} from '../src';

const CustomizationWrapper: React.FC = ({children}) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      CHAT_BOOKEND: {
        color: 'colorText',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

const MyCustomizationWrapper: React.FC = ({children}) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      MY_CHAT_BOOKEND: {
        color: 'colorText',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

describe('ChatBookend', () => {
  it('should render', () => {
    render(<ChatBookend>Today</ChatBookend>);
    expect(screen.getByText('Today')).toBeDefined();
  });

  it('should have aria-label when pass the aria-label prop', () => {
    render(
      <ChatBookend data-testid="bookend" aria-label="Today">
        Today
      </ChatBookend>
    );
    expect(screen.getByTestId('bookend')).toHaveAttribute('aria-label', 'Today');
  });
});

describe('Customization', () => {
  it('should add custom styles to variants', () => {
    render(<ChatBookend>Today</ChatBookend>, {wrapper: CustomizationWrapper});

    const bookend = screen.getByText('Today');

    expect(bookend).toHaveStyleRule('color', 'rgb(18, 28, 45)');
  });

  it('should set element data attribute', () => {
    render(<ChatBookend>Today</ChatBookend>, {wrapper: CustomizationWrapper});

    const bookend = screen.getByText('Today');

    expect(bookend.getAttribute('data-paste-element')).toEqual('CHAT_BOOKEND');
  });

  it('should add custom styles to variants with a custom element data attribute', () => {
    render(<ChatBookend element="MY_CHAT_BOOKEND">Today</ChatBookend>, {wrapper: MyCustomizationWrapper});

    const bookend = screen.getByText('Today');

    expect(bookend).toHaveStyleRule('color', 'rgb(18, 28, 45)');
  });

  it('should set custom element data attribute', () => {
    render(<ChatBookend element="MY_CHAT_BOOKEND">Today</ChatBookend>, {wrapper: CustomizationWrapper});

    const bookend = screen.getByText('Today');

    expect(bookend.getAttribute('data-paste-element')).toEqual('MY_CHAT_BOOKEND');
  });
});
