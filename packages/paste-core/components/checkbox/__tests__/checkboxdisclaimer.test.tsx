import * as React from 'react';
import {render} from 'react-dom';

import {render as testRender} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {CheckboxDisclaimer} from '../src';

const defaultProps = {
  id: 'foo',
  name: 'foo',
  value: 'foo',
};

describe('Checkbox Disclaimer', () => {
  it('should render', () => {
    const {getByRole} = testRender(<CheckboxDisclaimer {...defaultProps}>foo</CheckboxDisclaimer>);
    expect(getByRole('checkbox')).not.toBeNull();
  });

  it('should render a required dot', () => {
    const {getByText} = testRender(
      <CheckboxDisclaimer {...defaultProps} required>
        foo
      </CheckboxDisclaimer>
    );
    expect(getByText('Required:')).not.toBeNull();
  });

  it('renders a errorText message when errorText prop is present', () => {
    const errorText = 'This is the error text.';
    const {getByText} = testRender(
      <CheckboxDisclaimer {...defaultProps} errorText={errorText}>
        foo
      </CheckboxDisclaimer>
    );
    expect(getByText(errorText)).toBeDefined();
  });
});

describe('Customization', () => {
  it('Should set a default element data attribute Checkbox Disclaimer', () => {
    const {container} = testRender(
      <CheckboxDisclaimer {...defaultProps} errorText="error">
        foo
      </CheckboxDisclaimer>
    );
    expect(container.querySelector('[data-paste-element="CHECKBOX_DISCLAIMER"]')).toBeInTheDocument();
    expect(
      container.querySelector('[data-paste-element="CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER"]')
    ).toBeInTheDocument();
  });

  it('Should set a custom element data attribute for a custom named Checkbox Disclaimer', () => {
    const {container} = testRender(
      <CheckboxDisclaimer element="MY_CHECKBOX_DISCLAIMER" {...defaultProps} errorText="error">
        foo
      </CheckboxDisclaimer>
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_DISCLAIMER"]')).toBeInTheDocument();
    expect(
      container.querySelector('[data-paste-element="MY_CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER"]')
    ).toBeInTheDocument();
  });

  it('Should add custom styling to a default Checkbox Disclaimer', () => {
    const {container} = testRender(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          CHECKBOX_DISCLAIMER: {backgroundColor: 'colorBackgroundDestructiveWeakest'},
          CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER: {marginTop: 'space60'},
        }}
      >
        <CheckboxDisclaimer {...defaultProps} errorText="error">
          foo
        </CheckboxDisclaimer>
      </CustomizationProvider>
    );
    expect(container.querySelector('[data-paste-element="CHECKBOX_DISCLAIMER"]')).toHaveStyleRule(
      'background-color',
      'rgb(254,236,236)'
    );
    expect(container.querySelector('[data-paste-element="CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-top',
      '1.25rem'
    );
  });

  it('Should add custom styling to a custom named Checkbox Disclaimer', () => {
    const {container} = testRender(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          MY_CHECKBOX_DISCLAIMER: {backgroundColor: 'colorBackgroundDestructiveWeakest'},
          MY_CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER: {marginTop: 'space60'},
        }}
      >
        <CheckboxDisclaimer element="MY_CHECKBOX_DISCLAIMER" {...defaultProps} errorText="error">
          foo
        </CheckboxDisclaimer>
      </CustomizationProvider>
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_DISCLAIMER"]')).toHaveStyleRule(
      'background-color',
      'rgb(254,236,236)'
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-top',
      '1.25rem'
    );
  });
});

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const container = document.createElement('div');
    const errorText = 'This is the error text.';
    document.body.append(container);
    render(
      <CheckboxDisclaimer {...defaultProps} errorText={errorText}>
        foo
      </CheckboxDisclaimer>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
