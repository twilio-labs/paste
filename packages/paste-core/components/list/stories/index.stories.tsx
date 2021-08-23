import * as React from 'react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Paragraph} from '@twilio-paste/paragraph';
import {Stack} from '@twilio-paste/stack';
import {OrderedList, UnorderedList, ListItem} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/List',
  component: OrderedList,
  subcomponents: {UnorderedList, ListItem},
};

export const DefaultOrderedList = (): React.ReactNode => {
  return (
    <>
      <OrderedList data-test="something" aria-label="ordered list">
        <ListItem>
          Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
          API.
        </ListItem>
        <ListItem>
          Proactively inform customers about account activity, purchase confirmations, and shipping notifications with
          the
          <i>Programmable Messaging API</i>.
        </ListItem>
      </OrderedList>
      <Paragraph>
        Build customer relationships with secure, cross-channel conversations that can include multiple parties, all on
        one platform with the Conversations API.
      </Paragraph>
      <OrderedList aria-label="styled">
        <ListItem>
          Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
          API.
        </ListItem>
        <ListItem>
          Proactively inform customers about <strong>account activity</strong>, purchase confirmations, and shipping
          notifications with the Programmable Messaging API.
        </ListItem>
      </OrderedList>
    </>
  );
};

DefaultOrderedList.story = {
  name: 'Ordered List',
};

export const DefaultUnorderedList = (): React.ReactNode => {
  return (
    <>
      <UnorderedList>
        <ListItem data-test="test-hook" title="some title">
          Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
          API.
        </ListItem>
        <ListItem>
          Proactively inform customers about account activity, purchase confirmations, and shipping notifications with
          the
          <i>Programmable Messaging API</i>.
        </ListItem>
      </UnorderedList>
      <UnorderedList>
        <ListItem>
          Build customer relationships with secure, cross-channel conversations that can include multiple parties, all
          on one platform with the Conversations API.
        </ListItem>
        <ListItem>
          Proactively inform customers about <strong>account activity</strong>, purchase confirmations, and shipping
          notifications with the Programmable Messaging API.
        </ListItem>
      </UnorderedList>
    </>
  );
};

DefaultUnorderedList.story = {
  name: 'Unordered List',
};

export const NestedUnorderedList = (): React.ReactNode => {
  return (
    <>
      <UnorderedList>
        <ListItem data-test="test-hook-nested" title="nested list title">
          Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
          API.
          <UnorderedList marginBottom="space0">
            <ListItem>
              Proactively inform customers about account activity, purchase confirmations, and shipping notifications
              with the
              <i>Programmable Messaging API</i>.
            </ListItem>
            <ListItem>
              Build customer relationships with secure, cross-channel conversations that can include multiple parties,
              all on one platform with the Conversations API.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Proactively inform customers about <strong>account activity</strong>, purchase confirmations, and shipping
          notifications with the Programmable Messaging API.
        </ListItem>
        <ListItem>
          Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
          API.
        </ListItem>
      </UnorderedList>
    </>
  );
};

export const CustomOrderedList: React.FC = () => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <OrderedList aria-label="ordered list">
        <ListItem>
          Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
          API.
        </ListItem>
        <ListItem>
          Proactively inform customers about account activity, purchase confirmations, and shipping notifications with
          the
          <i>Programmable Messaging API</i>.
        </ListItem>
      </OrderedList>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          ORDERED_LIST: {
            backgroundColor: 'colorBackgroundPrimaryWeaker',
            marginLeft: 'space0',
            padding: 'space40',
            paddingLeft: 'space70',
          },
          LIST_ITEM: {
            color: 'colorTextError',
          },
        }}
      >
        <OrderedList aria-label="ordered list">
          <ListItem>
            Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
            API.
          </ListItem>
          <ListItem>
            Proactively inform customers about account activity, purchase confirmations, and shipping notifications with
            the
            <i>Programmable Messaging API</i>.
          </ListItem>
        </OrderedList>
      </CustomizationProvider>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          NEW_ORDERED_LIST: {
            backgroundColor: 'colorBackgroundTrial',
            marginLeft: 'space0',
            padding: 'space40',
            paddingLeft: 'space70',
          },
          NEW_LIST_ITEM: {
            color: 'colorTextLink',
          },
          ANOTHER_NEW_LIST_ITEM: {
            color: 'colorTextErrorStrong',
          },
        }}
      >
        <OrderedList aria-label="ordered list" element="NEW_ORDERED_LIST">
          <ListItem element="NEW_LIST_ITEM">
            Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
            API.
          </ListItem>
          <ListItem element="ANOTHER_NEW_LIST_ITEM">
            Proactively inform customers about account activity, purchase confirmations, and shipping notifications with
            the
            <i>Programmable Messaging API</i>.
          </ListItem>
        </OrderedList>
      </CustomizationProvider>
    </Stack>
  );
};

export const CustomUnorderedList: React.FC = () => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <UnorderedList aria-label="ordered list">
        <ListItem>
          Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
          API.
        </ListItem>
        <ListItem>
          Proactively inform customers about account activity, purchase confirmations, and shipping notifications with
          the
          <i>Programmable Messaging API</i>.
        </ListItem>
      </UnorderedList>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          UNORDERED_LIST: {
            backgroundColor: 'colorBackgroundPrimaryWeaker',
            marginLeft: 'space0',
            padding: 'space40',
            paddingLeft: 'space70',
          },
          LIST_ITEM: {
            color: 'colorTextError',
          },
        }}
      >
        <UnorderedList aria-label="ordered list">
          <ListItem>
            Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
            API.
          </ListItem>
          <ListItem>
            Proactively inform customers about account activity, purchase confirmations, and shipping notifications with
            the
            <i>Programmable Messaging API</i>.
          </ListItem>
        </UnorderedList>
      </CustomizationProvider>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          NEW_UNORDERED_LIST: {
            backgroundColor: 'colorBackgroundTrial',
            marginLeft: 'space0',
            padding: 'space40',
            paddingLeft: 'space70',
          },
          NEW_LIST_ITEM: {
            color: 'colorTextLink',
          },
          ANOTHER_NEW_LIST_ITEM: {
            color: 'colorTextErrorStrong',
          },
        }}
      >
        <UnorderedList aria-label="ordered list" element="NEW_UNORDERED_LIST">
          <ListItem element="NEW_LIST_ITEM">
            Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
            API.
          </ListItem>
          <ListItem element="ANOTHER_NEW_LIST_ITEM">
            Proactively inform customers about account activity, purchase confirmations, and shipping notifications with
            the
            <i>Programmable Messaging API</i>.
          </ListItem>
        </UnorderedList>
      </CustomizationProvider>
    </Stack>
  );
};
