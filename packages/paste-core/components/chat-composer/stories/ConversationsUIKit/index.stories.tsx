import * as React from 'react';
import {
  MinimizableDialog,
  MinimizableDialogButton,
  MinimizableDialogContainer,
  MinimizableDialogHeader,
  MinimizableDialogContent,
} from '@twilio-paste/minimizable-dialog';
import {$getRoot, ClearEditorPlugin} from '@twilio-paste/lexical-library';
import {ChatIcon} from '@twilio-paste/icons/esm/ChatIcon';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';
import {
  ChatLogger,
  useChatLogger,
  ChatMessage,
  ChatMessageMeta,
  ChatMessageMetaItem,
  ChatBubble,
  ChatAttachment,
  ChatEvent,
  ChatAttachmentDescription,
  ChatAttachmentLink,
  ChatBookend,
  ChatBookendItem,
  ComposerAttachmentCard,
} from '@twilio-paste/chat-log';
import {Avatar} from '@twilio-paste/avatar';
import {DownloadIcon} from '@twilio-paste/icons/esm/DownloadIcon';
import type {EditorState} from '@twilio-paste/lexical-library';

import {ChatComposer} from '../../src';
import {SendButtonPlugin, EnterKeySubmitPlugin, createNewMessage} from './helpers';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Conversations UI Kit',
  component: ChatComposer,
};

const ComposerAttachmentExample: React.FC = () => (
  <Box display="flex" flexDirection="row" columnGap="space40" overflowX="scroll" paddingX="space70" paddingY="space50">
    <Box maxWidth="size20">
      <ComposerAttachmentCard onDismiss={() => {}}>
        <ChatAttachment attachmentIcon={<DownloadIcon color="colorTextIcon" decorative />}>
          <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
          <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
        </ChatAttachment>
      </ComposerAttachmentCard>
    </Box>
    <Box maxWidth="size20">
      <ComposerAttachmentCard onDismiss={() => {}}>
        <ChatAttachment attachmentIcon={<DownloadIcon color="colorTextIcon" decorative />}>
          <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
          <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
        </ChatAttachment>
      </ComposerAttachmentCard>
    </Box>
  </Box>
);

export const ConversationsUIKitExample: StoryFn = () => {
  const {chats, push} = useChatLogger(
    {
      content: (
        <ChatBookend>
          <ChatBookendItem>Today</ChatBookendItem>
          <ChatBookendItem>
            <strong>Chat Started</strong>・3:34 PM
          </ChatBookendItem>
        </ChatBookend>
      ),
    },
    {
      variant: 'inbound',
      content: (
        <ChatMessage variant="inbound">
          <ChatBubble>Quisque ullamcorper ipsum vitae lorem euismod sodales.</ChatBubble>
          <ChatBubble>
            <ChatAttachment attachmentIcon={<DownloadIcon color="colorTextIcon" decorative />}>
              <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
              <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
            </ChatAttachment>
          </ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki at 5:04pm">
            <ChatMessageMetaItem>Gibby Radki ・ 5:04 PM</ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
      ),
    },
    {
      content: (
        <ChatEvent>
          <strong>Lauren Gardner</strong> has joined the chat ・ 4:26 PM
        </ChatEvent>
      ),
    },
    {
      variant: 'inbound',
      content: (
        <ChatMessage variant="inbound">
          <ChatBubble>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ChatBubble>
          <ChatMessageMeta aria-label="said by Lauren Gardner at 4:30pm">
            <ChatMessageMetaItem>
              <Avatar name="Lauren Gardner" size="sizeIcon20" />
              Lauren Gardner ・ 4:30 PM
            </ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
      ),
    }
  );
  const [message, setMessage] = React.useState('');
  const [mounted, setMounted] = React.useState(false);
  const loggerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted || !loggerRef.current) return;
    scrollerRef.current?.scrollTo({top: loggerRef.current.scrollHeight, behavior: 'smooth'});
  }, [chats, mounted]);

  const handleComposerChange = (editorState: EditorState): void => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setMessage(text);
    });
  };

  const submitMessage = (): void => {
    if (message === '') return;
    push(createNewMessage(message));
  };

  return (
    <MinimizableDialogContainer visible>
      <MinimizableDialogButton variant="primary" size="circle">
        <ChatIcon decorative={false} title="Chat" />
      </MinimizableDialogButton>
      <MinimizableDialog aria-label="Live chat">
        <MinimizableDialogHeader>Live chat</MinimizableDialogHeader>
        <MinimizableDialogContent>
          <Box ref={scrollerRef} overflowX="hidden" overflowY="scroll" maxHeight="size50" tabIndex={0}>
            <ChatLogger ref={loggerRef} chats={chats} />
          </Box>
          <Box
            borderStyle="solid"
            borderWidth="borderWidth0"
            borderTopWidth="borderWidth10"
            borderColor="colorBorderWeak"
            display="flex"
            flexDirection="row"
            columnGap="space30"
            paddingX="space70"
            paddingTop="space50"
          >
            <ChatComposer
              maxHeight="size10"
              config={{
                namespace: 'foo',
                onError: (error: Error) => {
                  throw error;
                },
              }}
              ariaLabel="Message"
              placeholder="Type here..."
              onChange={handleComposerChange}
            >
              <ClearEditorPlugin />
              <SendButtonPlugin onClick={submitMessage} />
              <EnterKeySubmitPlugin onKeyDown={submitMessage} />
            </ChatComposer>
          </Box>
          <ComposerAttachmentExample />
        </MinimizableDialogContent>
      </MinimizableDialog>
    </MinimizableDialogContainer>
  );
};

ConversationsUIKitExample.parameters = {
  a11y: {
    /*
     * axe says that the chat attachment links and some of the bubbles are failing contrast even though they're not.
     * Disabled the tests because all of these components are tested in other stories.
     */
    disable: true,
  },
};
