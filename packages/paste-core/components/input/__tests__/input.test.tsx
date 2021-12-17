import * as React from 'react';

import {render, screen} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Input} from '../src';
import type {InputTypes} from '../src';

const NOOP = (): void => {};

describe('Input render', () => {
  it('has no accessibility violations', async () => {
    const {container} = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Label htmlFor="input_1">Label Text</Label>
        <Input id="input_1" type="text" value="test" onChange={NOOP} />
        <HelpText>Help text.</HelpText>
      </CustomizationProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('disabled has no accessibility violations', async () => {
    const {container} = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Label htmlFor="input_2" disabled>
          Label Text
        </Label>
        <Input id="input_2" type="text" value="test" onChange={NOOP} disabled />
        <HelpText>Help text.</HelpText>
      </CustomizationProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('hasError has no accessibility violations', async () => {
    const {container} = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Label htmlFor="input_3">Label Text</Label>
        <Input id="input_3" type="text" value="test" onChange={NOOP} hasError />
        <HelpText variant="error">Error info. Explains why the input has an error.</HelpText>
      </CustomizationProvider>
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

    expect(RenderedInput.getAttribute('width')).toEqual('100%');

    const classNames = RenderedInput.getAttribute('class');
    expect(classNames).toBeDefined();
    if (classNames != null) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(classNames.indexOf(initialProps.className)).toBe(-1);
    }
  });
});

describe('HTML attributes', () => {
  it('should set a element data attribute for Input', () => {
    render(<Input id="input" type="text" value="test" onChange={NOOP} />);
    expect(screen.getByRole('textbox').getAttribute('data-paste-element')).toEqual('INPUT_ELEMENT');
  });

  it('should set a custom element data attribute for Input', () => {
    render(<Input id="input" type="text" value="test" onChange={NOOP} element="foo" />);
    expect(screen.getByRole('textbox').getAttribute('data-paste-element')).toEqual('foo_ELEMENT');
  });

  it('should set the data attribute for all Input nodes', (): void => {
    const {container} = render(
      <Input
        id="input"
        type="text"
        value="test"
        onChange={NOOP}
        insertBefore={<>test before</>}
        insertAfter={<>test after</>}
      />
    );
    expect(container.querySelector('[data-paste-element="INPUT"]')).toBeInTheDocument();
    expect(screen.getByRole('textbox').getAttribute('data-paste-element')).toEqual('INPUT_ELEMENT');
    expect(screen.getByText('test before').getAttribute('data-paste-element')).toEqual('INPUT_PREFIX');
    expect(screen.getByText('test after').getAttribute('data-paste-element')).toEqual('INPUT_SUFFIX');
  });

  it('should set the custom element data attribute for all Input nodes', (): void => {
    const {container} = render(
      <Input
        id="input"
        type="text"
        value="test"
        onChange={NOOP}
        element="foo"
        insertBefore={<>test before</>}
        insertAfter={<>test after</>}
      />
    );
    expect(container.querySelector('[data-paste-element="foo"]')).toBeInTheDocument();
    expect(screen.getByRole('textbox').getAttribute('data-paste-element')).toEqual('foo_ELEMENT');
    expect(screen.getByText('test before').getAttribute('data-paste-element')).toEqual('foo_PREFIX');
    expect(screen.getByText('test after').getAttribute('data-paste-element')).toEqual('foo_SUFFIX');
  });
});

describe('Customization', () => {
  it('should add custom styles to Input', (): void => {
    const {container} = render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          INPUT: {backgroundColor: 'colorBackground'},
          INPUT_ELEMENT: {backgroundColor: 'colorBackground'},
          INPUT_PREFIX: {backgroundColor: 'colorBackground'},
          INPUT_SUFFIX: {backgroundColor: 'colorBackground'},
        }}
      >
        <Input
          id="input"
          type="text"
          value="test"
          onChange={NOOP}
          insertBefore={<>test before</>}
          insertAfter={<>test after</>}
        />
      </CustomizationProvider>
    );
    const renderedInput = container.querySelector('[data-paste-element="INPUT"]');
    const renderedInputElement = screen.getByRole('textbox');
    const renderedInputPrefix = screen.getByText('test before');
    const renderedInputSuffix = screen.getByText('test after');
    expect(renderedInput).toHaveStyleRule('background-color', 'rgb(244,244,246)');
    expect(renderedInputElement).toHaveStyleRule('background-color', 'rgb(244,244,246)');
    expect(renderedInputPrefix).toHaveStyleRule('background-color', 'rgb(244,244,246)');
    expect(renderedInputSuffix).toHaveStyleRule('background-color', 'rgb(244,244,246)');
  });

  it('should add custom styles to a Input variant', (): void => {
    const {container} = render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          INPUT: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
          INPUT_ELEMENT: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
          INPUT_PREFIX: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
          INPUT_SUFFIX: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
        }}
      >
        <Input
          id="input"
          type="text"
          value="test"
          onChange={NOOP}
          variant="inverse"
          insertBefore={<>test before</>}
          insertAfter={<>test after</>}
        />
      </CustomizationProvider>
    );
    const renderedInput = container.querySelector('[data-paste-element="INPUT"]');
    const renderedInputElement = screen.getByRole('textbox');
    const renderedInputPrefix = screen.getByText('test before');
    const renderedInputSuffix = screen.getByText('test after');
    expect(renderedInput).toHaveStyleRule('background-color', 'rgb(0,20,137)');
    expect(renderedInputElement).toHaveStyleRule('background-color', 'rgb(0,20,137)');
    expect(renderedInputPrefix).toHaveStyleRule('background-color', 'rgb(0,20,137)');
    expect(renderedInputSuffix).toHaveStyleRule('background-color', 'rgb(0,20,137)');
  });

  it('should add custom styles to Input with a custom element data attribute', (): void => {
    const {container} = render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          foo: {backgroundColor: 'colorBackground'},
          foo_ELEMENT: {backgroundColor: 'colorBackground'},
          foo_PREFIX: {backgroundColor: 'colorBackground'},
          foo_SUFFIX: {backgroundColor: 'colorBackground'},
        }}
      >
        <Input
          id="input"
          type="text"
          value="test"
          onChange={NOOP}
          element="foo"
          insertBefore={<>test before</>}
          insertAfter={<>test after</>}
        />
      </CustomizationProvider>
    );
    const renderedInput = container.querySelector('[data-paste-element="foo"]');
    const renderedInputElement = screen.getByRole('textbox');
    const renderedInputPrefix = screen.getByText('test before');
    const renderedInputSuffix = screen.getByText('test after');
    expect(renderedInput).toHaveStyleRule('background-color', 'rgb(244,244,246)');
    expect(renderedInputElement).toHaveStyleRule('background-color', 'rgb(244,244,246)');
    expect(renderedInputPrefix).toHaveStyleRule('background-color', 'rgb(244,244,246)');
    expect(renderedInputSuffix).toHaveStyleRule('background-color', 'rgb(244,244,246)');
  });

  it('should add custom styles to a Input variant with a custom element data attribute', (): void => {
    const {container} = render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          foo: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
          foo_ELEMENT: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
          foo_PREFIX: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
          foo_SUFFIX: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
        }}
      >
        <Input
          id="input"
          type="text"
          value="test"
          onChange={NOOP}
          variant="inverse"
          element="foo"
          insertBefore={<>test before</>}
          insertAfter={<>test after</>}
        />
      </CustomizationProvider>
    );
    const renderedInput = container.querySelector('[data-paste-element="foo"]');
    const renderedInputElement = screen.getByRole('textbox');
    const renderedInputPrefix = screen.getByText('test before');
    const renderedInputSuffix = screen.getByText('test after');
    expect(renderedInput).toHaveStyleRule('background-color', 'rgb(0,20,137)');
    expect(renderedInputElement).toHaveStyleRule('background-color', 'rgb(0,20,137)');
    expect(renderedInputPrefix).toHaveStyleRule('background-color', 'rgb(0,20,137)');
    expect(renderedInputSuffix).toHaveStyleRule('background-color', 'rgb(0,20,137)');
  });
});
