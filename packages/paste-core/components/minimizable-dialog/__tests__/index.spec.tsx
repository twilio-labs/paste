import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import {
  MinimizableDialog,
  MinimizableDialogButton,
  MinimizableDialogHeader,
  MinimizableDialogContainer,
  MinimizableDialogContent,
} from '../src';
import { StateHookExample } from '../stories/index.stories';

describe('MinimizableDialog', () => {
  describe('Render', () => {
    it('should render a dialog button and dialog with aria attributes', async () => {
      render(
        <MinimizableDialogContainer>
          <MinimizableDialogButton variant="primary">Button</MinimizableDialogButton>
          <MinimizableDialog aria-label="My custom dialog">
            <MinimizableDialogHeader>My custom dialog</MinimizableDialogHeader>
            <MinimizableDialogContent>This is a dialog.</MinimizableDialogContent>
          </MinimizableDialog>
        </MinimizableDialogContainer>,
      );

      const dialogButton = screen.getByRole('button', { name: 'Button' });
      const dialog = screen.getByRole('dialog', { hidden: true });

      expect(dialogButton.getAttribute('aria-haspopup')).toEqual('dialog');
      expect(dialogButton.getAttribute('aria-controls')).toEqual(dialog.id);
      expect(dialogButton.getAttribute('aria-expanded')).toEqual('false');

      expect(dialog).not.toBeVisible();
      await waitFor(() => {
        fireEvent.click(dialogButton);
      });
      expect(dialog).toBeVisible();
    });

    it('should render a dialog and toggle visible and minimized with external buttons', async () => {
      render(<StateHookExample />);

      const showButton = screen.getByRole('button', { name: 'Open dialog' });
      const closeButton = screen.getByRole('button', { name: 'Close dialog' });
      const minimizeButton = screen.getByRole('button', { name: 'Minimize dialog' });
      const expandButton = screen.getByRole('button', { name: 'Expand dialog' });
      const dialog = screen.getByRole('dialog', { hidden: true });
      const dialogContents = screen.getByTestId('dialog-contents');
      const dialogHeader = screen.getByTestId('dialog-header');

      expect(dialog).not.toBeVisible();
      await waitFor(() => {
        fireEvent.click(showButton);
      });
      expect(dialog).toBeVisible();

      await waitFor(() => {
        fireEvent.click(minimizeButton);
      });
      expect(dialogContents).not.toBeVisible();
      expect(dialogHeader).toBeVisible();

      await waitFor(() => {
        fireEvent.click(expandButton);
      });
      expect(dialogContents).toBeVisible();
      expect(dialogHeader).toBeVisible();

      await waitFor(() => {
        fireEvent.click(closeButton);
      });
      expect(dialog).not.toBeVisible();
    });
  });

  describe('i18n', () => {
    it('should have default dismiss and minimize button text', async () => {
      render(
        <MinimizableDialogContainer>
          <MinimizableDialogButton variant="primary">Button</MinimizableDialogButton>
          <MinimizableDialog aria-label="My custom dialog">
            <MinimizableDialogHeader>My custom dialog</MinimizableDialogHeader>
            <MinimizableDialogContent>This is a dialog.</MinimizableDialogContent>
          </MinimizableDialog>
        </MinimizableDialogContainer>,
      );

      const dismissButton = screen.getByRole('button', { name: 'close', hidden: true });
      expect(dismissButton).toBeDefined();

      const minimizeButton = screen.getByRole('button', { name: 'minimize', hidden: true });
      expect(minimizeButton).toBeDefined();
    });
  });
});
