import * as React from 'react';
import {Spinner} from '@twilio-paste/spinner';
import {Stack} from '@twilio-paste/stack';
import {DownloadIcon} from '@twilio-paste/icons/esm/DownloadIcon';
import type {StoryFn} from '@storybook/react';
import {
  ChatMessage,
  ChatBubble,
  ChatAttachment,
  ComposerAttachmentCard,
  ChatAttachmentLink,
  ChatAttachmentDescription,
} from '../../src';

export const InboundChatMessageWithAttachment: StoryFn = () => (
  <ChatMessage variant="inbound">
    <ChatBubble>
      <ChatAttachment attachmentIcon={<DownloadIcon color="colorTextIcon" decorative />}>
        <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
        <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
      </ChatAttachment>
    </ChatBubble>
  </ChatMessage>
);

export const OutboundChatMessageWithAttachment: StoryFn = () => (
  <ChatMessage variant="outbound">
    <ChatBubble>
      <ChatAttachment attachmentIcon={<DownloadIcon color="colorTextIcon" decorative />}>
        <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
        <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
      </ChatAttachment>
    </ChatBubble>
  </ChatMessage>
);

const StateExampleComposerAttachmentCard: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const attachmentIcon = loading ? (
    <Spinner decorative={false} title="loading..." />
  ) : (
    <DownloadIcon color="colorTextIcon" decorative />
  );

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (loading) {
      timeout = setTimeout((): void => setLoading(false), 2500);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <ComposerAttachmentCard onDismiss={() => {}}>
      <ChatAttachment attachmentIcon={attachmentIcon}>
        <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
        <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
      </ChatAttachment>
    </ComposerAttachmentCard>
  );
};

export const ComposerAttachmentCardExample: StoryFn = () => (
  <Stack orientation="vertical" spacing="space60">
    <ComposerAttachmentCard>
      <ChatAttachment attachmentIcon={<Spinner decorative={false} color="colorTextIcon" title="loading..." />}>
        <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
        <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
      </ChatAttachment>
    </ComposerAttachmentCard>
    <ComposerAttachmentCard onDismiss={() => {}}>
      <ChatAttachment attachmentIcon={<DownloadIcon color="colorTextIcon" decorative />}>
        <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
        <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
      </ChatAttachment>
    </ComposerAttachmentCard>
    <StateExampleComposerAttachmentCard />
  </Stack>
);
