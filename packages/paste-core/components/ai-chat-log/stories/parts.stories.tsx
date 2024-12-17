// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/disclosure";
import { Heading } from "@twilio-paste/heading";
import { CopyIcon } from "@twilio-paste/icons/esm/CopyIcon";
import { RefreshIcon } from "@twilio-paste/icons/esm/RefreshIcon";
import { ThumbsDownIcon } from "@twilio-paste/icons/esm/ThumbsDownIcon";
import { ThumbsUpIcon } from "@twilio-paste/icons/esm/ThumbsUpIcon";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { InlineCode } from "@twilio-paste/inline-code";
import { ListItem, UnorderedList } from "@twilio-paste/list";
import { Paragraph } from "@twilio-paste/paragraph";
import * as React from "react";

import {
  AIChatLog,
  AIChatMessage,
  AIChatMessageActionCard,
  AIChatMessageActionGroup,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageBodyTypeWriter,
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
      <AIChatMessage variant="user">
        <AIChatMessageBody size="default">
          Use <InlineCode>size=&quot;default&quot;</InlineCode> when the AI Chat Log is inside a small container.
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage variant="user">
        <AIChatMessageBody size="fullScreen">
          Use <InlineCode>size=&quot;fullScreen&quot;</InlineCode> when the AI Chat Log is a full screen experience.
        </AIChatMessageBody>
      </AIChatMessage>
    </AIChatLog>
  );
};

export const AIMessageBodyWithParagraphs = (): React.ReactNode => {
  return (
    <AIChatLog>
      <AIChatMessage variant="user">
        <AIChatMessageBody size="default">
          <p>
            Use <InlineCode>size=&quot;default&quot;</InlineCode> when the AI Chat Log is inside a small container.
          </p>
          <p>Second paragraph within AI Chat Message Body.</p>
        </AIChatMessageBody>
      </AIChatMessage>

      <AIChatMessage variant="user">
        <AIChatMessageBody size="fullScreen">
          <p>
            Use <InlineCode>size=&quot;fullScreen&quot;</InlineCode> when the AI Chat Log is a full screen experience.
          </p>
          <p>Second paragraph within AI Chat Message Body.</p>
        </AIChatMessageBody>
      </AIChatMessage>
    </AIChatLog>
  );
};

export const AIMessageLoading = (): React.ReactNode => {
  return (
    <AIChatLog>
      <AIChatMessage variant="user">
        <AIChatMessageBody>
          <p>Pssst! The three rows have dynamic widths. Refresh to see it in action!</p>
          <AIChatMessageLoading />
        </AIChatMessageBody>
      </AIChatMessage>
    </AIChatLog>
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
      <AIChatLog>
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
      </AIChatLog>
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
  );
};

export const FullAIMessage = (): React.ReactNode => {
  const [liked, setLiked] = React.useState(false);
  const [disliked, setDisliked] = React.useState(false);
  return (
    <AIChatLog>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendiiure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
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
    </AIChatLog>
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
          <Paragraph>
            <span style={{ fontWeight: 600 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span> Deserunt
            delectus fuga, necessitatibus eligendiiure adipisci facilis exercitationem officiis dolorem laborum, ex
            fugiat quisquam itaque, earum sit <a href="https://google.com">nesciunt impedit repellat assumenda.</a> new
            text,{" "}
            <Anchor showExternal href="https://google.com">
              434324
            </Anchor>
          </Paragraph>
          <UnorderedList>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
          </UnorderedList>
          <Disclosure visible>
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
        </AIChatMessageBodyTypeWriter>
        <br />
        <AIChatMessageBody>
          
        </AIChatMessageBody>
      </Box>
      {/* <Heading as="h2" variant="heading20">
        Without enriched text [fullscreen variant]:
      </Heading>

      <Box>
        <AIChatMessageBodyTypeWriter variant="fullScreen">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendiiure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit
        </AIChatMessageBodyTypeWriter>
        <UnorderedList>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </UnorderedList>
      </Box> */}
    </Box>
  );
};
