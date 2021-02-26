import * as React from 'react';
import {render} from 'react-dom';
import {render as testRender, fireEvent} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Checkbox, CheckboxGroup} from '../src';

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
    const {getByRole} = testRender(<Checkbox {...defaultProps}>foo</Checkbox>);
    expect(getByRole('checkbox')).not.toBeNull();
  });

  it('should render as invalid', () => {
    const {getByRole} = testRender(
      <Checkbox {...defaultProps} hasError>
        foo
      </Checkbox>
    );
    expect(getByRole('checkbox').getAttribute('aria-invalid')).toBeTruthy();
  });

  it('should render as checked', () => {
    const {getByLabelText} = testRender(
      <Checkbox {...defaultProps} checked onChange={NOOP}>
        foo
      </Checkbox>
    );
    expect((getByLabelText('foo') as HTMLInputElement).checked).toBeTruthy();
  });

  it('should render a required dot', () => {
    const {getByText} = testRender(
      <Checkbox {...defaultProps} required onChange={NOOP}>
        foo
      </Checkbox>
    );
    expect(getByText('Required:')).not.toBeNull();
  });

  it('should render as indeterminate', () => {
    const {getByLabelText} = testRender(
      <Checkbox {...defaultProps} indeterminate onChange={NOOP}>
        foo
      </Checkbox>
    );
    expect(getByLabelText('foo').getAttribute('aria-checked')).toBe('mixed');
  });

  it('should render as disabled', () => {
    const {getByLabelText} = testRender(
      <Checkbox {...defaultProps} disabled>
        foo
      </Checkbox>
    );
    expect((getByLabelText('foo') as HTMLInputElement).disabled).toBeTruthy();
  });

  it('should render an id', () => {
    const {getByLabelText} = testRender(<Checkbox {...defaultProps}>foo</Checkbox>);
    expect(getByLabelText('foo').id).toBe('foo');
  });

  it('should render a name', () => {
    const {getByLabelText} = testRender(<Checkbox {...defaultProps}>foo</Checkbox>);
    expect((getByLabelText('foo') as HTMLInputElement).name).toBe('foo');
  });

  it('should render aria attributes', () => {
    const {getByLabelText} = testRender(
      <Checkbox {...defaultProps} aria-label="foo" aria-labelledby="bar" aria-busy="true">
        foo
      </Checkbox>
    );
    expect(getByLabelText('foo').getAttribute('aria-label')).toBe('foo');
    expect(getByLabelText('foo').getAttribute('aria-labelledby')).toBe('bar');
    expect(getByLabelText('foo').getAttribute('aria-busy')).toBe('true');
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const {getByText} = testRender(
      <Checkbox {...defaultProps} helpText={helpText}>
        foo
      </Checkbox>
    );
    expect(getByText(helpText)).toBeDefined();
  });
});

describe('Checkbox Group', () => {
  it('should render', () => {
    const {container} = testRender(
      <CheckboxGroup {...defaultGroupProps}>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>
    );
    expect(container.querySelector('fieldset')).not.toBeNull();
  });

  it('should render a legend', () => {
    const {getByText} = testRender(
      <CheckboxGroup {...defaultGroupProps}>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>
    );
    expect(getByText('This is a group legend')).not.toBeNull();
  });

  it('should have a required a required dot in the legend', () => {
    const {getByText} = testRender(
      <CheckboxGroup {...defaultGroupProps} required>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>
    );
    expect(getByText('Required:')).not.toBeNull();
  });

  it('should render a name', () => {
    const {getByRole} = testRender(
      <CheckboxGroup {...defaultGroupProps}>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>
    );
    expect((getByRole('checkbox') as HTMLInputElement).name).toBe(defaultProps.name);
  });

  it('should render a disabled checkbox in the checkbox group', () => {
    const {getByRole} = testRender(
      <CheckboxGroup {...defaultGroupProps}>
        <Checkbox {...defaultProps} disabled>
          foo
        </Checkbox>
      </CheckboxGroup>
    );
    expect((getByRole('checkbox') as HTMLInputElement).disabled).toBeTruthy();
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const {getByText} = testRender(
      <CheckboxGroup {...defaultGroupProps} helpText={helpText}>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>
    );
    expect(getByText(helpText)).toBeDefined();
  });

  it('renders an errorText message when errorText prop is present', () => {
    const errorText = 'I am an errorText message';
    const {getByText} = testRender(
      <CheckboxGroup {...defaultGroupProps} errorText={errorText}>
        <Checkbox {...defaultProps}>foo</Checkbox>
      </CheckboxGroup>
    );
    expect(getByText(errorText)).toBeDefined();
  });
});

describe('Checkbox event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const {getByTestId} = testRender(
      <Checkbox
        data-testid="checkbox-button"
        id="foo"
        name="foo"
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      >
        foo
      </Checkbox>
    );

    fireEvent.click(getByTestId('checkbox-button'));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    fireEvent.focus(getByTestId('checkbox-button'));
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    fireEvent.blur(getByTestId('checkbox-button'));
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  it('Should check the checkbox', () => {
    // const onChangeMock: jest.Mock = jest.fn();
    const MockCheckBox: React.FC = () => {
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

    const {getByTestId} = testRender(<MockCheckBox />);

    fireEvent.click(getByTestId('checkbox-button'));
    expect((getByTestId('checkbox-button') as HTMLInputElement).checked).toBe(true);
  });
});

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(
      <Checkbox id="foo" name="foo">
        foo
      </Checkbox>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
