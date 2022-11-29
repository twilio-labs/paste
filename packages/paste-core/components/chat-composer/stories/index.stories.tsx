import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {AttachIcon} from '@twilio-paste/icons/esm/AttachIcon';
import {SendIcon} from '@twilio-paste/icons/esm/SendIcon';
import type {EditorState} from '@twilio-paste/lexical-library';
import {$getRoot, $createParagraphNode, $createTextNode, AutoScrollPlugin} from '@twilio-paste/lexical-library';
import {
  MinimizableDialog,
  MinimizableDialogButton,
  MinimizableDialogContainer,
  MinimizableDialogHeader,
  MinimizableDialogContent,
} from '@twilio-paste/minimizable-dialog';
import {ChatIcon} from '@twilio-paste/icons/esm/ChatIcon';
import {DownloadIcon} from '@twilio-paste/icons/esm/DownloadIcon';
import {
  ChatLog,
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
import type {Story} from '@storybook/react';

import {ChatComposer} from '../src';
import type {ChatComposerProps} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Chat Composer',
  component: ChatComposer,
};

const defaultConfig: ChatComposerProps['config'] = {
  namespace: 'foo',
  onError: (error: Error) => {
    throw error;
  },
};

const initialText = (): void => {
  const root = $getRoot();

  if (root.getFirstChild() === null) {
    const paragraph = $createParagraphNode();
    paragraph.append($createTextNode('Hello'));

    root.append(paragraph);
  }
};

const tallInitialText = (): void => {
  const root = $getRoot();

  if (root.getFirstChild() === null) {
    for (let i = 0; i < 10; i++) {
      const paragraph = $createParagraphNode();
      paragraph.append($createTextNode());
      paragraph.append($createTextNode('this is a really really long initial value'));

      root.append(paragraph);
    }
  }
};

const myOnChange = (editorState: EditorState): void => {
  editorState.read(() => {
    const root = $getRoot();

    // eslint-disable-next-line no-console
    console.log(root.getTextContent());
  });
};

const ChatComposerWrapper = React.forwardRef<HTMLDivElement, {children: React.ReactNode}>(({children}, ref) => (
  <Box
    ref={ref}
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
    {children}
    <Box display="flex" flexDirection="row" columnGap="space30" alignItems="flex-start" paddingY="space30">
      <Box display="flex" alignItems="center">
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="Attach file" />
        </Button>
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send message" />
        </Button>
      </Box>
    </Box>
  </Box>
));

export const Default: Story = () => {
  return (
    <ChatComposer config={defaultConfig} testid="foo" ariaLabel="Basic chat composer" placeholder="Type here..." />
  );
};

export const LongPlaceholderText: Story = () => {
  return (
    <ChatComposer
      config={defaultConfig}
      testid="foo"
      ariaLabel="Long placeholder"
      placeholder="This is a really really long placeholder text to let the user know that they can type here to add more info. This is a really really long placeholder text to let the user know that they can type here to add more info"
    />
  );
};

export const WithOnChange: Story = () => {
  return (
    <ChatComposer
      onChange={myOnChange}
      config={defaultConfig}
      ariaLabel="Chat composer with an onChange function"
      placeholder="Type here..."
    />
  );
};

WithOnChange.story = {
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const WithInitialValue: Story = () => {
  return (
    <ChatComposer
      initialValue="This is my initial value"
      ariaLabel="Chat composer with initial value"
      config={{
        namespace: 'foo',
        onError: (error: Error) => {
          throw error;
        },
      }}
      placeholder="Type here..."
    />
  );
};

export const WithCustomInitialValue: Story = () => {
  return (
    <ChatComposer
      ariaLabel="Chat composer with custom initial value"
      config={{
        editorState: initialText,
        namespace: 'foo',
        onError: (error: Error) => {
          throw error;
        },
      }}
      placeholder="Type here..."
    />
  );
};

export const WithMaxHeight: Story = () => {
  return (
    <ChatComposerWrapper>
      <ChatComposer
        ariaLabel="Chat composer with max height"
        maxHeight="size10"
        config={{
          editorState: tallInitialText,
          namespace: 'foo',
          onError: (error: Error) => {
            throw error;
          },
        }}
        placeholder="Type here..."
      />
    </ChatComposerWrapper>
  );
};

WithMaxHeight.parameters = {
  a11y: {
    /*
     * axe fails because the wrapper around the content editable is scrollable with a mouse but not a keyboard.
     * The fix is to add a tab index to the wrapper so a user can focus it and then use their arrow keys to scroll.
     * It would be more awkward to have 2 tab stops (one for the wrapper and one for the content editable),
     * so we can leave it as is since they can focus in the content editable and scroll through the content.
     */
    disable: true,
  },
};

const ChatLogExample: React.FC = () => (
  <ChatLog>
    <ChatBookend>
      <ChatBookendItem>Today</ChatBookendItem>
    </ChatBookend>
    <ChatEvent>
      <strong>Lauren Gardner</strong> has joined the chat ・ 4:26 PM
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
  </ChatLog>
);

const ChatAttachmentExample: React.FC = () => (
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

export const ChatDialog: Story = () => {
  const scrollRef = React.createRef<HTMLDivElement>();

  return (
    <MinimizableDialogContainer visible>
      <MinimizableDialogButton variant="primary" size="circle">
        <ChatIcon decorative={false} title="Chat" />
      </MinimizableDialogButton>
      <MinimizableDialog aria-label="Live chat">
        <MinimizableDialogHeader>Live chat</MinimizableDialogHeader>
        <MinimizableDialogContent>
          <Box overflowY="scroll" maxHeight="size50" tabIndex={0}>
            <ChatLogExample />
          </Box>
          <ChatComposerWrapper ref={scrollRef}>
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
            >
              <AutoScrollPlugin scrollRef={scrollRef} />
            </ChatComposer>
          </ChatComposerWrapper>
          <ChatAttachmentExample />
        </MinimizableDialogContent>
      </MinimizableDialog>
    </MinimizableDialogContainer>
  );
};

ChatDialog.parameters = {
  a11y: {
    /*
     * axe says that the chat attachment links and some of the bubbles are failing contrast even though they're not.
     * Disabled the tests because all of these components are tested in other stories.
     */
    disable: true,
  },
};
