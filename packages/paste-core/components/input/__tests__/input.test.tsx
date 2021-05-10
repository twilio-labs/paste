import * as React from 'react';
import {matchers} from 'jest-emotion';
import {render} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Input} from '../src';
import type {InputTypes} from '../src';

expect.extend(matchers);

const NOOP = (): void => {};

describe('Input render', () => {
  it('should render', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <Input id="input" type="text" value="test" onChange={NOOP} />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with readOnly', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <Input id="input" type="text" value="test" onChange={NOOP} readOnly />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with disabled', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <Input id="input" type="text" value="test" onChange={NOOP} disabled />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with hasError', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <Input id="input" type="text" value="test" onChange={NOOP} hasError />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with prefix', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <Input id="input" type="text" value="test" onChange={NOOP} insertBefore={<div>prefix</div>} />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with suffix', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <Input id="input" type="text" value="test" onChange={NOOP} insertAfter={<div>suffix</div>} />
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has no accessibility violations', async () => {
    const {container} = render(
      <Theme.Provider theme="console">
        <Label htmlFor="input_1">Label Text</Label>
        <Input id="input_1" type="text" value="test" onChange={NOOP} />
      </Theme.Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('disabled has no accessibility violations', async () => {
    const {container} = render(
      <Theme.Provider theme="console">
        <Label htmlFor="input_2" disabled>
          Label Text
        </Label>
        <Input id="input_2" type="text" value="test" onChange={NOOP} disabled />
      </Theme.Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('hasError has no accessibility violations', async () => {
    const {container} = render(
      <Theme.Provider theme="console">
        <Label htmlFor="input_3">Label Text</Label>
        <Input id="input_3" type="text" value="test" onChange={NOOP} hasError />
        <HelpText variant="error">Error info. Explains why the input has an error.</HelpText>
      </Theme.Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Input inner input props', () => {
  const initialProps = {
    id: 'input',
    name: 'cool',
    type: 'password' as InputTypes,
    value: 'value',
    onChange: NOOP,
    disabled: true,
    readOnly: true,
    hasError: true,
    placeholder: 'Enter your name',
  };

  const {getByPlaceholderText} = render(<Input {...initialProps} />);
  const InnerInput = getByPlaceholderText(initialProps.placeholder);

  it('should render', () => {
    expect(InnerInput).toBeDefined();
  });

  it('should set disabled correctly', () => {
    expect(InnerInput.getAttribute('disabled')).toEqual('');
    expect(InnerInput).toHaveStyleRule('-webkit-text-fill-color', 'colorTextWeaker', {target: ':disabled'});
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

  it('should render with margin: space0', () => {
    expect(InnerInput).toHaveStyleRule('margin', 'space0');
  });
});

describe('Input insertBefore prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as InputTypes,
    value: 'value',
    onChange: NOOP,
    placeholder: 'placeholder',
  };

  it('should render a prefix', () => {
    const {getByText} = render(<Input {...initialProps} insertBefore={<div>$10.99</div>} />);
    expect(getByText('$10.99')).toBeDefined();
  });

  it('should render a suffix', () => {
    const {getByText} = render(<Input {...initialProps} insertAfter={<div>$11.99</div>} />);
    expect(getByText('$11.99')).toBeDefined();
  });
});

describe('Input event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const {getByRole} = render(
      <Input id="input" type="text" value="test" onChange={onChangeMock} onFocus={onFocusMock} onBlur={onBlurMock} />
    );
    const RenderedInput = getByRole('textbox');

    RenderedInput.focus();
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    RenderedInput.blur();
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });
});

describe('Input block props', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as InputTypes,
    value: 'value',
    onChange: NOOP,
    className: 'foo',
    width: '300px',
  };

  it('should not pass width and classname props', () => {
    // @ts-ignore this is on purpose
    const {getByRole} = render(<Input {...initialProps} />);
    const RenderedInput = getByRole('textbox');

    expect(RenderedInput.getAttribute('width')).toEqual(null);

    const classNames = RenderedInput.getAttribute('class');
    expect(classNames).toBeDefined();
    if (classNames != null) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(classNames.indexOf(initialProps.className)).toBe(-1);
    }
  });
});
