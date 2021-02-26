import * as React from 'react';
import {render} from 'react-dom';
import {render as testRender} from '@testing-library/react';
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
