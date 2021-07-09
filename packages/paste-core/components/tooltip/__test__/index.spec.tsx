import * as React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import {Button} from '@twilio-paste/button';
import {Theme} from '@twilio-paste/theme';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {StateHookExample} from '../stories/index.stories';
import {Tooltip} from '../src';

const TooltipMock: React.FC = () => {
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

    it('should render a tooltip and show/hide on button click', () => {
      render(<StateHookExample />);

      const ButtonOne = screen.queryByTestId('show-button');
      const ButtonTwo = screen.queryByTestId('hide-button');

      let tooltip = screen.queryByTestId('state-hook-tooltip');

      if (ButtonOne === null || ButtonTwo === null || tooltip === null) {
        return;
      }
      expect(tooltip.getAttribute('hidden')).not.toBeNull();

      ButtonOne.click();
      tooltip = screen.queryByTestId('state-hook-tooltip');
      if (tooltip === null) {
        return;
      }
      expect(tooltip.getAttribute('hidden')).toBeNull();

      ButtonTwo.click();
      tooltip = screen.queryByTestId('state-hook-tooltip');
      if (tooltip === null) {
        return;
      }
      expect(tooltip.getAttribute('hidden')).not.toBeNull();
    });
  });

  describe('Children', () => {
    it('should not override child provided events such as onBlur or onFocus', async () => {
      const focusHandlerMock: jest.Mock = jest.fn();
      const clickHandlerMock: jest.Mock = jest.fn();
      render(
        <Theme.Provider theme="console">
          <Tooltip text="Welcome to Paste!" data-testid="tooltip-children-example">
            <Button variant="primary" onFocus={focusHandlerMock} onClick={clickHandlerMock}>
              Open Tooltip
            </Button>
          </Tooltip>
        </Theme.Provider>
      );
      const tooltip = screen.getByTestId('tooltip-children-example');

      expect(tooltip.getAttribute('hidden')).not.toBeNull();

      await act(async () => {
        await screen.getByRole('button').focus();
      });

      expect(tooltip.getAttribute('hidden')).toBeNull();

      await act(async () => {
        // @ts-expect-error yes, I know activeElement MIGHT be null, but it's not, OK?
        await fireEvent.click(document.activeElement);
      });

      expect(focusHandlerMock).toHaveBeenCalled();
      expect(clickHandlerMock).toHaveBeenCalled();
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
