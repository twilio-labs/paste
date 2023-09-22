import { act, fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { Button } from '@twilio-paste/button';
import { Theme } from '@twilio-paste/theme';
import { loremIpsum } from 'lorem-ipsum';
import * as React from 'react';

import type { ToasterProps, ToasterToast } from '../src';
import { useToaster } from '../src';
import { Toaster } from '../src/Toaster';
import { ToastVariantObject } from '../src/constants';

jest.useFakeTimers();

const mockDismiss: jest.Mock = jest.fn();

const mockToasterState: ToasterProps = {
  toasts: [
    {
      message: 'hi',
      variant: 'error',
      id: 'custom_id',
    },
  ],
  pop: mockDismiss,
};

const MockToasterTrigger = (): JSX.Element => {
  const toaster = useToaster();
  const variants = Object.values(ToastVariantObject);
  return (
    <Theme.Provider theme="default">
      <Button
        onClick={() => {
          toaster.push({
            variant: variants[Math.floor(Math.random() * 3 + 0)],
            message: loremIpsum(),
          });
        }}
        size="small"
        variant="secondary"
      >
        Add toast
      </Button>
      <Toaster {...toaster} data-testid="mock-toaster" />
    </Theme.Provider>
  );
};

describe('Toaster', () => {
  it('should render an empty toaster', () => {
    render(
      <Theme.Provider theme="default">
        <Toaster toasts={[]} pop={mockDismiss} data-testid="toaster" />
      </Theme.Provider>,
    );
    const renderedToaster = screen.getByTestId('toaster');
    expect(renderedToaster).toBeDefined();
  });

  describe('adding toasts', () => {
    it('should add a toast to toaster', () => {
      render(
        <Theme.Provider theme="default">
          <Toaster {...mockToasterState} data-testid="toaster" />
        </Theme.Provider>,
      );
      const renderedToasts = screen.getAllByRole('status');
      expect(renderedToasts.length).toEqual(1);
    });

    it('should focus the close button in a new toast', () => {
      render(
        <Theme.Provider theme="default">
          <Toaster {...mockToasterState} data-testid="toaster" />
        </Theme.Provider>,
      );
      const dismissButton = screen.getByRole('button', { name: /dismiss toast/i });
      expect(document.activeElement).toEqual(dismissButton);
    });

    it('should add two toasts to toaster', () => {
      const extraToast: ToasterToast = { message: 'hi2', variant: 'success', id: 'idstring' };
      const toasterState = {
        ...mockToasterState,
        toasts: [...mockToasterState.toasts, extraToast],
      };
      render(
        <Theme.Provider theme="default">
          <Toaster {...toasterState} data-testid="toaster" />
        </Theme.Provider>,
      );
      const renderedToasts = screen.getAllByRole('status');
      expect(renderedToasts.length).toEqual(2);
    });
  });

  describe('dismissing toasts', () => {
    it('should call the pop prop with id', () => {
      render(
        <Theme.Provider theme="default">
          <Toaster {...mockToasterState} data-testid="toaster" />
        </Theme.Provider>,
      );
      const dismissButton = screen.getByText('Dismiss toast');
      fireEvent.click(dismissButton);
      expect(mockDismiss).toHaveBeenCalledWith('custom_id');
    });

    it('should call onDismiss when unmounting', () => {
      const { result } = renderHook(() => useToaster());
      render(
        <Theme.Provider theme="default">
          <Toaster {...result.current} data-testid="toaster" />
        </Theme.Provider>,
      );

      const onDismissMock: jest.Mock = jest.fn();

      // Timeout unmount
      act(() => {
        result.current.push({
          message: 'hi',
          variant: 'error',
          id: 'custom_id',
          onDismiss: onDismissMock,
          dismissAfter: 1000,
        });
      });
      expect(result.current.toasts.length).toEqual(1);
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      expect(result.current.toasts.length).toEqual(0);
      expect(onDismissMock).toBeCalledTimes(1);

      // manual unmount
      act(() => {
        result.current.push({
          message: 'hi',
          variant: 'success',
          id: 'pop_id',
          onDismiss: onDismissMock,
        });
      });
      expect(result.current.toasts.length).toEqual(1);
      act(() => {
        result.current.pop('pop_id');
      });
      expect(result.current.toasts.length).toEqual(0);
      expect(onDismissMock).toBeCalledTimes(2);
    });
  });

  describe('handling user actions', () => {
    it('should add a toast and focus it', () => {
      render(<MockToasterTrigger />);
      const triggerButton = screen.getByText('Add toast');
      fireEvent.click(triggerButton);
      const renderedToasts = screen.getAllByRole('status');
      expect(renderedToasts.length).toEqual(1);
      expect(document.activeElement).toEqual(screen.getByRole('button', { name: /dismiss toast/i }));
    });

    it('should handle clicking the dismiss button', async () => {
      const { rerender } = render(<MockToasterTrigger />);
      const triggerButton = screen.getByText('Add toast');
      fireEvent.click(triggerButton);
      rerender(<MockToasterTrigger />);
      const dismissButton = screen.getByRole('button', { name: /dismiss toast/i });
      fireEvent.click(dismissButton);
      rerender(<MockToasterTrigger />);
      await waitFor(() => {
        expect(screen.getByTestId('mock-toaster')).toBeEmptyDOMElement();
      });
    });
  });
});
