import * as React from "react";

import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import { InlineCode } from "@twilio-paste/inline-code";
import { useUID } from "@twilio-paste/uid-library";

import { Text } from "@twilio-paste/text";

import {
  AIChatLog,
  AIChatMessage,
  AIChatMessageBody,
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
        Use <InlineCode>variant="default"</InlineCode> when the AI Chat Log is inside a small container.
      </AIChatMessageBody>
      <AIChatMessageBody variant="fullScreen">
        Use <InlineCode>variant="fullScreen"</InlineCode> when the AI Chat Log is a full screen experience.
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
