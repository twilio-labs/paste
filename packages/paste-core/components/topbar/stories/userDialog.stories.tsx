import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {UserIcon} from '@twilio-paste/icons/esm/UserIcon';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';

import {
  useUserDialogState,
  UserDialog,
  UserDialogUserInfo,
  UserDialogUserName,
  UserDialogUserEmail,
  UserDialogContainer,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Topbar',
};

export const BasicUserDialog: StoryFn = () => {
  return (
    <UserDialogContainer name="nora krantz" icon={UserIcon} baseId="i-am-user-dialog">
      <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
        <UserDialogUserInfo>
          <UserDialogUserName>Name</UserDialogUserName>
          <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
        </UserDialogUserInfo>
      </UserDialog>
    </UserDialogContainer>
  );
};

export const StateHookUserDialog: StoryFn = () => {
  const userDialog = useUserDialogState({placement: 'right', gutter: 50, baseId: 'baseIdNoraKrantz'});
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" width="size60">
      <Box display="flex" columnGap="space40" padding="space40">
        <Button variant="primary" onClick={() => userDialog.show()} data-testid="show-button">
          Open User Dialog
        </Button>
        <Button variant="primary" onClick={() => userDialog.hide()} data-testid="hide-button">
          Close User Dialog
        </Button>
      </Box>
      <UserDialogContainer state={userDialog} name="nora krantz" icon={UserIcon} baseId="i-am-user-dialog">
        <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
          <UserDialogUserInfo>
            <UserDialogUserName>Name</UserDialogUserName>
            <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
          </UserDialogUserInfo>
        </UserDialog>
      </UserDialogContainer>
    </Box>
  );
};
