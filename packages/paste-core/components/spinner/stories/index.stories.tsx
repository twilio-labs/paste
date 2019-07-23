import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number} from '@storybook/addon-knobs';
import {Spinner} from '../src';

storiesOf('Components|Spinner', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <Spinner color={text('color', 'currentColor')} size={number('size', 24)} title={text('title', 'Spinner Icon')} />
    );
  });
