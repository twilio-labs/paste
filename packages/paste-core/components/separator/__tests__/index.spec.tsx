import * as React from 'react';

import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Separator} from '../src';

describe('Separator', () => {
  describe('Render', () => {
    it('should render', () => {
      const {getByRole} = render(<Separator orientation="horizontal" />);
      expect(getByRole('separator')).not.toBeNull();
    });

    it('should render correctly when the value of orientation prop is horizontal', () => {
      const {getByRole} = render(<Separator orientation="horizontal" />);
      expect(getByRole('separator').getAttribute('aria-orientation')).toBe('horizontal');
    });

    it('should render correctly when the value of orientation prop is vertical', () => {
      const {getByRole} = render(<Separator orientation="vertical" />);
      expect(getByRole('separator').getAttribute('aria-orientation')).toBe('vertical');
    });

    it('should set horizontal margins', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Separator orientation="horizontal" horizontalSpacing="space50" />
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should set vertical margins', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Separator orientation="vertical" verticalSpacing="space100" />
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should set responsive horizontal margins', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Separator orientation="horizontal" horizontalSpacing={['space20', 'space100', 'space190']} />
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should set responsive vertical margins', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Separator orientation="vertical" verticalSpacing={['space20', 'space100', 'space190']} />
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('HTML Attributes', () => {
    it('should set an element data attribute on Separator', (): void => {
      render(<Separator orientation="horizontal" data-testid="custom-separator" />);
      expect(screen.getByTestId('custom-separator').getAttribute('data-paste-element')).toEqual('SEPARATOR');
    });
    it('should set a custom element data attribute on Separator', (): void => {
      render(<Separator orientation="horizontal" data-testid="custom-separator" element="foo" />);
      expect(screen.getByTestId('custom-separator').getAttribute('data-paste-element')).toEqual('foo');
    });
  });

  describe('Customization', () => {
    it('should add custom styles to Separator', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{SEPARATOR: {borderColor: 'colorBorderStrong', margin: 'space50'}}}
        >
          <Separator orientation="horizontal" data-testid="custom-separator" />
        </CustomizationProvider>
      );
      const renderedSeparator = screen.getByTestId('custom-separator');
      expect(renderedSeparator).toHaveStyleRule('border-color', 'rgb(96,107,133)');
      expect(renderedSeparator).toHaveStyleRule('margin', '1rem');
    });

    it('should add custom styles to Separator with a custom element data attribute', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{foo: {borderColor: 'colorBorderStrong', margin: 'space50'}}}
        >
          <Separator orientation="horizontal" data-testid="custom-separator" element="foo" />
        </CustomizationProvider>
      );
      const renderedSeparator = screen.getByTestId('custom-separator');
      expect(renderedSeparator).toHaveStyleRule('border-color', 'rgb(96,107,133)');
      expect(renderedSeparator).toHaveStyleRule('margin', '1rem');
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <>
          <Separator orientation="horizontal" />
          <Separator orientation="vertical" />
        </>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
