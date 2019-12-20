import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Heading} from '@twilio-paste/heading';
import {withKnobs, select} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {Padding} from '@twilio-paste/style-props';
import {DefaultTheme} from '@twilio-paste/theme-tokens';

import {Card} from '../src';

const spaceOptions = Object.keys(DefaultTheme.space);

storiesOf('Components|Card', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Card padding={select('padding', spaceOptions, 'space10') as Padding}>
      <Heading as="h2">With a heading</Heading>
      <Text as="p">Body</Text>
    </Card>
  ))
  .add('Padding', () => (
    <Card padding="space200">
      <Heading as="h2">With a heading</Heading>
      <Text as="p">Body</Text>
    </Card>
  ))
  .add('No Padding', () => (
    <Card padding="space0">
      <Heading as="h2">With a heading</Heading>
      <Text as="p">Body</Text>
    </Card>
  ))
  .add('Prop Passthrough', () => (
    <Card aria-busy aria-atomic data-qahook="ZeCard!" title="title prop">
      <Heading as="h2">With a heading</Heading>
      <Text as="p">Body</Text>
    </Card>
  ));
