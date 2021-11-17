import * as React from 'react';
import {render, screen} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Toast} from '../src';

const onDismissMock: jest.Mock = jest.fn();

describe.skip('Toast', () => {
  describe('Dismiss button', () => {
    it('should add a dismiss button when onDismiss is passed as a function to call', () => {
      render(
        <Toast onDismiss={onDismissMock} variant="neutral">
          This is a toast
        </Toast>
      );
      const renderedToastDismiss = screen.getByRole('button');
      expect(renderedToastDismiss).toBeDefined();
    });

    it('should call the onDismiss event handler when close button clicked', () => {
      render(
        <Toast onDismiss={onDismissMock} variant="neutral">
          This is a toast
        </Toast>
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

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <>
          <Toast onDismiss={onDismissMock} variant="error">
            This is a toast
          </Toast>
          <Toast onDismiss={onDismissMock} variant="neutral">
            This is a toast
          </Toast>
          <Toast onDismiss={onDismissMock} variant="success">
            This is a toast
          </Toast>
          <Toast onDismiss={onDismissMock} variant="warning">
            This is a toast
          </Toast>
        </>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
