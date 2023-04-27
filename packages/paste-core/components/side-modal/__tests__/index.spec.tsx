import * as React from 'react';
import {render, screen, act, fireEvent} from '@testing-library/react';
import {Button} from '@twilio-paste/button';

import {
  SideModal,
  SideModalButton,
  SideModalHeader,
  SideModalHeading,
  SideModalContainer,
  SideModalBody,
  SideModalFooter,
  SideModalFooterActions,
} from '../src';
import {StateHookExample} from '../stories/index.stories';

describe('SideModal', () => {
  describe('Render', () => {
    it('should render a dialog button and dialog with aria attributes', async () => {
      render(
        <SideModalContainer>
          <SideModalButton variant="primary">Button</SideModalButton>
          <SideModal aria-label="My custom dialog">
            <SideModalHeader>
              <SideModalHeading>My custom dialog</SideModalHeading>
            </SideModalHeader>
            <SideModalBody>This is a dialog.</SideModalBody>
            <SideModalFooter>
              <SideModalFooterActions>
                <Button variant="secondary">Cancel</Button>
              </SideModalFooterActions>
            </SideModalFooter>
          </SideModal>
        </SideModalContainer>
      );

      const dialogButton = screen.getByRole('button', {name: 'Button'});
      expect(dialogButton.getAttribute('aria-haspopup')).toEqual('dialog');
      expect(dialogButton.getAttribute('aria-expanded')).toEqual('false');

      await act(async () => {
        fireEvent.click(dialogButton);
      });

      const dialog = screen.getByRole('dialog', {hidden: true});
      expect(dialogButton.getAttribute('aria-controls')).toEqual(dialog.id);
      expect(dialog).toBeInTheDocument();
    });

    it('should render a dialog and toggle visible and minimized with external buttons', async () => {
      render(<StateHookExample />);

      const showButton = screen.getByRole('button', {name: 'Open dialog'});
      const closeButton = screen.getByRole('button', {name: 'Close dialog'});

      await act(async () => {
        fireEvent.click(showButton);
      });
      const dialog = screen.getByRole('dialog', {hidden: true});
      expect(dialog).toBeInTheDocument();

      await act(async () => {
        fireEvent.click(closeButton);
      });
      expect(dialog).not.toBeVisible();
    });
  });

  describe('i18n', () => {
    it('should have default dismiss button text', async () => {
      render(
        <SideModalContainer>
          <SideModalButton variant="primary">Button</SideModalButton>
          <SideModal aria-label="My custom dialog">
            <SideModalHeader data-testid="dialog-header">
              <SideModalHeading>My custom dialog</SideModalHeading>
            </SideModalHeader>
            <SideModalBody>This is a dialog.</SideModalBody>
          </SideModal>
        </SideModalContainer>
      );

      const dialogButton = screen.getByRole('button', {name: 'Button'});
      await act(async () => {
        fireEvent.click(dialogButton);
      });

      expect(screen.getByRole('dialog', {hidden: true})).toBeInTheDocument();

      const dismissButton = screen.getByRole('button', {name: 'close', hidden: true});
      expect(dismissButton).toBeDefined();
    });
  });
});
