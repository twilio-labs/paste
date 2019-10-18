import * as React from 'react';
import {storiesOf} from '@storybook/react';
// import {action} from '@storybook/addon-actions';
import {Card, CardFooter} from '../src';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';

storiesOf('Components|Card', module)
  .add('Default', () => (
    <Card>
      <Heading as="h2">With a heading</Heading>
      <Text>Body</Text>
      <CardFooter>
        <Text>I'm | The | Footer</Text>
      </CardFooter>
    </Card>
  ))
  .add('Padding', () => (
    <Card aria-busy aria-atomic padding="space200" data-qahook="ZeCard!">
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
    <Card aria-busy aria-atomic data-qahook="ZeCard!" id="12">
      <Heading as="h2">With a heading</Heading>
      <Text>Body</Text>
    </Card>
  ));
