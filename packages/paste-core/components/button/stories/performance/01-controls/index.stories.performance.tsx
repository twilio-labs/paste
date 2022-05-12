import * as React from 'react';
import type {StoryFn} from '@storybook/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import {Title, Description, Stories} from '@storybook/addon-docs';

import {Button} from '../../../src/index';

import {StoryWrapper} from '../helpers-and-partials';
import type {DecoratorStory} from '../types';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Button-Performance/Controls',
  component: Button,
  decorators: [
    (Story: DecoratorStory) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
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

export const PrimaryButton: StoryFn = () => <Button variant="primary">Primary btn</Button>;
PrimaryButton.storyName = 'Single primary button';
PrimaryButton.parameters = {
  docs: {
    description: {
      story: 'This is the actual immplementation of Button that we have released today.',
    },
  },
};

export const PrimaryButtonAsAnchor: StoryFn = () => (
  <Button as="a" variant="primary" href="#">
    Primary btn
  </Button>
);
PrimaryButtonAsAnchor.storyName = 'Single primary button as anchor';
PrimaryButtonAsAnchor.parameters = {
  docs: {
    description: {
      story: 'This is the actual immplementation of Button that we have released today.',
    },
  },
};

export const PrimaryButtonAsExternalAnchor: StoryFn = () => (
  <Button as="a" variant="primary" href="https://www.twilio.com">
    Primary btn
  </Button>
);
PrimaryButtonAsExternalAnchor.storyName = 'Single primary button as external anchor';
PrimaryButtonAsExternalAnchor.parameters = {
  docs: {
    description: {
      story: 'This is the actual immplementation of Button that we have released today.',
    },
  },
};
