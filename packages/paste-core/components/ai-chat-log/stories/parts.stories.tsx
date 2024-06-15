// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { ThumbsDownIcon } from "@twilio-paste/icons/esm/ThumbsDownIcon";
import { ThumbsUpIcon } from "@twilio-paste/icons/esm/ThumbsUpIcon";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { InlineCode } from "@twilio-paste/inline-code";
import * as React from "react";

import {
  AIChatLog,
  AIChatMessage,
  AIChatMessageActionCard,
  AIChatMessageActionGroup,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageLoading,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/AI Chat Log/Parts",
  component: AIChatLog,
};

export const AIMessageBody = (): React.ReactNode => {
  return (
    <AIChatLog>
      <AIChatMessageBody size="default">
        Use <InlineCode>size=&quot;default&quot;</InlineCode> when the AI Chat Log is inside a small container.
      </AIChatMessageBody>
      <AIChatMessageBody size="fullScreen">
        Use <InlineCode>size=&quot;fullScreen&quot;</InlineCode> when the AI Chat Log is a full screen experience.
      </AIChatMessageBody>
    </AIChatLog>
  );
};

export const AIMessageBodyWithParagraphs = (): React.ReactNode => {
  return (
    <AIChatLog>
      <AIChatMessageBody size="default">
        <p>
          Use <InlineCode>size=&quot;default&quot;</InlineCode> when the AI Chat Log is inside a small container.
        </p>
        <p>Second paragraph within AI Chat Message Body.</p>
      </AIChatMessageBody>

      <AIChatMessageBody size="fullScreen">
        <p>
          Use <InlineCode>size=&quot;fullScreen&quot;</InlineCode> when the AI Chat Log is a full screen experience.
        </p>
        <p>Second paragraph within AI Chat Message Body.</p>
      </AIChatMessageBody>
    </AIChatLog>
  );
};

export const AIMessageLoading = (): React.ReactNode => {
  return (
    <div>
      <p>Pssst! The three rows have dynamic widths. Refresh to see it in action!</p>
      <AIChatMessageLoading />
    </div>
  );
};
AIMessageLoading.storyName = "AI Message (Loading)";

export const AIMessageLoadingStopLoading = (): React.ReactNode => {
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
AIMessageLoadingStopLoading.storyName = "AI Message (Loading - with Stop button)";

export const AIMessageAuthor = (): React.ReactNode => {
  return (
    <Box display="flex" flexDirection="column" rowGap="space60">
      <AIChatMessage variant="user">
        <AIChatMessageAuthor aria-label="you said">Nora Krantz</AIChatMessageAuthor>
      </AIChatMessage>
      <AIChatMessage variant="user">
        <AIChatMessageAuthor aria-label="you said" avatarIcon={UserIcon}>
          Nora Krantz (custom icon)
        </AIChatMessageAuthor>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="bot said">NoraBot</AIChatMessageAuthor>
      </AIChatMessage>
    </Box>
  );
};

export const AIMessageActionGroup = (): React.ReactNode => {
  return (
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
  );
};

export const FullAIMessage = (): React.ReactNode => {
  const [liked, setLiked] = React.useState(false);
  const [disliked, setDisliked] = React.useState(false);
  return (
    <AIChatMessage variant="bot">
      <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
      <AIChatMessageBody>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendiiure
        adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt impedit
        repellat assumenda.
        <Box paddingTop="space70">
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
      </AIChatMessageBody>
      <AIChatMessageActionGroup>
        <AIChatMessageActionCard aria-label="Feedback form">
          Is this helpful?
          <Button
            variant="secondary_icon"
            aria-label="this is a helpful response"
            size="reset"
            pressed={liked}
            onClick={() => {
              setLiked(!liked);
              setDisliked(false);
            }}
          >
            <ThumbsUpIcon decorative={false} title="like result" />
          </Button>
          <Button
            variant="secondary_icon"
            aria-label="this is not a helpful response"
            size="reset"
            pressed={disliked}
            onClick={() => {
              setDisliked(!disliked);
              setLiked(false);
            }}
          >
            <ThumbsDownIcon decorative={disliked} title="dislike result" />
          </Button>
        </AIChatMessageActionCard>
      </AIChatMessageActionGroup>
    </AIChatMessage>
  );
};
