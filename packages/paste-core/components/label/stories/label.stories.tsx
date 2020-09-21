import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Label} from '../src';

storiesOf('Components|Label', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <>
        <Label htmlFor="label">Label</Label>
        <Label htmlFor="label" required>
          Required Label
        </Label>
      </>
    );
  })
  .add('Inverse', () => {
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label htmlFor="label" variant="inverse">
          Label
        </Label>
        <Label htmlFor="label" required variant="inverse">
          Required Label
        </Label>
      </Box>
    );
  });
