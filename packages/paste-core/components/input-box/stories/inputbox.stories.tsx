import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import type {InputBoxProps} from '../src';
import {InputBox} from '../src';

const Insert: React.FC = () => {
  return <Box padding="space20" />;
};

const Input: React.FC = () => {
  return <Box padding="space60" width="100%" />;
};

const CommonStories: React.FC<Omit<InputBoxProps, 'children'>> = ({variant, ...props}) => {
  return (
    <Stack orientation="vertical" spacing="space70">
      <InputBox variant={variant} {...props}>
        <Input />
      </InputBox>
      <InputBox variant={variant} type="hidden" {...props}>
        <Input />
      </InputBox>
      <InputBox variant={variant} insertBefore={<Insert />} {...props}>
        <Input />
      </InputBox>
      <InputBox variant={variant} insertAfter={<Insert />} {...props}>
        <Input />
      </InputBox>
      <InputBox variant={variant} insertAfter={<Insert />} insertBefore={<Insert />} {...props}>
        <Input />
      </InputBox>
    </Stack>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Input box',
  component: InputBox,
};

export const Default = (): React.ReactNode => {
  return <CommonStories variant="default" element="INPUT_BOX" />;
};

Default.story = {
  name: 'default',
};

export const Readonly = (): React.ReactNode => {
  return <CommonStories readOnly variant="default" element="INPUT_BOX" />;
};

Readonly.story = {
  name: 'readonly',
};

export const Disabled = (): React.ReactNode => {
  return <CommonStories disabled variant="default" element="INPUT_BOX" />;
};

Disabled.story = {
  name: 'disabled',
};

export const Error = (): React.ReactNode => {
  return <CommonStories hasError variant="default" element="INPUT_BOX" />;
};

Error.story = {
  name: 'error',
};

export const Inverse = (): React.ReactNode => {
  return (
    <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
      <CommonStories variant="inverse" element="INPUT_BOX" />
    </Box>
  );
};

Inverse.story = {
  name: 'inverse',
};

export const InverseReadonly = (): React.ReactNode => {
  return (
    <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
      <CommonStories readOnly variant="inverse" element="INPUT_BOX" />
    </Box>
  );
};

InverseReadonly.story = {
  name: 'inverse readonly',
};

export const InverseDisabled = (): React.ReactNode => {
  return (
    <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
      <CommonStories disabled variant="inverse" element="INPUT_BOX" />
    </Box>
  );
};

InverseDisabled.story = {
  name: 'inverse disabled',
};

export const InverseError = (): React.ReactNode => {
  return (
    <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
      <CommonStories hasError variant="inverse" element="INPUT_BOX" />
    </Box>
  );
};

InverseError.story = {
  name: 'inverse error',
};
