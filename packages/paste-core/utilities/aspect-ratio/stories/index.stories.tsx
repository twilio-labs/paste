import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Absolute} from '@twilio-paste/absolute';
import {AspectRatio} from '../src';

storiesOf('Utilities|Aspect Ratio', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <Box
        padding="space30"
        maxWidth="size40"
        borderColor="colorBorderLight"
        borderStyle="solid"
        borderWidth="borderWidth10"
      >
        <AspectRatio ratio={text('ratio', '4:3')}>
          <Absolute backgroundColor="colorBackgroundBrand" />
        </AspectRatio>
      </Box>
    );
  });
