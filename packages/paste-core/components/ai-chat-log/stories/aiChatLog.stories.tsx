// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { ChatComposer } from "@twilio-paste/chat-composer";
import { CustomizationProvider } from "@twilio-paste/customization";
import { CommunityIcon } from "@twilio-paste/icons/esm/CommunityIcon";
import { CopyIcon } from "@twilio-paste/icons/esm/CopyIcon";
import { RefreshIcon } from "@twilio-paste/icons/esm/RefreshIcon";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import { ThumbsDownIcon } from "@twilio-paste/icons/esm/ThumbsDownIcon";
import { ThumbsUpIcon } from "@twilio-paste/icons/esm/ThumbsUpIcon";
import {
  SummaryDetail,
  SummaryDetailContent,
  SummaryDetailHeading,
  SummaryDetailHeadingContent,
  SummaryDetailToggleButton,
} from "@twilio-paste/summary-detail";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import {
  AIChatEvent,
  AIChatLog,
  AIChatMessage,
  AIChatMessageActionCard,
  AIChatMessageActionGroup,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageLoading,
  AIChatMessageSource,
  AIChatMessageSourceLink,
} from "../src";

export default {
  title: "Components/AI Chat Log",
  component: AIChatLog,
};

export const ExampleAIChatLog = (): React.ReactNode => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
            <Box marginTop="space50">
              <ButtonGroup aria-label="code options, select the desired code">
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30009
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30009
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30009
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30009
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30009
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30009
                </Button>
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
              <Button variant="secondary_icon" size="reset" aria-label="this is a helpful response">
                <ThumbsUpIcon decorative={false} title="like result" />
              </Button>
              <Button variant="secondary_icon" size="reset" aria-label="this is not a helpful response">
                <ThumbsDownIcon decorative={false} title="dislike result" />
              </Button>
            </AIChatMessageActionCard>
            <AIChatMessageActionCard aria-label="Rewrite and copy buttons">
              <Button variant="secondary_icon" size="reset">
                <RefreshIcon decorative />
                Rewrite
              </Button>
              <Button variant="secondary_icon" size="reset">
                <CopyIcon decorative />
                Copy
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
        <AIChatMessage variant="user">
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            <AIChatMessageLoading
              onStopLoading={() => {}}
              i18nStopGeneratingLabel="Stop generating"
              i18nAIScreenReaderText="AI response"
            />
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
      <ChatComposer
        config={{
          namespace: "customer-chat",
          onError: (e) => {
            throw e;
          },
        }}
        placeholder="Chat text"
        ariaLabel="A placeholder chat composer"
      >
        <Box position="absolute" top="space30" right="space30">
          <Button variant="primary_icon" size="reset">
            <SendIcon decorative={false} title="Send message" />
          </Button>
        </Box>
      </ChatComposer>
    </>
  );
};

export const ExampleAIChatLogAgent = (): React.ReactNode => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody timestamp="3:42pm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>

        <AIChatEvent>
          <Text color="colorTextWeak" fontSize="fontSize20" fontWeight="fontWeightSemibold" as="span">
            Agent
          </Text>
          has joined the chat・3:43pm
        </AIChatEvent>

        <AIChatMessage variant="agent">
          <AIChatMessageAuthor avatarIcon={CommunityIcon} aria-label="Agent said">
            Agent Name
          </AIChatMessageAuthor>
          <AIChatMessageBody timestamp="3:44pm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>

        <AIChatMessage variant="user">
          <AIChatMessageBody timestamp="3:45pm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
      <ChatComposer
        config={{
          namespace: "customer-chat",
          onError: (e) => {
            throw e;
          },
        }}
        placeholder="Chat text"
        ariaLabel="A placeholder chat composer"
      >
        <Box position="absolute" top="space30" right="space30">
          <Button variant="primary_icon" size="reset">
            <SendIcon decorative={false} title="Send message" />
          </Button>
        </Box>
      </ChatComposer>
    </>
  );
};

export const ExampleAIChatLogSources = (): React.ReactNode => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody timestamp="3:42pm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>

        <AIChatEvent>
          <Text color="colorTextWeak" fontSize="fontSize20" fontWeight="fontWeightSemibold" as="span">
            Agent
          </Text>
          has joined the chat・3:43pm
        </AIChatEvent>

        <AIChatMessage variant="agent">
          <AIChatMessageAuthor avatarIcon={CommunityIcon} aria-label="Agent said">
            Agent Name
          </AIChatMessageAuthor>
          <AIChatMessageBody timestamp="3:44pm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum<AIChatMessageSource>1</AIChatMessageSource>,
            ex fugiat quisquam itaque, earum sit nesciunt impedit repellat assumenda.
            <AIChatMessageSource>2</AIChatMessageSource>
          </AIChatMessageBody>
          <SummaryDetail>
            <SummaryDetailHeading>
              <SummaryDetailToggleButton aria-label="BOOP" />
              <SummaryDetailHeadingContent>
                <Text as="p" fontWeight="fontWeightSemibold">
                  Sources
                </Text>
              </SummaryDetailHeadingContent>
            </SummaryDetailHeading>
            <SummaryDetailContent>
              <Box display="flex" flexDirection="column" rowGap="space20">
                <AIChatMessageSourceLink number="1" url="#">
                  Source title
                </AIChatMessageSourceLink>
                <AIChatMessageSourceLink number="2" url="#">
                  Source title
                </AIChatMessageSourceLink>
                <AIChatMessageSourceLink number="3" url="#">
                  Source title
                </AIChatMessageSourceLink>
              </Box>
            </SummaryDetailContent>
          </SummaryDetail>
          <AIChatMessageActionGroup>
            <AIChatMessageActionCard aria-label="Feedback form">
              Is this helpful?
              <Button variant="secondary_icon" size="reset" aria-label="this is a helpful response">
                <ThumbsUpIcon decorative={false} title="like result" />
              </Button>
              <Button variant="secondary_icon" size="reset" aria-label="this is not a helpful response">
                <ThumbsDownIcon decorative={false} title="dislike result" />
              </Button>
            </AIChatMessageActionCard>
            <AIChatMessageActionCard aria-label="Rewrite and copy buttons">
              <Button variant="secondary_icon" size="reset">
                <RefreshIcon decorative />
                Rewrite
              </Button>
              <Button variant="secondary_icon" size="reset">
                <CopyIcon decorative />
                Copy
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
      </AIChatLog>
      <ChatComposer
        config={{
          namespace: "customer-chat",
          onError: (e) => {
            throw e;
          },
        }}
        placeholder="Chat text"
        ariaLabel="A placeholder chat composer"
      >
        <Box position="absolute" top="space30" right="space30">
          <Button variant="primary_icon" size="reset">
            <SendIcon decorative={false} title="Send message" />
          </Button>
        </Box>
      </ChatComposer>
    </>
  );
};
export const ExampleFullScreenAIChatLog = (): React.ReactNode => {
  return (
    <>
      <AIChatLog size="fullScreen">
        <AIChatMessage variant="user">
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
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
              <Button variant="secondary_icon" size="reset" aria-label="this is a helpful response">
                <ThumbsUpIcon decorative={false} title="like result" />
              </Button>
              <Button variant="secondary_icon" size="reset" aria-label="this is not a helpful response">
                <ThumbsDownIcon decorative={false} title="dislike result" />
              </Button>
            </AIChatMessageActionCard>
            <AIChatMessageActionCard aria-label="Rewrite and copy buttons">
              <Button variant="secondary_icon" size="reset">
                <RefreshIcon decorative />
                Rewrite
              </Button>
              <Button variant="secondary_icon" size="reset">
                <CopyIcon decorative />
                Copy
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
        <AIChatMessage variant="user">
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            <AIChatMessageLoading
              onStopLoading={() => {}}
              i18nStopGeneratingLabel="Stop generating"
              i18nAIScreenReaderText="AI response"
            />
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatEvent>
          <Text color="colorTextWeak" fontSize="fontSize20" fontWeight="fontWeightSemibold" as="span">
            Agent
          </Text>
          has joined the chat・3:43pm
        </AIChatEvent>

        <AIChatMessage variant="agent">
          <AIChatMessageAuthor avatarIcon={CommunityIcon} aria-label="Agent said">
            Agent Name
          </AIChatMessageAuthor>
          <AIChatMessageBody timestamp="3:44pm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
      <ChatComposer
        config={{
          namespace: "customer-chat",
          onError: (e) => {
            throw e;
          },
        }}
        placeholder="Chat text"
        ariaLabel="A placeholder chat composer"
      >
        <Box position="absolute" top="space30" right="space30">
          <Button variant="primary_icon" size="reset">
            <SendIcon decorative={false} title="Send message" />
          </Button>
        </Box>
      </ChatComposer>
    </>
  );
};

export const ExampleAIChatLogTimestamp = (): React.ReactNode => {
  return (
    <>
      <AIChatLog>
        <AIChatEvent withSeparator>Wed, Apr 10・1:15pm</AIChatEvent>
        <AIChatMessage variant="user">
          <AIChatMessageBody timestamp="2:36pm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody timestamp="2:37pm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
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
              <Button variant="secondary_icon" size="reset" aria-label="this is a helpful response">
                <ThumbsUpIcon decorative={false} title="like result" />
              </Button>
              <Button variant="secondary_icon" size="reset" aria-label="this is not a helpful response">
                <ThumbsDownIcon decorative={false} title="dislike result" />
              </Button>
            </AIChatMessageActionCard>
            <AIChatMessageActionCard aria-label="Rewrite and copy buttons">
              <Button variant="secondary_icon" size="reset">
                <RefreshIcon decorative />
                Rewrite
              </Button>
              <Button variant="secondary_icon" size="reset">
                <CopyIcon decorative />
                Copy
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
      </AIChatLog>
      <ChatComposer
        config={{
          namespace: "customer-chat",
          onError: (e) => {
            throw e;
          },
        }}
        placeholder="Chat text"
        ariaLabel="A placeholder chat composer"
      >
        <Box position="absolute" top="space30" right="space30">
          <Button variant="primary_icon" size="reset">
            <SendIcon decorative={false} title="Send message" />
          </Button>
        </Box>
      </ChatComposer>
    </>
  );
};

export const ExampleAIChatLogEvent = (): React.ReactNode => {
  return (
    <>
      <AIChatLog>
        <AIChatEvent withSeparator>Wed, Apr 10・3:43pm</AIChatEvent>
        <AIChatMessage variant="user">
          <AIChatMessageBody timestamp="2:36pm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody timestamp="2:37pm">Connecting you with an agent...</AIChatMessageBody>
        </AIChatMessage>
        <AIChatEvent>
          <Text color="colorTextWeak" fontSize="fontSize20" fontWeight="fontWeightSemibold" as="span">
            Agent
          </Text>
          has joined the chat・2:38pm
        </AIChatEvent>
        <AIChatMessage variant="agent">
          <AIChatMessageAuthor avatarIcon={CommunityIcon} aria-label="Agent said">
            Agent Name
          </AIChatMessageAuthor>
          <AIChatMessageBody timestamp="2:39pm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="user">
          <AIChatMessageBody timestamp="2:41pm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>

      <ChatComposer
        config={{
          namespace: "customer-chat",
          onError: (e) => {
            throw e;
          },
        }}
        placeholder="Chat text"
        ariaLabel="A placeholder chat composer"
      >
        <Box position="absolute" top="space30" right="space30">
          <Button variant="primary_icon" size="reset">
            <SendIcon decorative={false} title="Send message" />
          </Button>
        </Box>
      </ChatComposer>
    </>
  );
};

export const CustomizedExampleAIChatLog = (): React.ReactNode => {
  const theme = useTheme();
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        AI_CHAT_LOG: { borderStyle: "solid", borderColor: "colorBorderDecorative10Weaker" },
        AI_CHAT_LOG_LIST: { rowGap: "space50" },
        AI_CHAT_MESSAGE: { rowGap: "space30" },
        AI_CHAT_MESSAGE_AUTHOR: { columnGap: "space60" },
        AI_CHAT_MESSAGE_AUTHOR_BOT_AVATAR: { backgroundColor: "colorBackgroundDecorative10Weakest" },
        AI_CHAT_MESSAGE_AUTHOR_USER_AVATAR: { backgroundColor: "colorBackgroundDecorative40Weakest" },
        AI_CHAT_MESSAGE_BODY: { color: "colorTextPrimaryStrong" },
        AI_CHAT_MESSAGE_ACTION_GROUP: { backgroundColor: "colorBackgroundDecorative10Weakest" },
        AI_CHAT_MESSAGE_ACTION: { backgroundColor: "colorBackgroundDecorative20Weakest" },
        AI_CHAT_MESSAGE_LOADING: { rowGap: "space0" },
        AI_CHAT_MESSAGE_LOADING_SKELETON: { height: "40px" },
        AI_CHAT_MESSAGE_LOADING_STOP_LOADING: { paddingY: "space60" },
        AI_CHAT_MESSAGE_LOADING_STOP_BUTTON: { fontWeight: "fontWeightLight" },
      }}
    >
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
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
        <AIChatMessage variant="user">
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI is generating response">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            <AIChatMessageLoading
              onStopLoading={() => {}}
              i18nStopGeneratingLabel="Stop generating"
              i18nAIScreenReaderText="AI response"
            />
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
    </CustomizationProvider>
  );
};
