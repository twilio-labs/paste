import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { InlineCode } from "@twilio-paste/inline-code";
import * as React from "react";

import {
  AIChatLog,
  AIChatMessageBody,
  AIChatMessageBodyTypeWriter,
  AIChatMessageFeedback,
  AIChatMessageLoading,
  AIChatMessageMeta,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/AI Chat Log/Parts",
  component: AIChatLog,
};

export const MessageBody = (): React.ReactNode => {
  return (
    <AIChatLog>
      <AIChatMessageBody variant="default">
        Use <InlineCode>variant=&quot;default&quot;</InlineCode> when the AI Chat Log is inside a small container.
      </AIChatMessageBody>
      <AIChatMessageBody variant="fullScreen">
        Use <InlineCode>variant=&quot;fullScreen&quot;</InlineCode> when the AI Chat Log is a full screen experience.
      </AIChatMessageBody>
    </AIChatLog>
  );
};

export const MessageBodyWithParagraphs = (): React.ReactNode => {
  return (
    <AIChatLog>
      <AIChatMessageBody variant="default">
        <p>Test</p>
        <p>Test</p>
      </AIChatMessageBody>

      <AIChatMessageBody variant="fullScreen">
        <p>Test</p>
        <p>Test</p>
      </AIChatMessageBody>
    </AIChatLog>
  );
};

export const Loading = (): React.ReactNode => {
  return (
    <div>
      <p>Pssst! The three rows have dynamic widths. Refresh to see it in action!</p>
      <AIChatMessageLoading />
    </div>
  );
};

export const LoadingStopLoading = (): React.ReactNode => {
  const [loading, setLoading] = React.useState(true);
  return (
    <div>
      {loading ? (
        <AIChatMessageLoading
          onStopLoading={() => {
            setLoading(false);
          }}
        />
      ) : (
        "Aborted loading!"
      )}
    </div>
  );
};
LoadingStopLoading.storyName = "Loading with stop button";

export const Feedback = (): React.ReactNode => {
  /* eslint-disable no-alert */
  return (
    <AIChatMessageMeta aria-label="Feedback form">
      <AIChatMessageFeedback onLike={() => alert("Like + 1")} onDislike={() => alert("Like - 1")} />
    </AIChatMessageMeta>
  );
  /* eslint-enable no-alert */
};

export const FeedbackCustomLabels = (): React.ReactNode => {
  /* eslint-disable no-alert */
  return (
    <AIChatMessageMeta aria-label="Feedback form">
      <AIChatMessageFeedback
        label="Est-ce utile?"
        i18nDislikeLabel="pas aimer"
        i18nLikeLabel="aimer"
        onLike={() => alert("Like + 1")}
        onDislike={() => alert("Like - 1")}
      />
    </AIChatMessageMeta>
  );
  /* eslint-enable no-alert */
};

export const MessageBodyTypeWriter = (): React.ReactNode => {
  return (
    <Box>
      <Heading as="h2" variant="heading20">
        With enriched text
      </Heading>
      <Box marginBottom="space60">
        <AIChatMessageBodyTypeWriter animated={true}>
          <span style={{ fontWeight: 600 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span> Deserunt
          delectus fuga, necessitatibus eligendiiure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat
          quisquam itaque, earum sit <a href="https://google.com">nesciunt impedit repellat assumenda.</a> new text,{" "}
          <Anchor showExternal href="https://google.com">
            434324
          </Anchor>
          <Button variant="secondary">30007</Button>
        </AIChatMessageBodyTypeWriter>
      </Box>
      <Heading as="h2" variant="heading20">
        Without enriched text:
      </Heading>

      <Box>
        <AIChatMessageBodyTypeWriter animated={true}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendiiure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit
        </AIChatMessageBodyTypeWriter>
      </Box>
    </Box>
  );
};
MessageBodyTypeWriter.storyName = "Message Body Type Writer";
