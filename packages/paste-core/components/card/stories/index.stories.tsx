import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Heading} from '@twilio-paste/heading';
import {withKnobs, select} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {Card, CardFooter} from '../src';

import {Padding, Space} from '@twilio-paste/types';

const space = [
  'space0',
  'space10',
  'space100',
  'space110',
  'space120',
  'space130',
  'space140',
  'space150',
  'space160',
  'space170',
  'space180',
  'space190',
  'space20',
  'space200',
  'space30',
  'space40',
  'space50',
  'space60',
  'space70',
  'space80',
  'space90',
];

storiesOf('Components|Card', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Card padding={select('padding', space, 'space10') as Padding}>
      <Heading as="h2">With a heading</Heading>
      <Text>Body</Text>
      <CardFooter>
        <Text>I&apos;m | The | Footer</Text>
      </CardFooter>
    </Card>
  ))
  .add('Padding', () => (
    <Card padding="space200">
      <Heading as="h2">With a heading</Heading>
      <Text>Body</Text>
    </Card>
  ))
  .add('No Padding', () => (
    <Card padding="space0">
      <Heading as="h2">With a heading</Heading>
      <Text>Body</Text>
    </Card>
  ))
  .add('Prop Passthrough', () => (
    <Card aria-busy aria-atomic data-qahook="ZeCard!">
      <Heading as="h2">With a heading</Heading>
      <Text>Body</Text>
    </Card>
  ));
