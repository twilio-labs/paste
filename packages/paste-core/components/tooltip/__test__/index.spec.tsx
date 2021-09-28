import * as React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import {Button} from '@twilio-paste/button';
import {Theme} from '@twilio-paste/theme';
import {matchers} from 'jest-emotion';
import {CustomizationProvider} from '@twilio-paste/customization';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {StateHookExample} from '../stories/index.stories';
import {Tooltip} from '../src';

expect.extend(matchers);

const TooltipWithoutTheme: React.FC<{elementName?: string}> = ({elementName}) => {
  return (
    <Tooltip text="Welcome to Paste!" element={elementName} data-testid="tooltip-example">
      <Button variant="primary">Open Tooltip</Button>
    </Tooltip>
  );
};

describe('Tooltip', () => {
  describe('Render', () => {
    render(
      <Theme.Provider theme="default">
        <TooltipWithoutTheme />
      </Theme.Provider>
    );
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

  describe('Customization', () => {
    it('should set a default element data attribute for Tooltip', (): void => {
      render(
        <Theme.Provider theme="default">
          <TooltipWithoutTheme />
        </Theme.Provider>
      );
      const tooltip = screen.getByTestId('tooltip-example');
      const tooltipText = screen.getByText('Welcome to Paste!');

      expect(tooltip.getAttribute('data-paste-element')).toEqual('TOOLTIP');
      expect(tooltipText.getAttribute('data-paste-element')).toEqual('TOOLTIP_TEXT');
    });

    it('should set a custom element data attribute for a custom element name on Tooltip', (): void => {
      render(
        <Theme.Provider theme="default">
          <TooltipWithoutTheme elementName="CUSTOM_TOOLTIP" />
        </Theme.Provider>
      );
      const tooltip = screen.getByTestId('tooltip-example');
      const tooltipText = screen.getByText('Welcome to Paste!');

      expect(tooltip.getAttribute('data-paste-element')).toEqual('CUSTOM_TOOLTIP');
      expect(tooltipText.getAttribute('data-paste-element')).toEqual('CUSTOM_TOOLTIP_TEXT');
    });

    it('should add custom styling to default Tooltip', (): void => {
      render(
        <CustomizationProvider
          // @ts-expect-error global test variable
          theme={TestTheme}
        >
          <TooltipWithoutTheme />
        </CustomizationProvider>
      );
      const tooltip = screen.getByTestId('tooltip-example');
      const tooltipText = screen.getByText('Welcome to Paste!');
      screen.debug();
      expect(tooltip).toHaveStyleRule('background-color', 'rgb(18,28,45)');
      expect(tooltipText).toHaveStyleRule('color', 'rgb(255,255,255)');
    });

    it('should add custom styling to custom named Tooltip', (): void => {
      render(
        <CustomizationProvider
          // @ts-expect-error global test variable
          theme={TestTheme}
          elements={{
            CUSTOM_TOOLTIP: {
              backgroundColor: 'colorBackgroundErrorWeakest',
              borderColor: 'colorBorderDestructive',
              maxWidth: 'size10',
              textAlign: 'center',
            },
            CUSTOM_TOOLTIP_TEXT: {
              color: 'colorTextErrorStrong',
            },
          }}
        >
          <TooltipWithoutTheme elementName="CUSTOM_TOOLTIP" />
        </CustomizationProvider>
      );
      const tooltip = screen.getByTestId('tooltip-example');
      const tooltipText = screen.getByText('Welcome to Paste!');
      screen.debug();
      expect(tooltip).toHaveStyleRule('background-color', 'rgb(254,236,236)');
      expect(tooltipText).toHaveStyleRule('color', 'rgb(173,17,17)');
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <Theme.Provider theme="default">
          <TooltipWithoutTheme />
        </Theme.Provider>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
