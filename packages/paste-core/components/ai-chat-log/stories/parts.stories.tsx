// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/disclosure";
import { Heading } from "@twilio-paste/heading";
import { InlineCode } from "@twilio-paste/inline-code";
import * as React from "react";

import {
  AIChatLog,
  AIChatMessageActions,
  AIChatMessageBody,
  AIChatMessageBodyTypeWriter,
  AIChatMessageFeedback,
  AIChatMessageLoading,
  AIChatMessageRewrite,
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

export const AIMessageFeedback = (): React.ReactNode => {
  /* eslint-disable no-alert */
  return (
    <AIChatMessageActions aria-label="Feedback form">
      <AIChatMessageFeedback onLike={() => alert("Like + 1")} onDislike={() => alert("Like - 1")} />
    </AIChatMessageActions>
  );
  /* eslint-enable no-alert */
};

export const AIMessageFeedbackI18nLabels = (): React.ReactNode => {
  /* eslint-disable no-alert */
  return (
    <AIChatMessageActions aria-label="Feedback form">
      <AIChatMessageFeedback
        label="Est-ce utile?"
        i18nDislikeLabel="pas aimer"
        i18nLikeLabel="aimer"
        onLike={() => alert("Like + 1")}
        onDislike={() => alert("Like - 1")}
      />
    </AIChatMessageActions>
  );
  /* eslint-enable no-alert */
};
AIMessageFeedbackI18nLabels.storyName = "AI Message Feedback (i18n)";

export const AIMessageRewrite = (): React.ReactNode => {
  return (
    <AIChatMessageActions aria-label="message actions">
      <AIChatMessageRewrite onRewrite={() => {}} />
    </AIChatMessageActions>
  );
};

export const MessageBodyTypeWriter = (): React.ReactNode => {
  return (
    <Box>
      <Heading as="h2" variant="heading20">
        With enriched text
      </Heading>
      <Box marginBottom="space60">
        <AIChatMessageBodyTypeWriter>
          <span style={{ fontWeight: 600 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span> Deserunt
          delectus fuga, necessitatibus eligendiiure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat
          quisquam itaque, earum sit <a href="https://google.com">nesciunt impedit repellat assumenda.</a> new text,{" "}
          <Anchor showExternal href="https://google.com">
            434324
          </Anchor>
        </AIChatMessageBodyTypeWriter>
        <br />
        <AIChatMessageBody>
          <Disclosure>
            <DisclosureHeading as="h4" variant="heading40">
              Between the World and Me by Ta-Nehisi Coates
            </DisclosureHeading>
            <DisclosureContent>
              But race is the child of racism, not the father. And the process of naming “the people” has never been a
              matter of genealogy and physiognomy so much as one of hierarchy. Difference in hue and hair is old. But
              the belief in the preeminence of hue and hair, the notion that these factors can correctly organize a
              society and that they signify deeper attributes, which are indelible—this is the new idea at the heart of
              these new people who have been brought up hopelessly, tragically, deceitfully, to believe that they are
              white.
            </DisclosureContent>
          </Disclosure>
        </AIChatMessageBody>
      </Box>
      <Heading as="h2" variant="heading20">
        Without enriched text [fullscreen variant]:
      </Heading>

      <Box>
        <AIChatMessageBodyTypeWriter variant="fullScreen">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendiiure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit
        </AIChatMessageBodyTypeWriter>
      </Box>
    </Box>
  );
};
