import type { StoryFn } from "@storybook/react";
import { DownloadIcon } from "@twilio-paste/icons/esm/DownloadIcon";
import { Spinner } from "@twilio-paste/spinner";
import { Stack } from "@twilio-paste/stack";
import * as React from "react";
import type { JSX } from "react";

import {
  ChatAttachment,
  ChatAttachmentDescription,
  ChatAttachmentLink,
  ChatBubble,
  ChatLog,
  ChatMessage,
  ComposerAttachmentCard,
} from "../../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/ChatLog",
};

export const InboundChatMessageWithAttachment: StoryFn = () => (
  <ChatLog>
    <ChatMessage variant="inbound">
      <ChatBubble>
        <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
          <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
          <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
        </ChatAttachment>
      </ChatBubble>
    </ChatMessage>
  </ChatLog>
);

export const OutboundChatMessageWithAttachment: StoryFn = () => (
  <ChatLog>
    <ChatMessage variant="outbound">
      <ChatBubble>
        <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
          <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
          <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
        </ChatAttachment>
      </ChatBubble>
    </ChatMessage>
  </ChatLog>
);

const StateExampleComposerAttachmentCard = (): JSX.Element => {
  const [loading, setLoading] = React.useState(true);
  const attachmentIcon = loading ? <Spinner decorative={false} title="loading..." /> : <DownloadIcon decorative />;

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
      <ChatAttachment attachmentIcon={<Spinner decorative={false} title="loading..." />}>
        <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
        <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
      </ChatAttachment>
    </ComposerAttachmentCard>
    <ComposerAttachmentCard onDismiss={() => {}}>
      <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
        <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
        <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
      </ChatAttachment>
    </ComposerAttachmentCard>
  </Stack>
);

export const StatefulComposerAttachmentCard: StoryFn = () => (
  <Stack orientation="vertical" spacing="space60">
    <StateExampleComposerAttachmentCard />
  </Stack>
);

StatefulComposerAttachmentCard.parameters = {
  chromatic: { disableSnapshot: true },
};
