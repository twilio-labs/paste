import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {render, screen, fireEvent} from '@testing-library/react';

import {VisualPickerCheckboxGroup, VisualPickerCheckbox} from '../src';
import {CustomizedCheckbox} from '../stories/customization.stories';

const NOOP = (): void => {};

describe('VisualPickerCheckbox', () => {
  it('should render', () => {
    const {container} = render(
      <VisualPickerCheckboxGroup legend="Select multiple options" name="visual-picker">
        <VisualPickerCheckbox labelText="1" onChange={NOOP} checked={false}>
          Option 1
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="2" onChange={NOOP} checked={true}>
          Option 2
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="3" onChange={NOOP} checked={true}>
          Option 3
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );
    const checkbox = screen.getAllByRole('checkbox')[0];
    expect(checkbox).not.toBeNull();
    expect(checkbox.id).toBeDefined();

    const checkIcon = container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_ICON"]');
    expect(checkIcon).toHaveStyleRule('display', 'none');
  });

  it('should render as checked', () => {
    const {getByLabelText, container} = render(
      <VisualPickerCheckboxGroup legend="Select multiple options" name="visual-picker">
        <VisualPickerCheckbox labelText="foo" id="foo" onChange={NOOP} checked={true}>
          Option 1
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="bar" id="bar" onChange={NOOP} checked={false}>
          Option 2
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );
    expect((getByLabelText('foo') as HTMLInputElement).checked).toBeTruthy();

    const checkIcon = container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_ICON"');
    expect(checkIcon).toHaveStyleRule('display', 'block');
  });

  it('should correctly set html and aria attributes', () => {
    const {getByLabelText} = render(
      <VisualPickerCheckboxGroup legend="Select multiple options" name="visual-picker" required>
        <VisualPickerCheckbox
          labelText="foo"
          id="foo"
          name="foo"
          aria-label="foo"
          aria-labelledby="bar"
          aria-busy="true"
          onChange={NOOP}
          checked={false}
          hasError
          disabled
          indeterminate
        >
          Option 1
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="bar" id="bar" onChange={NOOP} checked={true} indeterminate>
          Option 2
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );

    // id
    expect(getByLabelText('foo').id).toBe('foo');

    // name
    expect((getByLabelText('foo') as HTMLInputElement).name).toBe('foo');

    // disabled
    expect((getByLabelText('foo') as HTMLInputElement).disabled).toBeTruthy();

    // indeterminate
    expect(getByLabelText('foo').getAttribute('aria-checked')).toBe('mixed');
    expect(getByLabelText('bar').getAttribute('aria-checked')).toBe('mixed');

    // aria
    expect(getByLabelText('foo').getAttribute('aria-label')).toBe('foo');
    expect(getByLabelText('foo').getAttribute('aria-busy')).toBe('true');
    expect(getByLabelText('foo').getAttribute('aria-invalid')).toBeTruthy();
  });
});

describe('VisualPickerCheckboxGroup', () => {
  it('should render', () => {
    const {container} = render(
      <VisualPickerCheckboxGroup legend="Select multiple options" name="visual-picker">
        <VisualPickerCheckbox labelText="foo" id="foo" name="foo" onChange={NOOP} checked={false}>
          Option 1
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="bar" id="bar" onChange={NOOP} checked={false}>
          Option 2
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );
    expect(container.querySelector('fieldset')).not.toBeNull();
  });

  it('should render a legend', () => {
    const {getByText} = render(
      <VisualPickerCheckboxGroup legend="Select multiple options" name="visual-picker">
        <VisualPickerCheckbox labelText="foo" id="foo" name="foo" onChange={NOOP} checked={false}>
          Option 1
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="bar" id="bar" onChange={NOOP} checked={false}>
          Option 2
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );
    expect(getByText('Select multiple options')).not.toBeNull();
  });

  it('should render a required dot in the legend', () => {
    render(
      <VisualPickerCheckboxGroup legend="Select multiple options" name="visual-picker" required>
        <VisualPickerCheckbox labelText="foo" id="foo" onChange={NOOP} checked={false}>
          Option 1
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="bar" id="bar" onChange={NOOP} checked={false}>
          Option 2
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );
    const label = screen.getByText('foo');
    const requiredDot = label.querySelector('[data-paste-element="REQUIRED_DOT"]');

    expect(requiredDot).toBeDefined();
  });

  it('should render a name', () => {
    const {getAllByRole} = render(
      <VisualPickerCheckboxGroup legend="Select multiple options" name="visual-picker" required>
        <VisualPickerCheckbox labelText="foo" id="foo" onChange={NOOP} checked={false}>
          Option 1
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="bar" id="bar" onChange={NOOP} checked={false}>
          Option 2
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );
    expect((getAllByRole('checkbox') as HTMLInputElement[])[0].name).toBe('visual-picker');
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const {getByText} = render(
      <VisualPickerCheckboxGroup legend="Select multiple options" name="visual-picker" helpText={helpText}>
        <VisualPickerCheckbox labelText="foo" id="foo" onChange={NOOP} checked={false}>
          Option 1
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="bar" id="bar" onChange={NOOP} checked={false}>
          Option 2
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );
    expect(getByText(helpText)).toBeDefined();
  });

  it('renders an errorText message when errorText prop is present', () => {
    const errorText = 'I am an errorText message';
    const {getByText} = render(
      <VisualPickerCheckboxGroup legend="Select multiple options" name="visual-picker" errorText={errorText}>
        <VisualPickerCheckbox labelText="foo" id="foo" onChange={NOOP} checked={false}>
          Option 1
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="bar" id="bar" onChange={NOOP} checked={false}>
          Option 2
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );
    expect(getByText(errorText)).toBeDefined();
  });
});

describe('i18n', () => {
  it('Should have default text for the required dot in the legend', () => {
    render(
      <VisualPickerCheckboxGroup legend="Select multiple options" name="visual-picker" required>
        <VisualPickerCheckbox labelText="foo" id="foo" onChange={NOOP} checked={false}>
          Option 1
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="bar" id="bar" onChange={NOOP} checked={false}>
          Option 2
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );

    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot?.textContent).toEqual('(required)');
  });

  it('Should use the i18nRequiredLabel prop for the required dot in the legend', () => {
    render(
      <VisualPickerCheckboxGroup
        legend="Select multiple options"
        name="visual-picker"
        required
        i18nRequiredLabel="(requis)"
      >
        <VisualPickerCheckbox labelText="foo" id="foo" onChange={NOOP} checked={false}>
          Option 1
        </VisualPickerCheckbox>
        <VisualPickerCheckbox labelText="bar" id="bar" onChange={NOOP} checked={false}>
          Option 2
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );

    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot?.textContent).toEqual('(requis)');
  });
});

describe('Checkbox Group event handlers', () => {
  const MockVisualPickerCheckBox = ({onFocus, onBlur}: {onFocus?: jest.Mock; onBlur?: jest.Mock}): JSX.Element => {
    const [checked, setChecked] = React.useState(false);
    return (
      <VisualPickerCheckboxGroup legend="Select multiple options" name="visual-picker">
        <VisualPickerCheckbox
          labelText="foo"
          id="foo"
          data-testid="checkbox"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          Option 1
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    );
  };

  it('Should call the appropriate event handlers', () => {
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const {getByTestId} = render(<MockVisualPickerCheckBox onFocus={onFocusMock} onBlur={onBlurMock} />);

    const renderedCheckbox = getByTestId('checkbox') as HTMLInputElement;
    fireEvent.click(getByTestId('checkbox'));
    expect(renderedCheckbox.checked).toEqual(true);
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    fireEvent.blur(getByTestId('checkbox'));
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  it('Should check the checkbox when controlled', () => {
    const {getByTestId} = render(<MockVisualPickerCheckBox />);

    fireEvent.click(getByTestId('checkbox'));
    expect((getByTestId('checkbox') as HTMLInputElement).checked).toBe(true);
  });
});

describe('Customization', () => {
  it('should set an element data attribute for Visual Picker Checkbox', () => {
    const {container} = render(<CustomizedCheckbox />);
    expect(screen.getByTestId('visual-picker-checkbox-group')).toHaveAttribute(
      'data-paste-element',
      'VISUAL_PICKER_CHECKBOX_GROUP'
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_GROUP_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_GROUP_FIELD"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_CONTROL"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_CONTENT"]')).toBeInTheDocument();
  });

  it('should set a custom element data attribute for Visual Picker Checkbox', () => {
    const {container} = render(<CustomizedCheckbox element="MY_PICKER" />);
    expect(screen.getByTestId('visual-picker-checkbox-group')).toHaveAttribute('data-paste-element', 'MY_PICKER');
    expect(container.querySelector('[data-paste-element="MY_PICKER_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_PICKER_FIELD"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_PICKER_CHECKBOX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_PICKER_CHECKBOX_CONTROL"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_PICKER_CHECKBOX_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_PICKER_CHECKBOX_CONTENT"]')).toBeInTheDocument();
  });

  it('should add custom styling to a default Visual Picker Checkbox', () => {
    const {container} = render(<CustomizedCheckbox />);
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_GROUP"]')).toHaveStyleRule(
      'background-color',
      'rgba(242, 47, 70, 0.1)'
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_GROUP_SET"]')).toHaveStyleRule(
      'background-color',
      'rgb(235, 244, 255)'
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_GROUP_FIELD"]')).toHaveStyleRule(
      'background-color',
      'rgb(237, 253, 243)'
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX"]')).toHaveStyleRule(
      'border-radius',
      '50%'
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_CONTROL"]')).toHaveStyleRule(
      'border-radius',
      '50%'
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_ICON"]')).toHaveStyleRule(
      'opacity',
      '50%'
    );
    expect(container.querySelector('[data-paste-element="VISUAL_PICKER_CHECKBOX_CONTENT"]')).toHaveStyleRule(
      'color',
      'rgb(49, 12, 12)'
    );
  });

  it('should add custom styling to a custom named Visual Picker Radio', () => {
    const {container} = render(<CustomizedCheckbox element="MY_PICKER" />);
    expect(container.querySelector('[data-paste-element="MY_PICKER"]')).toHaveStyleRule(
      'background-color',
      'rgba(242, 47, 70, 0.1)'
    );
    expect(container.querySelector('[data-paste-element="MY_PICKER_SET"]')).toHaveStyleRule(
      'background-color',
      'rgb(235, 244, 255)'
    );
    expect(container.querySelector('[data-paste-element="MY_PICKER_FIELD"]')).toHaveStyleRule(
      'background-color',
      'rgb(237, 253, 243)'
    );
    expect(container.querySelector('[data-paste-element="MY_PICKER_CHECKBOX"]')).toHaveStyleRule(
      'border-radius',
      '50%'
    );
    expect(container.querySelector('[data-paste-element="MY_PICKER_CHECKBOX_CONTROL"]')).toHaveStyleRule(
      'border-radius',
      '4px'
    );
    expect(container.querySelector('[data-paste-element="MY_PICKER_CHECKBOX_ICON"]')).toHaveStyleRule('opacity', '50%');
    expect(container.querySelector('[data-paste-element="MY_PICKER_CHECKBOX_CONTENT"]')).toHaveStyleRule(
      'color',
      'rgb(49, 12, 12)'
    );
  });
});
