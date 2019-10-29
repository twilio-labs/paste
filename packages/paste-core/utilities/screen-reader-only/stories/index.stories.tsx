import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {ScreenReaderOnly} from '../src';

storiesOf('Utilities|Screen reader only', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <Text as="p">
        Some visible text <ScreenReaderOnly>some not visible text</ScreenReaderOnly>
      </Text>
    );
  });
