import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {Absolute, Presets} from '../src';

const PresetValues = [
  'fill',
  'top',
  'top_left',
  'top_right',
  'top_fill',
  'bottom',
  'bottom_left',
  'bottom_right',
  'bottom_fill',
  'left',
  'left_top',
  'left_bottom',
  'left_fill',
  'right',
  'right_top',
  'right_bottom',
  'right_fill',
];

storiesOf('Utilities|Absolute', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    // Get knob values
    const preset = select('preset', PresetValues, PresetValues[1]) as Presets;
    const top = text('top', '');
    const right = text('right', '');
    const bottom = text('bottom', '');
    const left = text('left', '');

    // Throw them in a props object
    const props = {
      backgroundColor: 'colorBackgroundPrimaryLight', // Makes the demo easier to visualize
      preset,
      top,
      right,
      bottom,
      left,
    };

    return (
      <Absolute {...props}>
        <Text as="p">The `position` prop should be sufficient, but you can also pass overrides directly:</Text>
        <Text as="p">
          <strong>Top:</strong> {top ? props.top : 'not provided'}
        </Text>
        <Text as="p">
          <strong>Right:</strong> {right ? props.right : 'not provided'}
        </Text>
        <Text as="p">
          <strong>Bottom:</strong> {bottom ? props.bottom : 'not provided'}
        </Text>
        <Text as="p">
          <strong>Left:</strong> {left ? props.left : 'not provided'}
        </Text>
      </Absolute>
    );
  });
