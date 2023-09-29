import type { StoryFn } from "@storybook/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import { ThemeIcon } from "@twilio-paste/icons/esm/ThemeIcon";
import { TranslationIcon } from "@twilio-paste/icons/esm/TranslationIcon";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { useTheme } from "@twilio-paste/theme";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

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
  useUserDialogState,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/User Dialog",
};

export const BasicUserDialog: StoryFn = ({ visible = true }) => {
  const id1 = useUID();
  const id2 = useUID();
  const id3 = useUID();
  const userDialog = useUserDialogState({ visible });
  const userDialogList = useUserDialogListState();
  const [selected, setSelected] = React.useState("");
  return (
    <UserDialogContainer {...userDialog} name="User Name" icon={UserIcon} baseId="i-am-user-dialog">
      <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
        <UserDialogUserInfo>
          <UserDialogUserName>Name</UserDialogUserName>
          <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
        </UserDialogUserInfo>
        <UserDialogList {...userDialogList} aria-label="User menu actions" data-testid="user-dialog-listbox">
          <UserDialogListItem
            {...userDialogList}
            key={id1}
            selected={selected === id1}
            onSelect={() => setSelected(id1)}
            data-testid="FIRST_ITEM"
          >
            <UserIcon decorative />
            Item
          </UserDialogListItem>
          <UserDialogSeparator />
          <UserDialogListItem
            {...userDialogList}
            key={id2}
            selected={selected === id2}
            onSelect={() => setSelected(id2)}
            data-testid="SECOND_ITEM"
            href="https://www.google.com"
          >
            <UserIcon decorative />
            Item
          </UserDialogListItem>
          <UserDialogSeparator />
          <UserDialogListItem
            {...userDialogList}
            key={id3}
            selected={selected === id3}
            onSelect={() => setSelected(id3)}
            data-testid="THIRD_ITEM"
          >
            <ThemeIcon decorative />
            <Box width="100%" display="flex" justifyContent="space-between">
              Theme
              <Badge variant="decorative10" as="span" size="small">
                Light
              </Badge>
            </Box>
          </UserDialogListItem>
          <UserDialogListItem {...userDialogList} key="4" selected={selected === "4"} onSelect={() => setSelected("4")}>
            <TranslationIcon decorative />
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
  const [selected, setSelected] = React.useState("");
  const id1 = useUID();
  const id2 = useUID();
  return (
    <UserDialogContainer name="User Name" src="./avatars/avatar-sizeIcon10.png" baseId="i-am-user-dialog" visible>
      <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
        <UserDialogUserInfo>
          <UserDialogUserName>Name</UserDialogUserName>
          <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
        </UserDialogUserInfo>
        <UserDialogList {...userDialogList} aria-label="User menu actions">
          <UserDialogListItem
            {...userDialogList}
            key={id1}
            selected={selected === id1}
            onSelect={() => setSelected(id1)}
          >
            Item1
          </UserDialogListItem>
          <UserDialogListItem
            {...userDialogList}
            href="https://www.google.com"
            key={id2}
            selected={selected === id2}
            onSelect={() => setSelected(id2)}
          >
            Item2
          </UserDialogListItem>
        </UserDialogList>
      </UserDialog>
    </UserDialogContainer>
  );
};

export const StateHookUserDialog: StoryFn = ({ visible = true }) => {
  const userDialog = useUserDialogState({ placement: "right", gutter: 50, baseId: "baseIdNoraKrantz", visible });
  const userDialogList = useUserDialogListState();
  const [selected, setSelected] = React.useState("");
  const id1 = useUID();
  const id2 = useUID();
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
          <UserDialogList {...userDialogList} aria-label="User menu actions">
            <UserDialogListItem
              {...userDialogList}
              key={id1}
              selected={selected === id1}
              onSelect={() => setSelected(id1)}
            >
              Item1
            </UserDialogListItem>
            <UserDialogListItem
              {...userDialogList}
              key={id2}
              selected={selected === id2}
              onSelect={() => setSelected(id2)}
              href="https://www.google.com"
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
  const [selected, setSelected] = React.useState("");
  const id1a = useUID();
  const id2a = useUID();
  const id1b = useUID();
  const id2b = useUID();
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        // Default element names
        USER_DIALOG_BUTTON: { backgroundColor: "colorBackgroundDecorative10Weakest" },
        USER_DIALOG_BUTTON_CONTENTS: { padding: "space20" },
        USER_DIALOG_BUTTON_AVATAR: {
          backgroundColor: "colorBackgroundDecorative30Weakest",
          color: "colorTextDecorative20",
        },
        USER_DIALOG_BUTTON_ICON: { marginLeft: "space30" },
        USER_DIALOG: { padding: "space40" },
        USER_DIALOG_USER_INFO: { backgroundColor: "colorBackgroundBrandHighlightWeakest" },
        USER_DIALOG_USER_AVATAR: {
          backgroundColor: "colorBackgroundDecorative30Weakest",
          color: "colorTextDecorative20",
        },
        USER_DIALOG_USER_NAME: { color: "colorTextDecorative30" },
        USER_DIALOG_USER_EMAIL: { color: "colorTextDecorative20" },
        USER_DIALOG_LIST: { backgroundColor: "colorBackgroundDecorative30Weakest" },
        USER_DIALOG_LIST_ITEM: { borderLeftColor: "colorBorderDestructiveStrong" },
        // Custom element names
        FOO_BUTTON: { backgroundColor: "colorBackgroundDecorative10Weakest" },
        FOO_BUTTON_CONTENTS: { padding: "space20" },
        FOO_BUTTON_AVATAR: {
          backgroundColor: "colorBackgroundDecorative30Weakest",
          color: "colorTextDecorative20",
        },
        FOO_BUTTON_ICON: { marginLeft: "space30" },
        FOO: { padding: "space40" },
        FAZ_USER_INFO: { backgroundColor: "colorBackgroundBrandHighlightWeakest" },
        FAZ_USER_AVATAR: {
          backgroundColor: "colorBackgroundDecorative30Weakest",
          color: "colorTextDecorative20",
        },
        BAR: { color: "colorTextDecorative30" },
        BAZ: { color: "colorTextDecorative20" },
        FOO_LIST: { backgroundColor: "colorBackgroundDecorative30Weakest" },
        FOO_LIST_ITEM: { borderLeftColor: "colorBorderDestructiveStrong" },
      }}
    >
      <Box display="flex" columnGap="space50">
        <UserDialogContainer name="User Name" icon={UserIcon} baseId="i-am-user-dialog" visible>
          <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
            <UserDialogUserInfo>
              <UserDialogUserName>Name</UserDialogUserName>
              <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
            </UserDialogUserInfo>
            <UserDialogList {...userDialogList} aria-label="User menu actions">
              <UserDialogListItem
                {...userDialogList}
                key={id1a}
                selected={selected === id1a}
                onSelect={() => setSelected(id1a)}
              >
                <UserIcon decorative />
                Item
              </UserDialogListItem>
              <UserDialogSeparator />
              <UserDialogListItem
                {...userDialogList}
                key={id2a}
                selected={selected === id2a}
                onSelect={() => setSelected(id2a)}
                href="https://www.google.com"
              >
                <ThemeIcon decorative />
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
            <UserDialogList {...userDialogList} aria-label="User menu actions" element="FOO">
              <UserDialogListItem
                {...userDialogList}
                key={id1b}
                selected={selected === id1b}
                onSelect={() => setSelected(id1b)}
                element="FOO"
              >
                <UserIcon decorative />
                Item
              </UserDialogListItem>
              <UserDialogSeparator />
              <UserDialogListItem
                {...userDialogList}
                key={id2b}
                selected={selected === id2b}
                onSelect={() => setSelected(id2b)}
                element="FOO"
                href="https://www.google.com"
              >
                <ThemeIcon decorative />
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
CustomizedUserDialog.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
