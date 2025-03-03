import { Box } from "@twilio-paste/box";
import { ChevronDownIcon } from "@twilio-paste/icons/esm/ChevronDownIcon";
import { Stack } from "@twilio-paste/stack";
import * as React from "react";
import type { JSX } from "react";

import type { InputBoxProps } from "../src";
import { InputBox, InputChevronWrapper, getInputChevronIconColor } from "../src";

const Insert = (): JSX.Element => {
  return <Box padding="space20" />;
};

const Input = (): JSX.Element => {
  return <Box padding="space60" width="100%" />;
};

const CommonStories: React.FC<React.PropsWithChildren<Omit<InputBoxProps, "children">>> = ({ variant, ...props }) => {
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
      <InputBox variant={variant} insertAfter={<Insert />} insertBefore={<Insert />} {...props}>
        <Box display="flex" width="100%" position="relative">
          <Input />
          <InputChevronWrapper element="test">
            <ChevronDownIcon decorative color={getInputChevronIconColor(variant, props.disabled, props.readOnly)} />
          </InputChevronWrapper>
        </Box>
      </InputBox>
    </Stack>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Input box",
  component: InputBox,
};

export const Default = (): React.ReactNode => {
  return <CommonStories variant="default" element="INPUT_BOX" />;
};

Default.storyName = "default";

export const Readonly = (): React.ReactNode => {
  return <CommonStories readOnly variant="default" element="INPUT_BOX" />;
};

Readonly.storyName = "readonly";

export const Disabled = (): React.ReactNode => {
  return <CommonStories disabled variant="default" element="INPUT_BOX" />;
};

Disabled.storyName = "disabled";

export const Error = (): React.ReactNode => {
  return <CommonStories hasError variant="default" element="INPUT_BOX" />;
};

Error.storyName = "error";

export const Inverse = (): React.ReactNode => {
  return (
    <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
      <CommonStories variant="inverse" element="INPUT_BOX" />
    </Box>
  );
};

Inverse.storyName = "inverse";

export const InverseReadonly = (): React.ReactNode => {
  return (
    <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
      <CommonStories readOnly variant="inverse" element="INPUT_BOX" />
    </Box>
  );
};

InverseReadonly.storyName = "inverse readonly";

export const InverseDisabled = (): React.ReactNode => {
  return (
    <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
      <CommonStories disabled variant="inverse" element="INPUT_BOX" />
    </Box>
  );
};

InverseDisabled.storyName = "inverse disabled";

export const InverseError = (): React.ReactNode => {
  return (
    <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
      <CommonStories hasError variant="inverse" element="INPUT_BOX" />
    </Box>
  );
};

InverseError.storyName = "inverse error";
