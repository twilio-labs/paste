import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';

import {ProgressBar} from '../src';

describe('ProgressBar', () => {
  describe.only('base usage', () => {
    it('should render correctly with all aria attributes', () => {
      const {rerender} = render(
        <Theme.Provider theme="twilio">
          <ProgressBar
            id="test-progress-bar"
            aria-label="test-aria-label"
            aria-labelledby="test-labelledby"
            aria-describedby="test-description"
            value={33}
            minValue={20}
            maxValue={120}
          />
        </Theme.Provider>
      );

      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toBeInTheDocument();
      expect(progressBar).toHaveAttribute('aria-valuemin', '20');
      expect(progressBar).toHaveAttribute('aria-valuemax', '120');
      expect(progressBar).toHaveAttribute('aria-valuenow', '33');
      expect(progressBar).toHaveAttribute('aria-valuetext', '13%');
      expect(progressBar).toHaveAttribute('id', 'test-progress-bar');
      expect(progressBar).toHaveAttribute('aria-label', 'test-aria-label');
      expect(progressBar).toHaveAttribute('aria-describedby', 'test-description');
      expect(progressBar).toHaveAttribute('aria-labelledby', 'test-progress-bar test-labelledby');

      // New render to test other conditions
      rerender(
        <Theme.Provider theme="twilio">
          <ProgressBar
            id="test-progress-bar"
            aria-label="test-aria-label"
            aria-labelledby="test-labelledby"
            aria-describedby="test-description"
            value={50}
            minValue={20}
            maxValue={120}
          />
        </Theme.Provider>
      );
      expect(progressBar).toHaveAttribute('aria-valuenow', '50');
      expect(progressBar).toHaveAttribute('aria-valuetext', '30%');
    });
  });

  describe('Customization', () => {
    it('should set DEFAULT data-paste-element attribute', (): void => {
      render(<ProgressBar id="test-progress-bar" value={33} minValue={20} maxValue={120} />);

      const progressBar = screen.getByRole('progressbar');

      expect(progressBar).toHaveAttribute('data-paste-element', 'PROGRESS_BAR');
      expect(progressBar.firstChild).toHaveAttribute('data-paste-element', 'PROGRESS_BAR_FILL');
    });

    it('should set CUSTOM data-paste-element attribute', (): void => {
      render(<ProgressBar element="PROGGER" id="test-progress-bar" value={33} minValue={20} maxValue={120} />);

      const progressBar = screen.getByRole('progressbar');

      expect(progressBar).toHaveAttribute('data-paste-element', 'PROGGER');
      expect(progressBar.firstChild).toHaveAttribute('data-paste-element', 'PROGGER_FILL');
    });
  });
});
