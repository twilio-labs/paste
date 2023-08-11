import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {render, screen} from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {Label} from '@twilio-paste/label';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';

import {Meter} from '../src';

describe('Meter', () => {
  describe('base usage', () => {
    it('should render correctly', () => {
      render(
        <Theme.Provider theme="twilio">
          <Label id="label" htmlFor="">
            Label
          </Label>
          <Meter ariaLabelledby="label" id="meter" min={0} low={33} max={100} high={66} optimum={50} value={40}>
            40%
          </Meter>
        </Theme.Provider>
      );
      const meter = screen.getByRole('meter');
      expect(meter).toBeInTheDocument();
      // expect(meter).toHaveAttribute('min', '0');
      expect(meter).toHaveAttribute('low', '33');
      // expect(meter).toHaveAttribute('max', '100');
      expect(meter).toHaveAttribute('high', '66');
      // expect(meter).toHaveAttribute('optimum', '50')
      expect(meter).toHaveAttribute('id', 'meter');
      // expect(meter).toHaveAttribute('value', '40');
      expect(meter).toHaveAttribute('aria-labelledby', 'label');
    });
  });

  describe('customization', () => {
    it('should set default data-paste-element attribute on meter', () => {
      render(
        <CustomizationProvider theme={TestTheme}>
          <Label id="label" htmlFor="">
            Label
          </Label>
          <Meter ariaLabelledby="label" id="meter" min={0} low={33} max={100} high={66} optimum={50} value={40}>
            40%
          </Meter>
        </CustomizationProvider>
      );
      const meter = screen.getByRole('meter');
      expect(meter).toHaveAttribute('data-paste-element', 'METER');
      expect(meter.firstChild).toHaveAttribute('data-paste-element', 'METER_BAR');
    });

    it('should set custom data-paste-element attribute on meter', () => {
      render(
        <CustomizationProvider theme={TestTheme}>
          <Label id="label" htmlFor="">
            Label
          </Label>
          <Meter
            element="FOO"
            ariaLabelledby="label"
            id="meter"
            min={0}
            low={33}
            max={100}
            high={66}
            optimum={50}
            value={40}
          >
            40%
          </Meter>
        </CustomizationProvider>
      );
      const meter = screen.getByRole('meter');
      expect(meter).toHaveAttribute('data-paste-element', 'FOO');
      expect(meter.firstChild).toHaveAttribute('data-paste-element', 'FOO_BAR');
    });
  });
});
