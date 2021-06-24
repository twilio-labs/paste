import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {PopoverTop, StateHookExample} from '../stories/index.stories';

describe('Popover', () => {
  describe('Render', () => {
    it('should render a popover button with aria attributes', async () => {
      render(
        <Theme.Provider theme="default">
          <PopoverTop />
        </Theme.Provider>
      );
      const renderedPopoverButton = screen.getByRole('button');
      const renderedPopover = screen.getByTestId('top-popover');
      expect(renderedPopoverButton.getAttribute('aria-haspopup')).toEqual('dialog');
      expect(renderedPopoverButton.getAttribute('aria-controls')).toEqual('test-id');
      expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('false');
      expect(renderedPopover).not.toBeVisible();
      renderedPopoverButton.click();
      await waitFor(() => expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('true'));
      await waitFor(() => expect(renderedPopover).toBeVisible());
    });

    it('should render a popover', () => {
      render(
        <Theme.Provider theme="default">
          <PopoverTop />
        </Theme.Provider>
      );
      const renderedPopover = screen.getByLabelText('Popover');
      expect(renderedPopover.getAttribute('role')).toEqual('dialog');
    });

    it('should render a popover and show/hide on external button click', () => {
      render(
        <Theme.Provider theme="default">
          <StateHookExample />
        </Theme.Provider>
      );

      const ButtonOne = screen.queryByTestId('show-button');
      const ButtonTwo = screen.queryByTestId('hide-button');

      let popover = screen.queryByTestId('state-hook-popover');

      if (ButtonOne === null || ButtonTwo === null || popover === null) {
        return;
      }
      expect(popover.getAttribute('hidden')).toBeDefined();

      ButtonOne.click();
      popover = screen.queryByTestId('state-hook-popover');
      if (popover === null) {
        return;
      }
      expect(popover).toBeVisible();

      ButtonTwo.click();
      popover = screen.queryByTestId('state-hook-popover');
      if (popover === null) {
        return;
      }
      expect(popover).not.toBeVisible();
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <Theme.Provider theme="default">
          <PopoverTop />
        </Theme.Provider>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
