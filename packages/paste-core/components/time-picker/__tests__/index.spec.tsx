import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {matchers} from 'jest-emotion';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {formatReturnTime} from '../src/utils';
import {
  DefaultTimePicker,
  DisabledTimePicker,
  ErrorTimePicker,
  InverseTimePicker,
  ReadonlyTimePicker,
} from '../stories/index.stories';

expect.extend(matchers);

describe('formatReturnTime()', () => {
  const TEST_TIME = '13:30:04';

  it('should format times', () => {
    expect(formatReturnTime(TEST_TIME, 'HH:mm')).toEqual('13:30');
    expect(formatReturnTime(TEST_TIME, 'hh:mm')).toEqual('01:30');
    expect(formatReturnTime(TEST_TIME, 'HH:mm:ss')).toEqual('13:30:04');
    expect(formatReturnTime(TEST_TIME, 'hh:mm:ss')).toEqual('01:30:04');
    expect(formatReturnTime(TEST_TIME, 'HH:mm:ss.SSS')).toEqual('13:30:04.000');
    expect(formatReturnTime(TEST_TIME, 'HH:mm:ss.SSS')).toEqual('13:30:04.000');
    expect(formatReturnTime(TEST_TIME, 'hh:mm:ss.SSS aa')).toEqual('01:30:04.000 PM');
  });
  it('should format times with edge cases and catch errors', () => {
    // testing midnight
    expect(formatReturnTime('00:00', 'hh:mm aa')).toEqual('12:00 AM');
    // test for edge cases (passing in time+date value) to throw an error
    expect(() => {
      formatReturnTime('2022-03-01T03:35Z', 'hh:mm:ss');
    }).toThrow(
      '[Paste Time Picker]: Please make sure timeValue string matches HH:mm OR HH:mm:ss OR HH:mm:ss.SSS format'
    );
  });
});

describe('TimePicker', () => {
  describe('TimePicker inner props', () => {
    const initialProps = {
      id: 'timepicker',
      name: 'dp',
      disabled: true,
      readOnly: true,
      hasError: true,
      required: true,
      defaultValue: '03:53',
      step: '2',
      'data-testid': 'timepickerid',
    };
    render(<DefaultTimePicker {...initialProps} />);
    const InnerTimePicker = screen.getByTestId('timepickerid');

    it('should set disabled correctly', () => {
      expect(InnerTimePicker.getAttribute('disabled')).toEqual('');
      expect(InnerTimePicker).toHaveStyleRule('-webkit-text-fill-color', 'colorTextWeaker', {target: ':disabled'});
    });

    it('should set readOnly correctly', () => {
      expect(InnerTimePicker.getAttribute('aria-readonly')).toEqual('true');
      expect(InnerTimePicker.getAttribute('readOnly')).toEqual('');
    });

    it('should set hasErorr correctly', () => {
      expect(InnerTimePicker.getAttribute('aria-invalid')).toEqual('true');
    });

    it('should set id correctly', () => {
      expect(InnerTimePicker.getAttribute('id')).toEqual(initialProps.id);
    });

    it('should set name correctly', () => {
      expect(InnerTimePicker.getAttribute('name')).toEqual(initialProps.name);
    });

    it('should set defaultValue correctly', () => {
      expect(InnerTimePicker.getAttribute('value')).toEqual(initialProps.defaultValue);
    });

    it('should render with margin: space0', () => {
      expect(InnerTimePicker).toHaveStyleRule('margin', 'space0');
    });

    it('should set required correctly', () => {
      expect(InnerTimePicker.getAttribute('required')).toEqual('');
    });

    it('should ignore the step prop', () => {
      expect(InnerTimePicker.getAttribute('step')).toBeNull();
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<DefaultTimePicker />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('Disabled should have no accessibility violations', async () => {
      const {container} = render(<DisabledTimePicker />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('Error case should have no accessibility violations', async () => {
      const {container} = render(<ErrorTimePicker />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('Inverse case should have no accessibility violations', async () => {
      const {container} = render(<InverseTimePicker />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('Read only case should have no accessibility violations', async () => {
      const {container} = render(<ReadonlyTimePicker />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
