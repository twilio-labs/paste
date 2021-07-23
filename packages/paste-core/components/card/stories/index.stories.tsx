import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {withKnobs, select} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {Padding as PaddingProps} from '@twilio-paste/style-props';
import {DefaultTheme} from '@twilio-paste/theme';

import {Card} from '@twilio-paste/card';

const spaceOptions = Object.keys(DefaultTheme.space);

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Card',
  decorators: [withKnobs],
  component: Card,
};

export const Default = (): React.ReactNode => (
  <Card padding={select('padding', spaceOptions, 'space10') as PaddingProps}>
    <Heading as="h2" variant="heading20">
      With a heading
    </Heading>
    <Text as="p">Body</Text>
  </Card>
);

export const Padding = (): React.ReactNode => (
  <Card padding="space200">
    <Heading as="h2" variant="heading20">
      With a heading
    </Heading>
    <Text as="p">Body</Text>
  </Card>
);

export const NoPadding = (): React.ReactNode => (
  <Card padding="space0">
    <Heading as="h2" variant="heading20">
      With a heading
    </Heading>
    <Text as="p">Body</Text>
  </Card>
);

export const PropPassthrough = (): React.ReactNode => (
  <Card aria-busy aria-atomic data-qahook="ZeCard!" title="title prop">
    <Heading as="h2" variant="heading20">
      With a heading
    </Heading>
    <Text as="p">Body</Text>
  </Card>
);
