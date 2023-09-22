import { render } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { CheckboxDisclaimer } from '../src';

const defaultProps = {
  id: 'foo',
  name: 'foo',
  value: 'foo',
};

describe('Checkbox Disclaimer', () => {
  it('should render', () => {
    const { getByRole } = render(<CheckboxDisclaimer {...defaultProps}>foo</CheckboxDisclaimer>);
    expect(getByRole('checkbox')).not.toBeNull();
  });

  it('should render a required dot', () => {
    const { getByText } = render(
      <CheckboxDisclaimer {...defaultProps} required>
        foo
      </CheckboxDisclaimer>,
    );

    const label = getByText('foo');
    const requiredDot = label.querySelector('[data-paste-element="REQUIRED_DOT"]');

    expect(requiredDot).toBeDefined();
  });

  it('renders a errorText message when errorText prop is present', () => {
    const errorText = 'This is the error text.';
    const { getByText } = render(
      <CheckboxDisclaimer {...defaultProps} errorText={errorText}>
        foo
      </CheckboxDisclaimer>,
    );
    expect(getByText(errorText)).toBeDefined();
  });
});

describe('Customization', () => {
  it('Should set a default element data attribute Checkbox Disclaimer', () => {
    const { container } = render(
      <CheckboxDisclaimer {...defaultProps} errorText="error">
        foo
      </CheckboxDisclaimer>,
    );
    expect(container.querySelector('[data-paste-element="CHECKBOX_DISCLAIMER"]')).toBeInTheDocument();
    expect(
      container.querySelector('[data-paste-element="CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER"]'),
    ).toBeInTheDocument();
  });

  it('Should set a custom element data attribute for a custom named Checkbox Disclaimer', () => {
    const { container } = render(
      <CheckboxDisclaimer element="MY_CHECKBOX_DISCLAIMER" {...defaultProps} errorText="error">
        foo
      </CheckboxDisclaimer>,
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_DISCLAIMER"]')).toBeInTheDocument();
    expect(
      container.querySelector('[data-paste-element="MY_CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER"]'),
    ).toBeInTheDocument();
  });

  it('Should add custom styling to a default Checkbox Disclaimer', () => {
    const { container } = render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          CHECKBOX_DISCLAIMER: { backgroundColor: 'colorBackgroundDestructiveWeakest' },
          CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER: { marginTop: 'space60' },
        }}
      >
        <CheckboxDisclaimer {...defaultProps} errorText="error">
          foo
        </CheckboxDisclaimer>
      </CustomizationProvider>,
    );
    expect(container.querySelector('[data-paste-element="CHECKBOX_DISCLAIMER"]')).toHaveStyleRule(
      'background-color',
      'rgb(254, 236, 236)',
    );
    expect(container.querySelector('[data-paste-element="CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-top',
      '1.25rem',
    );
  });

  it('Should add custom styling to a custom named Checkbox Disclaimer', () => {
    const { container } = render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          MY_CHECKBOX_DISCLAIMER: { backgroundColor: 'colorBackgroundDestructiveWeakest' },
          MY_CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER: { marginTop: 'space60' },
        }}
      >
        <CheckboxDisclaimer element="MY_CHECKBOX_DISCLAIMER" {...defaultProps} errorText="error">
          foo
        </CheckboxDisclaimer>
      </CustomizationProvider>,
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_DISCLAIMER"]')).toHaveStyleRule(
      'background-color',
      'rgb(254, 236, 236)',
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-top',
      '1.25rem',
    );
  });
});
