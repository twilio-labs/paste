import * as React from 'react';
import {render} from 'react-dom';
import {render as testRender, fireEvent} from '@testing-library/react';
import {axe} from 'jest-axe';
import {FormHelpText, FormLabel, FormTextArea} from '../src';

const NOOP = (): void => {};

const initialProps = {
  id: 'textarea',
  name: 'textarea',
  onChange: NOOP,
  placeholder: 'placeholder',
};

describe('FormTextArea render', () => {
  it('should render', () => {
    const {getByRole} = testRender(<FormTextArea {...initialProps} />);
    expect(getByRole('textbox')).not.toBeNull();
  });

  it('should render as readOnly', () => {
    const {getByRole} = testRender(<FormTextArea {...initialProps} readOnly />);
    expect(getByRole('textbox').getAttribute('aria-readOnly')).toBeTruthy();
  });

  it('should render as invalid', () => {
    const {getByRole} = testRender(<FormTextArea {...initialProps} hasError />);
    expect(getByRole('textbox').getAttribute('aria-invalid')).toBeTruthy();
  });

  it('should render as disabled', () => {
    const {getByRole} = testRender(<FormTextArea {...initialProps} disabled />);
    expect(getByRole('textbox').getAttribute('disabled')).toEqual('');
  });

  it('should render an id', () => {
    const {getByRole} = testRender(<FormTextArea {...initialProps} />);
    expect(getByRole('textbox').id).toBe('textarea');
  });

  it('should render a name', () => {
    const {getByRole} = testRender(<FormTextArea {...initialProps} />);
    expect(getByRole('textbox').getAttribute('name')).toBe('textarea');
  });

  it('should render a placeholder', () => {
    const {getByRole} = testRender(<FormTextArea {...initialProps} />);
    expect(getByRole('textbox').getAttribute('placeholder')).toBe('placeholder');
  });

  it('should render a prefix', () => {
    const {getByText} = testRender(<FormTextArea {...initialProps} insertBefore={<div>$10.99</div>} />);
    expect(getByText('$10.99')).toBeDefined();
  });

  it('should render a suffix', () => {
    const {getByText} = testRender(<FormTextArea {...initialProps} insertAfter={<div>$10.99</div>} />);
    expect(getByText('$10.99')).toBeDefined();
  });
});

describe('FormTextArea event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const {getByTestId} = testRender(
      <FormTextArea
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
        <FormLabel htmlFor="foo">Foo</FormLabel>
        <FormTextArea id="foo" onChange={NOOP} />
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
        <FormLabel htmlFor="foo-disabled" disabled>
          Foo
        </FormLabel>
        <FormTextArea id="foo-disabled" onChange={NOOP} disabled />
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
        <FormLabel htmlFor="foo-error">Foo</FormLabel>
        <FormTextArea id="foo-error" onChange={NOOP} hasError />
        <FormHelpText variant="error">Error info. Explains why the input has an error.</FormHelpText>
      </>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
