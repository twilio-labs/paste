import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Stack} from '@twilio-paste/stack';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Card} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Card',
  component: Card,
};

export const Default = (): React.ReactNode => (
  <Card padding="space60">
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
    <Stack orientation="vertical" spacing="space60">
      <Card>
        <Heading as="h2" variant="heading20">
          Default
        </Heading>
        <Paragraph marginBottom="space0">
          Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
          API.
        </Paragraph>
      </Card>
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
            Customized
          </Heading>
          <Paragraph marginBottom="space0">
            Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
            API.
          </Paragraph>
        </Card>
      </CustomizationProvider>
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
            Customized element
          </Heading>
          <Paragraph marginBottom="space0">
            Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
            API.
          </Paragraph>
        </Card>
      </CustomizationProvider>
    </Stack>
  );
};
