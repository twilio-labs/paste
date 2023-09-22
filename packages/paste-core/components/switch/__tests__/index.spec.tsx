import { fireEvent, render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { PasteCustomCSS } from '@twilio-paste/customization';
import * as React from 'react';

import { Switch, SwitchGroup } from '../src';

const getCustomizationStyles = (element = 'SWITCH'): { [key: string]: PasteCustomCSS } => ({
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

describe('Switch', () => {
  it('should render on and off correctly', () => {
    const { container } = render(<Switch {...defaultProps}>foo</Switch>);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).not.toBeNull();
    expect(switchElement.id).toBeDefined();

    const checkIcon = container.querySelector('[data-paste-element="SWITCH_KNOB"]');
    expect(checkIcon).toHaveStyleRule('transform', 'translateX(0%)');
    fireEvent.click(switchElement);
    expect(checkIcon).toHaveStyleRule('transform', 'translateX(-100%)');
  });

  it('should render as invalid', () => {
    const { getByRole } = render(
      <Switch {...defaultProps} hasError>
        foo
      </Switch>,
    );
    expect(getByRole('switch').getAttribute('aria-invalid')).toBeTruthy();
  });

  it('should use the id prop when passed', () => {
    render(
      <Switch {...defaultProps} id="my-id" onChange={NOOP}>
        foo
      </Switch>,
    );
    const switchElement = screen.getByRole('switch');
    expect(switchElement.id).toBe('my-id');
  });

  it('should render as checked when defaultChecked', () => {
    const { getByLabelText, container } = render(
      <Switch {...defaultProps} defaultChecked onChange={NOOP}>
        foo
      </Switch>,
    );
    expect((getByLabelText('foo') as HTMLInputElement).checked).toBeTruthy();

    const checkIcon = container.querySelector('[data-paste-element="SWITCH_ICON"]');
    expect(checkIcon).toHaveStyleRule('display', 'block');
  });

  it('should render as checked when controlled', () => {
    const { getByLabelText, container } = render(
      <Switch {...defaultProps} checked onChange={NOOP}>
        foo
      </Switch>,
    );
    expect((getByLabelText('foo') as HTMLInputElement).checked).toBeTruthy();

    const checkIcon = container.querySelector('[data-paste-element="SWITCH_ICON"');
    expect(checkIcon).toHaveStyleRule('display', 'block');
  });

  it('should render a required dot', () => {
    render(
      <Switch {...defaultProps} required onChange={NOOP}>
        foo
      </Switch>,
    );
    const label = screen.getByText('foo');
    const requiredDot = label.querySelector('[data-paste-element="REQUIRED_DOT"]');

    expect(requiredDot).toBeDefined();
  });

  it('should render as disabled', () => {
    const { getByLabelText } = render(
      <Switch {...defaultProps} disabled>
        foo
      </Switch>,
    );
    expect((getByLabelText('foo') as HTMLInputElement).disabled).toBeTruthy();
  });

  it('should render an id', () => {
    const { getByLabelText } = render(<Switch {...defaultProps}>foo</Switch>);
    expect(getByLabelText('foo').id).toBe('foo');
  });

  it('should render a name', () => {
    const { getByLabelText } = render(<Switch {...defaultProps}>foo</Switch>);
    expect((getByLabelText('foo') as HTMLInputElement).name).toBe('foo');
  });

  it('should render aria attributes', () => {
    const { getByLabelText } = render(
      <Switch {...defaultProps} aria-label="foo" aria-labelledby="bar" aria-busy="true">
        foo
      </Switch>,
    );
    expect(getByLabelText('foo').getAttribute('aria-label')).toBe('foo');
    expect(getByLabelText('foo').getAttribute('aria-labelledby')).toBe('bar');
    expect(getByLabelText('foo').getAttribute('aria-busy')).toBe('true');
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const { getByText } = render(
      <Switch {...defaultProps} helpText={helpText}>
        foo
      </Switch>,
    );
    expect(getByText(helpText)).toBeDefined();
  });
});

describe('Switch Group', () => {
  it('should render a fieldset and legend', () => {
    const { container } = render(
      <SwitchGroup {...defaultGroupProps}>
        <Switch {...defaultProps}>foo</Switch>
      </SwitchGroup>,
    );
    expect(container.querySelector('fieldset')).not.toBeNull();
    expect(screen.getByText('This is a group legend')).not.toBeNull();
  });

  it('should have a required a required dot in the legend', () => {
    render(
      <SwitchGroup {...defaultGroupProps} required>
        <Switch {...defaultProps}>foo</Switch>
      </SwitchGroup>,
    );

    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot).toBeDefined();
  });

  it('should render a name', () => {
    const { getByRole } = render(
      <SwitchGroup {...defaultGroupProps}>
        <Switch {...defaultProps}>foo</Switch>
      </SwitchGroup>,
    );
    expect((getByRole('switch') as HTMLInputElement).name).toBe(defaultProps.name);
  });

  it('should render a disabled switch in the switch group', () => {
    const { getByRole } = render(
      <SwitchGroup {...defaultGroupProps}>
        <Switch {...defaultProps} disabled>
          foo
        </Switch>
      </SwitchGroup>,
    );
    expect((getByRole('switch') as HTMLInputElement).disabled).toBeTruthy();
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const { getByText } = render(
      <SwitchGroup {...defaultGroupProps} helpText={helpText}>
        <Switch {...defaultProps}>foo</Switch>
      </SwitchGroup>,
    );
    expect(getByText(helpText)).toBeDefined();
  });

  it('renders an errorText message when errorText prop is present', () => {
    const errorText = 'I am an errorText message';
    const { getByText } = render(
      <SwitchGroup {...defaultGroupProps} errorText={errorText}>
        <Switch {...defaultProps}>foo</Switch>
      </SwitchGroup>,
    );
    expect(getByText(errorText)).toBeDefined();
  });
});

describe('Switch event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const { getByTestId } = render(
      <Switch
        data-testid="switch-button"
        id="foo"
        name="foo"
        checked
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      >
        foo
      </Switch>,
    );

    fireEvent.click(getByTestId('switch-button'));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    fireEvent.focus(getByTestId('switch-button'));
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    fireEvent.blur(getByTestId('switch-button'));
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  it('Should not call onChange handler when uncontrolled', () => {
    const onChangeMock: jest.Mock = jest.fn();

    const { getByTestId } = render(
      <Switch data-testid="switch-button" id="foo" name="foo" onChange={onChangeMock}>
        foo
      </Switch>,
    );

    fireEvent.click(getByTestId('switch-button'));
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  });

  it('Should check the switch when controlled', () => {
    const MockSwitch: React.FC = () => {
      const [checked, setChecked] = React.useState(false);
      return (
        <Switch
          data-testid="switch-button"
          id="foo"
          name="foo"
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
          }}
        >
          foo
        </Switch>
      );
    };

    render(<MockSwitch />);
    const switchButton = screen.getByTestId('switch-button') as HTMLInputElement;

    fireEvent.click(switchButton);
    expect(switchButton.checked).toBe(true);
    expect(switchButton.getAttribute('aria-checked')).toBeTruthy();
  });

  it('Should check the switch when uncontrolled', () => {
    const MockSwitch: React.FC = () => {
      return (
        <Switch data-testid="switch-button" id="foo" name="foo">
          foo
        </Switch>
      );
    };

    render(<MockSwitch />);
    const switchButton = screen.getByTestId('switch-button') as HTMLInputElement;

    fireEvent.click(switchButton);
    expect(switchButton.checked).toBe(true);
    expect(switchButton.getAttribute('aria-checked')).toBeTruthy();
  });
});

describe('Customization', () => {
  it('Should set an element data attribute for Switch', (): void => {
    const { container } = render(
      <SwitchGroup data-testid="switch-group" {...defaultGroupProps} errorText="error">
        <Switch {...defaultProps} helpText="bar">
          foo
        </Switch>
      </SwitchGroup>,
    );

    expect(screen.getByTestId('switch-group')).toHaveAttribute('data-paste-element', 'SWITCH_GROUP');
    expect(container.querySelector('[data-paste-element="SWITCH_GROUP_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SWITCH_GROUP_FIELD"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SWITCH_GROUP_ERROR_TEXT_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SWITCH"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SWITCH_CONTROL"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SWITCH_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SWITCH_LABEL_TEXT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SWITCH_HELP_TEXT_WRAPPER"]')).toBeInTheDocument();
  });
  it('Should set a custom element data attribute on Switch', (): void => {
    const { container } = render(
      <SwitchGroup element="MY_SWITCH_GROUP" data-testid="switch-group" {...defaultGroupProps} errorText="error">
        <Switch element="SPECIAL_SWITCH" {...defaultProps} helpText="bar">
          foo
        </Switch>
      </SwitchGroup>,
    );

    expect(screen.getByTestId('switch-group')).toHaveAttribute('data-paste-element', 'MY_SWITCH_GROUP');
    expect(container.querySelector('[data-paste-element="MY_SWITCH_GROUP_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_SWITCH_GROUP_FIELD"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_SWITCH_GROUP_ERROR_TEXT_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SPECIAL_SWITCH"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SPECIAL_SWITCH_CONTROL"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SPECIAL_SWITCH_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SPECIAL_SWITCH_LABEL_TEXT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SPECIAL_SWITCH_HELP_TEXT_WRAPPER"]')).toBeInTheDocument();
  });

  it('should add custom styling to default Switch', (): void => {
    const { container } = render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizationStyles()}>
        <SwitchGroup data-testid="switch-group" {...defaultGroupProps} errorText="error">
          <Switch {...defaultProps} helpText="bar">
            foo
          </Switch>
        </SwitchGroup>
      </CustomizationProvider>,
    );
    expect(screen.getByTestId('switch-group')).toHaveStyleRule('padding', '1.25rem');
    expect(container.querySelector('[data-paste-element="SWITCH_GROUP_SET"]')).toHaveStyleRule(
      'margin-left',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="SWITCH_GROUP_FIELD"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="SWITCH_GROUP_ERROR_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="SWITCH"]')).toHaveStyleRule('padding', '0.5rem');
    expect(container.querySelector('[data-paste-element="SWITCH_CONTROL"]')).toHaveStyleRule('border-radius', '4px');
    expect(container.querySelector('[data-paste-element="SWITCH_ICON"]')).toHaveStyleRule('color', 'rgb(0, 20, 137)');
    expect(container.querySelector('[data-paste-element="SWITCH_LABEL_TEXT"]')).toHaveStyleRule(
      'color',
      'rgb(0, 20, 137)',
    );
    expect(container.querySelector('[data-paste-element="SWITCH_HELP_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
  });

  it('should add custom styling to a custom named Switch', (): void => {
    const { container } = render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizationStyles('MY_SWITCH')}>
        <SwitchGroup element="MY_SWITCH_GROUP" data-testid="switch-group" {...defaultGroupProps} errorText="error">
          <Switch element="MY_SWITCH" {...defaultProps} helpText="bar">
            foo
          </Switch>
        </SwitchGroup>
      </CustomizationProvider>,
    );
    expect(screen.getByTestId('switch-group')).toHaveStyleRule('padding', '1.25rem');
    expect(container.querySelector('[data-paste-element="MY_SWITCH_GROUP_SET"]')).toHaveStyleRule(
      'margin-left',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="MY_SWITCH_GROUP_FIELD"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="MY_SWITCH_GROUP_ERROR_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
    expect(container.querySelector('[data-paste-element="MY_SWITCH"]')).toHaveStyleRule('padding', '0.5rem');
    expect(container.querySelector('[data-paste-element="MY_SWITCH_CONTROL"]')).toHaveStyleRule('border-radius', '4px');
    expect(container.querySelector('[data-paste-element="MY_SWITCH_ICON"]')).toHaveStyleRule(
      'color',
      'rgb(0, 20, 137)',
    );
    expect(container.querySelector('[data-paste-element="MY_SWITCH_LABEL_TEXT"]')).toHaveStyleRule(
      'color',
      'rgb(0, 20, 137)',
    );
    expect(container.querySelector('[data-paste-element="MY_SWITCH_HELP_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-bottom',
      '1.25rem',
    );
  });
});

describe('i18n', () => {
  it('Should have default text for the required dot in the legend', () => {
    render(
      <SwitchGroup {...defaultGroupProps} required>
        <Switch {...defaultProps}>foo</Switch>
      </SwitchGroup>,
    );

    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot?.textContent).toEqual('(required)');
  });

  it('Should use the i18nRequiredLabel prop for the required dot in the legend', () => {
    render(
      <SwitchGroup {...defaultGroupProps} required i18nRequiredLabel="(requis)">
        <Switch {...defaultProps}>foo</Switch>
      </SwitchGroup>,
    );

    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot?.textContent).toEqual('(requis)');
  });
});
