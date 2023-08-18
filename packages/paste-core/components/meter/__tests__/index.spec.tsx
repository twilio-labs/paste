import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import type {RenderOptions} from '@testing-library/react';

import {Default, Customized} from '../stories/index.stories';

const ThemeWrapper: RenderOptions['wrapper'] = ({children}) => (
  <Theme.Provider theme="default">{children}</Theme.Provider>
);

describe('Meter', () => {
  describe('base usage', () => {
    it('should render correctly', () => {
      render(<Default />, {wrapper: ThemeWrapper});
      const meter = screen.getByRole('meter');
      expect(meter).toBeInTheDocument();
      expect(meter).toHaveAttribute('aria-labelledby');
      expect(meter).toHaveAttribute('aria-valuemin', '0');
      expect(meter).toHaveAttribute('aria-valuemax', '100');
      expect(meter).toHaveAttribute('aria-valuenow', '75');
      expect(meter).toHaveAttribute('aria-valuetext', '75%');
      expect(meter).toHaveAttribute('id', 'meter');
    });
  });

  describe('Customization', () => {
    it('should set default data-paste-element attribute on meter', () => {
      render(<Customized />);
      const meterOne = screen.getByTestId('meter_one');
      expect(meterOne).toHaveAttribute('data-paste-element', 'METER_WRAPPER');
    });

    it('should set custom data-paste-element attribute on meter', () => {
      render(<Customized />);
      const meterTwo = screen.getByTestId('meter_two');
      expect(meterTwo).toHaveAttribute('data-paste-element', 'FOO_WRAPPER');
    });
  });
});
