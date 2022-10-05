import * as React from 'react';
import {Avatar} from '@twilio-paste/avatar';
import {Box} from '@twilio-paste/box';
import {HelpText} from '@twilio-paste/help-text';
import {Button} from '@twilio-paste/button';
import {ArrowDownIcon} from '@twilio-paste/icons/esm/ArrowDownIcon';
import {DownloadIcon} from '@twilio-paste/icons/esm/DownloadIcon';
import {useUID} from '@twilio-paste/uid-library';

import type {Story} from '@storybook/react';
import {
  ChatMessage,
  ChatBubble,
  ChatMessageMeta,
  ChatMessageMetaItem,
  ChatAttachment,
  ChatAttachmentLink,
  ChatAttachmentDescription,
  ChatLog,
  ChatBookend,
  ChatBookendItem,
  ChatEvent,
} from '../src';

export {InboundChatMessage, OutboundChatMessage} from './components/ChatBubble.stories';
export {InboundMessageWithMeta, OutboundMessageWithMeta} from './components/ChatMessageMeta.stories';
export {
  InboundChatMessageWithAttachment,
  OutboundChatMessageWithAttachment,
  ComposerAttachmentCardExample,
} from './components/ChatAttachment.stories';
export {ChatBookendExample} from './components/ChatBookend.stories';
export {ChatEventExample} from './components/ChatEvent.stories';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog',
};

export const NewMessagesButton: Story = () => (
  <Button variant="primary" size="rounded_small">
    New message
    <ArrowDownIcon decorative />
  </Button>
);

export const ScrollingChatLog: Story = () => {
  const [showButton, setShowButton] = React.useState(true);
  const chatBoxUniqueID = useUID();
  return (
    <Box maxHeight="size40" overflowY="scroll" id={chatBoxUniqueID}>
      <ChatLog>
        {showButton ? (
          <Box
            as="li"
            display="flex"
            paddingY="space50"
            justifyContent="center"
            onClick={() => {
              // eslint-disable-next-line unicorn/prefer-query-selector
              const box = document.getElementById(chatBoxUniqueID);
              if (box) box.scrollTop = box.scrollHeight;
              setShowButton(false);
            }}
          >
            <Button variant="primary" size="rounded_small">
              New messages <ArrowDownIcon decorative />
            </Button>
          </Box>
        ) : (
          <></>
        )}
        <ChatBookend>
          <ChatBookendItem>Yesterday</ChatBookendItem>
          <ChatBookendItem>
            <strong>Chat Started</strong> 3:34pm
          </ChatBookendItem>
        </ChatBookend>
        <ChatMessage variant="inbound">
          <ChatBubble>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki at 4:30pm">
            <ChatMessageMetaItem>
              <Avatar name="Gibby Radki" size="sizeIcon20" />
              Gibby Radki ・ 4:30 PM
            </ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatEvent>
          <strong>Lauren Gardner, Lee White, Loreina Chew</strong> have joined the chat ・ 4:31 PM
        </ChatEvent>
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
            Quisque ullamcorper ipsum vitae lorem euismod sodales. Donec a nisi eget eros laoreet pellentesque. Donec
            sed bibendum justo, at ornare mi. Sed eget tempor metus, sed sagittis lacus. Donec commodo nisi in ligula
            accumsan euismod. Nam ornare lobortis orci, eget rhoncus ligula euismod ut.{' '}
          </ChatBubble>
          <ChatBubble>Donec sit amet orci hendrerit, varius diam in, porttitor felis.</ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki at 5:04pm">
            <ChatMessageMetaItem>Gibby Radki ・ 5:04 PM</ChatMessageMetaItem>
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
};

export const KitchenSink: Story = () => (
  <ChatLog>
    <ChatBookend>
      <ChatBookendItem>Today</ChatBookendItem>
    </ChatBookend>
    <ChatMessage variant="outbound">
      <ChatBubble>
        <ChatAttachment attachmentIcon={<DownloadIcon color="colorTextIcon" decorative />}>
          <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
          <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
        </ChatAttachment>
      </ChatBubble>
      <ChatMessageMeta aria-label="said by you at 4:32pm">
        <ChatMessageMetaItem>4:25 PM</ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
    <ChatEvent>
      <strong>Lauren Gardner</strong> has joined the chat ・ 4:26 PM
    </ChatEvent>
    <ChatEvent>
      <strong>Gibby Radki</strong> sent transfer request to <strong>Technical Support Team</strong> ・ 3:42 PM
    </ChatEvent>
    <ChatMessage variant="inbound">
      <ChatBubble>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ChatBubble>
      <ChatMessageMeta aria-label="said by Gibby Radki at 4:30pm">
        <ChatMessageMetaItem>
          <Avatar name="Gibby Radki" size="sizeIcon20" />
          Gibby Radki ・ 4:30 PM
        </ChatMessageMetaItem>
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
      <ChatBubble>
        <ChatAttachment attachmentIcon={<DownloadIcon color="colorTextIcon" decorative />}>
          <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
          <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
        </ChatAttachment>
      </ChatBubble>
      <ChatBubble>Donec sit amet orci hendrerit, varius diam in, porttitor felis.</ChatBubble>
      <ChatMessageMeta aria-label="said by Gibby Radki at 5:04pm">
        <ChatMessageMetaItem>Gibby Radki ・ 5:04 PM</ChatMessageMetaItem>
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
