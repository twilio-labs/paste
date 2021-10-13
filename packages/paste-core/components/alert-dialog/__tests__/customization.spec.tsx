import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {CustomizedAlertDialog, CustomizedDestructiveAlertDialog} from '../stories/index.stories';

jest.mock('@twilio-paste/modal-dialog-primitive', () => {
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
        data-testid="mock-reach-modal-dialog-primitive"
        data-paste-element={dataPasteElement}
        style={style}
        className={className}
        ref={ref}
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

describe('Alert Dialog `element` prop', () => {
  it('should set the default element prop on Alert Dialog', () => {
    const {container} = render(<CustomizedAlertDialog />, {
      wrapper: ({children}) => <div id="test-container-wrapper">{children}</div>,
    });
    expect(screen.getByTestId('alert_dialog').getAttribute('data-paste-element')).toEqual('ALERT_DIALOG');
    expect(container.querySelector('[data-paste-element="ALERT_DIALOG_HEADER_WRAPPER"]')).toBeInTheDocument();
    expect(screen.getByText('Alert Dialog').getAttribute('data-paste-element')).toEqual('ALERT_DIALOG_HEADER');
    expect(
      screen
        .getByText('Are you sure you want to submit this application? No information can be changed after submitting.')
        .getAttribute('data-paste-element')
    ).toEqual('ALERT_DIALOG_BODY');
    expect(container.querySelector('[data-paste-element="ALERT_DIALOG_FOOTER"]')).toBeInTheDocument();
  });
  it('should set the custom element prop on Alert Dialog', () => {
    const {container} = render(<CustomizedDestructiveAlertDialog />);
    expect(screen.getByTestId('destructive_alert_dialog').getAttribute('data-paste-element')).toEqual('FOO');
    expect(container.querySelector('[data-paste-element="FOO_HEADER_WRAPPER"]')).toBeInTheDocument();
    expect(screen.getByText('Alert Dialog').getAttribute('data-paste-element')).toEqual('FOO_HEADER');
    expect(
      screen
        .getByText('Are you sure you want to delete this data? This action cannot be undone.')
        .getAttribute('data-paste-element')
    ).toEqual('FOO_BODY');
    expect(container.querySelector('[data-paste-element="FOO_FOOTER"]')).toBeInTheDocument();
  });
});

describe('Alert Dialog customization', () => {
  it('should apply styles to Alert Dialog', () => {
    const {container} = render(<CustomizedAlertDialog />);
    expect(screen.getByTestId('alert_dialog')).toHaveStyleRule('background-color', 'rgb(255,241,179)');
    expect(container.querySelector('[data-paste-element="ALERT_DIALOG_HEADER_WRAPPER"]')).toHaveStyleRule(
      'border',
      'inherit'
    );
    expect(screen.getByText('Alert Dialog')).toHaveStyleRule('background-color', 'rgb(235,244,255)');
    expect(
      screen.getByText(
        'Are you sure you want to submit this application? No information can be changed after submitting.'
      )
    ).toHaveStyleRule('background-color', 'rgb(237,253,243)');
    expect(container.querySelector('[data-paste-element="ALERT_DIALOG_FOOTER"]')).toHaveStyleRule(
      'padding-top',
      '1rem'
    );
  });
  it('should apply styles to Alert Dialog with custom element prop', () => {
    const {container} = render(<CustomizedDestructiveAlertDialog />);
    expect(screen.getByTestId('destructive_alert_dialog')).toHaveStyleRule('background-color', 'rgb(214,31,31)');
    expect(container.querySelector('[data-paste-element="FOO_HEADER_WRAPPER"]')).toHaveStyleRule('border', 'inherit');
    expect(screen.getByText('Alert Dialog')).toHaveStyleRule('background-color', 'rgb(235,244,255)');
    expect(
      screen.getByText('Are you sure you want to delete this data? This action cannot be undone.')
    ).toHaveStyleRule('background-color', 'rgb(237,253,243)');
    expect(container.querySelector('[data-paste-element="FOO_FOOTER"]')).toHaveStyleRule('padding-top', '1rem');
  });
});
