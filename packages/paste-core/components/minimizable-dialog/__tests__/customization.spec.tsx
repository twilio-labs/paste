import * as React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import {
  MinimizableDialog,
  MinimizableDialogButton,
  MinimizableDialogHeader,
  MinimizableDialogContainer,
  MinimizableDialogContent,
} from '../src';

const CustomizationWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      MINIMIZABLE_DIALOG_BUTTON: {
        backgroundColor: 'colorBackgroundStrong',
      },
      MINIMIZABLE_DIALOG: {
        backgroundColor: 'colorBackgroundPrimaryWeaker',
      },
      MINIMIZABLE_DIALOG_CONTENT: {
        margin: 'space0',
      },
      MINIMIZABLE_DIALOG_HEADER: {
        padding: 'space80',
      },
      MINIMIZABLE_DIALOG_HEADER_HEADING: {
        fontSize: 'fontSize50',
      },
      MINIMIZABLE_DIALOG_HEADER_CLOSE_BUTTON: {
        backgroundColor: 'colorBackground',
      },
      MINIMIZABLE_DIALOG_HEADER_CLOSE_ICON: {
        width: 'sizeIcon50',
      },
      MINIMIZABLE_DIALOG_HEADER_MINIMIZE_BUTTON: {
        backgroundColor: 'colorBackground',
      },
      MINIMIZABLE_DIALOG_HEADER_MINIMIZE_ICON: {
        width: 'sizeIcon50',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

const MyCustomizationWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      FOO_DIALOG_BUTTON: {
        backgroundColor: 'colorBackgroundStrong',
      },
      FOO_DIALOG: {
        backgroundColor: 'colorBackgroundPrimaryWeaker',
      },
      FOO_DIALOG_CONTENT: {
        margin: 'space0',
      },
      FOO_DIALOG_HEADER: {
        padding: 'space80',
      },
      FOO_DIALOG_HEADER_HEADING: {
        fontSize: 'fontSize50',
      },
      FOO_DIALOG_HEADER_CLOSE_BUTTON: {
        backgroundColor: 'colorBackground',
      },
      FOO_DIALOG_HEADER_CLOSE_ICON: {
        width: 'sizeIcon50',
      },
      FOO_DIALOG_HEADER_MINIMIZE_BUTTON: {
        backgroundColor: 'colorBackground',
      },
      FOO_DIALOG_HEADER_MINIMIZE_ICON: {
        width: 'sizeIcon50',
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

describe('Customization', () => {
  it('should have default element data attributes', () => {
    render(
      <MinimizableDialogContainer>
        <MinimizableDialogButton variant="primary">Button</MinimizableDialogButton>
        <MinimizableDialog aria-label="My custom dialog">
          <MinimizableDialogHeader data-testid="dialog-header">My custom dialog</MinimizableDialogHeader>
          <MinimizableDialogContent data-testid="dialog-contents">This is a dialog.</MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>,
    );

    const dialogButton = screen.getByRole('button', { name: 'Button' });
    const minimizeButton = screen.getByRole('button', { name: 'minimize', hidden: true });
    const closeButton = screen.getByRole('button', { name: 'close', hidden: true });
    const dialog = screen.getByRole('dialog', { hidden: true });
    const dialogContents = screen.getByTestId('dialog-contents');
    const dialogHeader = screen.getByTestId('dialog-header');
    const dialogHeading = screen.getByText('My custom dialog');

    expect(dialogButton.getAttribute('data-paste-element')).toEqual('MINIMIZABLE_DIALOG_BUTTON');
    expect(minimizeButton.getAttribute('data-paste-element')).toEqual('MINIMIZABLE_DIALOG_HEADER_MINIMIZE_BUTTON');
    expect(closeButton.getAttribute('data-paste-element')).toEqual('MINIMIZABLE_DIALOG_HEADER_CLOSE_BUTTON');
    expect(dialogContents.getAttribute('data-paste-element')).toEqual('MINIMIZABLE_DIALOG_CONTENT');
    expect(dialogHeader.getAttribute('data-paste-element')).toEqual('MINIMIZABLE_DIALOG_HEADER');
    expect(dialogHeading.getAttribute('data-paste-element')).toEqual('MINIMIZABLE_DIALOG_HEADER_HEADING');

    expect(dialog.querySelector('[data-paste-element="MINIMIZABLE_DIALOG"]')).toBeInTheDocument();
    expect(
      minimizeButton.querySelector('[data-paste-element="MINIMIZABLE_DIALOG_HEADER_MINIMIZE_ICON"]'),
    ).toBeInTheDocument();
    expect(
      closeButton.querySelector('[data-paste-element="MINIMIZABLE_DIALOG_HEADER_CLOSE_ICON"]'),
    ).toBeInTheDocument();
  });

  it('should add custom styles to components', async () => {
    render(
      <MinimizableDialogContainer>
        <MinimizableDialogButton variant="primary">Button</MinimizableDialogButton>
        <MinimizableDialog aria-label="My custom dialog">
          <MinimizableDialogHeader data-testid="dialog-header">My custom dialog</MinimizableDialogHeader>
          <MinimizableDialogContent data-testid="dialog-contents">This is a dialog.</MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>,
      { wrapper: CustomizationWrapper },
    );

    const dialogButton = screen.getByRole('button', { name: 'Button' });

    await waitFor(() => {
      fireEvent.click(dialogButton);
    });

    const minimizeButton = screen.getByRole('button', { name: 'minimize' });
    const closeButton = screen.getByRole('button', { name: 'close' });
    const dialog = screen.getByRole('dialog').querySelector('[data-paste-element="MINIMIZABLE_DIALOG"]');
    const dialogContents = screen.getByTestId('dialog-contents');
    const dialogHeader = screen.getByTestId('dialog-header');
    const dialogHeading = screen.getByText('My custom dialog');
    const minimizeIcon = minimizeButton.querySelector('[data-paste-element="MINIMIZABLE_DIALOG_HEADER_MINIMIZE_ICON"]');
    const closeIcon = closeButton.querySelector('[data-paste-element="MINIMIZABLE_DIALOG_HEADER_CLOSE_ICON"]');

    expect(dialogButton).toHaveStyleRule('background-color', 'rgb(225, 227, 234)');
    expect(dialogHeader).toHaveStyleRule('padding-top', '0.75rem');
    expect(dialogHeading).toHaveStyleRule('font-size', '1.125rem');
    expect(dialogContents).toHaveStyleRule('margin', '0');
    expect(dialog).toHaveStyleRule('background-color', 'rgb(204, 228, 255)');
    expect(minimizeButton).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(minimizeIcon).toHaveStyleRule('width', '1.75rem');
    expect(closeButton).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(closeIcon).toHaveStyleRule('width', '1.75rem');
  });

  it('should set custom element data attributes', () => {
    render(
      <MinimizableDialogContainer>
        <MinimizableDialogButton variant="primary" element="FOO_DIALOG_BUTTON">
          Button
        </MinimizableDialogButton>
        <MinimizableDialog aria-label="My custom dialog" element="FOO_DIALOG">
          <MinimizableDialogHeader data-testid="dialog-header" element="FOO_DIALOG_HEADER">
            My custom dialog
          </MinimizableDialogHeader>
          <MinimizableDialogContent data-testid="dialog-contents" element="FOO_DIALOG_CONTENT">
            This is a dialog.
          </MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>,
    );

    const dialogButton = screen.getByRole('button', { name: 'Button' });
    const minimizeButton = screen.getByRole('button', { name: 'minimize', hidden: true });
    const closeButton = screen.getByRole('button', { name: 'close', hidden: true });
    const dialog = screen.getByRole('dialog', { hidden: true });
    const dialogContents = screen.getByTestId('dialog-contents');
    const dialogHeader = screen.getByTestId('dialog-header');
    const dialogHeading = screen.getByText('My custom dialog');

    expect(dialogButton.getAttribute('data-paste-element')).toEqual('FOO_DIALOG_BUTTON');
    expect(minimizeButton.getAttribute('data-paste-element')).toEqual('FOO_DIALOG_HEADER_MINIMIZE_BUTTON');
    expect(closeButton.getAttribute('data-paste-element')).toEqual('FOO_DIALOG_HEADER_CLOSE_BUTTON');
    expect(dialogContents.getAttribute('data-paste-element')).toEqual('FOO_DIALOG_CONTENT');
    expect(dialogHeader.getAttribute('data-paste-element')).toEqual('FOO_DIALOG_HEADER');
    expect(dialogHeading.getAttribute('data-paste-element')).toEqual('FOO_DIALOG_HEADER_HEADING');

    expect(dialog.querySelector('[data-paste-element="FOO_DIALOG"]')).toBeInTheDocument();
    expect(minimizeButton.querySelector('[data-paste-element="FOO_DIALOG_HEADER_MINIMIZE_ICON"]')).toBeInTheDocument();
    expect(closeButton.querySelector('[data-paste-element="FOO_DIALOG_HEADER_CLOSE_ICON"]')).toBeInTheDocument();
  });

  it('should add custom styles to components with custom element data attributes', async () => {
    render(
      <MinimizableDialogContainer>
        <MinimizableDialogButton variant="primary" element="FOO_DIALOG_BUTTON">
          Button
        </MinimizableDialogButton>
        <MinimizableDialog aria-label="My custom dialog" element="FOO_DIALOG">
          <MinimizableDialogHeader data-testid="dialog-header" element="FOO_DIALOG_HEADER">
            My custom dialog
          </MinimizableDialogHeader>
          <MinimizableDialogContent data-testid="dialog-contents" element="FOO_DIALOG_CONTENT">
            This is a dialog.
          </MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>,
      { wrapper: MyCustomizationWrapper },
    );

    const dialogButton = screen.getByRole('button', { name: 'Button' });

    await waitFor(() => {
      fireEvent.click(dialogButton);
    });

    const minimizeButton = screen.getByRole('button', { name: 'minimize' });
    const closeButton = screen.getByRole('button', { name: 'close' });
    const dialog = screen.getByRole('dialog').querySelector('[data-paste-element="FOO_DIALOG"]');
    const dialogContents = screen.getByTestId('dialog-contents');
    const dialogHeader = screen.getByTestId('dialog-header');
    const dialogHeading = screen.getByText('My custom dialog');
    const minimizeIcon = minimizeButton.querySelector('[data-paste-element="FOO_DIALOG_HEADER_MINIMIZE_ICON"]');
    const closeIcon = closeButton.querySelector('[data-paste-element="FOO_DIALOG_HEADER_CLOSE_ICON"]');

    expect(dialogButton).toHaveStyleRule('background-color', 'rgb(225, 227, 234)');
    expect(dialogHeader).toHaveStyleRule('padding-top', '0.75rem');
    expect(dialogHeading).toHaveStyleRule('font-size', '1.125rem');
    expect(dialogContents).toHaveStyleRule('margin', '0');
    expect(dialog).toHaveStyleRule('background-color', 'rgb(204, 228, 255)');
    expect(minimizeButton).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(minimizeIcon).toHaveStyleRule('width', '1.75rem');
    expect(closeButton).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(closeIcon).toHaveStyleRule('width', '1.75rem');
  });
});
