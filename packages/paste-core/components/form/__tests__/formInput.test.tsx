import * as React from 'react';
import {render} from '@testing-library/react';
import {axe} from 'jest-axe';
import {Theme} from '@twilio-paste/theme';
import {FormHelpText, FormInput, FormLabel} from '../src';
import {FormInputTypes} from '../src/shared/types';

const NOOP = (): void => {};

describe('FormInput render', () => {
  it('it should render', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <FormInput id="input" type="text" value="test" onChange={NOOP} />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('it should render with readOnly', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <FormInput id="input" type="text" value="test" onChange={NOOP} readOnly />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('it should render with disabled', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <FormInput id="input" type="text" value="test" onChange={NOOP} disabled />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('it should render with hasError', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <FormInput id="input" type="text" value="test" onChange={NOOP} hasError />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('it should render with prefix', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <FormInput id="input" type="text" value="test" onChange={NOOP} insertBefore={<div>prefix</div>} />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('it should render with suffix', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <FormInput id="input" type="text" value="test" onChange={NOOP} insertAfter={<div>suffix</div>} />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('it has no accessibility violations', async () => {
    const {container} = render(
      <Theme.Provider theme="console">
        <FormLabel htmlFor="input_1">Label Text</FormLabel>
        <FormInput id="input_1" type="text" value="test" onChange={NOOP} />
      </Theme.Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('disabled has no accessibility violations', async () => {
    const {container} = render(
      <Theme.Provider theme="console">
        <FormLabel htmlFor="input_2" disabled>
          Label Text
        </FormLabel>
        <FormInput id="input_2" type="text" value="test" onChange={NOOP} disabled />
      </Theme.Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('hasError has no accessibility violations', async () => {
    const {container} = render(
      <Theme.Provider theme="console">
        <FormLabel htmlFor="input_3">Label Text</FormLabel>
        <FormInput id="input_3" type="text" value="test" onChange={NOOP} hasError />
        <FormHelpText variant="error">Error info. Explains why the input has an error.</FormHelpText>
      </Theme.Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('FormInput inner input props', () => {
  const initialProps = {
    id: 'input',
    name: 'cool',
    type: 'password' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
    disabled: true,
    readOnly: true,
    hasError: true,
    placeholder: 'Enter your name',
  };

  const {getByPlaceholderText} = render(<FormInput {...initialProps} />);
  const InnerInput = getByPlaceholderText(initialProps.placeholder);
  expect(InnerInput).toBeDefined();

  it('should set disabled correctly', () => {
    expect(InnerInput.getAttribute('disabled')).toEqual('');
  });

  it('should set readOnly correctly', () => {
    expect(InnerInput.getAttribute('aria-readonly')).toEqual('true');
    expect(InnerInput.getAttribute('readOnly')).toEqual('');
  });

  it('should set hasError correctly', () => {
    expect(InnerInput.getAttribute('aria-invalid')).toEqual('true');
  });

  it('should set id correctly', () => {
    expect(InnerInput.getAttribute('id')).toEqual(initialProps.id);
  });

  it('should set type correctly', () => {
    expect(InnerInput.getAttribute('type')).toEqual(initialProps.type);
  });

  it('should set value correctly', () => {
    expect(InnerInput.getAttribute('value')).toEqual(initialProps.value);
  });

  it('should set name correctly', () => {
    expect(InnerInput.getAttribute('name')).toEqual(initialProps.name);
  });

  it('should set placeholder correctly', () => {
    expect(InnerInput.getAttribute('placeholder')).toEqual(initialProps.placeholder);
  });
});

describe('FormInput insertBefore prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
    placeholder: 'placeholder',
  };

  it('should render a prefix', () => {
    const {getByText} = render(<FormInput {...initialProps} insertBefore={<div>$10.99</div>} />);
    expect(getByText('$10.99')).toBeDefined();
  });

  it('should render a suffix', () => {
    const {getByText} = render(<FormInput {...initialProps} insertAfter={<div>$11.99</div>} />);
    expect(getByText('$11.99')).toBeDefined();
  });
});

describe('FormInput event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const {getByRole} = render(
      <FormInput
        id="input"
        type="text"
        value="test"
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      />
    );
    const Input = getByRole('textbox');

    Input.focus();
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    Input.blur();
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });
});

describe('FormInput block props', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
    className: 'foo',
    width: '300px',
  };

  it('should not pass width and classname props', () => {
    // @ts-ignore this is on purpose
    const {getByRole} = render(<FormInput {...initialProps} />);
    const Input = getByRole('textbox');

    const classNames = Input.getAttribute('class');
    expect(classNames).toBeDefined();
    expect(classNames.indexOf(initialProps.className)).toBe(-1);
  });
});
