import * as React from 'react';
import {
  UserDialog,
  UserDialogContainer,
  UserDialogUserEmail,
  UserDialogUserInfo,
  UserDialogUserName,
} from '@twilio-paste/topbar';
import {UserIcon} from '@twilio-paste/icons/esm/UserIcon';

export const UserDialogExample: React.FC = () => {
  return (
    <UserDialogContainer name="User Name" icon={UserIcon} baseId="i-am-user-dialog">
      <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
        <UserDialogUserInfo>
          <UserDialogUserName>Name</UserDialogUserName>
          <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
        </UserDialogUserInfo>
      </UserDialog>
    </UserDialogContainer>
  );
};
