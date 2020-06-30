import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Stack} from '@twilio-paste/stack';
import Avatar1 from '../../../../../.storybook/static/avatars/avatar1.png';
import Avatar2 from '../../../../../.storybook/static/avatars/avatar2.png';
import Avatar3 from '../../../../../.storybook/static/avatars/avatar3.png';
import Avatar4 from '../../../../../.storybook/static/avatars/avatar4.png';
import {Avatar} from '../src';

storiesOf('Components|Avatar', module)
  .addDecorator(withKnobs)
  .add('Initials', () => {
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
  })
  .add('Image', () => {
    return (
      <Stack orientation="horizontal" spacing="space40">
        <Avatar size="sizeIcon10" name="avatar example" src={Avatar2} />
        <Avatar size="sizeIcon20" name="avatar example" src={Avatar3} />
        <Avatar size="sizeIcon30" name="avatar example" src={Avatar4} />
        <Avatar size="sizeIcon40" name="avatar example" src={Avatar1} />
        <Avatar size="sizeIcon50" name="avatar example" src={Avatar2} />
        <Avatar size="sizeIcon60" name="avatar example" src={Avatar3} />
        <Avatar size="sizeIcon70" name="avatar example" src={Avatar4} />
        <Avatar size="sizeIcon80" name="avatar example" src={Avatar1} />
        <Avatar size="sizeIcon90" name="avatar example" src={Avatar2} />
        <Avatar size="sizeIcon100" name="avatar example" src={Avatar3} />
        <Avatar size="sizeIcon110" name="avatar example" src={Avatar4} />
      </Stack>
    );
  })
  .add('Responsive Initials', () => {
    return (
      <Stack orientation="horizontal" spacing="space40">
        <Avatar size={['sizeIcon10', 'sizeIcon50', 'sizeIcon110']} name="Simon Taggart" />
      </Stack>
    );
  })
  .add('Responsive Image', () => {
    return (
      <Stack orientation="horizontal" spacing="space40">
        <Avatar size={['sizeIcon10', 'sizeIcon50', 'sizeIcon110']} name="avatar example" src={Avatar3} />
      </Stack>
    );
  });
