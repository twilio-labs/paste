import * as React from 'react';
import {waitFor, fireEvent, render, screen} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
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

const CustomizationWrapper: React.FC<React.PropsWithChildren> = ({children}) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      SIDE_MODAL_BUTTON: {
        backgroundColor: 'colorBackgroundErrorWeakest',
      },
      SIDE_MODAL_CONTAINER: {
        width: '400px',
      },
      SIDE_MODAL: {
        boxShadow: 'shadowFocus',
      },
      SIDE_MODAL_BODY: {
        backgroundColor: 'colorBackgroundErrorWeakest',
      },
      SIDE_MODAL_HEADER: {
        padding: 'space80',
      },
      SIDE_MODAL_HEADING: {
        fontSize: 'fontSize60',
      },
      SIDE_MODAL_HEADER_CLOSE_BUTTON: {
        borderColor: 'colorBorderWeak',
      },
      SIDE_MODAL_HEADER_CLOSE_ICON: {
        width: 'sizeIcon50',
      },
      SIDE_MODAL_FOOTER: {
        borderTopWidth: 'borderWidth30',
      },
      SIDE_MODAL_FOOTER_ACTIONS: {
        justifyContent: 'flex-start',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

const MyCustomizationWrapper: React.FC<React.PropsWithChildren> = ({children}) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      FOO_DIALOG_BUTTON: {
        backgroundColor: 'colorBackgroundErrorWeakest',
      },
      FOO_DIALOG_CONTAINER: {
        width: '400px',
      },
      FOO_DIALOG: {
        boxShadow: 'shadowFocus',
      },
      FOO_DIALOG_BODY: {
        backgroundColor: 'colorBackgroundErrorWeakest',
      },
      FOO_DIALOG_HEADER: {
        padding: 'space80',
      },
      FOO_DIALOG_HEADING: {
        fontSize: 'fontSize60',
      },
      FOO_DIALOG_HEADER_CLOSE_BUTTON: {
        borderColor: 'colorBorderWeak',
      },
      FOO_DIALOG_HEADER_CLOSE_ICON: {
        width: 'sizeIcon50',
      },
      FOO_DIALOG_FOOTER: {
        borderTopWidth: 'borderWidth30',
      },
      FOO_DIALOG_FOOTER_ACTIONS: {
        justifyContent: 'flex-start',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

describe('Customization', () => {
  it('should have default element data attributes', async () => {
    render(
      <SideModalContainer>
        <SideModalButton variant="primary">Button</SideModalButton>
        <SideModal aria-label="My custom dialog">
          <SideModalHeader data-testid="dialog-header">
            <SideModalHeading>My custom dialog</SideModalHeading>
          </SideModalHeader>
          <SideModalBody data-testid="dialog-contents">This is a dialog.</SideModalBody>
          <SideModalFooter data-testid="dialog-footer">
            <SideModalFooterActions data-testid="dialog-footer-actions">
              <Button variant="secondary">Cancel</Button>
            </SideModalFooterActions>
          </SideModalFooter>
        </SideModal>
      </SideModalContainer>
    );

    const showButton = screen.getByRole('button', {name: 'Button'});
    await waitFor(() => {
      fireEvent.click(showButton);
    });

    const closeButton = screen.getByRole('button', {name: 'close', hidden: true});
    const dialog = screen.getByRole('dialog', {hidden: true});
    const dialogContents = screen.getByTestId('dialog-contents');
    const dialogHeader = screen.getByTestId('dialog-header');
    const dialogHeading = screen.getByText('My custom dialog');
    const dialogFooter = screen.getByTestId('dialog-footer');
    const dialogFooterActions = screen.getByTestId('dialog-footer-actions');

    expect(showButton.dataset.pasteElement).toEqual('SIDE_MODAL_BUTTON');
    expect(closeButton.dataset.pasteElement).toEqual('SIDE_MODAL_HEADER_CLOSE_BUTTON');
    expect(dialogContents.dataset.pasteElement).toEqual('SIDE_MODAL_BODY');
    expect(dialogHeader.dataset.pasteElement).toEqual('SIDE_MODAL_HEADER');
    expect(dialogHeading.dataset.pasteElement).toEqual('SIDE_MODAL_HEADING');
    expect(dialogFooter.dataset.pasteElement).toEqual('SIDE_MODAL_FOOTER');
    expect(dialogFooterActions.dataset.pasteElement).toEqual('SIDE_MODAL_FOOTER_ACTIONS');
    expect(dialog.dataset.pasteElement).toBe('SIDE_MODAL_CONTAINER');
    expect(dialog.querySelector('[data-paste-element="SIDE_MODAL"]')).toBeInTheDocument();
    expect(closeButton.querySelector('[data-paste-element="SIDE_MODAL_HEADER_CLOSE_ICON"]')).toBeInTheDocument();
  });

  it('should add custom styles to components', async () => {
    render(
      <SideModalContainer>
        <SideModalButton variant="primary">Button</SideModalButton>
        <SideModal aria-label="My custom dialog">
          <SideModalHeader data-testid="dialog-header">
            <SideModalHeading>My custom dialog</SideModalHeading>
          </SideModalHeader>
          <SideModalBody data-testid="dialog-contents">This is a dialog.</SideModalBody>
          <SideModalFooter data-testid="dialog-footer">
            <SideModalFooterActions data-testid="dialog-footer-actions">
              <Button variant="secondary">Cancel</Button>
            </SideModalFooterActions>
          </SideModalFooter>
        </SideModal>
      </SideModalContainer>,
      {wrapper: CustomizationWrapper}
    );

    const showButton = screen.getByRole('button', {name: 'Button'});
    await waitFor(() => {
      fireEvent.click(showButton);
    });
    const closeButton = screen.getByRole('button', {name: 'close'});
    const closeIcon = closeButton.querySelector('[data-paste-element="SIDE_MODAL_HEADER_CLOSE_ICON"]');
    const dialog = screen.getByRole('dialog');
    const dialogContents = screen.getByTestId('dialog-contents');
    const dialogHeader = screen.getByTestId('dialog-header');
    const dialogHeading = screen.getByText('My custom dialog');
    const dialogFooter = screen.getByTestId('dialog-footer');
    const dialogFooterActions = screen.getByTestId('dialog-footer-actions');

    expect(showButton).toHaveStyleRule('background-color', 'rgb(254, 236, 236)');
    expect(dialogHeader).toHaveStyleRule('padding', '1.75rem');
    expect(dialogHeading).toHaveStyleRule('font-size', '1.25rem');
    expect(dialogContents).toHaveStyleRule('background-color', 'rgb(254, 236, 236)');
    expect(dialog).toHaveStyleRule('width', '400px');
    expect(dialog.querySelector('[data-paste-element="SIDE_MODAL"]')).toHaveStyleRule(
      'box-shadow',
      '0 0 0 4px rgba(2, 99, 224, 0.7)'
    );
    expect(closeButton).toHaveStyleRule('border-color', 'rgb(202, 205, 216)');
    expect(closeIcon).toHaveStyleRule('width', '1.75rem');
    expect(dialogFooter).toHaveStyleRule('border-top-width', '4px');
    expect(dialogFooterActions).toHaveStyleRule('justify-content', 'flex-start');
  });

  it('should set custom element data attributes', async () => {
    render(
      <SideModalContainer>
        <SideModalButton variant="primary" element="FOO_DIALOG_BUTTON">
          Button
        </SideModalButton>
        <SideModal aria-label="My custom dialog" element="FOO_DIALOG">
          <SideModalHeader data-testid="dialog-header" element="FOO_DIALOG_HEADER">
            <SideModalHeading element="FOO_DIALOG_HEADING">My custom dialog</SideModalHeading>
          </SideModalHeader>
          <SideModalBody data-testid="dialog-contents" element="FOO_DIALOG_BODY">
            This is a dialog.
          </SideModalBody>
          <SideModalFooter data-testid="dialog-footer" element="FOO_DIALOG_FOOTER">
            <SideModalFooterActions data-testid="dialog-footer-actions" element="FOO_DIALOG_FOOTER_ACTIONS">
              <Button variant="secondary">Cancel</Button>
            </SideModalFooterActions>
          </SideModalFooter>
        </SideModal>
      </SideModalContainer>
    );

    const showButton = screen.getByRole('button', {name: 'Button'});
    await waitFor(() => {
      fireEvent.click(showButton);
    });

    const closeButton = screen.getByRole('button', {name: 'close', hidden: true});
    const dialog = screen.getByRole('dialog', {hidden: true});
    const dialogContents = screen.getByTestId('dialog-contents');
    const dialogHeader = screen.getByTestId('dialog-header');
    const dialogHeading = screen.getByText('My custom dialog');
    const dialogFooter = screen.getByTestId('dialog-footer');
    const dialogFooterActions = screen.getByTestId('dialog-footer-actions');

    expect(showButton.dataset.pasteElement).toEqual('FOO_DIALOG_BUTTON');
    expect(closeButton.dataset.pasteElement).toEqual('FOO_DIALOG_HEADER_CLOSE_BUTTON');
    expect(dialogContents.dataset.pasteElement).toEqual('FOO_DIALOG_BODY');
    expect(dialogHeader.dataset.pasteElement).toEqual('FOO_DIALOG_HEADER');
    expect(dialogHeading.dataset.pasteElement).toEqual('FOO_DIALOG_HEADING');
    expect(dialogFooter.dataset.pasteElement).toEqual('FOO_DIALOG_FOOTER');
    expect(dialogFooterActions.dataset.pasteElement).toEqual('FOO_DIALOG_FOOTER_ACTIONS');
    expect(dialog.dataset.pasteElement).toEqual('FOO_DIALOG_CONTAINER');
    expect(dialog.querySelector('[data-paste-element="FOO_DIALOG"]')).toBeInTheDocument();
    expect(closeButton.querySelector('[data-paste-element="FOO_DIALOG_HEADER_CLOSE_ICON"]')).toBeInTheDocument();
  });

  it('should add custom styles to components with custom element data attributes', async () => {
    render(
      <SideModalContainer>
        <SideModalButton variant="primary" element="FOO_DIALOG_BUTTON">
          Button
        </SideModalButton>
        <SideModal aria-label="My custom dialog" element="FOO_DIALOG">
          <SideModalHeader data-testid="dialog-header" element="FOO_DIALOG_HEADER">
            <SideModalHeading element="FOO_DIALOG_HEADING">My custom dialog</SideModalHeading>
          </SideModalHeader>
          <SideModalBody data-testid="dialog-contents" element="FOO_DIALOG_BODY">
            This is a dialog.
          </SideModalBody>
          <SideModalFooter data-testid="dialog-footer" element="FOO_DIALOG_FOOTER">
            <SideModalFooterActions data-testid="dialog-footer-actions" element="FOO_DIALOG_FOOTER_ACTIONS">
              <Button variant="secondary">Cancel</Button>
            </SideModalFooterActions>
          </SideModalFooter>
        </SideModal>
      </SideModalContainer>,
      {wrapper: MyCustomizationWrapper}
    );

    const dialogButton = screen.getByRole('button', {name: 'Button'});

    await waitFor(() => {
      fireEvent.click(dialogButton);
    });

    const closeButton = screen.getByRole('button', {name: 'close'});
    const closeIcon = closeButton.querySelector('[data-paste-element="FOO_DIALOG_HEADER_CLOSE_ICON"]');
    const dialog = screen.getByRole('dialog');
    const dialogContents = screen.getByTestId('dialog-contents');
    const dialogHeader = screen.getByTestId('dialog-header');
    const dialogHeading = screen.getByText('My custom dialog');
    const dialogFooter = screen.getByTestId('dialog-footer');
    const dialogFooterActions = screen.getByTestId('dialog-footer-actions');

    expect(dialogButton).toHaveStyleRule('background-color', 'rgb(254, 236, 236)');
    expect(dialogHeader).toHaveStyleRule('padding', '1.75rem');
    expect(dialogHeading).toHaveStyleRule('font-size', '1.25rem');
    expect(dialogContents).toHaveStyleRule('background-color', 'rgb(254, 236, 236)');
    expect(dialog).toHaveStyleRule('width', '400px');
    expect(dialog.querySelector('[data-paste-element="FOO_DIALOG"]')).toHaveStyleRule(
      'box-shadow',
      '0 0 0 4px rgba(2, 99, 224, 0.7)'
    );
    expect(closeButton).toHaveStyleRule('border-color', 'rgb(202, 205, 216)');
    expect(closeIcon).toHaveStyleRule('width', '1.75rem');
    expect(dialogFooter).toHaveStyleRule('border-top-width', '4px');
    expect(dialogFooterActions).toHaveStyleRule('justify-content', 'flex-start');
  });
});
