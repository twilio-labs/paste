import type { StoryFn } from '@storybook/react';
import { Box } from '@twilio-paste/box';
import { CustomizationProvider } from '@twilio-paste/customization';
import { useTheme } from '@twilio-paste/theme';
import * as React from 'react';

import { DetailText } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Detail Text',
  component: DetailText,
};

export const Default: StoryFn = () => (
  <Box>
    <Box height="size10" width="size10" backgroundColor="colorBackgroundStrong" />
    <DetailText>This is sample detail text.</DetailText>
  </Box>
);
export const NoMargin: StoryFn = () => (
  <Box>
    <Box height="size10" width="size10" backgroundColor="colorBackgroundStrong" />
    <DetailText marginTop="space0">This is sample detail text with no margin.</DetailText>
  </Box>
);

export const Customized: StoryFn = () => {
  const theme = useTheme();

  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        DETAIL_TEXT: {
          color: 'colorTextNew',
          marginTop: 'space60',
        },
      }}
    >
      <Box>
        <Box height="size10" width="size10" backgroundColor="colorBackgroundStrong" />
        <DetailText>This is customized detail text.</DetailText>
      </Box>
    </CustomizationProvider>
  );
};
