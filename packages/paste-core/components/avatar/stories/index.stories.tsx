import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import {CustomizationProvider} from '@twilio-paste/customization';
import {UserIcon} from '@twilio-paste/icons/esm/UserIcon';
import {BusinessIcon} from '@twilio-paste/icons/esm/BusinessIcon';
import {useTheme} from '@twilio-paste/theme';

import {Avatar, AvatarGroup} from '../src';

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

Image.parameters = {
  chromatic: {delay: 3000},
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

export const ColorVariants = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Avatar color="default" name="avatar example" icon={UserIcon} />
      <Avatar color="decorative10" name="avatar example" icon={UserIcon} />
      <Avatar color="decorative20" name="avatar example" icon={UserIcon} />
      <Avatar color="decorative30" name="avatar example" icon={UserIcon} />
      <Avatar color="decorative40" name="avatar example" icon={UserIcon} />
    </Stack>
  );
};

export const Variants = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Avatar variant="user" name="avatar example" />
      <Avatar variant="user" name="avatar example" icon={UserIcon} />
      <Avatar variant="user" name="avatar example" src="./avatars/avatar-sizeIcon70.png" />
      <Avatar variant="entity" name="entity example" />
      <Avatar variant="entity" name="entity example" icon={BusinessIcon} />
      <Avatar variant="entity" name="entity example" src="./avatars/avatar-sizeIcon70.png" />
    </Stack>
  );
};

export const UserSizes = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Avatar size="sizeIcon10" variant="user" name="Avatar Example" />
      <Avatar size="sizeIcon20" variant="user" name="Avatar Example" />
      <Avatar size="sizeIcon30" variant="user" name="Avatar Example" />
      <Avatar size="sizeIcon40" variant="user" name="Avatar Example" />
      <Avatar size="sizeIcon50" variant="user" name="Avatar Example" />
      <Avatar size="sizeIcon60" variant="user" name="Avatar Example" />
      <Avatar size="sizeIcon70" variant="user" name="Avatar Example" />
      <Avatar size="sizeIcon80" variant="user" name="Avatar Example" />
      <Avatar size="sizeIcon90" variant="user" name="Avatar Example" />
      <Avatar size="sizeIcon100" variant="user" name="Avatar Example" />
      <Avatar size="sizeIcon110" variant="user" name="Avatar Example" />
    </Stack>
  );
};

export const EntitySizes = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Avatar size="sizeIcon10" variant="entity" name="Avatar Example" />
      <Avatar size="sizeIcon20" variant="entity" name="Avatar Example" />
      <Avatar size="sizeIcon30" variant="entity" name="Avatar Example" />
      <Avatar size="sizeIcon40" variant="entity" name="Avatar Example" />
      <Avatar size="sizeIcon50" variant="entity" name="Avatar Example" />
      <Avatar size="sizeIcon60" variant="entity" name="Avatar Example" />
      <Avatar size="sizeIcon70" variant="entity" name="Avatar Example" />
      <Avatar size="sizeIcon80" variant="entity" name="Avatar Example" />
      <Avatar size="sizeIcon90" variant="entity" name="Avatar Example" />
      <Avatar size="sizeIcon100" variant="entity" name="Avatar Example" />
      <Avatar size="sizeIcon110" variant="entity" name="Avatar Example" />
    </Stack>
  );
};

export const Grouped = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space50">
      <Stack orientation="vertical" spacing="space30">
        <AvatarGroup size="sizeIcon30" variant="user">
          <Avatar name="First Avatar" />
          <Avatar name="Second Avatar" />
          <Avatar name="Third Avatar" />
        </AvatarGroup>
        <AvatarGroup size="sizeIcon70" variant="user">
          <Avatar name="First Avatar" />
          <Avatar name="Second Avatar" />
          <Avatar name="Third Avatar" />
        </AvatarGroup>
        <AvatarGroup size="sizeIcon90" variant="user">
          <Avatar name="First Avatar" />
          <Avatar name="Second Avatar" />
          <Avatar name="Third Avatar" />
        </AvatarGroup>
        <AvatarGroup size="sizeIcon100" variant="user">
          <Avatar name="First Avatar" />
          <Avatar name="Second Avatar" />
          <Avatar name="Third Avatar" />
        </AvatarGroup>
        <AvatarGroup size="sizeIcon110" variant="user">
          <Avatar name="First Avatar" />
          <Avatar name="Second Avatar" />
          <Avatar name="Third Avatar" />
        </AvatarGroup>
      </Stack>
      <Stack orientation="vertical" spacing="space30">
        <AvatarGroup size="sizeIcon30" variant="entity">
          <Avatar name="First Avatar" />
          <Avatar name="Second Avatar" />
          <Avatar name="Third Avatar" />
        </AvatarGroup>
        <AvatarGroup size="sizeIcon70" variant="entity">
          <Avatar name="First Avatar" />
          <Avatar name="Second Avatar" />
          <Avatar name="Third Avatar" />
        </AvatarGroup>
        <AvatarGroup size="sizeIcon90" variant="entity">
          <Avatar name="First Avatar" />
          <Avatar name="Second Avatar" />
          <Avatar name="Third Avatar" />
        </AvatarGroup>
        <AvatarGroup size="sizeIcon100" variant="entity">
          <Avatar name="First Avatar" />
          <Avatar name="Second Avatar" />
          <Avatar name="Third Avatar" />
        </AvatarGroup>
        <AvatarGroup size="sizeIcon110" variant="entity">
          <Avatar name="First Avatar" />
          <Avatar name="Second Avatar" />
          <Avatar name="Third Avatar" />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export const GroupedUsingContext = (): React.ReactNode => {
  return (
    <AvatarGroup size="sizeIcon70" variant="entity">
      <Avatar size="sizeIcon10" variant="entity" name="First Avatar" />
      <Avatar size="sizeIcon110" name="Second Avatar" />
      <Avatar variant="user" name="Third Avatar" />
    </AvatarGroup>
  );
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

ResponsiveImage.parameters = {
  chromatic: {delay: 3000},
};

export const CustomAvatar: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <>
      <Stack orientation="horizontal" spacing="space40">
        <Avatar size="sizeIcon40" name="Breonna Taylor" />
        <Avatar size="sizeIcon50" name="avatar example" src="./avatars/avatar-sizeIcon50.png" />
        <Avatar size="sizeIcon60" name="avatar example" icon={UserIcon} />
      </Stack>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={currentTheme}
        elements={{
          AVATAR: {
            backgroundColor: 'colorBackgroundTrial',
          },
          AANG: {
            color: 'colorTextWeakest',
            backgroundColor: 'colorBackgroundPrimaryStrong',
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
CustomAvatar.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
