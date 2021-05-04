import * as React from 'react';
import {render} from 'react-dom';
import {matchers} from 'jest-emotion';
import {render as testRender, fireEvent} from '@testing-library/react';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {TextArea} from '../src';

expect.extend(matchers);

const NOOP = (): void => {};

const initialProps = {
  id: 'textarea',
  name: 'textarea',
  onChange: NOOP,
  placeholder: 'placeholder',
};

describe('TextArea render', () => {
  it('should render', () => {
    const {getByRole} = testRender(<TextArea {...initialProps} />);
    expect(getByRole('textbox')).not.toBeNull();
  });

  it('should render as readOnly', () => {
    const {getByRole} = testRender(<TextArea {...initialProps} readOnly />);
    expect(getByRole('textbox').getAttribute('aria-readOnly')).toBeTruthy();
  });

  it('should render as invalid', () => {
    const {getByRole} = testRender(<TextArea {...initialProps} hasError />);
    expect(getByRole('textbox').getAttribute('aria-invalid')).toBeTruthy();
  });

  it('should render as disabled', () => {
    const {getByRole} = testRender(<TextArea {...initialProps} disabled />);
    expect(getByRole('textbox').getAttribute('disabled')).toEqual('');
    expect(getByRole('textbox')).toHaveStyleRule('-webkit-text-fill-color', 'colorTextWeaker', {target: ':disabled'});
  });

  it('should render an id', () => {
    const {getByRole} = testRender(<TextArea {...initialProps} />);
    expect(getByRole('textbox').id).toBe('textarea');
  });

  it('should render a name', () => {
    const {getByRole} = testRender(<TextArea {...initialProps} />);
    expect(getByRole('textbox').getAttribute('name')).toBe('textarea');
  });

  it('should render a placeholder', () => {
    const {getByRole} = testRender(<TextArea {...initialProps} />);
    expect(getByRole('textbox').getAttribute('placeholder')).toBe('placeholder');
  });

  it('should render a prefix', () => {
    const {getByText} = testRender(<TextArea {...initialProps} insertBefore={<div>$10.99</div>} />);
    expect(getByText('$10.99')).toBeDefined();
  });

  it('should render a suffix', () => {
    const {getByText} = testRender(<TextArea {...initialProps} insertAfter={<div>$10.99</div>} />);
    expect(getByText('$10.99')).toBeDefined();
  });
});

describe('TextArea event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const {getByTestId} = testRender(
      <TextArea
        data-testid="textarea"
        id="textarea"
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      />
    );

    fireEvent.focus(getByTestId('textarea'));
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    fireEvent.blur(getByTestId('textarea'));
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });
});

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(
      <>
        <Label htmlFor="foo">Foo</Label>
        <TextArea id="foo" onChange={NOOP} />
      </>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('disabled has no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(
      <>
        <Label htmlFor="foo-disabled" disabled>
          Foo
        </Label>
        <TextArea id="foo-disabled" onChange={NOOP} disabled />
      </>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('hasError has no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(
      <>
        <Label htmlFor="foo-error">Foo</Label>
        <TextArea id="foo-error" onChange={NOOP} hasError />
        <HelpText variant="error">Error info. Explains why the input has an error.</HelpText>
      </>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
