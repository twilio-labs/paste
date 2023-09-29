import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ChatBubble, ChatMessage, ChatMessageMeta, ChatMessageMetaItem } from "@twilio-paste/chat-log";
import type { Chat } from "@twilio-paste/chat-log";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import {
  CLEAR_EDITOR_COMMAND,
  COMMAND_PRIORITY_HIGH,
  KEY_ENTER_COMMAND,
  useLexicalComposerContext,
} from "@twilio-paste/lexical-library";
import * as React from "react";

export const RichTextExample = `const RichTextExample = () => {
  return (
    <ChatComposer
      ariaLabel="A rich text chat composer"
      config={{
        namespace: 'customer-chat',
        onError (e) { throw e },
        editorState () {
          const root = $getRoot();

          if (root.getFirstChild() !== null) return;

          root.append(
            $createParagraphNode().append(
              $createTextNode('Hello '),
              $createTextNode('world! ').toggleFormat('bold'),
              $createTextNode('This is a '),
              $createTextNode('chat composer ').toggleFormat('italic'),
              $createTextNode('with rich text functionality.')
            )
          );
        },
      }}
    />
  )
}

render(<RichTextExample/>)`.trim();

export const MaxHeightExample = `const MaxHeightExample = () => {
  return (
    <ChatComposer
      maxHeight="size10"
      ariaLabel="A max height chat composer"
      config={{
        namespace: 'customer-chat',
        onError (e) { throw e },
        editorState () {
          const root = $getRoot();

          if (root.getFirstChild() !== null) return;

          for (let i = 0; i < 10; i++) {
            root.append(
              $createParagraphNode().append(
                $createTextNode('this is a really really long initial value')
              )
            );
          }
        },
      }}
    />
  )
}

render(<MaxHeightExample />)`.trim();

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export const createNewMessage = (message: string): Omit<Chat, "id"> => {
  const time = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const messageDirection = getRandomInt(2) === 1 ? "inbound" : "outbound";

  return {
    variant: messageDirection,
    content: (
      <ChatMessage variant={messageDirection}>
        <ChatBubble>{message}</ChatBubble>
        <ChatMessageMeta aria-label={`said by you at ${time}`}>
          <ChatMessageMetaItem>{time}</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    ),
  };
};

export const SendButtonPlugin = ({ onClick }: { onClick: () => void }): JSX.Element => {
  const [editor] = useLexicalComposerContext();

  const handleSend = (): void => {
    onClick();
    editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
  };

  return (
    <Box position="absolute" top="space30" right="space30">
      <Button variant="primary_icon" size="reset" onClick={handleSend}>
        <SendIcon decorative={false} title="Send message" />
      </Button>
    </Box>
  );
};

export const EnterKeySubmitPlugin = ({ onKeyDown }: { onKeyDown: () => void }): null => {
  const [editor] = useLexicalComposerContext();

  const handleEnterKey = React.useCallback(
    (event: KeyboardEvent) => {
      const { shiftKey, ctrlKey } = event;
      if (shiftKey || ctrlKey) return false;
      event.preventDefault();
      event.stopPropagation();
      onKeyDown();
      editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
      return true;
    },
    [editor, onKeyDown],
  );

  React.useEffect(() => {
    return editor.registerCommand(KEY_ENTER_COMMAND, handleEnterKey, COMMAND_PRIORITY_HIGH);
  }, [editor, handleEnterKey]);
  return null;
};

export const ChatDialogExample = `const ChatDialog = () => {
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
  const loggerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted || !loggerRef.current) return;
    scrollerRef.current?.scrollTo({top: loggerRef.current.scrollHeight, behavior: 'smooth'});
  }, [chats, mounted]);

  const handleComposerChange = (editorState) => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setMessage(text);
    });
  };

  const submitMessage = () => {
    if (message === '') return;
    push(createNewMessage(message));
  };

  return (
    <Box>
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
            onError: (error) => {
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
    </Box>
  );
};

render(<ChatDialog />)`.trim();
