import * as React from 'react';
import type {Story} from '@storybook/react';
import {FilePicker} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/File Picker',
  component: FilePicker,
};

export const Default: Story = () => {
  return (
    <>
      <FilePicker id="filepicker" />
    </>
  );
};

export const Required: Story = () => {
  return (
    <>
      <FilePicker id="filepicker" required />
    </>
  );
};

export const Disabled: Story = () => {
  return (
    <>
      <FilePicker id="filepicker" disabled />
    </>
  );
};
