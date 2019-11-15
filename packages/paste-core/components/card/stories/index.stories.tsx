import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Heading} from '@twilio-paste/heading';
import {withKnobs, select} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {Padding} from '@twilio-paste/types';
import {DefaultTheme} from '@twilio-paste/theme-tokens';

import {Card, CardFooter} from '../src';

const spaceOptions = Object.keys(DefaultTheme.space);

storiesOf('Components|Card', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Card padding={select('padding', spaceOptions, 'space10') as Padding}>
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
