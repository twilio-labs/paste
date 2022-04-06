import * as React from 'react';

import {Theme} from '@twilio-paste/theme';
import {render, screen} from '@testing-library/react';
import type {RenderOptions} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {Spinner} from '../src';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';

const TestWrapper = (elements?: Record<string, any>): RenderOptions['wrapper'] =>
  function Wrapper({children}) {
    return (
      <CustomizationProvider theme={TestTheme} elements={elements} data-testid="test-wrapper">
        {children}
      </CustomizationProvider>
    );
  };

describe('Spinner', () => {
  describe('HTML Attribute', () => {
    it('should set an element data attribute for Spinner (default)', () => {
      render(<Spinner color="colorText" title="Default name customization" decorative={false} />, {
        wrapper: TestWrapper(),
      });

      const nodeNamedSpinner = screen.getByTestId('test-wrapper').firstChild as HTMLElement;

      expect(nodeNamedSpinner.getAttribute('data-paste-element')).toEqual('SPINNER');
    });

    it('should set an element data attribute for Spinner', () => {
      render(
        <Spinner element="CUSTOM_SPINNER_A" color="colorText" title="Unique name customization" decorative={false} />,
        {wrapper: TestWrapper()}
      );

      const nodeNamedSpinner = screen.getByTestId('test-wrapper').firstChild as HTMLElement;

      expect(nodeNamedSpinner.getAttribute('data-paste-element')).toEqual('CUSTOM_SPINNER_A');
    });
  });

  describe('Customization', () => {
    const TEST_ELEMENT_OVERRIDES = {
      SPINNER: {
        color: 'colorTextIconSuccess',
      },
      CUSTOM_SPINNER_A: {
        size: 'sizeIcon80',
        backgroundColor: 'colorBackgroundBrand',
        color: 'colorTextInverse',
        alignSelf: 'flex-start',
        padding: 'space20',
      },
      CUSTOM_SPINNER_B: {
        size: 'sizeIcon60',
        alignSelf: 'flex-end',
        color: 'colorTextNew',
      },
    };
    it('should add custom styles to Spinner for default variant', () => {
      render(
        <Spinner
          color="colorText"
          title="Example of a customized spinner with default element name"
          decorative={false}
        />,
        {
          wrapper: TestWrapper(TEST_ELEMENT_OVERRIDES),
        }
      );

      const nodeNamedSpinner = screen.getByTestId('test-wrapper').firstChild as HTMLElement;

      expect(nodeNamedSpinner).toHaveStyleRule('color', 'rgb(14,124,58)');
    });

    it('should add custom styles to Spinner with a custom element data attribute', () => {
      render(
        <Spinner
          element="CUSTOM_SPINNER_A"
          color="colorText"
          title="Example of a customized spinner with unique element name A"
          decorative={false}
        />,
        {
          wrapper: TestWrapper(TEST_ELEMENT_OVERRIDES),
        }
      );

      const nodeNamedSpinner = screen.getByTestId('test-wrapper').firstChild as HTMLElement;

      expect(nodeNamedSpinner).toHaveStyleRule('height', '2.5rem');
      expect(nodeNamedSpinner).toHaveStyleRule('width', '2.5rem');
      expect(nodeNamedSpinner).toHaveStyleRule('background-color', 'rgb(0,20,137)');
      expect(nodeNamedSpinner).toHaveStyleRule('color', 'rgb(255,255,255)');
      expect(nodeNamedSpinner).toHaveStyleRule('align-self', 'flex-start');
      expect(nodeNamedSpinner).toHaveStyleRule('padding', '0.25rem');
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<Spinner title="Loading" decorative />, {
        wrapper: ({children}) => <Theme.Provider theme="default">{children}</Theme.Provider>,
      });
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
