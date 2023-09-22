import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Customized } from '../stories/label.stories';
import { Label, RequiredDot } from '../src';

describe('Label for prop', () => {
  const initialProps = {
    htmlFor: 'input',
  };

  it('should have a for prop on label', () => {
    render(
      <Label data-testid="test-label" {...initialProps}>
        Label
      </Label>,
    );
    expect(screen.getByTestId('test-label').getAttribute('for')).toEqual('input');
  });
});

describe('Label required prop', () => {
  const initialProps = {
    htmlFor: 'input',
    required: true,
  };

  it('should have a required indicator', () => {
    render(
      <Label data-testid="test-label" {...initialProps}>
        label
      </Label>,
    );
    const label = screen.getByTestId('test-label');
    const requiredDot = label.querySelector('[data-paste-element="REQUIRED_DOT"]');

    expect(requiredDot).toBeDefined();
  });
});

describe('Customization', () => {
  const { getByTestId } = render(<Customized />);
  const label = getByTestId('label_test');
  const customLabel = getByTestId('custom_label_test');
  const requiredDotWrapper = getByTestId('required_dot');
  const requiredDot = requiredDotWrapper.firstChild as HTMLElement;
  const customRequiredDotWrapper = getByTestId('custom_required_dot');
  const customRequiredDot = customRequiredDotWrapper.firstChild as HTMLElement;

  it('should set element data attribute for label and required dot', () => {
    expect(label.getAttribute('data-paste-element')).toEqual('LABEL');
    expect(requiredDotWrapper.getAttribute('data-paste-element')).toEqual('REQUIRED_DOT_WRAPPER');
    expect(requiredDot.getAttribute('data-paste-element')).toEqual('REQUIRED_DOT');
  });

  it('should set custom element data attribute for label and required dot', () => {
    expect(customLabel.getAttribute('data-paste-element')).toEqual('FOO');
    expect(customRequiredDotWrapper.getAttribute('data-paste-element')).toEqual('BAR_WRAPPER');
    expect(customRequiredDot.getAttribute('data-paste-element')).toEqual('BAR');
  });

  it('should customize label and required dot', () => {
    expect(label).toHaveStyleRule('color', 'rgb(141, 49, 24)');
    expect(label).toHaveStyleRule('font-weight', '400');
    expect(requiredDot).toHaveStyleRule('background-color', 'rgb(117, 12, 12)');
    expect(requiredDotWrapper).toHaveStyleRule('cursor', 'help');
  });

  it('should customize label and required dot with custom element attribute', () => {
    expect(customLabel).toHaveStyleRule('color', 'rgb(141, 49, 24)');
    expect(customLabel).toHaveStyleRule('font-weight', '400');
    expect(customRequiredDot).toHaveStyleRule('background-color', 'rgb(117, 12, 12)');
    expect(customRequiredDotWrapper).toHaveStyleRule('cursor', 'help');
  });
});

describe('RequiredDot', () => {
  it('should have text "Required" by default', () => {
    render(<RequiredDot data-testid="test-dot" />);
    const dot = screen.getByTestId('test-dot');
    expect(dot?.textContent).toEqual('Required');
  });

  it('should use i18nLabel prop for the dot text', () => {
    render(<RequiredDot data-testid="test-dot" i18nLabel="(required)" />);
    const dot = screen.getByTestId('test-dot');
    expect(dot?.textContent).toEqual('(required)');
  });
});
