import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { formatReturnTime } from '../src/utils';
import {
  DefaultTimePicker,
  DisabledTimePicker,
  ErrorTimePicker,
  InverseTimePicker,
  ReadonlyTimePicker,
} from '../stories/index.stories';

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
      '[Paste Time Picker]: Please make sure timeValue string matches HH:mm OR HH:mm:ss OR HH:mm:ss.SSS format',
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
      expect(InnerTimePicker).toHaveStyleRule('-webkit-text-fill-color', 'colorTextWeaker', { target: ':disabled' });
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

  describe('Customization', () => {
    const initialProps = {
      id: 'timepicker',
      name: 'dp',
      defaultValue: '',
      'data-testid': 'datetimepickerid',
    };
    it('should add the element dom attibute', () => {
      const { container } = render(<DefaultTimePicker {...initialProps} />);
      expect(container.querySelector('[data-paste-element="TIMEPICKER"]')).toBeInTheDocument();
      expect(screen.getByTestId('datetimepickerid').getAttribute('data-paste-element')).toEqual('TIMEPICKER_ELEMENT');
    });
    it('should add a custom element dom attibute', () => {
      const { container } = render(<DefaultTimePicker element="CUSTOM_TIME" {...initialProps} />);
      expect(container.querySelector('[data-paste-element="CUSTOM_TIME"]')).toBeInTheDocument();
      expect(screen.getByTestId('datetimepickerid').getAttribute('data-paste-element')).toEqual('CUSTOM_TIME_ELEMENT');
    });

    it('should add custom styles to the TimePicker Component', () => {
      const { container } = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            TIMEPICKER: { backgroundColor: 'colorBackgroundBrandStronger' },
            TIMEPICKER_ELEMENT: { backgroundColor: 'colorBackgroundBrandHighlight' },
          }}
        >
          <DefaultTimePicker {...initialProps} />
        </CustomizationProvider>,
      );
      const renderedTimepicker = container.querySelector('[data-paste-element="TIMEPICKER"]');
      const renderedTimepickerElement = screen.getByTestId('datetimepickerid');
      expect(renderedTimepicker).toHaveStyleRule('background-color', 'rgb(6, 3, 58)');
      expect(renderedTimepickerElement).toHaveStyleRule('background-color', 'rgb(242, 47, 70)');
    });

    it('should add custom styles to the TimePicker Component variant', () => {
      const { container } = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            TIMEPICKER: { variants: { inverse: { backgroundColor: 'colorBackgroundBrand' } } },
            TIMEPICKER_ELEMENT: { variants: { inverse: { backgroundColor: 'colorBackgroundBrand' } } },
          }}
        >
          <DefaultTimePicker variant="inverse" {...initialProps} />
        </CustomizationProvider>,
      );
      const renderedTimepicker = container.querySelector('[data-paste-element="TIMEPICKER"]');
      const renderedTimepickerElement = screen.getByTestId('datetimepickerid');
      expect(renderedTimepicker).toHaveStyleRule('background-color', 'rgb(0, 20, 137)');
      expect(renderedTimepickerElement).toHaveStyleRule('background-color', 'rgb(0, 20, 137)');
    });

    it('should add custom styles to a custom TimePicker Component', () => {
      const { container } = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            CUSTOM_TIME: { backgroundColor: 'colorBackgroundBusy' },
            CUSTOM_TIME_ELEMENT: { backgroundColor: 'colorBackgroundDestructive' },
          }}
        >
          <DefaultTimePicker element="CUSTOM_TIME" {...initialProps} />
        </CustomizationProvider>,
      );
      const renderedTimepicker = container.querySelector('[data-paste-element="CUSTOM_TIME"]');
      const renderedTimepickerElement = screen.getByTestId('datetimepickerid');
      expect(renderedTimepicker).toHaveStyleRule('background-color', 'rgb(244, 124, 34)');
      expect(renderedTimepickerElement).toHaveStyleRule('background-color', 'rgb(214, 31, 31)');
    });

    it('should add custom styles to a custom TimePicker Component variant', () => {
      const { container } = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            CUSTOM_TIME: { variants: { inverse: { backgroundColor: 'colorBackgroundNew' } } },
            CUSTOM_TIME_ELEMENT: { variants: { inverse: { backgroundColor: 'colorBackgroundSuccess' } } },
          }}
        >
          <DefaultTimePicker variant="inverse" element="CUSTOM_TIME" {...initialProps} />
        </CustomizationProvider>,
      );
      const renderedTimepicker = container.querySelector('[data-paste-element="CUSTOM_TIME"]');
      const renderedTimepickerElement = screen.getByTestId('datetimepickerid');
      expect(renderedTimepicker).toHaveStyleRule('background-color', 'rgb(231, 220, 250)');
      expect(renderedTimepickerElement).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
    });
  });
});
