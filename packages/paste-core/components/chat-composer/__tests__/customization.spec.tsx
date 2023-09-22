import { render, screen, waitFor } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { PasteCustomCSS } from '@twilio-paste/customization';
import * as React from 'react';

import { ChatComposer } from '../src';

const getStyles = (element = 'CHAT_COMPOSER'): { [key: string]: PasteCustomCSS } => ({
  [element]: { maxWidth: 'size10', backgroundColor: 'colorBackgroundNeutralWeakest' },
  [`${element}_PLACEHOLDER_WRAPPER`]: { color: 'colorTextNeutral', fontSize: 'fontSize10' },
});

const initCustomizationWrapper = (elementName?: string | undefined): RenderOptions['wrapper'] =>
  function Wrapper({ children }) {
    return (
      <CustomizationProvider theme={TestTheme} elements={getStyles(elementName)}>
        {children}
      </CustomizationProvider>
    );
  };

const baseConfig = {
  namespace: 'foo',
  onError: (error: Error) => {
    throw error;
  },
};

describe('Customization', () => {
  it('should set a default element data attribute', async () => {
    render(<ChatComposer config={baseConfig} placeholder="Type here.." />, {
      wrapper: initCustomizationWrapper(),
    });

    const wrapper = screen.getByRole('textbox').parentElement;
    const placeholder = screen.getByText('Type here..');

    await waitFor(() => {
      expect(wrapper?.dataset.pasteElement).toEqual('CHAT_COMPOSER');
      expect(placeholder.dataset.pasteElement).toEqual('CHAT_COMPOSER_PLACEHOLDER_WRAPPER');
    });
  });

  it('should set a custom element data attribute', async () => {
    render(<ChatComposer config={baseConfig} element="MY_COMPOSER" placeholder="Type here.." />, {
      wrapper: initCustomizationWrapper('MY_COMPOSER'),
    });

    const wrapper = screen.getByRole('textbox').parentElement;
    const placeholder = screen.getByText('Type here..');

    await waitFor(() => {
      expect(wrapper?.dataset.pasteElement).toEqual('MY_COMPOSER');
      expect(placeholder.dataset.pasteElement).toEqual('MY_COMPOSER_PLACEHOLDER_WRAPPER');
    });
  });

  it('should add custom styles to the component', async () => {
    render(<ChatComposer config={baseConfig} placeholder="Type here.." />, {
      wrapper: initCustomizationWrapper(),
    });

    const wrapper = screen.getByRole('textbox').parentElement;
    const placeholder = screen.getByText('Type here..');

    await waitFor(() => {
      expect(wrapper).toHaveStyleRule('max-width', '5.5rem');
      expect(placeholder).toHaveStyleRule('color', 'rgb(0, 20, 137)');
    });
  });

  it('should add custom styles to the a custom element named component', async () => {
    render(<ChatComposer config={baseConfig} element="MY_COMPOSER" placeholder="Type here.." />, {
      wrapper: initCustomizationWrapper('MY_COMPOSER'),
    });

    const wrapper = screen.getByRole('textbox').parentElement;
    const placeholder = screen.getByText('Type here..');

    await waitFor(() => {
      expect(wrapper).toHaveStyleRule('max-width', '5.5rem');
      expect(placeholder).toHaveStyleRule('color', 'rgb(0, 20, 137)');
    });
  });
});
