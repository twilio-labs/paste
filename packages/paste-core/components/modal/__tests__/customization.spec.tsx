import * as React from 'react';

import {render, screen} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {BaseModal, initStyles} from '../stories/customization.stories';

jest.mock('@twilio-paste/modal-dialog-primitive', () => {
  // Mocking the portal as a div so it renders within the body of the rendered test fragment, rather than using Portal behavior.
  const actual = jest.requireActual('@twilio-paste/modal-dialog-primitive');
  const {forwardRef: mockForwardRef} = jest.requireActual('react');
  const MockModalDialogPrimitiveOverlay = mockForwardRef(
    (
      {
        children,
        'data-paste-element': dataPasteElement,
        style,
        className,
      }: {children: any; 'data-paste-element': string; style: any; className: string},
      ref: any
    ) => (
      <div
        data-testid="mock-reach-dialog-overlay"
        data-paste-element={dataPasteElement}
        style={style}
        ref={ref}
        className={className}
      >
        {children}
      </div>
    )
  );
  return {
    ...actual,
    ModalDialogPrimitiveOverlay: MockModalDialogPrimitiveOverlay,
  };
});

describe('Modal Customization', () => {
  describe('"data-paste-element" HTML attributes', () => {
    it('Should add the correct "data-paste-element" attribute when element prop is undefined', () => {
      render(<BaseModal size="default" />);

      expect(screen.getByTestId('mock-reach-dialog-overlay').getAttribute('data-paste-element')).toEqual(
        'MODAL_OVERLAY'
      );
      expect(screen.getByTestId('modal-test-id').getAttribute('data-paste-element')).toEqual('MODAL');
      expect(screen.getByTestId('modal-header-test-id').getAttribute('data-paste-element')).toEqual('MODAL_HEADER');
      expect(screen.getByTestId('modal-heading-test-id').getAttribute('data-paste-element')).toEqual('MODAL_HEADING');
      expect(screen.getByTestId('modal-body-test-id').getAttribute('data-paste-element')).toEqual('MODAL_BODY');

      const modalFooter = screen.getByTestId('modal-footer-test-id');
      expect(modalFooter.getAttribute('data-paste-element')).toEqual('MODAL_FOOTER');

      const modalFooterActions = modalFooter.firstChild as HTMLElement;
      expect(modalFooterActions.getAttribute('data-paste-element')).toEqual('MODAL_FOOTER_ACTIONS');

      const modalFooterActionItemOne = modalFooterActions.firstChild as HTMLElement;
      const modalFooterActionItemTwo = modalFooterActions.lastChild as HTMLElement;
      expect(modalFooterActionItemOne.getAttribute('data-paste-element')).toEqual('MODAL_FOOTER_ACTIONS_ITEM');
      expect(modalFooterActionItemTwo.getAttribute('data-paste-element')).toEqual('MODAL_FOOTER_ACTIONS_ITEM');
    });

    it('Should add the correct "data-paste-element" attribute when element prop is defined', () => {
      render(<BaseModal size="default" element="CUSTOM_TEST_MODAL" />);

      expect(screen.getByTestId('mock-reach-dialog-overlay').getAttribute('data-paste-element')).toEqual(
        'CUSTOM_TEST_MODAL_OVERLAY'
      );
      expect(screen.getByTestId('modal-test-id').getAttribute('data-paste-element')).toEqual('CUSTOM_TEST_MODAL');
      expect(screen.getByTestId('modal-header-test-id').getAttribute('data-paste-element')).toEqual(
        'CUSTOM_TEST_MODAL_HEADER'
      );
      expect(screen.getByTestId('modal-heading-test-id').getAttribute('data-paste-element')).toEqual(
        'CUSTOM_TEST_MODAL_HEADING'
      );
      expect(screen.getByTestId('modal-body-test-id').getAttribute('data-paste-element')).toEqual(
        'CUSTOM_TEST_MODAL_BODY'
      );

      const modalFooter = screen.getByTestId('modal-footer-test-id');
      const modalFooterActions = modalFooter.firstChild as HTMLElement;
      const modalFooterActionItemOne = modalFooterActions.firstChild as HTMLElement;
      const modalFooterActionItemTwo = modalFooterActions.lastChild as HTMLElement;

      expect(modalFooter.getAttribute('data-paste-element')).toEqual('CUSTOM_TEST_MODAL_FOOTER');
      expect(modalFooterActions.getAttribute('data-paste-element')).toEqual('CUSTOM_TEST_MODAL_FOOTER_ACTIONS');
      expect(modalFooterActionItemOne.getAttribute('data-paste-element')).toEqual(
        'CUSTOM_TEST_MODAL_FOOTER_ACTIONS_ITEM'
      );
      expect(modalFooterActionItemTwo.getAttribute('data-paste-element')).toEqual(
        'CUSTOM_TEST_MODAL_FOOTER_ACTIONS_ITEM'
      );
    });
  });

  describe('Custom styles', () => {
    it('Should apply correct style rules to normal size variant', () => {
      render(<BaseModal size="default" />, {
        wrapper: ({children}) => (
          <CustomizationProvider theme={TestTheme} elements={initStyles('MODAL')}>
            {children}
          </CustomizationProvider>
        ),
      });

      expect(screen.getByTestId('mock-reach-dialog-overlay')).toHaveStyleRule('background-color', 'rgb(6,3,58)');

      expect(screen.getByTestId('modal-test-id')).toHaveStyleRule('border-radius', '8px');
      expect(screen.getByTestId('modal-test-id')).toHaveStyleRule('box-shadow', '0 16px 24px 0 rgba(18,28,45,0.2)');
      expect(screen.getByTestId('modal-test-id')).toHaveStyleRule('border-color', 'rgb(96,107,133)');

      expect(screen.getByTestId('modal-header-test-id')).toHaveStyleRule('border-width', '0');
      expect(screen.getByTestId('modal-header-test-id')).toHaveStyleRule('border-style', 'none');
      expect(screen.getByTestId('modal-header-test-id')).toHaveStyleRule('border-color', 'transparent');

      expect(screen.getByTestId('modal-heading-test-id')).toHaveStyleRule('font-size', '3rem');

      expect(screen.getByTestId('modal-body-test-id')).toHaveStyleRule('padding-right', '1.25rem');
      expect(screen.getByTestId('modal-body-test-id')).toHaveStyleRule('padding-left', '1.25rem');

      const modalFooter = screen.getByTestId('modal-footer-test-id');
      const modalFooterActions = modalFooter.firstChild as HTMLElement;
      const modalFooterActionItemOne = modalFooterActions.firstChild as HTMLElement;
      const modalFooterActionItemTwo = modalFooterActions.lastChild as HTMLElement;

      expect(modalFooter).toHaveStyleRule('border-width', '0');
      expect(modalFooter).toHaveStyleRule('border-style', 'none');
      expect(modalFooter).toHaveStyleRule('border-color', 'transparent');

      expect(modalFooterActions).toHaveStyleRule('justify-content', 'flex-start');

      expect(modalFooterActionItemOne).toHaveStyleRule('padding-left', '0', {target: ':first-of-type'});
      expect(modalFooterActionItemOne).toHaveStyleRule('padding-right', '0.75rem');

      expect(modalFooterActionItemTwo).toHaveStyleRule('padding-left', '0.75rem');
      expect(modalFooterActionItemTwo).toHaveStyleRule('padding-right', '0.75rem');
    });

    it('Should apply correct style rules to wide size variant', () => {
      render(<BaseModal size="wide" />, {
        wrapper: ({children}) => (
          <CustomizationProvider theme={TestTheme} elements={initStyles('MODAL')}>
            {children}
          </CustomizationProvider>
        ),
      });

      expect(screen.getByTestId('mock-reach-dialog-overlay')).toHaveStyleRule('background-color', 'rgb(244,244,246)');

      expect(screen.getByTestId('modal-test-id')).toHaveStyleRule('max-width', 'unset');
      expect(screen.getByTestId('modal-test-id')).toHaveStyleRule('width', '70%');
    });
  });
});
