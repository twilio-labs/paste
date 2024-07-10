// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import type { AIChat } from "@twilio-paste/ai-chat-log";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { ChatComposer, ChatComposerActionGroup, ChatComposerContainer } from "@twilio-paste/chat-composer";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import { ThumbsDownIcon } from "@twilio-paste/icons/esm/ThumbsDownIcon";
import { ThumbsUpIcon } from "@twilio-paste/icons/esm/ThumbsUpIcon";
import {
  $getRoot,
  CLEAR_EDITOR_COMMAND,
  COMMAND_PRIORITY_HIGH,
  ClearEditorPlugin,
  KEY_ENTER_COMMAND,
  LexicalEditor,
  useLexicalComposerContext,
} from "@twilio-paste/lexical-library";
import * as React from "react";

import {
  AIChatLog,
  AIChatLogger,
  AIChatMessage,
  AIChatMessageActionCard,
  AIChatMessageActionGroup,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageLoading,
  useAIChatLogger,
} from "../src";

export default {
  title: "Components/AI Chat Log",
  component: AIChatLog,
};

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const BotMessage = (props): JSX.Element => {
  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  return isLoading ? (
    <AIChatMessage variant="bot">
      <AIChatMessageAuthor aria-label="Bot said">Good Bot</AIChatMessageAuthor>
      <AIChatMessageLoading
        onStopLoading={() => {
          setIsLoading(false);
        }}
      />
    </AIChatMessage>
  ) : (
    <AIChatMessage variant="bot">
      <AIChatMessageAuthor aria-label="Bot said">Good Bot</AIChatMessageAuthor>
      <AIChatMessageBody>{props.message as string}</AIChatMessageBody>
    </AIChatMessage>
  );
};

// eslint-disable-next-line storybook/prefer-pascal-case
const createNewMessage = (message: string): Omit<AIChat, "id"> => {
  const messageDirection = getRandomInt(2) === 1 ? "user" : "bot";

  return {
    variant: messageDirection,
    content:
      messageDirection === "user" ? (
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said at 2:39pm">Gibby Radki</AIChatMessageAuthor>
          <AIChatMessageBody>{message}</AIChatMessageBody>
        </AIChatMessage>
      ) : (
        <AIChatMessage variant="bot">
          <BotMessage message={message} />
        </AIChatMessage>
      ),
  };
};

const SendButtonPlugin = ({ onClick }: { onClick: () => void }): JSX.Element => {
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

const EnterKeySubmitPlugin = ({ onKeyDown }: { onKeyDown: () => void }): null => {
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

export const AIChatLogComposer = (): React.ReactNode => {
  const { aiChats, push } = useAIChatLogger(
    {
      variant: "user",
      content: (
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="you said at 2:36pm">Gibby Radki</AIChatMessageAuthor>
          <AIChatMessageBody>Hi, I am getting errors codes when sending an SMS.</AIChatMessageBody>
        </AIChatMessage>
      ),
    },
    {
      variant: "bot",
      content: (
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Error codes can be returned from various parts of the process. What error codes are you encountering?
            <Box marginTop="space50">
              <ButtonGroup>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30009
                </Button>
              </ButtonGroup>
            </Box>
          </AIChatMessageBody>
          <AIChatMessageActionGroup>
            <AIChatMessageActionCard aria-label="Feedback form">
              Is this helpful?
              <Button variant="reset" size="reset" aria-label="this is a helpful response">
                <ThumbsUpIcon decorative={false} title="like result" />
              </Button>
              <Button variant="reset" size="reset" aria-label="this is not a helpful response">
                <ThumbsDownIcon decorative={false} title="dislike result" />
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
      ),
    },
  );
  const [message, setMessage] = React.useState("");

  const [mounted, setMounted] = React.useState(false);
  const loggerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted || !loggerRef.current) return;
    const scrollPosition: any = scrollerRef.current;
    const scrollHeight: any = loggerRef.current;
    scrollPosition?.scrollTo({ top: scrollHeight.scrollHeight, behavior: "smooth" });
  }, [aiChats, mounted]);

  const handleComposerChange = (editorState): void => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setMessage(text);
    });
  };

  const submitMessage = (): void => {
    if (message === "") return;
    push(createNewMessage(message));
  };

  const editorInstanceRef = React.useRef<LexicalEditor>(null);

  return (
    <Box>
      <Box ref={scrollerRef} overflowX="hidden" overflowY="auto" maxHeight="size50" tabIndex={0}>
        <AIChatLogger ref={loggerRef} aiChats={aiChats} />
      </Box>
      <ChatComposerContainer variant="contained">
        <ChatComposer
          maxHeight="size10"
          config={{
            namespace: "foo",
            onError: (error) => {
              throw error;
            },
          }}
          ariaLabel="Message"
          placeholder="Type here..."
          onChange={handleComposerChange}
          editorInstanceRef={editorInstanceRef}
        >
          <ClearEditorPlugin />
          <EnterKeySubmitPlugin onKeyDown={submitMessage} />
        </ChatComposer>
        <ChatComposerActionGroup>
          <Button variant="secondary_icon" size="reset">
            <AttachIcon decorative={false} title="attach a file to your message" />
          </Button>
          <Button
            variant="primary_icon"
            size="reset"
            onClick={() => {
              submitMessage();
              editorInstanceRef.current?.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
            }}
          >
            <SendIcon decorative={false} title="Send" />
          </Button>
        </ChatComposerActionGroup>
      </ChatComposerContainer>
    </Box>
  );
};
AIChatLogComposer.parameters = {
  a11y: {
    // no need to a11y check composition of a11y checked components
    disable: true,
  },
};
