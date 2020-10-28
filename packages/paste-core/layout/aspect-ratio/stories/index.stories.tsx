import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {AspectRatio} from '../src';

storiesOf('Layout|Aspect Ratio', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <Box
        padding="space30"
        maxWidth="size40"
        borderColor="colorBorderLighter"
        borderStyle="solid"
        borderWidth="borderWidth10"
      >
        <AspectRatio ratio={text('ratio', '4:3')}>
          <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="colorBackgroundBrand" />
        </AspectRatio>
      </Box>
    );
  });
