import * as React from 'react';
import {render} from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow, ReactWrapper, mount} from 'enzyme';
import {axe} from 'jest-axe';
import {Theme} from '@twilio-paste/theme';
import {FormHelperText, FormLabel, FormTextArea} from '../src';

const NOOP = (): void => {};

describe('FormTextArea render', () => {
  it('it should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormTextArea id="textarea" onChange={NOOP} />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with readOnly', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormTextArea id="textarea" onChange={NOOP} readOnly />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with disabled', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormTextArea id="textarea" onChange={NOOP} disabled />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with hasError', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormTextArea id="textarea" onChange={NOOP} hasError />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with prefix', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormTextArea id="textarea" onChange={NOOP} insertBefore={<div>prefix</div>} />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with suffix', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormTextArea id="textarea" onChange={NOOP} insertAfter={<div>suffix</div>} />
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
        <FormLabel htmlFor="textarea_1">Label Text</FormLabel>
        <FormTextArea id="textarea_1" onChange={NOOP} />
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
        <FormLabel htmlFor="textarea_2" disabled>
          Label Text
        </FormLabel>
        <FormTextArea id="textarea_2" onChange={NOOP} disabled />
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
        <FormLabel htmlFor="textarea_3">Label Text</FormLabel>
        <FormTextArea id="textarea_3" onChange={NOOP} hasError />
        <FormHelperText variant="error">Error info. Explains why the input has an error.</FormHelperText>
      </Theme.Provider>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});

describe('FormTextArea readyOnly prop', () => {
  const initialProps = {
    id: 'textarea',
    onChange: NOOP,
    readOnly: true,
  };

  const container = shallow(<FormTextArea {...initialProps} />);

  it('should have a readOnly prop', () => {
    expect(container.find('FieldWrapper').prop('readOnly')).toEqual(true);
  });

  it('should have a aria-readonly prop', () => {
    expect(container.find('TextAreaElement').prop('aria-readonly')).toEqual(true);
  });

  it('should have a readonly prop on InputElement', () => {
    expect(container.find('TextAreaElement').prop('aria-readonly')).toEqual(true);
  });
});

describe('FormTextArea disabled prop', () => {
  const initialProps = {
    id: 'textarea',
    onChange: NOOP,
    disabled: true,
  };

  const container = shallow(<FormTextArea {...initialProps} />);

  it('should have a disabled prop', () => {
    expect(container.find('FieldWrapper').prop('disabled')).toEqual(true);
  });

  it('should have a disabled prop on InputElement', () => {
    expect(container.find('TextAreaElement').prop('disabled')).toEqual(true);
  });
});

describe('FormTextArea hasError prop', () => {
  const initialProps = {
    id: 'textarea',
    onChange: NOOP,
    hasError: true,
  };

  const container = shallow(<FormTextArea {...initialProps} />);

  it('should have a hasError prop', () => {
    expect(container.find('FieldWrapper').prop('hasError')).toEqual(true);
  });

  it('should have a aria-invalid prop', () => {
    expect(container.find('TextAreaElement').prop('aria-invalid')).toEqual(true);
  });
});

describe('FormTextArea id prop', () => {
  const initialProps = {
    id: 'textarea',
    onChange: NOOP,
  };

  const container = shallow(<FormTextArea {...initialProps} />);

  it('should have an id prop', () => {
    expect(container.find('TextAreaElement').prop('id')).toEqual('textarea');
  });
});

describe('FormTextArea name prop', () => {
  const initialProps = {
    id: 'textarea',
    name: 'name',
    onChange: NOOP,
  };

  const container = shallow(<FormTextArea {...initialProps} />);

  it('should have an name prop', () => {
    expect(container.find('TextAreaElement').prop('name')).toEqual('name');
  });
});

describe('FormTextArea placeholder prop', () => {
  const initialProps = {
    id: 'textarea',
    placeholder: 'placeholder',
    onChange: NOOP,
  };

  const container = shallow(<FormTextArea {...initialProps} />);

  it('should have an placeholder prop', () => {
    expect(container.find('TextAreaElement').prop('placeholder')).toEqual('placeholder');
  });
});

describe('FormTextArea insertBefore prop', () => {
  const initialProps = {
    id: 'textarea',
    insertBefore: '<div>$10.99</div>',
    onChange: NOOP,
  };

  const container = shallow(<FormTextArea {...initialProps} />);

  it('should have an placeholder prop', () => {
    expect(container.find('Prefix').length).toEqual(1);
  });
});

describe('FormTextArea insertAfter prop', () => {
  const initialProps = {
    id: 'textarea',
    insertAfter: '<div>$10.99</div>',
    onChange: NOOP,
  };

  const container = shallow(<FormTextArea {...initialProps} />);

  it('should have an placeholder prop', () => {
    expect(container.find('Suffix').length).toEqual(1);
  });
});

describe('FormTextArea event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const wrapper: ReactWrapper = mount(
      <FormTextArea id="textarea" onChange={onChangeMock} onFocus={onFocusMock} onBlur={onBlurMock} />
    );

    wrapper.find('textarea').simulate('change');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    wrapper.find('textarea').simulate('focus');
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    wrapper.find('textarea').simulate('blur');
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });
});
