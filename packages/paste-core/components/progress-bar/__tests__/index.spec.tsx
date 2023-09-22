import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import { HelpText } from '@twilio-paste/help-text';

import { LABEL_SUFFIX } from '../src/constants';
import { ProgressBar, ProgressBarLabel } from '../src';

describe('ProgressBar', () => {
  describe('base usage', () => {
    it('should render correctly with all aria attributes', () => {
      const { rerender } = render(
        <Theme.Provider theme="twilio">
          <ProgressBarLabel htmlFor="test-progress-bar">Download progress</ProgressBarLabel>
          <ProgressBar id="test-progress-bar" aria-describedby="test-description" value={33} maxValue={120} />
          <HelpText id="test-description">Downloading more ram</HelpText>
        </Theme.Provider>,
      );

      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toBeInTheDocument();
      expect(progressBar).toHaveAttribute('aria-valuemin', '0');
      expect(progressBar).toHaveAttribute('aria-valuemax', '120');
      expect(progressBar).toHaveAttribute('aria-valuenow', '33');
      expect(progressBar).toHaveAttribute('aria-valuetext', '28%');
      expect(progressBar).toHaveAttribute('id', 'test-progress-bar');
      expect(progressBar).toHaveAttribute('aria-describedby', 'test-description');
      expect(progressBar).toHaveAttribute('aria-labelledby', `test-progress-bar${LABEL_SUFFIX}`);
      expect(progressBar).not.toHaveAttribute('aria-label');

      // New render to test other conditions
      rerender(
        <Theme.Provider theme="twilio">
          <ProgressBarLabel htmlFor="test-progress-bar">Download progress</ProgressBarLabel>
          <ProgressBar
            id="test-progress-bar"
            aria-describedby="test-description"
            /*
             * test doesnt understand we have aria-labelledby internally,
             * so we need to add this label to remove the logspam
             */
            aria-label="X"
            value={50}
            maxValue={120}
          />
          <HelpText id="test-description">Downloading more ram</HelpText>
        </Theme.Provider>,
      );
      expect(progressBar).toHaveAttribute('aria-valuenow', '50');
      expect(progressBar).toHaveAttribute('aria-valuetext', '42%');
    });

    it('should render correctly with aria-label', () => {
      render(<ProgressBar id="test-progress-bar" aria-label="Cool progress" />);

      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toBeInTheDocument();
      expect(progressBar).toHaveAttribute('aria-label', 'Cool progress');
      expect(progressBar).not.toHaveAttribute('aria-labelledby');
    });
  });

  describe('Customization', () => {
    it('should set DEFAULT data-paste-element attribute', (): void => {
      render(
        <Theme.Provider theme="twilio">
          <div id="labelledby">Download progress</div>
          <ProgressBar id="test-progress-bar" aria-labelledby="labelledby" value={33} maxValue={120} />
        </Theme.Provider>,
      );

      const progressBar = screen.getByRole('progressbar');

      expect(progressBar).toHaveAttribute('data-paste-element', 'PROGRESS_BAR');
      expect(progressBar.firstChild).toHaveAttribute('data-paste-element', 'PROGRESS_BAR_FILL');
    });

    it('should set CUSTOM data-paste-element attribute', (): void => {
      render(
        <Theme.Provider theme="twilio">
          <ProgressBar
            element="PROGGER"
            id="test-progress-bar"
            aria-label="test-aria-label"
            value={33}
            maxValue={120}
          />
        </Theme.Provider>,
      );

      const progressBar = screen.getByRole('progressbar');

      expect(progressBar).toHaveAttribute('data-paste-element', 'PROGGER');
      expect(progressBar.firstChild).toHaveAttribute('data-paste-element', 'PROGGER_FILL');
    });
  });
});
