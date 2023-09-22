import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';

import { BasicUserDialog, CustomizedUserDialog, StateHookUserDialog } from '../stories/index.stories';

describe('User Dialog', () => {
  describe('Render', () => {
    it('should render a user dialog button with aria attributes', async () => {
      render(<BasicUserDialog visible={false} />);
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
      render(<BasicUserDialog visible={false} />);
      const renderedUserDialog = screen.getByLabelText('user menu');
      expect(renderedUserDialog.getAttribute('role')).toEqual('dialog');
    });

    it('should render a listbox with options', async () => {
      await waitFor(() => {
        render(<BasicUserDialog />);
      });
      const renderedUserDialogListbox = screen.getByTestId('user-dialog-listbox');
      expect(renderedUserDialogListbox.getAttribute('role')).toEqual('listbox');
      expect(renderedUserDialogListbox?.firstElementChild?.getAttribute('role')).toEqual('option');
    });

    it('should focus the first list item on open', async () => {
      render(<BasicUserDialog visible={false} />);
      const renderedUserDialogButton = screen.getByRole('button');
      await waitFor(() => {
        userEvent.click(renderedUserDialogButton);
      });
      expect(screen.getByTestId('FIRST_ITEM')).toHaveFocus();
    });

    it('should move focus with up and down keyboard navigation', async () => {
      render(<BasicUserDialog visible={false} />);
      const renderedUserDialogButton = screen.getByRole('button');
      userEvent.click(renderedUserDialogButton);
      userEvent.keyboard('{arrowdown}');
      await waitFor(() => {
        expect(screen.getByTestId('SECOND_ITEM')).toHaveFocus();
      });
      userEvent.keyboard('{arrowright}');
      await waitFor(() => {
        expect(screen.getByTestId('SECOND_ITEM')).toHaveFocus();
      });
      userEvent.keyboard('{arrowleft}');
      await waitFor(() => {
        expect(screen.getByTestId('SECOND_ITEM')).toHaveFocus();
      });
    });

    it('should select the current option when enter is pressed', async () => {
      render(<BasicUserDialog visible={false} />);
      const renderedUserDialogButton = screen.getByRole('button');
      userEvent.click(renderedUserDialogButton);
      await waitFor(() => {
        expect(screen.getByTestId('FIRST_ITEM').getAttribute('aria-selected')).toEqual('false');
      });
      userEvent.keyboard('{enter}');
      await waitFor(() => {
        expect(screen.getByTestId('FIRST_ITEM').getAttribute('aria-selected')).toEqual('true');
      });
    });

    it('should render a user dialog and show/hide on external button click', async () => {
      render(<StateHookUserDialog visible={false} />);
      const ButtonOne = screen.queryByTestId('show-button');
      const ButtonTwo = screen.queryByTestId('hide-button');
      const userDialog = screen.getByTestId('basic-user-dialog');
      if (ButtonOne === null || ButtonTwo === null || userDialog === null) {
        return;
      }
      expect(userDialog.getAttribute('hidden')).toBeDefined();
      userEvent.click(ButtonOne);
      if (userDialog === null) return;
      await waitFor(() => {
        expect(userDialog).toBeVisible();
      });
      userEvent.click(ButtonTwo);
      if (userDialog === null) return;
      await waitFor(() => {
        expect(userDialog).not.toBeVisible();
      });
    });

    it('should render an anchor when href is passed', async () => {
      render(<BasicUserDialog visible={false} />);
      const renderedUserDialogButton = screen.getByRole('button');
      await waitFor(() => {
        userEvent.click(renderedUserDialogButton);
      });
      expect(screen.getByTestId('SECOND_ITEM').getAttribute('href')).toBe('https://www.google.com');
      expect(document.querySelector('a')).toBeInTheDocument();
    });
  });
});

describe('customization', () => {
  it('User Dialog - should add custom styling correctly', async () => {
    await waitFor(() => {
      render(<CustomizedUserDialog />);
    });

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
    const renderedUserDialogList = screen.getByRole('listbox');
    const renderedUserDialogListItem = screen.getAllByRole('option')[0];

    expect(renderedUserDialogButton.getAttribute('data-paste-element')).toEqual('USER_DIALOG_BUTTON');
    expect(renderedUserDialogButton).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(renderedUserDialogButtonContents?.getAttribute('data-paste-element')).toEqual('USER_DIALOG_BUTTON_CONTENTS');
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
    expect(renderedUserDialogList).toHaveStyleRule('background-color', 'rgb(237, 253, 243)');
    expect(renderedUserDialogListItem).toHaveStyleRule('border-left-color', 'rgb(117, 12, 12)');
  });
});
