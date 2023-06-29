import * as React from 'react';
import {
  UserDialog,
  UserDialogContainer,
  UserDialogList,
  UserDialogListItem,
  UserDialogSeparator,
  UserDialogUserEmail,
  UserDialogUserInfo,
  UserDialogUserName,
  useUserDialogListState,
} from '@twilio-paste/user-dialog';
import {UserIcon} from '@twilio-paste/icons/esm/UserIcon';
import {CodeIcon} from '@twilio-paste/icons/esm/CodeIcon';
import {DocumentationIcon} from '@twilio-paste/icons/esm/DocumentationIcon';
import {LogOutIcon} from '@twilio-paste/icons/esm/LogOutIcon';
import {SupportIcon} from '@twilio-paste/icons/esm/SupportIcon';

export const UserDialogExample: React.FC = () => {
  const userDialogList = useUserDialogListState();
  return (
    <UserDialogContainer name="User Name" icon={UserIcon} baseId="i-am-user-dialog">
      <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
        <UserDialogUserInfo>
          <UserDialogUserName>Name</UserDialogUserName>
          <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
        </UserDialogUserInfo>
        <UserDialogList {...userDialogList} aria-label="User menu actions">
          <UserDialogListItem {...userDialogList}>
            <UserIcon decorative />
            User settings
          </UserDialogListItem>
          <UserDialogSeparator />
          <UserDialogListItem {...userDialogList} href="https://www.google.com">
            <DocumentationIcon decorative />
            Documentation
          </UserDialogListItem>
          <UserDialogListItem {...userDialogList} href="https://www.google.com">
            <SupportIcon decorative />
            Contact support
          </UserDialogListItem>
          <UserDialogSeparator />
          <UserDialogListItem {...userDialogList} href="https://www.google.com">
            <CodeIcon decorative />
            Developer portal
          </UserDialogListItem>
          <UserDialogSeparator />
          <UserDialogListItem {...userDialogList} href="https://www.google.com">
            <LogOutIcon decorative />
            Log out
          </UserDialogListItem>
        </UserDialogList>
      </UserDialog>
    </UserDialogContainer>
  );
};
