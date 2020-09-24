import * as React from 'react';
import {render} from 'react-dom';
import {render as testRender, fireEvent} from '@testing-library/react';
import {axe} from 'jest-axe';
import {Radio, RadioGroup} from '../src';

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
    const {getByRole} = testRender(<Radio {...defaultProps}>foo</Radio>);
    expect(getByRole('radio')).not.toBeNull();
  });

  it('should render as invalid', () => {
    const {getByRole} = testRender(
      <Radio {...defaultProps} hasError>
        foo
      </Radio>
    );
    expect(getByRole('radio').getAttribute('aria-invalid')).toBeTruthy();
  });

  it('should render as checked', () => {
    const {getByLabelText} = testRender(
      <Radio {...defaultProps} checked>
        foo
      </Radio>
    );
    expect(getByLabelText('foo').checked).toBeTruthy();
  });

  it('should render as disabled', () => {
    const {getByLabelText} = testRender(
      <Radio {...defaultProps} disabled>
        foo
      </Radio>
    );
    expect(getByLabelText('foo').disabled).toBeTruthy();
  });

  it('should render an id', () => {
    const {getByLabelText} = testRender(<Radio {...defaultProps}>foo</Radio>);
    expect(getByLabelText('foo').id).toBe('foo');
  });

  it('should render a value', () => {
    const {getByLabelText} = testRender(<Radio {...defaultProps}>foo</Radio>);
    expect(getByLabelText('foo').value).toBe('foo');
  });

  it('should render a name', () => {
    const {getByLabelText} = testRender(<Radio {...defaultProps}>foo</Radio>);
    expect(getByLabelText('foo').name).toBe('foo');
  });

  it('should render aria attributes', () => {
    const {getByLabelText} = testRender(
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
    const {getByText} = testRender(
      <Radio {...defaultProps} helpText={helpText}>
        foo
      </Radio>
    );
    expect(getByText(helpText)).toBeDefined();
  });
});

describe('Radio Group', () => {
  it('should render', () => {
    const {container} = testRender(
      <RadioGroup {...defaultGroupProps}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect(container.querySelector('fieldset')).not.toBeNull();
  });

  it('should render a legend', () => {
    const {getByText} = testRender(
      <RadioGroup {...defaultGroupProps}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect(getByText('This is a group legend')).not.toBeNull();
  });

  it('should have a required a required dot in the legend', () => {
    const {getByText} = testRender(
      <RadioGroup {...defaultGroupProps} required>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect(getByText('Required:')).not.toBeNull();
  });

  it('should render a value', () => {
    const {getByRole} = testRender(
      <RadioGroup {...defaultGroupProps}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect(getByRole('radio').value).toBe('foo');
  });

  it('should render a name', () => {
    const {getByRole} = testRender(
      <RadioGroup {...defaultGroupProps}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect(getByRole('radio').name).toBe(defaultProps.name);
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const {getByText} = testRender(
      <RadioGroup {...defaultGroupProps} helpText={helpText}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect(getByText(helpText)).toBeDefined();
  });

  it('renders an errorText message when errorText prop is present', () => {
    const errorText = 'I am an errorText message';
    const {getByText} = testRender(
      <RadioGroup {...defaultGroupProps} errorText={errorText}>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>
    );
    expect(getByText(errorText)).toBeDefined();
  });
});

describe('Radio event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const {getByTestId} = testRender(
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

    const {getByTestId} = testRender(
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

  it('Should check the selected radio', () => {
    const MockRadioGroup: React.FC<{}> = () => {
      const [value, setValue] = React.useState();
      return (
        <RadioGroup
          legend="foo"
          id="foo"
          name="foo"
          value={value}
          onChange={newVal => {
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

    const {getByTestId} = testRender(<MockRadioGroup />);

    expect(getByTestId('radio-button').checked).toBe(false);
    expect(getByTestId('radio-button1').checked).toBe(false);
    fireEvent.click(getByTestId('radio-button'));
    expect(getByTestId('radio-button').checked).toBe(true);
    fireEvent.click(getByTestId('radio-button1'));
    expect(getByTestId('radio-button1').checked).toBe(true);
    expect(getByTestId('radio-button').checked).toBe(false);
  });

  it('Should check the selected value on initial', () => {
    const MockRadioGroup: React.FC<{}> = () => {
      const [value, setValue] = React.useState('2');
      return (
        <RadioGroup
          legend="foo"
          id="foo"
          name="foo"
          value={value}
          onChange={newVal => {
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

    const {getByTestId} = testRender(<MockRadioGroup />);

    expect(getByTestId('radio-button').checked).toBe(false);
    expect(getByTestId('radio-button1').checked).toBe(true);
  });
});

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const helpText = "I'm help text";
    const errorText = "I'm error text";
    const container = document.createElement('div');
    document.body.append(container);
    render(
      <RadioGroup {...defaultGroupProps} helpText={helpText} errorText={errorText} required>
        <Radio {...defaultProps}>foo</Radio>
      </RadioGroup>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
