import * as React from 'react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Avatar} from '@twilio-paste/avatar';
import {DownloadIcon} from '@twilio-paste/icons/esm/DownloadIcon';
import {useTheme} from '@twilio-paste/theme';
import type {StoryFn} from '@storybook/react';

import {
  ChatMessage,
  ChatBubble,
  ChatMessageMeta,
  ChatMessageMetaItem,
  ChatAttachment,
  ComposerAttachmentCard,
  ChatAttachmentLink,
  ChatAttachmentDescription,
  ChatBookend,
  ChatBookendItem,
  ChatEvent,
  ChatLog,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog/Customization',
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};

export const CustomizedMessages: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
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
            outbound: {backgroundColor: 'colorBackgroundPrimaryStronger'},
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
          columnGap: 'space0',
        },
      }}
    >
      <ChatLog>
        <ChatMessage variant="inbound">
          <ChatBubble>test</ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki 4 minutes ago">
            <ChatMessageMetaItem>
              <ChatMessageMetaItem>
                <Avatar name="Gibby Radki" size="sizeIcon20" />
                Gibby Radki
              </ChatMessageMetaItem>
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
};

export const CustomizedChatAttachments: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        COMPOSER_ATTACHMENT_CARD: {
          paddingY: 'space100',
        },
        COMPOSER_ATTACHMENT_CARD_REMOVE_BUTTON: {
          color: 'colorTextIconNeutral',
        },
        CHAT_ATTACHMENT: {
          marginLeft: 'space50',
        },
        CHAT_ATTACHMENT_BODY: {
          padding: 'space20',
        },
        CHAT_ATTACHMENT_LINK: {
          fontSize: 'fontSize50',
        },
        CHAT_ATTACHMENT_DESCRIPTION: {
          color: 'colorTextDecorative10',
        },
        CHAT_ATTACHMENT_ICON: {
          color: 'colorTextBrandHighlight',
        },
        MY_COMPOSER_ATTACHMENT_CARD: {
          paddingY: 'space60',
        },
        MY_COMPOSER_ATTACHMENT_CARD_REMOVE_BUTTON: {
          color: 'colorTextIconSuccess',
        },
        MY_CHAT_ATTACHMENT: {
          marginLeft: 'space30',
        },
        MY_CHAT_ATTACHMENT_BODY: {
          padding: 'space40',
        },
        MY_CHAT_ATTACHMENT_LINK: {
          fontSize: 'fontSize40',
        },
        MY_CHAT_ATTACHMENT_DESCRIPTION: {
          color: 'colorTextError',
        },
      }}
    >
      <ChatLog>
        <ChatMessage variant="inbound">
          <ChatBubble>
            <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
              <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
              <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
            </ChatAttachment>
          </ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble>
            <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
              <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
              <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
            </ChatAttachment>
          </ChatBubble>
        </ChatMessage>
      </ChatLog>
      <ComposerAttachmentCard onDismiss={() => {}}>
        <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
          <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
          <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
        </ChatAttachment>
      </ComposerAttachmentCard>
      <ComposerAttachmentCard element="MY_COMPOSER_ATTACHMENT_CARD" onDismiss={() => {}}>
        <ChatAttachment element="MY_CHAT_ATTACHMENT" attachmentIcon={<DownloadIcon decorative />}>
          <ChatAttachmentLink element="MY_CHAT_ATTACHMENT_LINK" href="www.google.com">
            Document-FINAL.doc
          </ChatAttachmentLink>
          <ChatAttachmentDescription element="MY_CHAT_ATTACHMENT_DESCRIPTION">123 MB</ChatAttachmentDescription>
        </ChatAttachment>
      </ComposerAttachmentCard>
    </CustomizationProvider>
  );
};

export const CustomizedChatBookend: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        CHAT_BOOKEND: {
          margin: 'space20',
        },
        CHAT_BOOKEND_ITEM: {
          color: 'colorText',
        },
      }}
    >
      <ChatLog>
        <ChatBookend>
          <ChatBookendItem>Today</ChatBookendItem>
        </ChatBookend>
      </ChatLog>
    </CustomizationProvider>
  );
};

export const CustomizedChatEvent: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        CHAT_EVENT: {
          color: 'colorText',
        },
      }}
    >
      <ChatLog>
        <ChatEvent>
          <strong>Lauren Gardner, Lee White, Loreina Chew </strong>have joined the chat・3:42 PM
        </ChatEvent>
      </ChatLog>
    </CustomizationProvider>
  );
};
