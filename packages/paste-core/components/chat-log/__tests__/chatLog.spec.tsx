import * as React from 'react';
import {screen, render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';

import {ChatLog} from '../src';

const CustomizationWrapper: React.FC<{elements?: {[key: string]: PasteCustomCSS}}> = ({children, elements}) => (
  <CustomizationProvider baseTheme="default" theme={TestTheme} elements={{CHAT_LOG: {padding: 'space100'}}}>
    {children}
  </CustomizationProvider>
);

const CustomizationFooWrapper: React.FC = ({children}) => (
  <CustomizationProvider baseTheme="default" theme={TestTheme} elements={{FOO_LOG: {padding: 'space100'}}}>
    {children}
  </CustomizationProvider>
);

describe('ChatLog', () => {
  it('should render', () => {
    render(<ChatLog />);
    expect(screen.getByRole('log')).toBeDefined();
    expect(screen.getByRole('list')).toBeDefined();
  });
});

describe('Customization', () => {
  it('should add custom styles', () => {
    render(<ChatLog />, {wrapper: CustomizationWrapper});

    const chatLog = screen.getByRole('log');
    expect(chatLog).toHaveStyleRule('padding', '2.25rem');
  });

  it('should set element data attribute', () => {
    render(<ChatLog />, {wrapper: CustomizationWrapper});

    const chatLog = screen.getByRole('log');
    expect(chatLog.getAttribute('data-paste-element')).toEqual('CHAT_LOG');
  });

  it('should add custom styles with a custom element data attribute', () => {
    render(<ChatLog element="FOO_LOG" />, {wrapper: CustomizationFooWrapper});

    const chatLog = screen.getByRole('log');
    expect(chatLog).toHaveStyleRule('padding', '2.25rem');
  });

  it('should set custom element data attribute', () => {
    render(<ChatLog element="FOO_LOG" />, {wrapper: CustomizationFooWrapper});

    const chatLog = screen.getByRole('log');
    expect(chatLog.getAttribute('data-paste-element')).toEqual('FOO_LOG');
  });
});
