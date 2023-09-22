import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import type { RenderOptions } from '@testing-library/react';

import { Default, AriaLabel, Customized } from '../stories/index.stories';

const ThemeWrapper: RenderOptions['wrapper'] = ({ children }) => (
  <Theme.Provider theme="default">{children}</Theme.Provider>
);

const elementAttr = 'data-paste-element';

describe('Meter', () => {
  describe('base usage', () => {
    it('should render correctly', () => {
      render(<Default />, { wrapper: ThemeWrapper });
      const meter = screen.getByRole('meter');
      expect(meter).toBeInTheDocument();
      expect(meter).toHaveAttribute('aria-valuemin', '0');
      expect(meter).toHaveAttribute('aria-valuemax', '100');
      expect(meter).toHaveAttribute('aria-valuenow', '75');
      expect(meter).toHaveAttribute('aria-valuetext', '75%');
      expect(meter).toHaveAttribute('id');
      expect(meter).toHaveAttribute('aria-labelledby');
    });

    it('should apply aria-label correctly', () => {
      render(<AriaLabel />, { wrapper: ThemeWrapper });
      const meter = screen.getByRole('meter');
      expect(meter).toHaveAttribute('aria-label', 'Storage space');
      expect(meter).not.toHaveAttribute('aria-labelledby');
    });
  });

  describe('Customization', () => {
    it('should set default data-paste-element attribute on meter', () => {
      render(<Customized />);
      const meterLabelOne = screen.getByTestId('meter_label_one');
      expect(meterLabelOne).toHaveAttribute(elementAttr, 'METER_LABEL');
      expect(meterLabelOne.parentElement).toHaveAttribute(elementAttr, 'METER_LABEL_WRAPPER');
      expect(meterLabelOne.nextElementSibling).toHaveAttribute(elementAttr, 'METER_LABEL_VALUE_LABEL');
      const meterOne = screen.getByTestId('meter_one');
      expect(meterOne).toHaveAttribute(elementAttr, 'METER');
      expect(meterOne.firstElementChild).toHaveAttribute(elementAttr, 'METER_BAR');
      expect(meterOne.firstElementChild?.firstElementChild).toHaveAttribute(elementAttr, 'METER_FILL');
      expect(meterOne.lastElementChild).toHaveAttribute(elementAttr, 'METER_MIN_MAX_WRAPPER');
      expect(meterOne.lastElementChild?.firstElementChild).toHaveAttribute(elementAttr, 'METER_MIN');
      expect(meterOne.lastElementChild?.lastElementChild).toHaveAttribute(elementAttr, 'METER_MAX');
    });

    it('should set custom data-paste-element attribute on meter', () => {
      render(<Customized />);
      const meterLabelTwo = screen.getByTestId('meter_label_two');
      expect(meterLabelTwo).toHaveAttribute(elementAttr, 'FOO_LABEL');
      expect(meterLabelTwo.parentElement).toHaveAttribute(elementAttr, 'FOO_LABEL_WRAPPER');
      expect(meterLabelTwo.nextElementSibling).toHaveAttribute(elementAttr, 'FOO_LABEL_VALUE_LABEL');
      const meterTwo = screen.getByTestId('meter_two');
      expect(meterTwo).toHaveAttribute(elementAttr, 'FOO');
      expect(meterTwo.firstElementChild).toHaveAttribute(elementAttr, 'FOO_BAR');
      expect(meterTwo.firstElementChild?.firstElementChild).toHaveAttribute(elementAttr, 'FOO_FILL');
      expect(meterTwo.lastElementChild).toHaveAttribute(elementAttr, 'FOO_MIN_MAX_WRAPPER');
      expect(meterTwo.lastElementChild?.firstElementChild).toHaveAttribute(elementAttr, 'FOO_MIN');
      expect(meterTwo.lastElementChild?.lastElementChild).toHaveAttribute(elementAttr, 'FOO_MAX');
    });
  });
});
