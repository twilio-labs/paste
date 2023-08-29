import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import type {RenderOptions} from '@testing-library/react';

import {Default, HiddenValueLabelAriaLabel, Customized} from '../stories/index.stories';

const ThemeWrapper: RenderOptions['wrapper'] = ({children}) => (
  <Theme.Provider theme="default">{children}</Theme.Provider>
);

const elementAttr = 'data-paste-element';

describe('Meter', () => {
  describe('base usage', () => {
    it('should render correctly', () => {
      render(<Default />, {wrapper: ThemeWrapper});
      const meter = screen.getByRole('meter');
      expect(meter).toBeInTheDocument();
      expect(meter).toHaveAttribute('aria-valuemin', '0');
      expect(meter).toHaveAttribute('aria-valuemax', '100');
      expect(meter).toHaveAttribute('aria-valuenow', '75');
      expect(meter).toHaveAttribute('aria-valuetext', '75%');
      expect(meter).toHaveAttribute('id', 'meter');
      expect(meter).toHaveAttribute('aria-labelledby', 'meterMETER_LABEL');
    });

    it('should apply aria-label correctly', () => {
      render(<HiddenValueLabelAriaLabel />, {wrapper: ThemeWrapper});
      const meter = screen.getByRole('meter');
      expect(meter).toHaveAttribute('aria-label', 'Fuel level');
      expect(meter).not.toHaveAttribute('aria-labelledby');
    });
  });

  describe('Customization', () => {
    it('should set default data-paste-element attribute on meter', () => {
      render(<Customized />);
      const meterOne = screen.getByTestId('meter_one');
      expect(meterOne).toHaveAttribute(elementAttr, 'METER');
      const meterLabelOne = screen.getByTestId('meter_label_one');
      expect(meterLabelOne).toHaveAttribute(elementAttr, 'METER_LABEL');
    });

    it('should set custom data-paste-element attribute on meter', () => {
      render(<Customized />);
      const meterTwo = screen.getByTestId('meter_two');
      expect(meterTwo).toHaveAttribute(elementAttr, 'FOO');
      const meterLabelTwo = screen.getByTestId('meter_label_two');
      expect(meterLabelTwo).toHaveAttribute(elementAttr, 'FOO_LABEL');
    });
  });
});
