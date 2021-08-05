import * as React from 'react';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import {CustomizationProvider} from '@twilio-paste/customization';
import {UserIcon} from '@twilio-paste/icons/esm/UserIcon';
import {Avatar} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Avatar',
  component: Avatar,
  // Sets the diffThreshold for all stories
  chromatic: {diffThreshold: 0.3},
};

export const Initials = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space100">
      <Stack orientation="horizontal" spacing="space40">
        <Avatar size="sizeIcon10" name="William Wallace" />
        <Avatar size="sizeIcon20" name="William Wallace" />
        <Avatar size="sizeIcon30" name="William Wallace" />
        <Avatar size="sizeIcon40" name="William Wallace" />
        <Avatar size="sizeIcon50" name="William Wallace" />
        <Avatar size="sizeIcon60" name="William Wallace" />
        <Avatar size="sizeIcon70" name="William Wallace" />
        <Avatar size="sizeIcon80" name="William Wallace" />
        <Avatar size="sizeIcon90" name="William Wallace" />
        <Avatar size="sizeIcon100" name="William Wallace" />
        <Avatar size="sizeIcon110" name="William Wallace" />
      </Stack>
      <Stack orientation="horizontal" spacing="space40">
        <Avatar size="sizeIcon10" name="Tamir Rice" />
        <Avatar size="sizeIcon20" name="Philando Castile" />
        <Avatar size="sizeIcon30" name="Trayvon Martin" />
        <Avatar size="sizeIcon40" name="Breonna Taylor" />
        <Avatar size="sizeIcon50" name="Shantel Davis" />
        <Avatar size="sizeIcon60" name="Walter Scott" />
        <Avatar size="sizeIcon70" name="James Baldwin" />
        <Avatar size="sizeIcon80" name="Toni Morrison" />
        <Avatar size="sizeIcon90" name="Chimamanda Ngozi Adichie" />
        <Avatar size="sizeIcon100" name="Sarah Li" />
        <Avatar size="sizeIcon110" name="Katie Porter" />
      </Stack>
    </Stack>
  );
};

export const Image = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Avatar size="sizeIcon10" name="avatar example" src="./avatars/avatar-sizeIcon10.png" />
      <Avatar size="sizeIcon20" name="avatar example" src="./avatars/avatar-sizeIcon20.png" />
      <Avatar size="sizeIcon30" name="avatar example" src="./avatars/avatar-sizeIcon30.png" />
      <Avatar size="sizeIcon40" name="avatar example" src="./avatars/avatar-sizeIcon40.png" />
      <Avatar size="sizeIcon50" name="avatar example" src="./avatars/avatar-sizeIcon50.png" />
      <Avatar size="sizeIcon60" name="avatar example" src="./avatars/avatar-sizeIcon60.png" />
      <Avatar size="sizeIcon70" name="avatar example" src="./avatars/avatar-sizeIcon70.png" />
      <Avatar size="sizeIcon80" name="avatar example" src="./avatars/avatar-sizeIcon80.png" />
      <Avatar size="sizeIcon90" name="avatar example" src="./avatars/avatar-sizeIcon90.png" />
      <Avatar size="sizeIcon100" name="avatar example" src="./avatars/avatar-sizeIcon100.png" />
      <Avatar size="sizeIcon110" name="avatar example" src="./avatars/avatar-sizeIcon110.png" />
    </Stack>
  );
};

export const Icon = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Avatar size="sizeIcon10" name="avatar example" icon={UserIcon} />
      <Avatar size="sizeIcon20" name="avatar example" icon={UserIcon} />
      <Avatar size="sizeIcon30" name="avatar example" icon={UserIcon} />
      <Avatar size="sizeIcon40" name="avatar example" icon={UserIcon} />
      <Avatar size="sizeIcon50" name="avatar example" icon={UserIcon} />
      <Avatar size="sizeIcon60" name="avatar example" icon={UserIcon} />
      <Avatar size="sizeIcon70" name="avatar example" icon={UserIcon} />
      <Avatar size="sizeIcon80" name="avatar example" icon={UserIcon} />
      <Avatar size="sizeIcon90" name="avatar example" icon={UserIcon} />
      <Avatar size="sizeIcon100" name="avatar example" icon={UserIcon} />
      <Avatar size="sizeIcon110" name="avatar example" icon={UserIcon} />
    </Stack>
  );
};

Image.story = {
  parameters: {chromatic: {delay: 3000}},
};

export const ResponsiveInitials = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Avatar size={['sizeIcon10', 'sizeIcon50', 'sizeIcon110']} name="Simon Taggart" />
    </Stack>
  );
};

export const ResponsiveImage = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Avatar
        size={['sizeIcon10', 'sizeIcon50', 'sizeIcon110']}
        name="avatar example"
        src="./avatars/avatar-sizeIcon50.png"
      />
    </Stack>
  );
};

export const ResponsiveIcon = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Avatar size={['sizeIcon10', 'sizeIcon50', 'sizeIcon110']} name="avatar example" icon={UserIcon} />
    </Stack>
  );
};

ResponsiveImage.story = {
  parameters: {chromatic: {delay: 3000}},
};

export const CustomAvatar = (): React.ReactNode => {
  return (
    <>
      <Stack orientation="horizontal" spacing="space40">
        <Avatar size="sizeIcon40" name="Breonna Taylor" />
        <Avatar size="sizeIcon50" name="avatar example" src="./avatars/avatar-sizeIcon50.png" />
        <Avatar size="sizeIcon60" name="avatar example" icon={UserIcon} />
      </Stack>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          AVATAR: {
            backgroundColor: 'colorBackgroundTrial',
          },
          AANG: {
            color: 'colorTextWeakest',
            backgroundColor: 'colorBackgroundPrimary',
          },
        }}
      >
        <Box marginBottom="space60" marginTop="space60">
          <Stack orientation="horizontal" spacing="space40">
            <Avatar size="sizeIcon40" name="Breonna Taylor" />
            <Avatar size="sizeIcon50" name="avatar example" src="./avatars/avatar-sizeIcon50.png" />
            <Avatar size="sizeIcon60" name="avatar example" icon={UserIcon} />
          </Stack>
        </Box>
        <Stack orientation="horizontal" spacing="space40">
          <Avatar element="AANG" size="sizeIcon40" name="Breonna Taylor" />
          <Avatar element="AANG" size="sizeIcon50" name="avatar example" src="./avatars/avatar-sizeIcon50.png" />
          <Avatar element="AANG" size="sizeIcon60" name="avatar example" icon={UserIcon} />
        </Stack>
      </CustomizationProvider>
    </>
  );
};
