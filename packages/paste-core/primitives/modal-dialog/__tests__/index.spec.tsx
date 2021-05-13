import * as React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
// @ts-ignore
import axe from '../../../../../.jest/axe-helper';
import {ModalPrimitiveExample} from '../stories/index.stories';

describe('Modal Primitive', () => {
  describe('Render', () => {
    it('should render a button with aria attributes', () => {
      render(<ModalPrimitiveExample />);
      const renderedModalButton = screen.getByRole('button');
      expect(renderedModalButton.getAttribute('aria-haspopup')).toEqual('dialog');
      expect(renderedModalButton.getAttribute('aria-controls')).toEqual('modal-primitive-example');
      expect(renderedModalButton.getAttribute('aria-expanded')).toEqual('false');
    });

    it('should render a modal with aria attributes', () => {
      render(<ModalPrimitiveExample />);
      const renderedModal = screen.getByLabelText('Welcome');
      expect(renderedModal.getAttribute('role')).toEqual('dialog');
      expect(renderedModal.getAttribute('aria-modal')).toEqual('true');
      expect(renderedModal.getAttribute('data-dialog')).toEqual('true');
    });
  });

  describe('Interaction', () => {
    it('should control expanded attribute on the button', () => {
      render(<ModalPrimitiveExample />);
      const renderedModalButton = screen.getByRole('button');
      expect(renderedModalButton.getAttribute('aria-expanded')).toEqual('false');
      fireEvent.click(renderedModalButton);
      expect(renderedModalButton.getAttribute('aria-expanded')).toEqual('true');
      if (document.activeElement != null) {
        fireEvent.keyDown(document.activeElement, {key: 'Escape', code: 'Escape'});
        // eslint-disable-next-line jest/no-conditional-expect
        expect(renderedModalButton.getAttribute('aria-expanded')).toEqual('false');
      }
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<ModalPrimitiveExample />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
