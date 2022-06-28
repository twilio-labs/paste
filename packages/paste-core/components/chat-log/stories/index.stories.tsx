import * as React from 'react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Avatar} from '@twilio-paste/avatar';
import {Box} from '@twilio-paste/box';
import {HelpText} from '@twilio-paste/help-text';
import {Button} from '@twilio-paste/button';
import {ArrowDownIcon} from '@twilio-paste/icons/esm/ArrowDownIcon';
import type {StoryFn} from '@storybook/react';
import {ChatMessage, ChatBubble, ChatMessageMeta, ChatMessageMetaItem, ChatLog} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog',
};

export const NewMessagesButton: StoryFn = () => (
  <Button variant="primary" size="rounded_small">
    New message
    <ArrowDownIcon decorative />
  </Button>
);

export const InboundChatMessage: StoryFn = () => (
  <ChatMessage variant="inbound">
    <ChatBubble>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </ChatBubble>
  </ChatMessage>
);

export const OutboundChatMessage: StoryFn = () => (
  <ChatMessage variant="outbound">
    <ChatBubble>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </ChatBubble>
  </ChatMessage>
);

export const InboundMessageWithMeta: StoryFn = () => (
  <>
    <ChatMessage variant="inbound">
      <ChatBubble>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ChatBubble>
      <ChatMessageMeta aria-label="said by Gibby Radki 4 minutes ago">
        <ChatMessageMetaItem>
          <Avatar name="Gibby Radki" size="sizeIcon20" />
          Gibby Radki
        </ChatMessageMetaItem>
        <ChatMessageMetaItem>4 minutes ago</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  </>
);

export const OutboundMessageWithMeta: StoryFn = () => (
  <>
    <ChatMessage variant="outbound">
      <ChatBubble>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ChatBubble>
      <ChatMessageMeta aria-label="said by you 2 minutes ago">
        <ChatMessageMetaItem>2 minutes ago</ChatMessageMetaItem>
      </ChatMessageMeta>
      <ChatMessageMeta aria-label="(read)">
        <ChatMessageMetaItem>Read</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  </>
);

export const ScrollingChatLog: StoryFn = () => (
  <Box maxHeight="size40" overflowY="scroll">
    <ChatLog>
      <ChatMessage variant="inbound">
        <ChatBubble>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ChatBubble>
        <ChatMessageMeta aria-label="said by Gibby Radki at 4:30pm">
          <ChatMessageMetaItem>
            <Avatar name="Gibby Radki" size="sizeIcon20" />
            Gibby Radki
          </ChatMessageMetaItem>
          <ChatMessageMetaItem>4:30 PM</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
      <ChatMessage variant="outbound">
        <ChatBubble>Nulla sit amet elit mauris.</ChatBubble>
        <ChatMessageMeta aria-label="said by you at 4:32pm">
          <ChatMessageMetaItem>4:32 PM</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
      <ChatMessage variant="outbound">
        <ChatBubble>
          Curabitur enim lorem, cursus et massa non, pretium faucibus lacus. Donec odio neque, consectetur a suscipit
          sit amet, blandit id erat.
        </ChatBubble>
        <ChatMessageMeta aria-label="said by you at 4:48pm">
          <ChatMessageMetaItem>4:48 PM</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
      <ChatMessage variant="inbound">
        <ChatBubble>
          Quisque ullamcorper ipsum vitae lorem euismod sodales. Donec a nisi eget eros laoreet pellentesque. Donec sed
          bibendum justo, at ornare mi. Sed eget tempor metus, sed sagittis lacus. Donec commodo nisi in ligula accumsan
          euismod. Nam ornare lobortis orci, eget rhoncus ligula euismod ut.{' '}
        </ChatBubble>
        <ChatBubble>Donec sit amet orci hendrerit, varius diam in, porttitor felis.</ChatBubble>
        <ChatMessageMeta aria-label="said by Gibby Radki at 5:04pm">
          <ChatMessageMetaItem>Gibby Radki</ChatMessageMetaItem>
          <ChatMessageMetaItem>5:04 PM</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
      <ChatMessage variant="outbound">
        <ChatBubble>Donec sit amet orci hendrerit, varius diam in, porttitor felis.</ChatBubble>
        <ChatMessageMeta aria-label="said by you 2 minutes ago">
          <ChatMessageMetaItem>2 minutes ago</ChatMessageMetaItem>
        </ChatMessageMeta>
        <ChatMessageMeta aria-label="(read)">
          <ChatMessageMetaItem>Read</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
      <ChatMessage variant="outbound">
        <ChatBubble>
          Praesent in lectus commodo orci faucibus ullamcorper. Nulla sit amet sapien consectetur, tempor ante eget,
          sagittis orci. Curabitur enim lorem, cursus et massa non, pretium faucibus lacus.
        </ChatBubble>
        <ChatMessageMeta aria-label="Message failed">
          <ChatMessageMetaItem>
            <HelpText variant="error" marginTop="space0">
              Message failed
            </HelpText>
          </ChatMessageMetaItem>
          <ChatMessageMetaItem>
            <Button variant="link" onClick={() => {}}>
              Resend
            </Button>
          </ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    </ChatLog>
  </Box>
);

export const KitchenSink: StoryFn = () => (
  <ChatLog>
    <ChatMessage variant="inbound">
      <ChatBubble>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ChatBubble>
      <ChatMessageMeta aria-label="said by Gibby Radki at 4:30pm">
        <ChatMessageMetaItem>
          <Avatar name="Gibby Radki" size="sizeIcon20" />
          Gibby Radki
        </ChatMessageMetaItem>
        <ChatMessageMetaItem>4:30 PM</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
    <ChatMessage variant="outbound">
      <ChatBubble>Nulla sit amet elit mauris.</ChatBubble>
      <ChatMessageMeta aria-label="said by you at 4:32pm">
        <ChatMessageMetaItem>4:32 PM</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
    <ChatMessage variant="outbound">
      <ChatBubble>
        Curabitur enim lorem, cursus et massa non, pretium faucibus lacus. Donec odio neque, consectetur a suscipit sit
        amet, blandit id erat.
      </ChatBubble>
      <ChatMessageMeta aria-label="said by you at 4:48pm">
        <ChatMessageMetaItem>4:48 PM</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
    <ChatMessage variant="inbound">
      <ChatBubble>
        Quisque ullamcorper ipsum vitae lorem euismod sodales. Donec a nisi eget eros laoreet pellentesque. Donec sed
        bibendum justo, at ornare mi. Sed eget tempor metus, sed sagittis lacus. Donec commodo nisi in ligula accumsan
        euismod. Nam ornare lobortis orci, eget rhoncus ligula euismod ut.{' '}
      </ChatBubble>
      <ChatBubble>Donec sit amet orci hendrerit, varius diam in, porttitor felis.</ChatBubble>
      <ChatMessageMeta aria-label="said by Gibby Radki at 5:04pm">
        <ChatMessageMetaItem>Gibby Radki</ChatMessageMetaItem>
        <ChatMessageMetaItem>5:04 PM</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
    <ChatMessage variant="outbound">
      <ChatBubble>Donec sit amet orci hendrerit, varius diam in, porttitor felis.</ChatBubble>
      <ChatMessageMeta aria-label="said by you 2 minutes ago">
        <ChatMessageMetaItem>2 minutes ago</ChatMessageMetaItem>
      </ChatMessageMeta>
      <ChatMessageMeta aria-label="(read)">
        <ChatMessageMetaItem>Read</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
    <ChatMessage variant="outbound">
      <ChatBubble>
        Praesent in lectus commodo orci faucibus ullamcorper. Nulla sit amet sapien consectetur, tempor ante eget,
        sagittis orci. Curabitur enim lorem, cursus et massa non, pretium faucibus lacus.
      </ChatBubble>
      <ChatMessageMeta aria-label="Message failed">
        <ChatMessageMetaItem>
          <HelpText variant="error" marginTop="space0">
            Message failed
          </HelpText>
        </ChatMessageMetaItem>
        <ChatMessageMetaItem>
          <Button variant="link" onClick={() => {}}>
            Resend
          </Button>
        </ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  </ChatLog>
);

export const CustomizedKitchenSink: StoryFn = () => (
  <CustomizationProvider
    baseTheme="default"
    elements={{
      CHAT_LOG: {
        padding: 'space100',
        borderStyle: 'solid',
        borderColor: 'colorBorder',
        borderWidth: 'borderWidth10',
      },
      CHAT_MESSAGE: {
        marginBottom: 'space100',
        variants: {
          inbound: {marginRight: 'space100'},
          outbound: {marginLeft: 'space100'},
        },
      },
      CHAT_BUBBLE: {
        color: 'colorTextInverse',
        variants: {
          inbound: {backgroundColor: 'colorBackgroundPrimary'},
          outbound: {backgroundColor: 'colorBackgroundPrimaryDarker'},
        },
      },
      CHAT_MESSAGE_META: {
        columnGap: 'space50',
        variants: {
          inbound: {justifyContent: 'flex-start'},
          outbound: {justifyContent: 'flex-end'},
        },
      },
      CHAT_MESSAGE_META_ITEM: {
        color: 'colorText',
        columnGap: 'space20',
      },
    }}
  >
    <ChatLog>
      <ChatMessage variant="inbound">
        <ChatBubble>test</ChatBubble>
        <ChatMessageMeta aria-label="said by Gibby Radki 4 minutes ago">
          <ChatMessageMetaItem>
            <Avatar name="Gibby Radki" size="sizeIcon20" />
            Gibby Radki
          </ChatMessageMetaItem>
          <ChatMessageMetaItem>4 minutes ago</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
      <ChatMessage variant="outbound">
        <ChatBubble>test</ChatBubble>
        <ChatMessageMeta aria-label="said by you 2 minutes ago (read)">
          <ChatMessageMetaItem>2 minutes ago</ChatMessageMetaItem>
          <ChatMessageMetaItem>Read</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    </ChatLog>
  </CustomizationProvider>
);
