import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {Alert} from '@twilio-paste/alert';

import {Button} from '../../../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Button-Performance/Baselines',
  component: Button,
  decorators: [
    (Story: StoryFn) => {
      return (
        <Box padding="space30">
          <Story />
        </Box>
      );
    },
  ],
};

export const First: StoryFn = () => <Button variant="primary">Primary btn</Button>;
First.storyName = 'Single primary button';

export const Second: StoryFn = () => <Box as="button">Box as btn</Box>;
Second.storyName = 'Box as button element';

export const Third: StoryFn = () => <button>button element</button>;
Third.storyName = 'Button element';

export const Baseline: React.FC = () => null;
(Baseline as StoryFn).storyName = 'Baseline with null render';

export const AlertBaseline: StoryFn = () => <Alert variant="neutral">Test test test</Alert>;
AlertBaseline.storyName = 'Alert baseline';
