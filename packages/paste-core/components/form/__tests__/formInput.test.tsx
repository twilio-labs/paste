import * as React from 'react';
import {render} from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow, ReactWrapper, mount} from 'enzyme';
import {axe} from 'jest-axe';
import {Theme} from '@twilio-paste/theme';
import {FormHelpText, FormInput, FormLabel} from '../src';
import {FormInputTypes} from '../src/shared/types';

const NOOP = (): void => {};

describe('FormInput render', () => {
  it('it should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormInput id="input" type="text" value="test" onChange={NOOP} />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with readOnly', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormInput id="input" type="text" value="test" onChange={NOOP} readOnly />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with disabled', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormInput id="input" type="text" value="test" onChange={NOOP} disabled />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with hasError', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormInput id="input" type="text" value="test" onChange={NOOP} hasError />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with prefix', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormInput id="input" type="text" value="test" onChange={NOOP} insertBefore={<div>prefix</div>} />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with suffix', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormInput id="input" type="text" value="test" onChange={NOOP} insertAfter={<div>suffix</div>} />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it has no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(
      <Theme.Provider theme="console">
        <FormLabel htmlFor="input_1">Label Text</FormLabel>
        <FormInput id="input_1" type="text" value="test" onChange={NOOP} />
      </Theme.Provider>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('disabled has no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(
      <Theme.Provider theme="console">
        <FormLabel htmlFor="input_2" disabled>
          Label Text
        </FormLabel>
        <FormInput id="input_2" type="text" value="test" onChange={NOOP} disabled />
      </Theme.Provider>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('hasError has no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(
      <Theme.Provider theme="console">
        <FormLabel htmlFor="input_3">Label Text</FormLabel>
        <FormInput id="input_3" type="text" value="test" onChange={NOOP} hasError />
        <FormHelpText variant="error">Error info. Explains why the input has an error.</FormHelpText>
      </Theme.Provider>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});

describe('FormInput readyOnly prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
    readOnly: true,
  };

  const container = shallow(<FormInput {...initialProps} />);

  it('should have a readOnly prop', () => {
    expect(container.find('FieldWrapper').prop('readOnly')).toEqual(true);
  });

  it('should have a aria-readonly prop', () => {
    expect(container.find('InputElement').prop('aria-readonly')).toEqual(true);
  });

  it('should have a readonly prop on InputElement', () => {
    expect(container.find('InputElement').prop('aria-readonly')).toEqual(true);
  });
});

describe('FormInput disabled prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
    disabled: true,
  };

  const container = shallow(<FormInput {...initialProps} />);

  it('should have a disabled prop', () => {
    expect(container.find('FieldWrapper').prop('disabled')).toEqual(true);
  });

  it('should have a disabled prop on InputElement', () => {
    expect(container.find('InputElement').prop('disabled')).toEqual(true);
  });
});

describe('FormInput hasError prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
    hasError: true,
  };

  const container = shallow(<FormInput {...initialProps} />);

  it('should have a hasError prop', () => {
    expect(container.find('FieldWrapper').prop('hasError')).toEqual(true);
  });

  it('should have a aria-invalid prop', () => {
    expect(container.find('InputElement').prop('aria-invalid')).toEqual(true);
  });
});

describe('FormInput id prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
  };

  const container = shallow(<FormInput {...initialProps} />);

  it('should have an id prop', () => {
    expect(container.find('InputElement').prop('id')).toEqual('input');
  });
});

describe('FormInput text type prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
  };

  const container = shallow(<FormInput {...initialProps} />);

  it('should have an type prop', () => {
    expect(container.find('InputElement').prop('type')).toEqual('text');
  });
});

describe('FormInput number type prop', () => {
  const initialProps = {
    id: 'input',
    type: 'number' as FormInputTypes,
    value: '1',
    onChange: NOOP,
  };

  const container = shallow(<FormInput {...initialProps} />);

  it('should have an type prop', () => {
    expect(container.find('InputElement').prop('type')).toEqual('text');
  });
});

describe('FormInput value prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
  };

  const container = shallow(<FormInput {...initialProps} />);

  it('should have an value prop', () => {
    expect(container.find('InputElement').prop('value')).toEqual('value');
  });
});

describe('FormInput name prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
    name: 'name',
  };

  const container = shallow(<FormInput {...initialProps} />);

  it('should have an name prop', () => {
    expect(container.find('InputElement').prop('name')).toEqual('name');
  });
});

describe('FormInput placeholder prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
    placeholder: 'placeholder',
  };

  const container = shallow(<FormInput {...initialProps} />);

  it('should have an placeholder prop', () => {
    expect(container.find('InputElement').prop('placeholder')).toEqual('placeholder');
  });
});

describe('FormInput insertBefore prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
    placeholder: 'placeholder',
    insertBefore: '<div>$10.99</div>',
  };

  const container = shallow(<FormInput {...initialProps} />);

  it('should have a Prefix', () => {
    expect(container.find('Prefix').length).toEqual(1);
  });
});

describe('FormInput insertAfter prop', () => {
  const initialProps = {
    id: 'input',
    type: 'text' as FormInputTypes,
    value: 'value',
    onChange: NOOP,
    placeholder: 'placeholder',
    insertAfter: '<div>$10.99</div>',
  };

  const container = shallow(<FormInput {...initialProps} />);

  it('should have a Suffix', () => {
    expect(container.find('Suffix').length).toEqual(1);
  });
});

describe('FormInput event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const wrapper: ReactWrapper = mount(
      <FormInput
        id="input"
        type="text"
        value="test"
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      />
    );

    wrapper.find('input').simulate('change');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    wrapper.find('input').simulate('focus');
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    wrapper.find('input').simulate('blur');
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

  const container = shallow(<FormInput {...initialProps} />);

  it('should not pass width and classname props', () => {
    expect(container.find('InputElement').prop('width')).toEqual(undefined);
    expect(container.find('InputElement').prop('className')).toEqual(undefined);
  });
});
