// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import { VisualPickerRadio, VisualPickerRadioGroup } from '../src';
import { CustomizedRadio } from '../stories/customization.stories';

const NOOP = (): void => {};

describe('VisualPickerRadioGroup', () => {
  it('should render', () => {
    const { container } = render(
      <VisualPickerRadioGroup name="visual-picker" legend="Choose an option" onChange={NOOP} value="1">
        <VisualPickerRadio labelText="1" value="1">
          Option 1
        </VisualPickerRadio>
        <VisualPickerRadio labelText="2" value="2">
          Option 2
        </VisualPickerRadio>
        <VisualPickerRadio labelText="3" value="3">
          Option 3
        </VisualPickerRadio>
      </VisualPickerRadioGroup>,
    );
    expect(container.querySelector('fieldset')).not.toBeNull();
  });
  it('should render a legend', () => {
    const { getByText } = render(
      <VisualPickerRadioGroup name="visual-picker" legend="Choose an option" onChange={NOOP} value="1">
        <VisualPickerRadio labelText="1" value="1">
          Option 1
        </VisualPickerRadio>
        <VisualPickerRadio labelText="2" value="2">
          Option 2
        </VisualPickerRadio>
        <VisualPickerRadio labelText="3" value="3">
          Option 3
        </VisualPickerRadio>
      </VisualPickerRadioGroup>,
    );
    expect(getByText('Choose an option')).not.toBeNull();
  });

  it('should have a required dot in the legend', () => {
    render(
      <VisualPickerRadioGroup name="visual-picker" legend="Choose an option" required onChange={NOOP} value="1">
        <VisualPickerRadio labelText="1" value="1">
          Option 1
        </VisualPickerRadio>
        <VisualPickerRadio labelText="2" value="2">
          Option 2
        </VisualPickerRadio>
        <VisualPickerRadio labelText="3" value="3">
          Option 3
        </VisualPickerRadio>
      </VisualPickerRadioGroup>,
    );
    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');
    expect(requiredDot).toBeDefined();
  });

  it('should render a value', () => {
    const { getAllByRole } = render(
      <VisualPickerRadioGroup name="visual-picker" legend="Choose an option" onChange={NOOP} value="1">
        <VisualPickerRadio labelText="1" value="1">
          Option 1
        </VisualPickerRadio>
        <VisualPickerRadio labelText="2" value="2">
          Option 2
        </VisualPickerRadio>
        <VisualPickerRadio labelText="3" value="3">
          Option 3
        </VisualPickerRadio>
      </VisualPickerRadioGroup>,
    );
    expect((getAllByRole('radio') as HTMLInputElement[])[0].value).toBe('1');
  });

  it('should render a name', () => {
    const { getAllByRole } = render(
      <VisualPickerRadioGroup name="visual-picker" legend="Choose an option" onChange={NOOP} value="1">
        <VisualPickerRadio labelText="1" value="1">
          Option 1
        </VisualPickerRadio>
        <VisualPickerRadio labelText="2" value="2">
          Option 2
        </VisualPickerRadio>
        <VisualPickerRadio labelText="3" value="3">
          Option 3
        </VisualPickerRadio>
      </VisualPickerRadioGroup>,
    );
    expect((getAllByRole('radio') as HTMLInputElement[])[0].name).toBe('visual-picker');
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const { getByText } = render(
      <VisualPickerRadioGroup
        name="visual-picker"
        legend="Choose an option"
        helpText={helpText}
        onChange={NOOP}
        value="1"
      >
        <VisualPickerRadio labelText="1" value="1">
          Option 1
        </VisualPickerRadio>
        <VisualPickerRadio labelText="2" value="2">
          Option 2
        </VisualPickerRadio>
        <VisualPickerRadio labelText="3" value="3">
          Option 3
        </VisualPickerRadio>
      </VisualPickerRadioGroup>,
    );
    expect(getByText(helpText)).toBeDefined();
  });

  it('renders an errorText message when errorText prop is present', () => {
    const errorText = 'I am an errorText message';
    const { getByText } = render(
      <VisualPickerRadioGroup
        name="visual-picker"
        legend="Choose an option"
        errorText={errorText}
        onChange={NOOP}
        value="1"
      >
        <VisualPickerRadio labelText="1" value="1">
          Option 1
        </VisualPickerRadio>
        <VisualPickerRadio labelText="2" value="2">
          Option 2
        </VisualPickerRadio>
        <VisualPickerRadio labelText="3" value="3">
          Option 3
        </VisualPickerRadio>
      </VisualPickerRadioGroup>,
    );
    expect(getByText(errorText)).toBeDefined();
  });
});

describe('VisualPickerRadio i18n', () => {
  it('Should have default text for the required dot in the legend', () => {
    render(
      <VisualPickerRadioGroup name="visual-picker" legend="Choose an option" required onChange={NOOP} value="1">
        <VisualPickerRadio labelText="1" value="1">
          Option 1
        </VisualPickerRadio>
        <VisualPickerRadio labelText="2" value="2">
          Option 2
        </VisualPickerRadio>
        <VisualPickerRadio labelText="3" value="3">
          Option 3
        </VisualPickerRadio>
      </VisualPickerRadioGroup>,
    );

    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot?.textContent).toEqual('(required)');
  });

  it('Should use the i18nRequiredLabel prop for the required dot in the legend', () => {
    render(
      <VisualPickerRadioGroup
        name="visual-picker"
        legend="Choose an option"
        required
        i18nRequiredLabel="(requis)"
        onChange={NOOP}
        value="1"
      >
        <VisualPickerRadio labelText="1" value="1">
          Option 1
        </VisualPickerRadio>
        <VisualPickerRadio labelText="2" value="2">
          Option 2
        </VisualPickerRadio>
        <VisualPickerRadio labelText="3" value="3">
          Option 3
        </VisualPickerRadio>
      </VisualPickerRadioGroup>,
    );

    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot?.textContent).toEqual('(requis)');
  });
});

describe('VisualPickerRadio event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const { getByTestId } = render(
      <VisualPickerRadio
        data-testid="radio"
        id="foo"
        name="foo"
        value="foo"
        labelText="foo"
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      >
        foo
      </VisualPickerRadio>,
    );

    fireEvent.click(getByTestId('radio'));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    fireEvent.blur(getByTestId('radio'));
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });
});

describe('Radio Group event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const { getByTestId } = render(
      <VisualPickerRadioGroup
        legend="foo"
        id="foo"
        name="foo"
        value="foo"
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      >
        <VisualPickerRadio data-testid="radio" id="bar" name="bar" value="bar" labelText="bar">
          bar
        </VisualPickerRadio>
      </VisualPickerRadioGroup>,
    );

    fireEvent.click(getByTestId('radio'));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    fireEvent.blur(getByTestId('radio'));
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  it('Should check the selected radio (controlled)', () => {
    const MockRadioGroup = (): JSX.Element => {
      const [value, setValue] = React.useState('2');
      return (
        <VisualPickerRadioGroup
          legend="foo"
          id="foo"
          name="foo"
          value={value}
          onChange={(newVal) => {
            setValue(newVal);
          }}
        >
          <VisualPickerRadio labelText="1" data-testid="radio" id="bar" name="bar" value="1">
            bar
          </VisualPickerRadio>
          <VisualPickerRadio labelText="2" data-testid="radio1" id="bar" name="bar" value="2">
            bar
          </VisualPickerRadio>
          <VisualPickerRadio labelText="3" data-testid="radio2" id="bar" name="bar" value="3">
            bar
          </VisualPickerRadio>
        </VisualPickerRadioGroup>
      );
    };

    const { getByTestId } = render(<MockRadioGroup />);

    expect((getByTestId('radio') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio1') as HTMLInputElement).checked).toBe(true);
    expect((getByTestId('radio2') as HTMLInputElement).checked).toBe(false);
    fireEvent.click(getByTestId('radio'));
    expect((getByTestId('radio') as HTMLInputElement).checked).toBe(true);
    expect((getByTestId('radio1') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio2') as HTMLInputElement).checked).toBe(false);
    fireEvent.click(getByTestId('radio2'));
    expect((getByTestId('radio') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio1') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio2') as HTMLInputElement).checked).toBe(true);
  });

  it('Should check the selected value on initial', () => {
    const MockRadioGroup = (): JSX.Element => {
      const [value, setValue] = React.useState('2');
      return (
        <VisualPickerRadioGroup
          legend="foo"
          id="foo"
          name="foo"
          value={value}
          onChange={(newVal) => {
            setValue(newVal);
          }}
        >
          <VisualPickerRadio labelText="1" data-testid="radio" id="bar" name="bar" value="1">
            bar
          </VisualPickerRadio>
          <VisualPickerRadio labelText="2" data-testid="radio1" id="bar" name="bar" value="2">
            bar
          </VisualPickerRadio>
        </VisualPickerRadioGroup>
      );
    };

    const { getByTestId } = render(<MockRadioGroup />);

    expect((getByTestId('radio') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('radio1') as HTMLInputElement).checked).toBe(true);
  });
});

describe('Customization', () => {
  it('should set an element data attribute for Visual Picker Radio', () => {
    const { container } = render(<CustomizedRadio />);
    expect(screen.getByTestId('visual-picker-radio-group')).toHaveAttribute(
      'data-paste-element',
      'VISUAL_PICKER_RADIO_GROUP',
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO_GROUP_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO_GROUP_FIELD"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO_CONTROL"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO_CONTROL_CIRCLE"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO_CONTENT"]')).toBeInTheDocument();
  });

  it('should set a custom element data attribute for Visual Picker Radio', () => {
    const { container } = render(<CustomizedRadio element="MY_PICKER" />);
    expect(screen.getByTestId('visual-picker-radio-group')).toHaveAttribute('data-paste-element', 'MY_PICKER');
    expect(container.querySelector('[data-paste-element="MY_PICKER_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_PICKER_FIELD"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_PICKER_RADIO"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_PICKER_RADIO_CONTROL"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_PICKER_RADIO_CONTROL_CIRCLE"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_PICKER_RADIO_CONTENT"]')).toBeInTheDocument();
  });

  it('should add custom styling to a default Visual Picker Radio', () => {
    const { container } = render(<CustomizedRadio />);
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO_GROUP"]')).toHaveStyleRule(
      'background-color',
      'rgba(242, 47, 70, 0.1)',
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO_GROUP_SET"]')).toHaveStyleRule(
      'background-color',
      'rgb(235, 244, 255)',
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO_GROUP_FIELD"]')).toHaveStyleRule(
      'background-color',
      'rgb(237, 253, 243)',
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO"]')).toHaveStyleRule(
      'border-radius',
      '50%',
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO_CONTROL"]')).toHaveStyleRule(
      'border-radius',
      '4px',
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO_CONTROL_CIRCLE"]')).toHaveStyleRule(
      'opacity',
      '50%',
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_RADIO_CONTENT"]')).toHaveStyleRule(
      'color',
      'rgb(49, 12, 12)',
    );
  });

  it('should add custom styling to a custom named Visual Picker Radio', () => {
    const { container } = render(<CustomizedRadio element="MY_PICKER" />);
    expect(container.querySelector('[data-paste-element="MY_PICKER"]')).toHaveStyleRule(
      'background-color',
      'rgba(242, 47, 70, 0.1)',
    );
    expect(container.querySelector('[data-paste-element="MY_PICKER_SET"]')).toHaveStyleRule(
      'background-color',
      'rgb(235, 244, 255)',
    );
    expect(container.querySelector('[data-paste-element="MY_PICKER_FIELD"]')).toHaveStyleRule(
      'background-color',
      'rgb(237, 253, 243)',
    );
    expect(container.querySelector('[data-paste-element="MY_PICKER_RADIO"]')).toHaveStyleRule('border-radius', '50%');
    expect(container.querySelector('[data-paste-element="MY_PICKER_RADIO_CONTROL"]')).toHaveStyleRule(
      'border-radius',
      '4px',
    );
    expect(container.querySelector('[data-paste-element="MY_PICKER_RADIO_CONTROL_CIRCLE"]')).toHaveStyleRule(
      'opacity',
      '50%',
    );
    expect(container.querySelector('[data-paste-element="MY_PICKER_RADIO_CONTENT"]')).toHaveStyleRule(
      'color',
      'rgb(49, 12, 12)',
    );
  });
});
