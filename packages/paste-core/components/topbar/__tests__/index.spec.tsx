import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CustomizationProvider} from '@twilio-paste/customization';

import {
  Topbar,
  useUserDialogState,
  UserDialog,
  UserDialogUserInfo,
  UserDialogUserName,
  UserDialogUserEmail,
} from '../src';
import {BasicUserDialog, StateHookUserDialog} from '../stories/userDialog.stories';

describe('Topbar', () => {
  it('renders correctly', () => {
    render(<Topbar>Topbar</Topbar>);
    const renderedTopbar = screen.getByText('Topbar');
    expect(renderedTopbar).toHaveStyleRule('position', 'sticky');
    expect(renderedTopbar).toHaveStyleRule('top', '0');
  });

  describe('User Dialog', () => {
    describe('Render', () => {
      it('should render a user dialog button with aria attributes', async () => {
        render(<BasicUserDialog />);
        const renderedUserDialogButton = screen.getByRole('button');
        const renderedUserDialog = screen.getByTestId('basic-user-dialog');
        expect(renderedUserDialogButton.getAttribute('aria-haspopup')).toEqual('dialog');
        expect(renderedUserDialogButton.getAttribute('aria-controls')).toEqual(renderedUserDialog.id);
        expect(renderedUserDialogButton.getAttribute('aria-expanded')).toEqual('false');
        expect(renderedUserDialog).not.toBeVisible();
        await waitFor(() => {
          userEvent.click(renderedUserDialogButton);
        });
        expect(renderedUserDialogButton.getAttribute('aria-expanded')).toEqual('true');
        expect(renderedUserDialog).toBeVisible();
      });

      it('should render a user dialog', () => {
        render(<BasicUserDialog />);
        const renderedUserDialog = screen.getByLabelText('user menu');
        expect(renderedUserDialog.getAttribute('role')).toEqual('dialog');
      });

      // Add tests for initial focus once list items are added

      it('should render a user dialog and show/hide on external button click', async () => {
        render(<StateHookUserDialog />);
        const ButtonOne = screen.queryByTestId('show-button');
        const ButtonTwo = screen.queryByTestId('hide-button');
        const userDialog = screen.getByTestId('basic-user-dialog');
        if (ButtonOne === null || ButtonTwo === null || userDialog === null) {
          return;
        }
        expect(userDialog.getAttribute('hidden')).toBeDefined();
        await waitFor(() => {
          userEvent.click(ButtonOne);
        });
        if (userDialog === null) return;
        expect(userDialog).toBeVisible();
        await waitFor(() => {
          userEvent.click(ButtonTwo);
        });
        if (userDialog === null) return;
        expect(userDialog).not.toBeVisible();
      });
    });
  });

  describe('customization', () => {
    it('should add custom styling correctly', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          elements={{
            TOPBAR: {
              backgroundColor: 'colorBackgroundPrimary',
              color: 'colorTextInverse',
            },
            CUSTOM_TOPBAR: {
              backgroundColor: 'colorBackgroundPrimaryWeak',
              color: 'colorText',
            },
          }}
        >
          <Topbar>Topbar</Topbar>
          <Topbar element="CUSTOM_TOPBAR">CustomTopbar</Topbar>
        </CustomizationProvider>
      );

      const renderedTopbar = screen.getByText('Topbar');
      expect(renderedTopbar).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');
      expect(renderedTopbar).toHaveStyleRule('color', 'rgb(255, 255, 255)');

      const renderedCustomTopbar = screen.getByText('CustomTopbar');
      expect(renderedCustomTopbar).toHaveStyleRule('background-color', 'rgb(153, 205, 255)');
      expect(renderedCustomTopbar).toHaveStyleRule('color', 'rgb(18, 28, 45)');
    });
  });
});
