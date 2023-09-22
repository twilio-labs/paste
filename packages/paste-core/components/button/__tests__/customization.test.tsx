import * as React from 'react';
import { render } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { PasteCustomCSS } from '@twilio-paste/customization';

import { AnyButton } from '../stories/customization.stories';

const customButtonStyles = {
  backgroundColor: 'colorBackgroundBusy',
  borderRadius: 'borderRadius0',
  borderWidth: 'borderWidth40',
  borderColor: 'colorBorderError',
  fontWeight: 'fontWeightLight',
  variants: {
    destructive: { backgroundColor: 'colorBackgroundDestructiveStrongest', color: 'colorTextWeaker' },
    link: { padding: 'space40', borderRadius: 'borderRadiusCircle' },
    destructive_link: {
      padding: 'space40',
      borderRadius: 'borderRadiusCircle',
      backgroundColor: 'colorBackgroundDestructiveWeak',
      color: 'colorTextWarningStrong',
      fontWeight: 'fontWeightBold',
    },
  },
} as PasteCustomCSS;

describe('Button customization', () => {
  it('should set element data attribute on Button', () => {
    const { getByTestId } = render(<AnyButton variant="primary" />);
    const button = getByTestId('button_for_customization');
    expect(button.getAttribute('data-paste-element')).toEqual('BUTTON');
  });

  it('should set custom element data attribute on Button', () => {
    const { getByTestId } = render(<AnyButton variant="primary" element="foo" />);
    const button = getByTestId('button_for_customization');
    expect(button.getAttribute('data-paste-element')).toEqual('foo');
  });

  it('should add custom styles to Button', () => {
    const { getByTestId } = render(
      <CustomizationProvider theme={TestTheme} elements={{ BUTTON: customButtonStyles }}>
        <AnyButton variant="primary" />
      </CustomizationProvider>,
    );
    const button = getByTestId('button_for_customization');
    expect(button).toHaveStyleRule('background-color', 'rgb(244, 124, 34)');
    expect(button).toHaveStyleRule('border-color', 'rgb(214, 31, 31)');
    expect(button).toHaveStyleRule('font-weight', '400');
  });

  it('should add custom styles to Button variants', () => {
    const { getByTestId } = render(
      <CustomizationProvider theme={TestTheme} elements={{ BUTTON: customButtonStyles }}>
        <AnyButton variant="destructive_link" />
      </CustomizationProvider>,
    );
    const button = getByTestId('button_for_customization');
    expect(button).toHaveStyleRule('background-color', 'rgb(246, 177, 177)');
    expect(button).toHaveStyleRule('padding', '0.75rem');
    expect(button).toHaveStyleRule('font-weight', '700');
  });

  it('should add custom styles to Button with custom element prop', () => {
    const { getByTestId } = render(
      <CustomizationProvider theme={TestTheme} elements={{ bar: customButtonStyles }}>
        <AnyButton variant="secondary" element="bar" />
      </CustomizationProvider>,
    );
    const button = getByTestId('button_for_customization');
    expect(button).toHaveStyleRule('border-color', 'rgb(214, 31, 31)');
    expect(button).toHaveStyleRule('border-width', '8px');
    expect(button).toHaveStyleRule('border-radius', '0');
  });
});
