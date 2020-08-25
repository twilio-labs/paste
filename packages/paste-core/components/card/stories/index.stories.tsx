import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Heading} from '@twilio-paste/heading';
import {withKnobs, select} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {Padding} from '@twilio-paste/style-props';
import {DefaultTheme, CustomizationProvider} from '@twilio-paste/theme';
import {Stack} from '@twilio-paste/stack';

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
  ))
  .add('Customization', () => {
    return (
      <CustomizationProvider
        elements={{
          CARD: {
            borderRadius: '10px',
            borderColor: 'colorBorderSuccess',
          },
          CUSTOM_CARD: {
            backgroundColor: 'colorBackgroundError',
          },
        }}
      >
        <Stack orientation="vertical" spacing="space40">
          <Card padding="space20">
            <Heading as="h2">With a heading</Heading>
          </Card>
          <Card element="CUSTOM_CARD" padding="space20">
            <Heading as="h2">Custom</Heading>
          </Card>
        </Stack>
      </CustomizationProvider>
    );
  });
