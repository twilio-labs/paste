import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { ChatBubble, ChatMessage, ChatMessageMeta, ChatMessageMetaItem } from '@twilio-paste/chat-log';
import type { Chat } from '@twilio-paste/chat-log';
import { SendIcon } from '@twilio-paste/icons/esm/SendIcon';
import {
  CLEAR_EDITOR_COMMAND,
  COMMAND_PRIORITY_HIGH,
  KEY_ENTER_COMMAND,
  useLexicalComposerContext,
} from '@twilio-paste/lexical-library';
import * as React from 'react';

function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}

export const createNewMessage = (message: string): Omit<Chat, 'id'> => {
  const time = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const messageDirection = getRandomInt(2) === 1 ? 'inbound' : 'outbound';

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
