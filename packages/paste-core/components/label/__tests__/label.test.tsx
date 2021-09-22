import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {matchers} from 'jest-emotion';
import {Customized} from '../stories/label.stories';
import {Label} from '../src';

expect.extend(matchers);

describe('Label for prop', () => {
  const initialProps = {
    htmlFor: 'input',
  };

  it('should have a for prop on label', () => {
    render(
      <Label data-testid="test-label" {...initialProps}>
        Label
      </Label>
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
    render(<Label {...initialProps}>label</Label>);
    expect(screen.getByText('Required:')).not.toBeNull();
  });
});

describe('Customization', () => {
  const {getByTestId} = render(<Customized />);
  const label = getByTestId('label_test');
  const customLabel = getByTestId('custom_label_test');
  const requiredDotWrapper = getByTestId('required_dot');
  const requiredDot = requiredDotWrapper.firstChild as HTMLElement;

  it('should set element data attribute for label and required dot', () => {
    expect(label.getAttribute('data-paste-element')).toEqual('LABEL');
    expect(requiredDotWrapper.getAttribute('data-paste-element')).toEqual('REQUIRED_DOT_WRAPPER');
    expect(requiredDot.getAttribute('data-paste-element')).toEqual('REQUIRED_DOT');
  });

  it('should set custom element data attribute for label and required dot', () => {
    expect(customLabel.getAttribute('data-paste-element')).toEqual('foo');
    // expect(container.querySelector('[data-paste-element="foo_REQUIRED_DOT"]')).toBeInTheDocument();
  });

  it('should customize label and required dot', () => {
    expect(label).toHaveStyleRule('color', 'rgb(195,83,35)');
    expect(label).toHaveStyleRule('font-weight', '400');
    // expect(container.querySelectorAll('[data-paste-element="LABEL_REQUIRED_DOT"]')).toHaveStyleRule(
    //   'background-color',
    //   'rgb(0,0,0)'
    // );
  });

  it('should customize label and required dot with custom element attribute', () => {
    expect(customLabel).toHaveStyleRule('color', 'rgb(195,83,35)');
    expect(customLabel).toHaveStyleRule('font-weight', '400');
    // expect(container.querySelectorAll('[data-paste-element="foo_REQUIRED_DOT"]')).toHaveStyleRule(
    //   'background-color',
    //   'rgb(0,0,0)'
    // );
  });
});
