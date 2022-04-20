import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {AspectRatio} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Layout/Aspect Ratio',
  component: AspectRatio,
};

export const Default = (): React.ReactNode => {
  return (
    <Box
      padding="space30"
      maxWidth="size40"
      borderColor="colorBorderWeaker"
      borderStyle="solid"
      borderWidth="borderWidth10"
    >
      <AspectRatio ratio="4:3">
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="colorBackgroundBrand" />
      </AspectRatio>
    </Box>
  );
};
