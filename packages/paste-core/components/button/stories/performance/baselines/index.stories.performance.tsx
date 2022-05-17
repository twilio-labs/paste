import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {Box} from '@twilio-paste/box';
// eslint-disable-next-line import/no-extraneous-dependencies
import {Title, Description, Stories} from '@storybook/addon-docs';
import {Alert} from '@twilio-paste/alert';

import {Button} from '../../../src/index';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Button-Performance/Baselines',
  component: Button,
  parameters: {
    docs: {
      source: {
        state: 'open',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Stories title="" includePrimary />
        </>
      ),
    },
  },
};

export const ButtonElement: StoryFn = () => <button>button element</button>;
ButtonElement.storyName = 'Button element';
ButtonElement.parameters = {
  docs: {
    description: {
      story: 'This native button element is yet another baseline.',
    },
  },
};

export const NullBaseline: React.FC = () => null;
(NullBaseline as StoryFn).storyName = 'Null render of canvas';
(NullBaseline as StoryFn).parameters = {
  docs: {
    description: {
      story:
        'Set baseline (e.g. "negative control") for measurement tooling with a no render. This includes: includes our global storybook decorators and includes other "out of the box" storybook UI.',
    },
  },
};

export const PrimaryButton: StoryFn = () => <Button variant="primary">Primary btn</Button>;
PrimaryButton.storyName = 'Single primary button';
PrimaryButton.parameters = {
  docs: {
    description: {
      story: 'This is the actual immplementation of Button that we have released today.',
    },
  },
};

export const BoxAsButton: StoryFn = () => <Box as="button">Box as btn</Box>;
BoxAsButton.storyName = '"Box as button" element';
BoxAsButton.parameters = {
  docs: {
    description: {
      story:
        'Our Button component is built on a Box styled as a button element, so it made sense to use that as a baseline. Though this is not a realistic measure of the "best possible performance", it gives us an upper bound for our expectations.',
    },
  },
};

export const AlertBaseline: StoryFn = () => <Alert variant="neutral">Test test test</Alert>;
AlertBaseline.storyName = 'Alert baseline';
AlertBaseline.parameters = {
  docs: {
    description: {
      story:
        'Since we have been tracking render profiling (during the chromatic tests on storybook), we have seen that Alert renders roughly 300% (source: DataDog dashboard, as of 05/11/22) faster than button. Thus, we are using this component as a "working baseline".',
    },
  },
};
