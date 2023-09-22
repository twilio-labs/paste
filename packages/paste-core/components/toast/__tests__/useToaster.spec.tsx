import { act, renderHook } from '@testing-library/react';

import { useToaster } from '../src/useToaster';

jest.useFakeTimers();

describe('useToaster', () => {
  it('should use toaster', () => {
    const { result } = renderHook(() => useToaster());
    expect(result.current.toasts).toEqual([]);
    expect(typeof result.current.pop).toBe('function');
    expect(typeof result.current.push).toBe('function');
  });

  describe('push', () => {
    it('should push toasts', () => {
      const { result } = renderHook(() => useToaster());
      expect(result.current.toasts).toEqual([]);

      act(() => {
        result.current.push({
          message: 'hi',
          variant: 'error',
        });
      });

      expect(result.current.toasts.length).toEqual(1);
    });

    it('should generate an id when none is passed', () => {
      const { result } = renderHook(() => useToaster());

      act(() => {
        result.current.push({
          message: 'hi',
          variant: 'error',
        });
      });
      expect(result.current.toasts[0].id).not.toBeNull();
    });

    it('should take an id when one is passed', () => {
      const { result } = renderHook(() => useToaster());

      act(() => {
        result.current.push({
          message: 'hi',
          variant: 'error',
          id: 'custom_id',
        });
      });
      expect(result.current.toasts[0].id).toEqual('custom_id');
    });

    it('should setFocus on new toasts only', () => {
      const { result } = renderHook(() => useToaster());

      act(() => {
        result.current.push({
          message: 'hi',
          variant: 'error',
        });
      });
      expect(result.current.toasts[0].setFocus).toBeTruthy();

      act(() => {
        result.current.push({
          message: 'hi2',
          variant: 'success',
        });
      });
      expect(result.current.toasts[1].setFocus).toBeFalsy();
    });

    it('should set a timeOutId if dismissAfter is set', () => {
      const { result } = renderHook(() => useToaster());

      const setTimeoutSpy = jest.spyOn(window, 'setTimeout');

      act(() => {
        result.current.push({
          message: 'hi',
          variant: 'error',
          dismissAfter: 200,
        });
      });
      expect(result.current.toasts[0].timeOutId).not.toBeNull();
      expect(setTimeoutSpy).toHaveBeenCalled();
    });
  });

  describe('pop', () => {
    it('should pop toasts', () => {
      const { result } = renderHook(() => useToaster());

      act(() => {
        result.current.push({
          message: 'hi',
          variant: 'error',
          id: 'custom_id',
        });
      });
      expect(result.current.toasts.length).toEqual(1);
      act(() => {
        result.current.pop('custom_id');
      });
      expect(result.current.toasts.length).toEqual(0);
    });

    it('should clearTimeout when popping a toast with a timeout', () => {
      const { result } = renderHook(() => useToaster());
      const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');

      act(() => {
        result.current.push({
          message: 'hi',
          variant: 'error',
          id: 'custom_timeout',
          dismissAfter: 2000,
        });
      });
      expect(result.current.toasts.length).toEqual(1);
      act(() => {
        result.current.pop('custom_timeout');
      });
      expect(clearTimeoutSpy).toHaveBeenCalled();
    });

    it('should pop a toast with a timeout after time has past', () => {
      const { result } = renderHook(() => useToaster());

      act(() => {
        result.current.push({
          message: 'hi',
          variant: 'error',
          dismissAfter: 1000,
        });
      });
      expect(result.current.toasts.length).toEqual(1);

      act(() => {
        jest.advanceTimersByTime(1000);
      });
      /*
       * Not sure how to deal with this warning right now:
       * Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
       */

      expect(result.current.toasts.length).toEqual(0);

      // push a toast that has a custom id for auto dismissing
      act(() => {
        result.current.push({
          message: 'hi',
          variant: 'error',
          id: 'custom_id',
          dismissAfter: 1000,
        });
      });

      expect(result.current.toasts.length).toEqual(1);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(result.current.toasts.length).toEqual(0);
    });
  });
});
