import * as React from 'react';
import {Stack} from '@twilio-paste/stack';
import Avatar10 from '../../../../../.storybook/static/avatars/avatar-sizeIcon10.png';
import Avatar20 from '../../../../../.storybook/static/avatars/avatar-sizeIcon20.png';
import Avatar30 from '../../../../../.storybook/static/avatars/avatar-sizeIcon30.png';
import Avatar40 from '../../../../../.storybook/static/avatars/avatar-sizeIcon40.png';
import Avatar50 from '../../../../../.storybook/static/avatars/avatar-sizeIcon50.png';
import Avatar60 from '../../../../../.storybook/static/avatars/avatar-sizeIcon60.png';
import Avatar70 from '../../../../../.storybook/static/avatars/avatar-sizeIcon70.png';
import Avatar80 from '../../../../../.storybook/static/avatars/avatar-sizeIcon80.png';
import Avatar90 from '../../../../../.storybook/static/avatars/avatar-sizeIcon90.png';
import Avatar100 from '../../../../../.storybook/static/avatars/avatar-sizeIcon100.png';
import Avatar110 from '../../../../../.storybook/static/avatars/avatar-sizeIcon110.png';
import {Avatar} from '../src';
import {UserIcon} from '@twilio-paste/icons/esm/UserIcon';

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
      <Avatar size="sizeIcon10" name="avatar example" src={Avatar10} />
      <Avatar size="sizeIcon20" name="avatar example" src={Avatar20} />
      <Avatar size="sizeIcon30" name="avatar example" src={Avatar30} />
      <Avatar size="sizeIcon40" name="avatar example" src={Avatar40} />
      <Avatar size="sizeIcon50" name="avatar example" src={Avatar50} />
      <Avatar size="sizeIcon60" name="avatar example" src={Avatar60} />
      <Avatar size="sizeIcon70" name="avatar example" src={Avatar70} />
      <Avatar size="sizeIcon80" name="avatar example" src={Avatar80} />
      <Avatar size="sizeIcon90" name="avatar example" src={Avatar90} />
      <Avatar size="sizeIcon100" name="avatar example" src={Avatar100} />
      <Avatar size="sizeIcon110" name="avatar example" src={Avatar110} />
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
      <Avatar size={['sizeIcon10', 'sizeIcon50', 'sizeIcon110']} name="avatar example" src={Avatar50} />
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
