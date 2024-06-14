// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { ChatComposer } from "@twilio-paste/chat-composer";
import { CustomizationProvider } from "@twilio-paste/customization";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import { ThumbsDownIcon } from "@twilio-paste/icons/esm/ThumbsDownIcon";
import { ThumbsUpIcon } from "@twilio-paste/icons/esm/ThumbsUpIcon";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import {
  AIChatLog,
  AIChatMessage,
  AIChatMessageAction,
  AIChatMessageActionGroup,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageLoading,
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
          <AIChatMessageAuthor avatarName="Gibby Ridki" avatarIcon={UserIcon} aria-label="You said at 2:36pm">
            You
          </AIChatMessageAuthor>
          <AIChatMessageBody size="default">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody size="default">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
            <Box paddingTop="space70">
              <Button variant="secondary" onClick={() => {}} size="rounded_small">
                30007
              </Button>
              <Button variant="secondary" onClick={() => {}} size="rounded_small">
                30007
              </Button>
              <Button variant="secondary" onClick={() => {}} size="rounded_small">
                30009
              </Button>
            </Box>
          </AIChatMessageBody>
          <AIChatMessageActionGroup aria-label="Feedback form">
            <AIChatMessageAction>
              Is this helpful?
              <Button variant="reset" size="reset">
                <ThumbsUpIcon decorative={false} title="like result" />
              </Button>
              <Button variant="reset" size="reset">
                <ThumbsDownIcon decorative={false} title="dislike result" />
              </Button>
            </AIChatMessageAction>
          </AIChatMessageActionGroup>
        </AIChatMessage>
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said">Gibby Radki</AIChatMessageAuthor>
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            <AIChatMessageLoading onStopLoading={() => {}} />
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
          <AIChatMessageAuthor avatarName="Gibby Ridki" avatarIcon={UserIcon} aria-label="You said at 2:36pm">
            You
          </AIChatMessageAuthor>
          <AIChatMessageBody size="default">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody size="default">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
            <Box paddingTop="space70">
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
          <AIChatMessageActionGroup aria-label="Feedback form">
            <AIChatMessageAction>
              Is this helpful?
              <Button variant="reset" size="reset">
                <ThumbsUpIcon decorative={false} title="like result" />
              </Button>
              <Button variant="reset" size="reset">
                <ThumbsDownIcon decorative={false} title="dislike result" />
              </Button>
            </AIChatMessageAction>
          </AIChatMessageActionGroup>
        </AIChatMessage>
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said">Gibby Radki</AIChatMessageAuthor>
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            <AIChatMessageLoading onStopLoading={() => {}} />
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
    </CustomizationProvider>
  );
};
