import type { StoryFn } from "@storybook/react";
import {
  AIChatLogger,
  AIChatMessage,
  AIChatMessageActionCard,
  AIChatMessageActionGroup,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageLoading,
  useAIChatLogger,
} from "@twilio-paste/ai-chat-log";
import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import {
  type Chat,
  ChatAttachment,
  ChatAttachmentDescription,
  ChatAttachmentLink,
  ChatBookend,
  ChatBookendItem,
  ChatBubble,
  ChatEvent,
  ChatLogger,
  ChatMessage,
  ChatMessageMeta,
  ChatMessageMetaItem,
  useChatLogger,
} from "@twilio-paste/chat-log";
import { AgentIcon } from "@twilio-paste/icons/esm/AgentIcon";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { DocumentationIcon } from "@twilio-paste/icons/esm/DocumentationIcon";
import { DownloadIcon } from "@twilio-paste/icons/esm/DownloadIcon";
import { EmojiIcon } from "@twilio-paste/icons/esm/EmojiIcon";
import { HistoryIcon } from "@twilio-paste/icons/esm/HistoryIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
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
import { Menu, MenuButton, MenuItem, MenuSeparator, useMenuState } from "@twilio-paste/menu";
import { Tooltip, useTooltipState } from "@twilio-paste/tooltip";
import * as React from "react";
import type { JSX } from "react";

import { ChatComposer, ChatComposerActionGroup, ChatComposerActionRow, ChatComposerContainer } from "../src";

export default {
  title: "Components/Chat Composer/LogsExperience",
  component: ChatComposer,
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
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

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const createNewMessage = (message: string): Omit<Chat, "id"> => {
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

export const ChatLogStory: StoryFn = () => {
  const { chats, push } = useChatLogger(
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
      variant: "inbound",
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
      variant: "inbound",
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
    },
  );
  const [message, setMessage] = React.useState("");

  const [mounted, setMounted] = React.useState(false);
  const loggerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted || !loggerRef.current) return;
    scrollerRef.current?.scrollTo({ top: loggerRef.current.scrollHeight, behavior: "smooth" });
  }, [chats, mounted]);

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
        <ChatLogger ref={loggerRef} chats={chats} />
      </Box>
      <Box
        borderStyle="solid"
        borderWidth="borderWidth0"
        borderTopWidth="borderWidth10"
        borderColor="colorBorderWeak"
        columnGap="space30"
        paddingX="space70"
        paddingTop="space50"
      >
        <ChatComposerContainer>
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
    </Box>
  );
};

ChatLogStory.storyName = "Chat Log";

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
    push({
      variant: "user",
      content: (
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said at 2:39pm">Gibby Radki</AIChatMessageAuthor>
          <AIChatMessageBody>{message}</AIChatMessageBody>
        </AIChatMessage>
      ),
    });
  };

  const editorInstanceRef = React.useRef<LexicalEditor>(null);
  const tooltip1 = useTooltipState();
  const tooltip2 = useTooltipState();
  const menu = useMenuState();

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
        <ChatComposerActionRow>
          <Tooltip state={tooltip1} text="Attach">
            <Button variant="secondary" size="circle_small">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Button>
          </Tooltip>
          <Tooltip state={tooltip2} text="Emoji">
            <Button variant="secondary" size="circle_small">
              <EmojiIcon decorative={false} title="Chat history" />
            </Button>
          </Tooltip>

          <>
            <MenuButton {...menu} variant="secondary" size="circle_small">
              <MoreIcon decorative={false} title="More actions" />
            </MenuButton>
            <Menu {...menu} aria-label="Preferences">
              <MenuItem {...menu}>
                <Box display="flex" alignItems="center" columnGap="space20">
                  <HistoryIcon decorative color="colorTextIcon" /> Chat history
                </Box>
              </MenuItem>
              <MenuItem {...menu}>
                <Box display="flex" alignItems="center" columnGap="space20">
                  <AgentIcon decorative color="colorTextIcon" /> Contact an agent
                </Box>
              </MenuItem>
              <MenuItem {...menu}>
                <Box display="flex" alignItems="center" columnGap="space20">
                  <DocumentationIcon decorative color="colorTextIcon" /> Quick Start Guide
                </Box>
              </MenuItem>
              <MenuSeparator {...menu} />
              <MenuItem {...menu}>Privacy Policy</MenuItem>
              <MenuItem {...menu}>Terms of Service</MenuItem>
            </Menu>
          </>
        </ChatComposerActionRow>
      </ChatComposerContainer>
    </Box>
  );
};
AIChatLogComposer.storyName = "AI Chat Log";
AIChatLogComposer.parameters = {
  a11y: {
    // no need to a11y check composition of a11y checked components
    disable: true,
  },
};
