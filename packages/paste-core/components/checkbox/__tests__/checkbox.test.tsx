import { fireEvent, render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { PasteCustomCSS } from '@twilio-paste/customization';
import * as React from 'react';

import { Checkbox, CheckboxGroup } from '../src';

const getCustomizationStyles = (element = 'CHECKBOX'): { [key: string]: PasteCustomCSS } => ({
  [`${element}_GROUP`]: { padding: 'space60' },
  [`${element}_GROUP_SET`]: { marginLeft: 'space60' },
  [`${element}_GROUP_FIELD`]: { marginBottom: 'space60' },
  [`${element}_GROUP_ERROR_TEXT_WRAPPER`]: { marginBottom: 'space60' },
  [`${element}`]: { padding: 'space30' },
  [`${element}_CONTROL`]: { borderRadius: 'borderRadius20' },
  [`${element}_ICON`]: { color: 'colorTextIconNeutral' },
  [`${element}_LABEL_TEXT`]: { color: 'colorTextNeutral' },
  [`${element}_HELP_TEXT_WRAPPER`]: { marginBottom: 'space60' },
});

const NOOP = (): void => {};

const defaultProps = {
  id: 'foo',
  name: 'foo',
};

const defaultGroupProps = {
  legend: 'This is a group legend',
  name: 'bar',
  value: 'bar',
  onChange: NOOP,
};

describe('Checkbox', () => {
  it('should render', () => {
    const { container } = render(<Checkbox {...defaultProps}>foo</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeNull();
    expect(checkbox.id).toBeDefined();

    const checkIcon = container.querySelector('[data-paste-element="CHECKBOX_ICON"]');
    expect(checkIcon).toHaveStyleRule('display', 'none');
  });

  it('should render as invalid', () => {
    const { getByRole } = render(
      <Checkbox {...defaultProps} hasError>
        foo
      </Checkbox>,
    );
    expect(getByRole('checkbox').getAttribute('aria-invalid')).toBeTruthy();
  });

  it('should use the id prop when passed', () => {
    render(
      <Checkbox {...defaultProps} id="my-id" onChange={NOOP}>
        foo
      </Checkbox>,
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.id).toBe('my-id');
  });

  it('should render as checked when defaultChecked', () => {
    const { getByLabelText, container } = render(
      <Checkbox {...defaultProps} defaultChecked onChange={NOOP}>
        foo
      </Checkbox>,
    );
    expect((getByLabelText('foo') as HTMLInputElement).checked).toBeTruthy();

    const checkIcon = container.querySelector('[data-paste-element="CHECKBOX_ICON"]');
    expect(checkIcon).toHaveStyleRule('display', 'block');
  });

  it('should render as checked when controlled', () => {
    const { getByLabelText, container } = render(
      <Checkbox {...defaultProps} checked onChange={NOOP}>
        foo
      </Checkbox>,
    );
    expect((getByLabelText('foo') as HTMLInputElement).checked).toBeTruthy();

    const checkIcon = container.querySelector('[data-paste-element="CHECKBOX_ICON"');
    expect(checkIcon).toHaveStyleRule('display', 'block');
  });

  it('should render a required dot', () => {
    render(
      <Checkbox {...defaultProps} required onChange={NOOP}>
        foo
      </Checkbox>,
    );
    const label = screen.getByText('foo');
    const requiredDot = label.querySelector('[data-paste-element="REQUIRED_DOT"]');

    expect(requiredDot).toBeDefined();
  });

  it('should render as indeterminate', () => {
    const { getByLabelText } = render(
      <Checkbox {...defaultProps} indeterminate onChange={NOOP}>
        foo
      </Checkbox>,
    );
    expect(getByLabelText('foo').getAttribute('aria-checked')).toBe('mixed');
  });

  it('should render as disabled', () => {
    const { getByLabelText } = render(
      <Checkbox {...defaultProps} disabled>
        foo
      </Checkbox>,
    );
    expect((getByLabelText('foo') as HTMLInputElement).disabled).toBeTruthy();
  });

  it('should render an id', () => {
    const { getByLabelText } = render(<Checkbox {...defaultProps}>foo</Checkbox>);
    expect(getByLabelText('foo').id).toBe('foo');
  });

  it('should render a name', () => {
    const { getByLabelText } = render(<Checkbox {...defaultProps}>foo</Checkbox>);
    expect((getByLabelText('foo') as HTMLInputElement).name).toBe('foo');
  });

  it('should render aria attributes', () => {
    const { getByLabelText } = render(
      <Checkbox {...defaultProps} aria-label="foo" aria-labelledby="bar" aria-busy="true">
        foo
      </Checkbox>,
    );
    expect(getByLabelText('foo').getAttribute('aria-label')).toBe('foo');
    expect(getByLabelText('foo').getAttribute('aria-labelledby')).toBe('bar');
    expect(getByLabelText('foo').getAttribute('aria-busy')).toBe('true');
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const { getByText } = render(
      <Checkbox {...defaultProps} helpText={helpText}>
        foo
      </Checkbox>,
    );
    expect(getByText(helpText)).toBeDefined();
  });
});

describe('Checkbox Group', () => {
  it('should render', () => {
    const { container } = render(
      <CheckboxGroup {...defaultGroupProps}>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>,
    );
    expect(container.querySelector('fieldset')).not.toBeNull();
  });

  it('should render a legend', () => {
    const { getByText } = render(
      <CheckboxGroup {...defaultGroupProps}>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>,
    );
    expect(getByText('This is a group legend')).not.toBeNull();
  });

  it('should have a required a required dot in the legend', () => {
    render(
      <CheckboxGroup {...defaultGroupProps} required>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>,
    );

    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot).toBeDefined();
  });

  it('should render a name', () => {
    const { getByRole } = render(
      <CheckboxGroup {...defaultGroupProps}>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>,
    );
    expect((getByRole('checkbox') as HTMLInputElement).name).toBe(defaultProps.name);
  });

  it('should render a disabled checkbox in the checkbox group', () => {
    const { getByRole } = render(
      <CheckboxGroup {...defaultGroupProps}>
        <Checkbox {...defaultProps} disabled>
          foo
        </Checkbox>
      </CheckboxGroup>,
    );
    expect((getByRole('checkbox') as HTMLInputElement).disabled).toBeTruthy();
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const { getByText } = render(
      <CheckboxGroup {...defaultGroupProps} helpText={helpText}>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>,
    );
    expect(getByText(helpText)).toBeDefined();
  });

  it('renders an errorText message when errorText prop is present', () => {
    const errorText = 'I am an errorText message';
    const { getByText } = render(
      <CheckboxGroup {...defaultGroupProps} errorText={errorText}>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>,
    );
    expect(getByText(errorText)).toBeDefined();
  });
});

describe('Checkbox event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const { getByTestId } = render(
      <Checkbox
        data-testid="checkbox-button"
        id="foo"
        name="foo"
        checked
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      >
        foo
      </Checkbox>,
    );

    fireEvent.click(getByTestId('checkbox-button'));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    fireEvent.focus(getByTestId('checkbox-button'));
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    fireEvent.blur(getByTestId('checkbox-button'));
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  it('Should not call onChange handler when uncontrolled', () => {
    const onChangeMock: jest.Mock = jest.fn();

    const { getByTestId } = render(
      <Checkbox data-testid="checkbox-button" id="foo" name="foo" onChange={onChangeMock}>
        foo
      </Checkbox>,
    );

    fireEvent.click(getByTestId('checkbox-button'));
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  });

  it('Should check the checkbox when controlled', () => {
    const MockCheckBox = (): JSX.Element => {
      const [checked, setChecked] = React.useState(false);
      return (
        <Checkbox
          data-testid="checkbox-button"
          id="foo"
          name="foo"
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
          }}
        >
          foo
        </Checkbox>
      );
    };

    const { getByTestId } = render(<MockCheckBox />);

    fireEvent.click(getByTestId('checkbox-button'));
    expect((getByTestId('checkbox-button') as HTMLInputElement).checked).toBe(true);
  });

  it('Should check the checkbox when uncontrolled', () => {
    const MockCheckBox = (): JSX.Element => {
      return (
        <Checkbox data-testid="checkbox-button" id="foo" name="foo">
          foo
        </Checkbox>
      );
    };

    const { getByTestId } = render(<MockCheckBox />);

    fireEvent.click(getByTestId('checkbox-button'));
    expect((getByTestId('checkbox-button') as HTMLInputElement).checked).toBe(true);
  });
});

describe('Customization', () => {
  it('Should set an element data attribute for Checkbox', (): void => {
    const { container } = render(
      <CheckboxGroup data-testid="checkbox-group" {...defaultGroupProps} errorText="error">
        <Checkbox {...defaultProps} helpText="bar">
          foo
        </Checkbox>
      </CheckboxGroup>,
    );

    expect(screen.getByTestId('checkbox-group')).toHaveAttribute('data-paste-element', 'CHECKBOX_GROUP');
    expect(container.querySelector('[data-paste-element="CHECKBOX_GROUP_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="CHECKBOX_GROUP_FIELD"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="CHECKBOX_GROUP_ERROR_TEXT_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="CHECKBOX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="CHECKBOX_CONTROL"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="CHECKBOX_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="CHECKBOX_LABEL_TEXT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="CHECKBOX_HELP_TEXT_WRAPPER"]')).toBeInTheDocument();
  });
  it('Should set a custom element data attribute on Checkbox', (): void => {
    const { container } = render(
      <CheckboxGroup element="MY_CHECKBOX_GROUP" data-testid="checkbox-group" {...defaultGroupProps} errorText="error">
        <Checkbox element="SPECIAL_CHECKBOX" {...defaultProps} helpText="bar">
          foo
        </Checkbox>
      </CheckboxGroup>,
    );

    expect(screen.getByTestId('checkbox-group')).toHaveAttribute('data-paste-element', 'MY_CHECKBOX_GROUP');
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_GROUP_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_GROUP_FIELD"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_GROUP_ERROR_TEXT_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SPECIAL_CHECKBOX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SPECIAL_CHECKBOX_CONTROL"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SPECIAL_CHECKBOX_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SPECIAL_CHECKBOX_LABEL_TEXT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SPECIAL_CHECKBOX_HELP_TEXT_WRAPPER"]')).toBeInTheDocument();
  });

  it('should add custom styling to default Checkbox', (): void => {
    const { container } = render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizationStyles()}>
        <CheckboxGroup data-testid="checkbox-group" {...defaultGroupProps} errorText="error">
          <Checkbox {...defaultProps} helpText="bar">
            foo
          </Checkbox>
        </CheckboxGroup>
      </CustomizationProvider>,
    );
    expect(screen.getByTestId('checkbox-group')).toHaveStyleRule('padding', '1.25rem');
    expect(container.querySelector('[data-paste-element="CHECKBOX_GROUP_SET"]')).toHaveStyleRule(
      'margin-left',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="CHECKBOX_GROUP_FIELD"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="CHECKBOX_GROUP_ERROR_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="CHECKBOX"]')).toHaveStyleRule('padding', '0.5rem');
    expect(container.querySelector('[data-paste-element="CHECKBOX_CONTROL"]')).toHaveStyleRule('border-radius', '4px');
    expect(container.querySelector('[data-paste-element="CHECKBOX_ICON"]')).toHaveStyleRule('color', 'rgb(0, 20, 137)');
    expect(container.querySelector('[data-paste-element="CHECKBOX_LABEL_TEXT"]')).toHaveStyleRule(
      'color',
      'rgb(0, 20, 137)',
    );
    expect(container.querySelector('[data-paste-element="CHECKBOX_HELP_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
  });

  it('should add custom styling to a custom named Checkbox', (): void => {
    const { container } = render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizationStyles('MY_CHECKBOX')}>
        <CheckboxGroup
          element="MY_CHECKBOX_GROUP"
          data-testid="checkbox-group"
          {...defaultGroupProps}
          errorText="error"
        >
          <Checkbox element="MY_CHECKBOX" {...defaultProps} helpText="bar">
            foo
          </Checkbox>
        </CheckboxGroup>
      </CustomizationProvider>,
    );
    expect(screen.getByTestId('checkbox-group')).toHaveStyleRule('padding', '1.25rem');
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_GROUP_SET"]')).toHaveStyleRule(
      'margin-left',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_GROUP_FIELD"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_GROUP_ERROR_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX"]')).toHaveStyleRule('padding', '0.5rem');
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_CONTROL"]')).toHaveStyleRule(
      'border-radius',
      '4px',
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_ICON"]')).toHaveStyleRule(
      'color',
      'rgb(0, 20, 137)',
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_LABEL_TEXT"]')).toHaveStyleRule(
      'color',
      'rgb(0, 20, 137)',
    );
    expect(container.querySelector('[data-paste-element="MY_CHECKBOX_HELP_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
  });
});

describe('i18n', () => {
  it('Should have default text for the required dot in the legend', () => {
    render(
      <CheckboxGroup {...defaultGroupProps} required>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>,
    );

    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot?.textContent).toEqual('(required)');
  });

  it('Should use the i18nRequiredLabel prop for the required dot in the legend', () => {
    render(
      <CheckboxGroup {...defaultGroupProps} required i18nRequiredLabel="(requis)">
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>,
    );

    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot?.textContent).toEqual('(requis)');
  });
});
