import * as React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {matchers} from 'jest-emotion';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Radio, RadioGroup} from '../src';

expect.extend(matchers);

const getCustomizationStyles = (element = 'RADIO'): {[key: string]: PasteCustomCSS} => ({
  [`${element}_GROUP`]: {padding: 'space60'},
  [`${element}_GROUP_SET`]: {marginLeft: 'space60'},
  [`${element}_GROUP_FIELD`]: {marginBottom: 'space60'},
  [`${element}_GROUP_ERROR_TEXT_WRAPPER`]: {marginBottom: 'space60'},
  [`${element}`]: {padding: 'space30'},
  [`${element}_CONTROL`]: {borderRadius: 'borderRadius20'},
  [`${element}_CONTROL_CIRCLE`]: {color: 'colorText'},
  [`${element}_LABEL_TEXT`]: {color: 'colorTextNeutral'},
  [`${element}_HELP_TEXT_WRAPPER`]: {marginBottom: 'space60'},
});

const NOOP = (): void => {};

const defaultProps = {
  id: 'foo',
  value: 'foo',
  name: 'foo',
  onChange: NOOP,
};

const defaultGroupProps = {
  legend: 'This is a group legend',
  name: 'bar',
  value: 'bar',
  onChange: NOOP,
};

describe('Radio', () => {
  it('should render', () => {
    const {getByRole} = render(<Radio {...defaultProps}>foo</Radio>);
    expect(getByRole('radio')).not.toBeNull();
  });

  it('should render as invalid', () => {
    const {getByRole} = render(
      <Radio {...defaultProps} hasError>
        foo
      </Radio>
    );
    expect(getByRole('radio').getAttribute('aria-invalid')).toBeTruthy();
  });

  it('should render as checked (controlled)', () => {
    const {getByLabelText} = render(
      <Radio {...defaultProps} checked>
        foo
      </Radio>
    );
    expect((getByLabelText('foo') as HTMLInputElement).checked).toBeTruthy();
  });

  it('should render as checked (uncontrolled)', () => {
    const {getByLabelText} = render(
      <Radio {...defaultProps} defaultChecked>
        foo
      </Radio>
    );
    expect((getByLabelText('foo') as HTMLInputElement).checked).toBeTruthy();
  });

  it('should render as disabled', () => {
    const {getByLabelText} = render(
      <Radio {...defaultProps} disabled>
        foo
      </Radio>
    );
    expect((getByLabelText('foo') as HTMLInputElement).disabled).toBeTruthy();
  });

  it('should render an id', () => {
    const {getByLabelText} = render(<Radio {...defaultProps}>foo</Radio>);
    expect(getByLabelText('foo').id).toBe('foo');
  });

  it('should render a value', () => {
    const {getByLabelText} = render(<Radio {...defaultProps}>foo</Radio>);
    expect((getByLabelText('foo') as HTMLInputElement).value).toBe('foo');
  });

  it('should render a name', () => {
    const {getByLabelText} = render(<Radio {...defaultProps}>foo</Radio>);
    expect((getByLabelText('foo') as HTMLInputElement).name).toBe('foo');
  });

  it('should render aria attributes', () => {
    const {getByLabelText} = render(
      <Radio {...defaultProps} aria-label="foo" aria-labelledby="bar" aria-busy="true">
        foo
      </Radio>
    );
    expect(getByLabelText('foo').getAttribute('aria-label')).toBe('foo');
    expect(getByLabelText('foo').getAttribute('aria-labelledby')).toBe('bar');
    expect(getByLabelText('foo').getAttribute('aria-busy')).toBe('true');
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const {getByText} = render(
      <Radio {...defaultProps} helpText={helpText}>
        foo
      </Radio>
    );
    expect(getByText(helpText)).toBeDefined();
  });
});

describe('Radio Group', () => {
  it('should render', () => {
    const {container} = render(
      <RadioGroup {...defaultGroupProps}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect(container.querySelector('fieldset')).not.toBeNull();
  });

  it('should render a legend', () => {
    const {getByText} = render(
      <RadioGroup {...defaultGroupProps}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect(getByText('This is a group legend')).not.toBeNull();
  });

  it('should have a required a required dot in the legend', () => {
    render(
      <RadioGroup {...defaultGroupProps} required>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );

    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot).toBeDefined();
  });

  it('should render a value', () => {
    const {getByRole} = render(
      <RadioGroup {...defaultGroupProps}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect((getByRole('radio') as HTMLInputElement).value).toBe('foo');
  });

  it('should render a name', () => {
    const {getByRole} = render(
      <RadioGroup {...defaultGroupProps}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect((getByRole('radio') as HTMLInputElement).name).toBe(defaultProps.name);
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const {getByText} = render(
      <RadioGroup {...defaultGroupProps} helpText={helpText}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect(getByText(helpText)).toBeDefined();
  });

  it('renders an errorText message when errorText prop is present', () => {
    const errorText = 'I am an errorText message';
    const {getByText} = render(
      <RadioGroup {...defaultGroupProps} errorText={errorText}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect(getByText(errorText)).toBeDefined();
  });

  describe('i18n', () => {
    it('Should have default text for the required dot in the legend', () => {
      render(
        <RadioGroup {...defaultGroupProps} required>
          <Radio {...defaultProps}>foo</Radio>
        </RadioGroup>
      );

      const fieldset = screen.getByRole('group');
      const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

      expect(requiredDot?.textContent).toEqual('(required)');
    });

    it('Should use the i18nRequiredLabel prop for the required dot in the legend', () => {
      render(
        <RadioGroup {...defaultGroupProps} required i18nRequiredLabel="(requis)">
          <Radio {...defaultProps}>foo</Radio>
        </RadioGroup>
      );

      const fieldset = screen.getByRole('group');
      const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

      expect(requiredDot?.textContent).toEqual('(requis)');
    });
  });
});

describe('Radio event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const {getByTestId} = render(
      <Radio
        data-testid="radio-button"
        id="foo"
        name="foo"
        value="foo"
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      >
        foo
      </Radio>
    );

    fireEvent.click(getByTestId('radio-button'));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    fireEvent.focus(getByTestId('radio-button'));
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    fireEvent.blur(getByTestId('radio-button'));
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });
});

describe('Radio Group event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const {getByTestId} = render(
      <RadioGroup
        legend="foo"
        id="foo"
        name="foo"
        value="foo"
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      >
        <Radio data-testid="radio-button" id="bar" name="bar" value="bar">
          bar
        </Radio>
      </RadioGroup>
    );

    fireEvent.click(getByTestId('radio-button'));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    fireEvent.focus(getByTestId('radio-button'));
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    fireEvent.blur(getByTestId('radio-button'));
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  it('Should check the selected radio (controlled)', () => {
    const MockRadioGroup: React.FC = () => {
      const [value, setValue] = React.useState('2');
      return (
        <RadioGroup
          legend="foo"
          id="foo"
          name="foo"
          value={value}
          onChange={(newVal) => {
            setValue(newVal);
          }}
        >
          <Radio data-testid="radio-button" id="bar" name="bar" value="1" checked>
            bar
          </Radio>
          <Radio data-testid="radio-button1" id="bar" name="bar" value="2">
            bar
          </Radio>
          <Radio data-testid="radio-button2" id="bar" name="bar" value="3" defaultChecked>
            bar
          </Radio>
        </RadioGroup>
      );
    };

    const {getByTestId} = render(<MockRadioGroup />);

    expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(true);
    expect((getByTestId('radio-button2') as HTMLInputElement).checked).toBe(false);
    fireEvent.click(getByTestId('radio-button'));
    expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(true);
    expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio-button2') as HTMLInputElement).checked).toBe(false);
    fireEvent.click(getByTestId('radio-button2'));
    expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio-button2') as HTMLInputElement).checked).toBe(true);
  });

  it('Should check the selected radio (uncontrolled)', () => {
    const MockRadioGroup: React.FC = () => {
      return (
        <RadioGroup legend="foo" id="foo" name="foo">
          <Radio data-testid="radio-button" id="bar" name="bar" value="1">
            bar
          </Radio>
          <Radio data-testid="radio-button1" id="bar" name="bar" value="2" defaultChecked>
            bar
          </Radio>
        </RadioGroup>
      );
    };

    const {getByTestId} = render(<MockRadioGroup />);

    expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(true);
    fireEvent.click(getByTestId('radio-button'));
    expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(true);
    expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(false);
    fireEvent.click(getByTestId('radio-button1'));
    expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(true);
  });

  it('Should check the selected value on initial', () => {
    const MockRadioGroup: React.FC = () => {
      const [value, setValue] = React.useState('2');
      return (
        <RadioGroup
          legend="foo"
          id="foo"
          name="foo"
          value={value}
          onChange={(newVal) => {
            setValue(newVal);
          }}
        >
          <Radio data-testid="radio-button" id="bar" name="bar" value="1">
            bar
          </Radio>
          <Radio data-testid="radio-button1" id="bar" name="bar" value="2">
            bar
          </Radio>
        </RadioGroup>
      );
    };

    const {getByTestId} = render(<MockRadioGroup />);

    expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(true);
  });
});

describe('Customization', () => {
  it('should add default element attribute to Radio', () => {
    const {container} = render(
      <RadioGroup {...defaultGroupProps} errorText="error">
        <Radio helpText="help" {...defaultProps}>
          foo
        </Radio>
      </RadioGroup>
    );

    expect(container.querySelector('[data-paste-element="RADIO_GROUP"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="RADIO_GROUP_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="RADIO_GROUP_FIELD"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="RADIO_GROUP_ERROR_TEXT_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="RADIO"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="RADIO_CONTROL"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="RADIO_CONTROL_CIRCLE"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="RADIO_LABEL_TEXT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="RADIO_HELP_TEXT_WRAPPER"]')).toBeInTheDocument();
  });

  it('should add custom default element attribute to Radio', () => {
    const {container} = render(
      <RadioGroup element="MY_RADIO_GROUP" {...defaultGroupProps} errorText="error">
        <Radio element="MY_RADIO" helpText="help" {...defaultProps}>
          foo
        </Radio>
      </RadioGroup>
    );

    expect(container.querySelector('[data-paste-element="MY_RADIO_GROUP"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_RADIO_GROUP_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_RADIO_GROUP_FIELD"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_RADIO_GROUP_ERROR_TEXT_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_RADIO"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_RADIO_CONTROL"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_RADIO_CONTROL_CIRCLE"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_RADIO_LABEL_TEXT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_RADIO_HELP_TEXT_WRAPPER"]')).toBeInTheDocument();
  });

  it('should add custom styling to a default Radio', () => {
    const {container} = render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizationStyles()}>
        <RadioGroup {...defaultGroupProps} errorText="error">
          <Radio helpText="help" {...defaultProps}>
            foo
          </Radio>
        </RadioGroup>
      </CustomizationProvider>
    );

    expect(container.querySelector('[data-paste-element="RADIO_GROUP"]')).toHaveStyleRule('padding', '1.25rem');
    expect(container.querySelector('[data-paste-element="RADIO_GROUP_SET"]')).toHaveStyleRule('margin-left', '1.25rem');
    expect(container.querySelector('[data-paste-element="RADIO_GROUP_FIELD"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem'
    );
    expect(container.querySelector('[data-paste-element="RADIO_GROUP_ERROR_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem'
    );
    expect(container.querySelector('[data-paste-element="RADIO"]')).toHaveStyleRule('padding', '0.5rem');
    expect(container.querySelector('[data-paste-element="RADIO_CONTROL"]')).toHaveStyleRule('border-radius', '4px');
    expect(container.querySelector('[data-paste-element="RADIO_CONTROL_CIRCLE"]')).toHaveStyleRule(
      'color',
      'rgb(18,28,45)'
    );
    expect(container.querySelector('[data-paste-element="RADIO_LABEL_TEXT"]')).toHaveStyleRule(
      'color',
      'rgb(0,20,137)'
    );
    expect(container.querySelector('[data-paste-element="RADIO_HELP_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem'
    );
  });

  it('should add custom styling to a custom element Radio', () => {
    const {container} = render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizationStyles('MY_RADIO')}>
        <RadioGroup element="MY_RADIO_GROUP" {...defaultGroupProps} errorText="error">
          <Radio element="MY_RADIO" helpText="help" {...defaultProps}>
            foo
          </Radio>
        </RadioGroup>
      </CustomizationProvider>
    );

    expect(container.querySelector('[data-paste-element="MY_RADIO_GROUP"]')).toHaveStyleRule('padding', '1.25rem');
    expect(container.querySelector('[data-paste-element="MY_RADIO_GROUP_SET"]')).toHaveStyleRule(
      'margin-left',
      '1.25rem'
    );
    expect(container.querySelector('[data-paste-element="MY_RADIO_GROUP_FIELD"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem'
    );
    expect(container.querySelector('[data-paste-element="MY_RADIO_GROUP_ERROR_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem'
    );
    expect(container.querySelector('[data-paste-element="MY_RADIO"]')).toHaveStyleRule('padding', '0.5rem');
    expect(container.querySelector('[data-paste-element="MY_RADIO_CONTROL"]')).toHaveStyleRule('border-radius', '4px');
    expect(container.querySelector('[data-paste-element="MY_RADIO_CONTROL_CIRCLE"]')).toHaveStyleRule(
      'color',
      'rgb(18,28,45)'
    );
    expect(container.querySelector('[data-paste-element="MY_RADIO_LABEL_TEXT"]')).toHaveStyleRule(
      'color',
      'rgb(0,20,137)'
    );
    expect(container.querySelector('[data-paste-element="MY_RADIO_HELP_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem'
    );
  });
});

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const helpText = "I'm help text";
    const errorText = "I'm error text";

    const {container} = render(
      <RadioGroup {...defaultGroupProps} helpText={helpText} errorText={errorText} required>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
