import * as React from 'react';
import {axe} from 'jest-axe';
import {render, screen} from '@testing-library/react';
import {Button} from '@twilio-paste/button';
import {Theme} from '@twilio-paste/theme';
import {Tooltip} from '../src';

const TooltipMock: React.FC<{}> = () => {
  return (
    <Theme.Provider theme="console">
      <Tooltip text="Welcome to Paste!" data-testid="tooltip-example">
        <Button variant="primary">Open Tooltip</Button>
      </Tooltip>
    </Theme.Provider>
  );
};

describe('Tooltip', () => {
  describe('Render', () => {
    render(<TooltipMock />);
    it('should render a tooltip button with aria attributes', () => {
      const renderedTooltipButton = screen.getByRole('button');
      expect(renderedTooltipButton.getAttribute('aria-describedby')).toEqual('paste-tooltip-1');

      const renderedTooltip = screen.getByTestId('tooltip-example');
      expect(renderedTooltip.getAttribute('role')).toEqual('tooltip');
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<TooltipMock />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
