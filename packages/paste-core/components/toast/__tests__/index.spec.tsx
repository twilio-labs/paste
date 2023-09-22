import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Toast } from '../src';

const onDismissMock: jest.Mock = jest.fn();

describe('Toast', () => {
  describe('Dismiss button', () => {
    it('should add a dismiss button when onDismiss is passed as a function to call', () => {
      render(
        <Toast onDismiss={onDismissMock} variant="neutral">
          This is a toast
        </Toast>,
      );
      const renderedToastDismiss = screen.getByRole('button');
      expect(renderedToastDismiss).toBeDefined();
    });

    it('should call the onDismiss event handler when close button clicked', () => {
      render(
        <Toast onDismiss={onDismissMock} variant="neutral">
          This is a toast
        </Toast>,
      );
      const renderedToastDismiss = screen.getByRole('button');
      renderedToastDismiss.click();
      expect(onDismissMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Aria roles', () => {
    it('should add the role of status to the neutral toast', () => {
      render(<Toast variant="neutral">This is a toast</Toast>);
      const renderedToast = screen.getByRole('status');
      expect(renderedToast.getAttribute('role')).toEqual('status');
    });

    it('should add the role of status to the success toast', () => {
      render(<Toast variant="success">This is a toast</Toast>);
      const renderedToast = screen.getByRole('status');
      expect(renderedToast.getAttribute('role')).toEqual('status');
    });

    it('should add the role of status to the error toast', () => {
      render(<Toast variant="error">This is a toast</Toast>);
      const renderedToast = screen.getByRole('status');
      expect(renderedToast.getAttribute('role')).toEqual('status');
    });

    it('should add the role of status to the warning toast', () => {
      render(<Toast variant="warning">This is a toast</Toast>);
      const renderedToast = screen.getByRole('status');
      expect(renderedToast.getAttribute('role')).toEqual('status');
    });
  });

  describe('i18n', () => {
    it('should have default dismiss button text', () => {
      render(
        <Toast variant="neutral" onDismiss={onDismissMock}>
          This is a toast
        </Toast>,
      );
      const dismissButton = screen.getByRole('button', { name: 'Dismiss toast' });
      expect(dismissButton).toBeDefined();
    });

    it('should use i18nDismissLabel for dismiss button text', () => {
      render(
        <Toast variant="neutral" i18nDismissLabel="Cerrar notificacion" onDismiss={onDismissMock}>
          Esta es una notificacion
        </Toast>,
      );
      const dismissButton = screen.getByRole('button', { name: 'Cerrar notificacion' });
      expect(dismissButton).toBeDefined();
    });

    it('should have default error variant icon text', () => {
      render(
        <Toast data-testid="toast-i18n" variant="error">
          This is a toast
        </Toast>,
      );

      const toast = screen.getByTestId('toast-i18n');
      const icon = toast.querySelector('[data-paste-element="TOAST_ICON"]');
      expect(icon?.textContent).toEqual('(error)');
    });

    it('should have default neutral variant icon text', () => {
      render(
        <Toast data-testid="toast-i18n" variant="neutral">
          This is a toast
        </Toast>,
      );
      const toast = screen.getByTestId('toast-i18n');
      const icon = toast.querySelector('[data-paste-element="TOAST_ICON"]');
      expect(icon?.textContent).toEqual('(information)');
    });

    it('should have default success variant icon text', () => {
      render(
        <Toast data-testid="toast-i18n" variant="success">
          This is a toast
        </Toast>,
      );
      const toast = screen.getByTestId('toast-i18n');
      const icon = toast.querySelector('[data-paste-element="TOAST_ICON"]');
      expect(icon?.textContent).toEqual('(success)');
    });

    it('should have default warning variant icon text', () => {
      render(
        <Toast data-testid="toast-i18n" variant="warning">
          This is a toast
        </Toast>,
      );
      const toast = screen.getByTestId('toast-i18n');
      const icon = toast.querySelector('[data-paste-element="TOAST_ICON"]');
      expect(icon?.textContent).toEqual('(warning)');
    });

    it('should use i18n prop for error variant icon text', () => {
      render(
        <Toast data-testid="toast-i18n" variant="error" i18nErrorLabel="(erreur)">
          This is a toast
        </Toast>,
      );
      const toast = screen.getByTestId('toast-i18n');
      const icon = toast.querySelector('[data-paste-element="TOAST_ICON"]');
      expect(icon?.textContent).toEqual('(erreur)');
    });

    it('should use i18n prop for neutral variant icon text', () => {
      render(
        <Toast data-testid="toast-i18n" variant="neutral" i18nNeutralLabel="(informacion)">
          This is a toast
        </Toast>,
      );
      const toast = screen.getByTestId('toast-i18n');
      const icon = toast.querySelector('[data-paste-element="TOAST_ICON"]');
      expect(icon?.textContent).toEqual('(informacion)');
    });

    it('should use i18n prop for success variant icon text', () => {
      render(
        <Toast data-testid="toast-i18n" variant="success" i18nSuccessLabel="(éxito)">
          This is a toast
        </Toast>,
      );
      const toast = screen.getByTestId('toast-i18n');
      const icon = toast.querySelector('[data-paste-element="TOAST_ICON"]');
      expect(icon?.textContent).toEqual('(éxito)');
    });

    it('should use i18n prop for warning variant icon text', () => {
      render(
        <Toast data-testid="toast-i18n" variant="warning" i18nWarningLabel="(aviso)">
          This is a toast
        </Toast>,
      );
      const toast = screen.getByTestId('toast-i18n');
      const icon = toast.querySelector('[data-paste-element="TOAST_ICON"]');
      expect(icon?.textContent).toEqual('(aviso)');
    });
  });
});
