import * as React from 'react';
import { CustomizationProvider } from '@twilio-paste/customization';
import { render, screen } from '@testing-library/react';

import { formatReturnDate } from '../src';
import {
  DefaultDatePicker,
  DisabledDatePicker,
  ErrorDatePicker,
  InverseDatePicker,
  ReadonlyDatePicker,
} from '../stories/index.stories';

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
      expect(InnerDatePicker).toHaveStyleRule('-webkit-text-fill-color', 'colorTextWeaker', { target: ':disabled' });
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

  describe('Customization', () => {
    const initialProps = {
      id: 'datepicker',
      name: 'dp',
      defaultValue: '2020-03-21',
      'data-testid': 'datepickerid',
    };
    it('should add the element dom attibute', () => {
      const { container } = render(<DefaultDatePicker {...initialProps} />);
      expect(container.querySelector('[data-paste-element="DATEPICKER"]')).toBeInTheDocument();
      expect(screen.getByTestId('datepickerid').getAttribute('data-paste-element')).toEqual('DATEPICKER_ELEMENT');
    });
    it('should add a custom element dom attibute', () => {
      const { container } = render(<DefaultDatePicker element="CUSTOM_DATE" {...initialProps} />);
      expect(container.querySelector('[data-paste-element="CUSTOM_DATE"]')).toBeInTheDocument();
      expect(screen.getByTestId('datepickerid').getAttribute('data-paste-element')).toEqual('CUSTOM_DATE_ELEMENT');
    });

    it('should add custom styles to the DatePicker Component', () => {
      const { container } = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            DATEPICKER: { backgroundColor: 'colorBackgroundBrandStronger' },
            DATEPICKER_ELEMENT: { backgroundColor: 'colorBackgroundBrandHighlight' },
          }}
        >
          <DefaultDatePicker {...initialProps} />
        </CustomizationProvider>,
      );
      const renderedDatepicker = container.querySelector('[data-paste-element="DATEPICKER"]');
      const renderedDatepickerElement = screen.getByTestId('datepickerid');
      expect(renderedDatepicker).toHaveStyleRule('background-color', 'rgb(6, 3, 58)');
      expect(renderedDatepickerElement).toHaveStyleRule('background-color', 'rgb(242, 47, 70)');
    });

    it('should add custom styles to the DatePicker Component variant', () => {
      const { container } = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            DATEPICKER: { variants: { inverse: { backgroundColor: 'colorBackgroundBrand' } } },
            DATEPICKER_ELEMENT: { variants: { inverse: { backgroundColor: 'colorBackgroundBrand' } } },
          }}
        >
          <DefaultDatePicker variant="inverse" {...initialProps} />
        </CustomizationProvider>,
      );
      const renderedDatepicker = container.querySelector('[data-paste-element="DATEPICKER"]');
      const renderedDatepickerElement = screen.getByTestId('datepickerid');
      expect(renderedDatepicker).toHaveStyleRule('background-color', 'rgb(0, 20, 137)');
      expect(renderedDatepickerElement).toHaveStyleRule('background-color', 'rgb(0, 20, 137)');
    });

    it('should add custom styles to a custom DatePicker Component', () => {
      const { container } = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            CUSTOMDATE: { backgroundColor: 'colorBackgroundBusy' },
            CUSTOMDATE_ELEMENT: { backgroundColor: 'colorBackgroundDestructive' },
          }}
        >
          <DefaultDatePicker element="CUSTOMDATE" {...initialProps} />
        </CustomizationProvider>,
      );
      const renderedDatepicker = container.querySelector('[data-paste-element="CUSTOMDATE"]');
      const renderedDatepickerElement = screen.getByTestId('datepickerid');
      expect(renderedDatepicker).toHaveStyleRule('background-color', 'rgb(244, 124, 34)');
      expect(renderedDatepickerElement).toHaveStyleRule('background-color', 'rgb(214, 31, 31)');
    });

    it('should add custom styles to a custom DatePicker Component variant', () => {
      const { container } = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            CUSTOMDATE: { variants: { inverse: { backgroundColor: 'colorBackgroundNew' } } },
            CUSTOMDATE_ELEMENT: { variants: { inverse: { backgroundColor: 'colorBackgroundSuccess' } } },
          }}
        >
          <DefaultDatePicker variant="inverse" element="CUSTOMDATE" {...initialProps} />
        </CustomizationProvider>,
      );
      const renderedDatepicker = container.querySelector('[data-paste-element="CUSTOMDATE"]');
      const renderedDatepickerElement = screen.getByTestId('datepickerid');
      expect(renderedDatepicker).toHaveStyleRule('background-color', 'rgb(231, 220, 250)');
      expect(renderedDatepickerElement).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
    });
  });
});
