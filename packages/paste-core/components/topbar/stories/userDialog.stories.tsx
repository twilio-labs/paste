import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {UserIcon} from '@twilio-paste/icons/esm/UserIcon';
import {ThemeIcon} from '@twilio-paste/icons/esm/ThemeIcon';
import {TranslationIcon} from '@twilio-paste/icons/esm/TranslationIcon';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {CustomizationProvider} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';
// eslint-disable-next-line import/no-extraneous-dependencies
import {Badge} from '@twilio-paste/badge';

import {
  useUserDialogState,
  UserDialog,
  UserDialogUserInfo,
  UserDialogUserName,
  UserDialogUserEmail,
  UserDialogContainer,
  UserDialogList,
  UserDialogListItem,
  useUserDialogListState,
  UserDialogSeparator,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Topbar',
};

export const BasicUserDialog: StoryFn = () => {
  const userDialog = useUserDialogState();
  const userDialogList = useUserDialogListState();
  const [selected, setSelected] = React.useState('');
  return (
    <UserDialogContainer {...userDialog} name="User Name" icon={UserIcon} baseId="i-am-user-dialog">
      <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
        <UserDialogUserInfo>
          <UserDialogUserName>Name</UserDialogUserName>
          <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
        </UserDialogUserInfo>
        <UserDialogList {...userDialogList} data-testid="user-dialog-listbox">
          <UserDialogListItem
            {...userDialogList}
            key="1"
            selected={selected === '1'}
            onSelect={() => setSelected('1')}
            data-testid="FIRST_ITEM"
          >
            <UserIcon decorative color="inherit" />
            Item
          </UserDialogListItem>
          <UserDialogSeparator />
          <UserDialogListItem
            {...userDialogList}
            key="2"
            selected={selected === '2'}
            onSelect={() => setSelected('2')}
            data-testid="SECOND_ITEM"
          >
            <UserIcon decorative color="inherit" />
            Item
          </UserDialogListItem>
          <UserDialogSeparator />
          <UserDialogListItem
            {...userDialogList}
            key="3"
            selected={selected === '3'}
            onSelect={() => setSelected('3')}
            data-testid="THIRD_ITEM"
          >
            <ThemeIcon decorative color="inherit" />
            <Box width="100%" display="flex" justifyContent="space-between">
              Theme
              <Badge variant="decorative10" as="span" size="small">
                Light
              </Badge>
            </Box>
          </UserDialogListItem>
          <UserDialogSeparator />
          <UserDialogListItem {...userDialogList} key="4" selected={selected === '4'} onSelect={() => setSelected('4')}>
            <TranslationIcon decorative color="inherit" />
            <Box width="100%" display="flex" justifyContent="space-between">
              Language
              <Badge variant="decorative10" as="span" size="small">
                EN
              </Badge>
            </Box>
          </UserDialogListItem>
        </UserDialogList>
      </UserDialog>
    </UserDialogContainer>
  );
};

export const ImageUserDialog: StoryFn = () => {
  const userDialogList = useUserDialogListState();
  const [selected, setSelected] = React.useState('');
  return (
    <UserDialogContainer name="User Name" src="./avatars/avatar-sizeIcon10.png" baseId="i-am-user-dialog">
      <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
        <UserDialogUserInfo>
          <UserDialogUserName>Name</UserDialogUserName>
          <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
        </UserDialogUserInfo>
        <UserDialogList {...userDialogList}>
          <UserDialogListItem
            {...userDialogList}
            key="item1"
            selected={selected === 'item1'}
            onSelect={() => setSelected('item1')}
          >
            Item1
          </UserDialogListItem>
          <UserDialogListItem
            {...userDialogList}
            key="item2"
            selected={selected === 'item2'}
            onSelect={() => setSelected('item2')}
          >
            Item2
          </UserDialogListItem>
        </UserDialogList>
      </UserDialog>
    </UserDialogContainer>
  );
};

export const StateHookUserDialog: StoryFn = () => {
  const userDialog = useUserDialogState({placement: 'right', gutter: 50, baseId: 'baseIdNoraKrantz'});
  const userDialogList = useUserDialogListState();
  const [selected, setSelected] = React.useState('');
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" width="size60">
      <Box display="flex" columnGap="space40" padding="space40" flexWrap="wrap">
        <Box display="flex" columnGap="space40" padding="space40">
          <Button variant="primary" onClick={() => userDialog.show()} data-testid="show-button">
            Open User Dialog
          </Button>
          <Button variant="primary" onClick={() => userDialog.hide()} data-testid="hide-button">
            Close User Dialog
          </Button>
        </Box>
        <Box display="flex" columnGap="space40" padding="space40">
          <Button variant="primary" onClick={() => userDialogList.down()}>
            Focus next item
          </Button>
          <Button variant="primary" onClick={() => userDialogList.up()}>
            Focus previous item
          </Button>
        </Box>
        Re-open listbox to see focus change
      </Box>
      <UserDialogContainer state={userDialog} name="User Name" icon={UserIcon} baseId="i-am-user-dialog">
        <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
          <UserDialogUserInfo>
            <UserDialogUserName>Name</UserDialogUserName>
            <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
          </UserDialogUserInfo>
          <UserDialogList {...userDialogList}>
            <UserDialogListItem
              {...userDialogList}
              key="item1"
              selected={selected === 'item1'}
              onSelect={() => setSelected('item1')}
            >
              Item1
            </UserDialogListItem>
            <UserDialogListItem
              {...userDialogList}
              key="item2"
              selected={selected === 'item2'}
              onSelect={() => setSelected('item2')}
            >
              Item2
            </UserDialogListItem>
          </UserDialogList>
        </UserDialog>
      </UserDialogContainer>
    </Box>
  );
};

export const CustomizedUserDialog: StoryFn = () => {
  const theme = useTheme();
  const userDialogList = useUserDialogListState();
  const [selected, setSelected] = React.useState('');
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        // Default element names
        USER_DIALOG_BUTTON: {backgroundColor: 'colorBackgroundDecorative10Weakest'},
        USER_DIALOG_BUTTON_CONTENTS: {padding: 'space20'},
        USER_DIALOG_BUTTON_AVATAR: {
          backgroundColor: 'colorBackgroundDecorative30Weakest',
          color: 'colorTextDecorative20',
        },
        USER_DIALOG_BUTTON_ICON: {marginLeft: 'space30'},
        USER_DIALOG: {padding: 'space40'},
        USER_DIALOG_USER_INFO: {backgroundColor: 'colorBackgroundBrandHighlightWeakest'},
        USER_DIALOG_USER_AVATAR: {
          backgroundColor: 'colorBackgroundDecorative30Weakest',
          color: 'colorTextDecorative20',
        },
        USER_DIALOG_USER_NAME: {color: 'colorTextDecorative30'},
        USER_DIALOG_USER_EMAIL: {color: 'colorTextDecorative20'},
        USER_DIALOG_LIST: {backgroundColor: 'colorBackgroundDecorative30Weakest'},
        USER_DIALOG_LIST_ITEM: {borderLeftColor: 'colorBorderDestructiveStrong'},
        // Custom element names
        FOO_BUTTON: {backgroundColor: 'colorBackgroundDecorative10Weakest'},
        FOO_BUTTON_CONTENTS: {padding: 'space20'},
        FOO_BUTTON_AVATAR: {
          backgroundColor: 'colorBackgroundDecorative30Weakest',
          color: 'colorTextDecorative20',
        },
        FOO_BUTTON_ICON: {marginLeft: 'space30'},
        FOO: {padding: 'space40'},
        FAZ_USER_INFO: {backgroundColor: 'colorBackgroundBrandHighlightWeakest'},
        FAZ_USER_AVATAR: {
          backgroundColor: 'colorBackgroundDecorative30Weakest',
          color: 'colorTextDecorative20',
        },
        BAR: {color: 'colorTextDecorative30'},
        BAZ: {color: 'colorTextDecorative20'},
        FOO_LIST: {backgroundColor: 'colorBackgroundDecorative30Weakest'},
        FOO_LIST_ITEM: {borderLeftColor: 'colorBorderDestructiveStrong'},
      }}
    >
      <Box display="flex" columnGap="space50">
        <UserDialogContainer name="User Name" icon={UserIcon} baseId="i-am-user-dialog">
          <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
            <UserDialogUserInfo>
              <UserDialogUserName>Name</UserDialogUserName>
              <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
            </UserDialogUserInfo>
            <UserDialogList {...userDialogList}>
              <UserDialogListItem
                {...userDialogList}
                key="2"
                selected={selected === '2'}
                onSelect={() => setSelected('2')}
              >
                <UserIcon decorative color="inherit" />
                Item
              </UserDialogListItem>
              <UserDialogSeparator />
              <UserDialogListItem
                {...userDialogList}
                key="3"
                selected={selected === '3'}
                onSelect={() => setSelected('3')}
              >
                <ThemeIcon decorative color="inherit" />
                <Box width="100%" display="flex" justifyContent="space-between">
                  Theme
                  <Badge variant="decorative10" as="span" size="small">
                    Light
                  </Badge>
                </Box>
              </UserDialogListItem>
            </UserDialogList>
          </UserDialog>
        </UserDialogContainer>
        <UserDialogContainer name="User Name" icon={UserIcon}>
          <UserDialog element="FOO" aria-label="user menu">
            <UserDialogUserInfo element="FAZ">
              <UserDialogUserName element="BAR">Name</UserDialogUserName>
              <UserDialogUserEmail element="BAZ">email@email.com</UserDialogUserEmail>
            </UserDialogUserInfo>
            <UserDialogList {...userDialogList} element="FOO">
              <UserDialogListItem
                {...userDialogList}
                key="2"
                selected={selected === '2'}
                onSelect={() => setSelected('2')}
                element="FOO"
              >
                <UserIcon decorative color="inherit" />
                Item
              </UserDialogListItem>
              <UserDialogSeparator />
              <UserDialogListItem
                {...userDialogList}
                key="3"
                selected={selected === '3'}
                onSelect={() => setSelected('3')}
                element="FOO"
              >
                <ThemeIcon decorative color="inherit" />
                <Box width="100%" display="flex" justifyContent="space-between">
                  Theme
                  <Badge variant="decorative10" as="span" size="small">
                    Light
                  </Badge>
                </Box>
              </UserDialogListItem>
            </UserDialogList>
          </UserDialog>
        </UserDialogContainer>
      </Box>
    </CustomizationProvider>
  );
};
