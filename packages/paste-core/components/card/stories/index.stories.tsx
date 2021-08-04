import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {withKnobs, select} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Paragraph} from '@twilio-paste/paragraph';
import {Text} from '@twilio-paste/text';
import type {Padding} from '@twilio-paste/style-props';
import {DefaultTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Card} from '../src';

const spaceOptions = Object.keys(DefaultTheme.space);

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Card',
  decorators: [withKnobs],
  component: Card,
};

export const Default = (): React.ReactNode => (
  <Card padding={select('padding', spaceOptions, 'space10') as Padding}>
    <Heading as="h2" variant="heading20">
      Notifications
    </Heading>
    <Paragraph marginBottom="space0">
      Proactively inform customers about account activity, purchase confirmations, and shipping notifications with the
      Programmable Messaging API.
    </Paragraph>
  </Card>
);

export const DefinedPadding = (): React.ReactNode => (
  <Card padding="space200">
    <Heading as="h2" variant="heading20">
      Mass Alerts
    </Heading>
    <Paragraph marginBottom="space0">
      Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging API.
    </Paragraph>
  </Card>
);

DefinedPadding.story = {
  name: 'Padding',
};

export const NoPadding = (): React.ReactNode => (
  <Card padding="space0">
    <Heading as="h2" variant="heading20">
      Marketing Messages
    </Heading>
    <Paragraph marginBottom="space0">
      Engage customers with targeted offers on the channels they prefer with the Programmable Messaging API.
    </Paragraph>
  </Card>
);

export const PropPassthrough = (): React.ReactNode => (
  <Card aria-busy aria-atomic data-qahook="ZeCard!" title="title prop">
    <Heading as="h2" variant="heading20">
      Conversations
    </Heading>
    <Paragraph marginBottom="space0">
      Build customer relationships with secure, cross-channel conversations that can include multiple parties, all on
      one platform with the Conversations API.
    </Paragraph>
  </Card>
);

export const CustomCard: React.FC = () => {
  return (
    <>
      <Card>
        <Heading as="h2" variant="heading20">
          Mass Alerts
        </Heading>
        <Paragraph marginBottom="space0">
          Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
          API.
        </Paragraph>
      </Card>
      <Box marginTop="space60" marginBottom="space60">
        <Text as="span">Customized</Text>
      </Box>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          CARD: {
            backgroundColor: 'colorBackground',
            borderColor: 'colorBorderPrimary',
            padding: 'space100',
          },
        }}
      >
        <Card>
          <Heading as="h2" variant="heading20">
            Mass Alerts
          </Heading>
          <Paragraph marginBottom="space0">
            Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
            API.
          </Paragraph>
        </Card>
      </CustomizationProvider>
      <Box marginTop="space60" marginBottom="space60">
        <Text as="span">Customized element</Text>
      </Box>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          NEW_CARD: {
            backgroundColor: 'colorBackgroundPrimaryWeakest',
            borderColor: 'colorBorderDestructive',
            borderRadius: 'borderRadius30',
            padding: 'space200',
          },
        }}
      >
        <Card element="NEW_CARD">
          <Heading as="h2" variant="heading20">
            Mass Alerts
          </Heading>
          <Paragraph marginBottom="space0">
            Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
            API.
          </Paragraph>
        </Card>
      </CustomizationProvider>
    </>
  );
};
