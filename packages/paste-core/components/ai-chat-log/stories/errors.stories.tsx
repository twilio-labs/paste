// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */

import { Alert } from "@twilio-paste/alert";
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { ChatComposer, ChatComposerActionGroup, ChatComposerContainer } from "@twilio-paste/chat-composer";
import { HelpText } from "@twilio-paste/help-text";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { CopyIcon } from "@twilio-paste/icons/esm/CopyIcon";
import { RefreshIcon } from "@twilio-paste/icons/esm/RefreshIcon";
import { RepeatIcon } from "@twilio-paste/icons/esm/RepeatIcon";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import { ThumbsDownIcon } from "@twilio-paste/icons/esm/ThumbsDownIcon";
import { ThumbsUpIcon } from "@twilio-paste/icons/esm/ThumbsUpIcon";
import { ClearEditorPlugin } from "@twilio-paste/lexical-library";
import { Text } from "@twilio-paste/text";
import * as React from "react";
import type { JSX } from "react";

import { Callout, CalloutHeading, CalloutText } from "../../callout/src";
import {
  SummaryDetail,
  SummaryDetailContent,
  SummaryDetailHeading,
  SummaryDetailHeadingContent,
  SummaryDetailToggleButton,
} from "../../summary-detail/src";
import {
  AIChatLog,
  AIChatMessage,
  AIChatMessageActionCard,
  AIChatMessageActionGroup,
  AIChatMessageAuthor,
  AIChatMessageBody,
} from "../src";

export default {
  title: "Components/AI Chat Log/Errors",
  component: AIChatLog,
};

const Composer = (): JSX.Element => {
  return (
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
      >
        <ClearEditorPlugin />
      </ChatComposer>
      <ChatComposerActionGroup>
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="attach a file to your message" />
        </Button>
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
    </ChatComposerContainer>
  );
};

export const MessageGenerationError = (): React.ReactNode => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody>Message filtered (30007)</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            <Callout variant="error">
              <CalloutHeading as="h3">There was an error generating a response.</CalloutHeading>
              <CalloutText>
                Please try again, if the error persists please <Anchor href="#">contact us</Anchor>.
              </CalloutText>
            </Callout>
          </AIChatMessageBody>
          <AIChatMessageActionGroup>
            <AIChatMessageActionCard aria-label="Feedback form">
              <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                <RefreshIcon decorative title="dislike result" />
                Regenerate
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <Composer />
      </Box>
    </>
  );
};

MessageGenerationError.parameters = {
  a11y: {
    disable: true,
  },
};

export const AIActionClickError = (): React.ReactNode => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody>Message filtered (30007)</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            We recommend reviewing our guidelines on filtering and scaling to better manage high volumes of messages.
            <Box paddingY="space50">
              <ButtonGroup>
                <Button variant="secondary" size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30009
                </Button>
              </ButtonGroup>
            </Box>

            <Callout variant="error">
              <CalloutHeading as="h3">The action couldn’t be completed.</CalloutHeading>
              <CalloutText>
                Please try again, if the error persists please <Anchor href="#">contact us</Anchor>.
              </CalloutText>
            </Callout>
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <Composer />
      </Box>
    </>
  );
};

AIActionClickError.parameters = {
  a11y: {
    disable: true,
  },
};

export const ActionGroupError = (): React.ReactNode => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody>Message body text</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Message body text
            <Box marginTop="space50" marginBottom="space40">
              <SummaryDetail>
                <SummaryDetailHeading>
                  <SummaryDetailToggleButton aria-label="BOOP" />
                  <SummaryDetailHeadingContent>
                    <Text as="p" fontWeight="fontWeightBold">
                      View data sources
                    </Text>
                  </SummaryDetailHeadingContent>
                </SummaryDetailHeading>
                <SummaryDetailContent>Data Content</SummaryDetailContent>
              </SummaryDetail>
            </Box>

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
              <AIChatMessageActionCard aria-label="Feedback form">
                <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                  <RefreshIcon decorative title="dislike result" />
                  Regenerate
                </Button>
                <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                  <CopyIcon decorative title="dislike result" />
                  Copy
                </Button>
              </AIChatMessageActionCard>
            </AIChatMessageActionGroup>
            <HelpText variant="error">The action couldn’t be completed. Please try again.</HelpText>
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <Composer />
      </Box>
    </>
  );
};

ActionGroupError.parameters = {
  a11y: {
    disable: true,
  },
};

export const SendingMessageError = (): React.ReactNode => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Messages from +1 234-292-2349 are failing due to the following top 3 errors which occurred in the past 7
            days:
            <Box paddingY="space50">
              <ButtonGroup>
                <Button variant="secondary" size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30034
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30024
                </Button>
              </ButtonGroup>
            </Box>
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
          </AIChatMessageBody>
        </AIChatMessage>

        <AIChatMessage variant="user">
          <AIChatMessageBody>Message body text</AIChatMessageBody>
          <AIChatMessageActionGroup>
            <AIChatMessageActionCard aria-label="Feedback form">
              <HelpText marginTop="space0" variant="error">
                Message failed to send
              </HelpText>
              <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                <RepeatIcon decorative title="try again" />
                Try again
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <Composer />
      </Box>
    </>
  );
};

SendingMessageError.parameters = {
  a11y: {
    disable: true,
  },
};

export const SystemError = (): React.ReactNode => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody>Message body text</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Message body text
            <Box marginTop="space50">
              <SummaryDetail>
                <SummaryDetailHeading>
                  <SummaryDetailToggleButton aria-label="BOOP" />
                  <SummaryDetailHeadingContent>
                    <Text as="p" fontWeight="fontWeightBold">
                      View data sources
                    </Text>
                  </SummaryDetailHeadingContent>
                </SummaryDetailHeading>
                <SummaryDetailContent>Data Content</SummaryDetailContent>
              </SummaryDetail>
            </Box>

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
              <AIChatMessageActionCard aria-label="Feedback form">
                <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                  <RefreshIcon decorative title="dislike result" />
                  Regenerate
                </Button>
                <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                  <CopyIcon decorative title="dislike result" />
                  Copy
                </Button>
              </AIChatMessageActionCard>
            </AIChatMessageActionGroup>
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <Alert variant="error">
          <div>
            <strong>Something went wrong.</strong>
          </div>
          If this issue persists please contact us through our help center.
        </Alert>
      </Box>

      <Box marginTop="space50">
        <Composer />
      </Box>
    </>
  );
};

SystemError.parameters = {
  a11y: {
    disable: true,
  },
};
