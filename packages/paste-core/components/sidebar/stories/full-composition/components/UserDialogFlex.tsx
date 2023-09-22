import { Badge } from '@twilio-paste/badge';
import { Box } from '@twilio-paste/box';
import { LogOutIcon } from '@twilio-paste/icons/esm/LogOutIcon';
import { ThemeIcon } from '@twilio-paste/icons/esm/ThemeIcon';
import { TranslationIcon } from '@twilio-paste/icons/esm/TranslationIcon';
import { UserIcon } from '@twilio-paste/icons/esm/UserIcon';
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
import * as React from 'react';

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
          <UserDialogListItem {...userDialogList}>
            <ThemeIcon decorative />
            <Box width="100%" display="flex" justifyContent="space-between">
              Theme
              <Badge variant="decorative10" as="span" size="small">
                Light
              </Badge>
            </Box>
          </UserDialogListItem>
          <UserDialogListItem {...userDialogList}>
            <TranslationIcon decorative />
            <Box width="100%" display="flex" justifyContent="space-between">
              Language
              <Badge variant="decorative10" as="span" size="small">
                EN
              </Badge>
            </Box>
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
