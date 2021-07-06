import * as React from 'react';
import {matchers} from 'jest-emotion';
import {render, screen} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {formatReturnDate} from '../src';
import {
  DefaultDatePicker,
  DisabledDatePicker,
  ErrorDatePicker,
  InverseDatePicker,
  ReadonlyDatePicker,
} from '../stories/index.stories';

expect.extend(matchers);

describe('formatReturnDate()', () => {
  const TEST_DATE = '2021-02-14';

  it('should format dates', () => {
    expect(formatReturnDate(TEST_DATE, 'MMMM do yy')).toEqual('February 14th 21');
    expect(formatReturnDate(TEST_DATE, 'MMM DDD yyyy')).toEqual('Feb 045 2021');
    expect(formatReturnDate(TEST_DATE, 'MM dd yyyy')).toEqual('02 14 2021');
    expect(formatReturnDate(TEST_DATE, 'EEEEEE MMMMM dd yy')).toEqual('Su F 14 21');
    expect(formatReturnDate(TEST_DATE, 'E..EEE M Do yo')).toEqual('Sun..Sun 2 45th 2021st');
    expect(formatReturnDate(TEST_DATE, 'Mo d Yo')).toEqual('2nd 14 2021st');
  });
  it('should format dates with edge cases and catch errors', () => {
    // test for first day of the year to avoid 1-day-off error
    expect(formatReturnDate('2020-01-01', 'MM/dd/yyyy')).toEqual('01/01/2020');
    // test for edge cases (passing in time+date value) to throw an error
    expect(() => {
      formatReturnDate('2022-03-01T03:35Z', 'MM/dd/yyyy');
    }).toThrow('[Paste Date Picker]: Please make sure dateValue string matches YYYY-MM-DD format');
  });
});
describe('DatePicker', () => {
  describe('DatePicker inner props', () => {
    const initialProps = {
      id: 'datepicker',
      name: 'dp',
      disabled: true,
      readOnly: true,
      hasError: true,
      required: true,
      defaultValue: '2020-03-21',
      'data-testid': 'datepickerid',
    };
    render(<DefaultDatePicker {...initialProps} />);
    const InnerDatePicker = screen.getByTestId('datepickerid');

    it('should set disabled correctly', () => {
      expect(InnerDatePicker.getAttribute('disabled')).toEqual('');
      expect(InnerDatePicker).toHaveStyleRule('-webkit-text-fill-color', 'colorTextWeaker', {target: ':disabled'});
    });

    it('should set readOnly correctly', () => {
      expect(InnerDatePicker.getAttribute('aria-readonly')).toEqual('true');
      expect(InnerDatePicker.getAttribute('readOnly')).toEqual('');
    });

    it('should set hasErorr correctly', () => {
      expect(InnerDatePicker.getAttribute('aria-invalid')).toEqual('true');
    });

    it('should set id correctly', () => {
      expect(InnerDatePicker.getAttribute('id')).toEqual(initialProps.id);
    });

    it('should set name correctly', () => {
      expect(InnerDatePicker.getAttribute('name')).toEqual(initialProps.name);
    });

    it('should set defaultValue correctly', () => {
      expect(InnerDatePicker.getAttribute('value')).toEqual(initialProps.defaultValue);
    });

    it('should render with margin: space0', () => {
      expect(InnerDatePicker).toHaveStyleRule('margin', 'space0');
    });

    it('should set required correctly', () => {
      expect(InnerDatePicker.getAttribute('required')).toEqual('');
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<DefaultDatePicker />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('Disabled should have no accessibility violations', async () => {
      const {container} = render(<DisabledDatePicker />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('hasError should have no accessibility violations', async () => {
      const {container} = render(<ErrorDatePicker />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('inverse should have no accessibility violations', async () => {
      const {container} = render(<InverseDatePicker />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('readOnly should have no accessibility violations', async () => {
      const {container} = render(<ReadonlyDatePicker />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
