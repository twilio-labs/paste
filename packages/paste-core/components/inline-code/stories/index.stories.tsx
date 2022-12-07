import * as React from 'react';
import type {Story} from '@storybook/react';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {useTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';

import {InlineCode} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Inline Code',
  component: InlineCode,
};

export const Default: Story = () => {
  return <InlineCode>0000001111111122234444444</InlineCode>;
};

export const ReallyLongContent: Story = () => {
  return (
    <Box maxWidth="size40">
      <InlineCode>
        000 00 0111111 1122 2344444 44 000 00 0111111 1122 2344444 44 000 00 0111111 1122 2344444 44 000 00 0111111 1122
        2344444 44
      </InlineCode>
    </Box>
  );
};

export const InlineWithText: Story = () => {
  return (
    <Text as="span">
      If the composite has a single row or column (one-dimensional), the <InlineCode>orientation</InlineCode> value
      determines which arrow keys can be used to move focus.
    </Text>
  );
};

export const WithLineHeights: Story = () => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <Text lineHeight="lineHeight40" as="span">
        If the composite has a single row or column (one-dimensional), the <InlineCode>orientation</InlineCode> value
        determines which arrow keys can be used to move focus.
      </Text>
      <Text as="span" lineHeight="lineHeight60">
        <InlineCode>
          000 00 0111111 1122 2344444 44 000 00 0111111 1122 2344444 44 000 00 0111111 1122 2344444 44 000 00 0111111
          1122 2344444 44
        </InlineCode>
      </Text>
    </Stack>
  );
};

export const WithTextSizes: Story = () => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <Text fontSize="fontSize50" as="div">
        If the composite has a single row or column (one-dimensional), the <InlineCode>orientation</InlineCode> value
        determines which arrow keys can be used to move focus.
      </Text>
      <Text fontSize="fontSize10" as="div">
        If the composite has a single row or column (one-dimensional), the <InlineCode>orientation</InlineCode> value
        determines which arrow keys can be used to move focus.
      </Text>
    </Stack>
  );
};

export const DisplayingAPIKey: Story = () => {
  return (
    <Stack orientation="vertical" spacing="space30">
      <Text fontWeight="fontWeightMedium" as="div">
        API Key
      </Text>
      <InlineCode>WQC0000001111111122234444444</InlineCode>
    </Stack>
  );
};

export const Customization: Story = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        INLINE_CODE: {
          backgroundColor: 'colorBackgroundErrorWeakest',
          borderWidth: 'borderWidth20',
          borderColor: 'colorBorderErrorWeak',
          borderStyle: 'dotted',
          borderRadius: 'borderRadius10',
          color: 'colorTextErrorStronger',
        },
      }}
    >
      <InlineCode>0000001111111122234444444</InlineCode>
    </CustomizationProvider>
  );
};
Customization.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
