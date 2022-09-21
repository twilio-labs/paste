import * as React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';

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
import {Button} from '@twilio-paste/button';

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
      const dialog = screen.getByRole('dialog', {hidden: true});

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

      const showButton = screen.getByRole('button', {name: 'Open dialog'});
      const closeButton = screen.getByRole('button', {name: 'Close dialog'});
      const dialog = screen.getByRole('dialog', {hidden: true});

      expect(dialog).not.toBeVisible();
      await waitFor(() => {
        fireEvent.click(showButton);
      });
      expect(dialog).toBeVisible();

      await waitFor(() => {
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
            <SideModalHeader>
              <SideModalHeading>My custom dialog</SideModalHeading>
            </SideModalHeader>
            <SideModalBody>This is a dialog.</SideModalBody>
          </SideModal>
        </SideModalContainer>
      );

      const dismissButton = screen.getByRole('button', {name: 'close', hidden: true});
      expect(dismissButton).toBeDefined();
    });
  });
});
