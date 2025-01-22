/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable import/no-extraneous-dependencies */
import { StoryFn } from "@storybook/react";
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { ChatComposer, ChatComposerActionGroup, ChatComposerContainer } from "@twilio-paste/chat-composer";
import { Heading } from "@twilio-paste/heading";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
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
import { ListItem, UnorderedList } from "@twilio-paste/list";
import { Separator } from "@twilio-paste/separator";
import {
  SidePanel,
  SidePanelBody,
  SidePanelButton,
  SidePanelContainer,
  SidePanelFooter,
  SidePanelHeader,
  SidePanelPushContentWrapper,
} from "@twilio-paste/side-panel";
import * as React from "react";

import {
  AIChat,
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

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/AI Chat Log",
  component: AIChatLog,
};

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const BotMessage = (props: any): JSX.Element => {
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
      <AIChatMessageBody animated onAnimationEnd={props.onAnimationEnd} onAnimationStart={props.onAnimationStart}>
        {props.message}
      </AIChatMessageBody>
    </AIChatMessage>
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

export const SidePanelScroll: StoryFn = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isAnimating, setIsAnimating] = React.useState(false);
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
    {
      variant: "user",
      content: (
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="you said at 2:36pm">Gibby Radki</AIChatMessageAuthor>
          <AIChatMessageBody>I am getting the error 30007 when attemptin to send a mass message.</AIChatMessageBody>
        </AIChatMessage>
      ),
    },
    {
      variant: "bot",
      content: (
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            This is an indicator that the message was filtered (blocked) by Twilio or by the carrier. This may be done
            by Twilio for violating Twilio&aposs{" "}
            <Anchor href="https://www.twilio.com/en-us/legal/messaging-policy" showExternal>
              Messaging Policy
            </Anchor>{" "}
            or{" "}
            <Anchor href="https://www.twilio.com/en-us/legal/aup" showExternal>
              Acceptable Use Policy
            </Anchor>
            , or by a wireless carrier for violating carrier rules or regulations.
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
  const [userInterctedScroll, setUserInteractedScroll] = React.useState(false);
  const loggerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToChatEnd = (): void => {
    const scrollPosition: any = scrollerRef.current;
    const scrollHeight: any = loggerRef.current;
    scrollPosition?.scrollTo({ top: scrollHeight.scrollHeight, behavior: "smooth" });
  };

  React.useEffect(() => {
    if (!mounted || !loggerRef.current) return;
    scrollToChatEnd();
  }, [aiChats, mounted]);

  const handleComposerChange = (editorState: any): void => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setMessage(text);
    });
  };

  const onAnimationEnd = (): void => {
    setIsAnimating(false);
    setUserInteractedScroll(false);
  };

  const onAnimationStart = (): void => {
    setUserInteractedScroll(false);
    setIsAnimating(true);
  };

  const userScrolled = (): void => setUserInteractedScroll(true);

  React.useEffect(() => {
    scrollerRef.current?.addEventListener("wheel", userScrolled);
    scrollerRef.current?.addEventListener("touchmove", userScrolled);

    const interval = setInterval(() => isAnimating && !userInterctedScroll && scrollToChatEnd(), 5);
    return () => {
      if (interval) clearInterval(interval);
      scrollerRef.current?.removeEventListener("wheel", userScrolled);
      scrollerRef.current?.removeEventListener("touchmove", userScrolled);
    };
  }, [isAnimating, userInterctedScroll]);

  // eslint-disable-next-line storybook/prefer-pascal-case
  const createNewMessage = (newMessage: any, forceBot?: boolean): Omit<AIChat, "id"> => {
    const messageDirection = getRandomInt(2) === 1 && !forceBot ? "user" : "bot";

    return {
      variant: messageDirection,
      content:
        messageDirection === "user" ? (
          <AIChatMessage variant="user">
            <AIChatMessageAuthor aria-label="You said at 2:39pm">Gibby Radki</AIChatMessageAuthor>
            <AIChatMessageBody>{newMessage}</AIChatMessageBody>
          </AIChatMessage>
        ) : (
          <AIChatMessage variant="bot">
            <BotMessage message={newMessage} onAnimationEnd={onAnimationEnd} onAnimationStart={onAnimationStart} />
          </AIChatMessage>
        ),
    };
  };

  const submitMessage = (): void => {
    if (message === "") return;
    push(createNewMessage(message));
  };

  const pushLargeBotMessage = (): void => {
    push(
      createNewMessage(
        <>
          <span style={{ fontWeight: 600 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span> Deserunt
          delectus fuga, necessitatibus eligendiiure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat
          quisquam itaque, earum sit <a href="https://google.com">nesciunt impedit repellat assumenda.</a> new text,{" "}
          <Anchor showExternal href="https://google.com">
            434324
          </Anchor>
          <UnorderedList>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
          </UnorderedList>
          <span style={{ fontWeight: 600 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span> Deserunt
          delectus fuga, necessitatibus eligendiiure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat
          quisquam itaque, earum sit <a href="https://google.com">nesciunt impedit repellat assumenda.</a> new text,{" "}
          <Anchor showExternal href="https://google.com">
            434324
          </Anchor>
        </>,
        true,
      ),
    );
  };

  const editorInstanceRef = React.useRef<LexicalEditor>(null);

  return (
    <SidePanelContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <SidePanel label="example side panel">
        <SidePanelHeader>
          <ArtificialIntelligenceIcon decorative size="sizeIcon50" color="colorTextIcon" />
          <Heading as="h3" variant="heading30" marginBottom="space0">
            Assistant
          </Heading>
        </SidePanelHeader>
        <Separator orientation="horizontal" verticalSpacing="space0" />
        <SidePanelBody ref={scrollerRef}>
          <Box width="100%" paddingY="space30">
            <AIChatLogger ref={loggerRef} aiChats={aiChats} />
          </Box>
        </SidePanelBody>
        <SidePanelFooter variant="chat">
          <ChatComposerContainer variant="contained">
            <ChatComposer
              maxHeight="size10"
              config={{
                namespace: "customer-chat",
                onError: (e) => {
                  throw e;
                },
              }}
              placeholder="Type here..."
              ariaLabel="Chat input"
              editorInstanceRef={editorInstanceRef}
              onChange={handleComposerChange}
            >
              <ClearEditorPlugin />
              <EnterKeySubmitPlugin onKeyDown={submitMessage} />
            </ChatComposer>
            <ChatComposerActionGroup>
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
        </SidePanelFooter>
      </SidePanel>
      <SidePanelPushContentWrapper>
        <SidePanelButton variant="secondary" pressed={!isOpen}>
          Toggle Side Panel
        </SidePanelButton>
        <Button variant="primary" onClick={pushLargeBotMessage}>
          Push Large Bot Message
        </Button>
      </SidePanelPushContentWrapper>
    </SidePanelContainer>
  );
};
SidePanelScroll.parameters = {
  padding: false,
  a11y: {
    disable: true,
  },
};
