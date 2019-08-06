import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, number, select} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {Absolute, AbsolutePositions} from '../src/index';

const Positions = [
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
    const position = select('position', Positions, Positions[1]) as AbsolutePositions;
    const top = number('top', null);
    const right = number('right', null);
    const bottom = number('bottom', null);
    const left = number('left', null);

    // Throw them in a props object
    const props = {
      backgroundColor: 'colorBackgroundPrimaryLight', // Makes the demo easier to visualize
      position,
      // Add PX units here so we can use `number` knobs rather than `text` knobs for better UX
      top: top != null ? `${top}px` : null,
      right: right != null ? `${right}px` : null,
      bottom: bottom != null ? `${bottom}px` : null,
      left: left != null ? `${left}px` : null,
    };

    return (
      <Absolute position={position} {...props}>
        <Text>
          <p>The `position` prop should be sufficient, but you can also pass overrides directly:</p>
          <div>
            <strong>Top:</strong> {top != null ? props.top : 'not provided'}
          </div>
          <div>
            <strong>Right:</strong> {right != null ? props.right : 'not provided'}
          </div>
          <div>
            <strong>Bottom:</strong> {bottom != null ? props.bottom : 'not provided'}
          </div>
          <div>
            <strong>Left:</strong> {left != null ? props.left : 'not provided'}
          </div>
        </Text>
      </Absolute>
    );
  });
