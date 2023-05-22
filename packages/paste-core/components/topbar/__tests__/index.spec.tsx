import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CustomizationProvider} from '@twilio-paste/customization';

import {Topbar} from '../src';
import {BasicUserDialog, StateHookUserDialog, CustomizedUserDialog} from '../stories/userDialog.stories';

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
    it('Topbar - should add custom styling correctly', (): void => {
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
    it('User Dialog - should add custom styling correctly', (): void => {
      render(<CustomizedUserDialog />);

      const renderedUserDialogButton = screen.getAllByRole('button')[0];
      const renderedUserDialogButtonContents = renderedUserDialogButton.firstElementChild?.firstElementChild;
      const renderedUserDialogButtonAvatar = renderedUserDialogButtonContents?.firstElementChild;
      const renderedUserDialogButtonIcon = renderedUserDialogButtonContents?.lastElementChild;
      const renderedUserDialog = screen.getByTestId('basic-user-dialog');
      const renderedUserDialogUserInfo = renderedUserDialog.firstElementChild?.firstElementChild;
      const renderedUserDialogUserAvatar =
        renderedUserDialogUserInfo?.firstElementChild?.firstElementChild?.firstElementChild;
      const renderedUserDialogUserName =
        renderedUserDialogUserInfo?.firstElementChild?.lastElementChild?.firstElementChild;
      const renderedUserDialogUserEmail =
        renderedUserDialogUserInfo?.firstElementChild?.lastElementChild?.lastElementChild;
      expect(renderedUserDialogButton.getAttribute('data-paste-element')).toEqual('USER_DIALOG_BUTTON');
      expect(renderedUserDialogButton).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
      expect(renderedUserDialogButtonContents?.getAttribute('data-paste-element')).toEqual(
        'USER_DIALOG_BUTTON_CONTENTS'
      );
      expect(renderedUserDialogButtonContents).toHaveStyleRule('padding', '0.25rem');
      expect(renderedUserDialogButtonAvatar?.getAttribute('data-paste-element')).toEqual('USER_DIALOG_BUTTON_AVATAR');
      expect(renderedUserDialogButtonAvatar).toHaveStyleRule('background-color', 'rgb(237, 253, 243)');
      expect(renderedUserDialogButtonIcon?.getAttribute('data-paste-element')).toEqual('USER_DIALOG_BUTTON_ICON');
      expect(renderedUserDialogButtonIcon).toHaveStyleRule('margin-left', '0.5rem');
      expect(renderedUserDialog.getAttribute('data-paste-element')).toEqual('USER_DIALOG');
      expect(renderedUserDialog).toHaveStyleRule('padding', '0.75rem');
      expect(renderedUserDialogUserInfo?.getAttribute('data-paste-element')).toEqual('USER_DIALOG_USER_INFO');
      expect(renderedUserDialogUserInfo).toHaveStyleRule('background-color', 'rgba(242, 47, 70, 0.1)');
      expect(renderedUserDialogUserAvatar?.getAttribute('data-paste-element')).toEqual('USER_DIALOG_USER_AVATAR');
      expect(renderedUserDialogUserAvatar).toHaveStyleRule('background-color', 'rgb(237, 253, 243)');
      expect(renderedUserDialogUserName?.getAttribute('data-paste-element')).toEqual('USER_DIALOG_USER_NAME');
      expect(renderedUserDialogUserName).toHaveStyleRule('color', 'rgb(14, 124, 58)');
      expect(renderedUserDialogUserEmail?.getAttribute('data-paste-element')).toEqual('USER_DIALOG_USER_EMAIL');
      expect(renderedUserDialogUserEmail).toHaveStyleRule('color', 'rgb(0, 20, 137)');
    });
  });
});
