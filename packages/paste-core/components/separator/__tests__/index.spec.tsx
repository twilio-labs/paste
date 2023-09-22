import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Theme } from '@twilio-paste/theme';
import * as React from 'react';

import { Separator } from '../src';

describe('Separator', () => {
  describe('Render', () => {
    it('should render', () => {
      const { getByRole } = render(<Separator orientation="horizontal" />);
      expect(getByRole('separator')).not.toBeNull();
    });

    it('should render correctly when the value of orientation prop is horizontal', () => {
      const { getByRole } = render(<Separator orientation="horizontal" />);
      expect(getByRole('separator').getAttribute('aria-orientation')).toBe('horizontal');
    });

    it('should render correctly when the value of orientation prop is vertical', () => {
      const { getByRole } = render(<Separator orientation="vertical" />);
      expect(getByRole('separator').getAttribute('aria-orientation')).toBe('vertical');
    });

    it('should set horizontal margins', (): void => {
      render(
        <Theme.Provider theme="default">
          <Separator data-testid="separator" orientation="vertical" horizontalSpacing="space50" />
        </Theme.Provider>,
      );
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-right', '1rem');
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-left', '1rem');
    });

    it('should set vertical margins', (): void => {
      render(
        <Theme.Provider theme="default">
          <Separator data-testid="separator" orientation="horizontal" verticalSpacing="space100" />
        </Theme.Provider>,
      );
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-top', '2.25rem');
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-bottom', '2.25rem');
    });

    it('should set responsive horizontal margins', (): void => {
      render(
        <Theme.Provider theme="default">
          <Separator
            data-testid="separator"
            orientation="vertical"
            horizontalSpacing={['space20', 'space100', 'space190']}
          />
        </Theme.Provider>,
      );
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-right', '0.25rem');
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-right', '2.25rem', {
        media: 'screen and (min-width:40em)',
      });
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-right', '4.5rem', {
        media: 'screen and (min-width:52em)',
      });
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-left', '0.25rem');
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-left', '2.25rem', {
        media: 'screen and (min-width:40em)',
      });
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-left', '4.5rem', {
        media: 'screen and (min-width:52em)',
      });
    });

    it('should set responsive vertical margins', (): void => {
      render(
        <Theme.Provider theme="default">
          <Separator
            data-testid="separator"
            orientation="horizontal"
            verticalSpacing={['space20', 'space100', 'space190']}
          />
        </Theme.Provider>,
      );
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-top', '0.25rem');
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-top', '2.25rem', {
        media: 'screen and (min-width:40em)',
      });
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-top', '4.5rem', {
        media: 'screen and (min-width:52em)',
      });
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-bottom', '0.25rem');
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-bottom', '2.25rem', {
        media: 'screen and (min-width:40em)',
      });
      expect(screen.getByTestId('separator')).toHaveStyleRule('margin-bottom', '4.5rem', {
        media: 'screen and (min-width:52em)',
      });
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
          elements={{ SEPARATOR: { borderColor: 'colorBorderStrong', margin: 'space50' } }}
        >
          <Separator orientation="horizontal" data-testid="custom-separator" />
        </CustomizationProvider>,
      );
      const renderedSeparator = screen.getByTestId('custom-separator');
      expect(renderedSeparator).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
      expect(renderedSeparator).toHaveStyleRule('margin', '1rem');
    });

    it('should add custom styles to Separator with a custom element data attribute', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{ foo: { borderColor: 'colorBorderStrong', margin: 'space50' } }}
        >
          <Separator orientation="horizontal" data-testid="custom-separator" element="foo" />
        </CustomizationProvider>,
      );
      const renderedSeparator = screen.getByTestId('custom-separator');
      expect(renderedSeparator).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
      expect(renderedSeparator).toHaveStyleRule('margin', '1rem');
    });
  });
});
