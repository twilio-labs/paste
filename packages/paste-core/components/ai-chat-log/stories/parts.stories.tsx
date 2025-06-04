/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable import/no-extraneous-dependencies */
import { StoryFn } from "@storybook/react";
import { Anchor } from "@twilio-paste/anchor";
import { Blockquote, BlockquoteCitation, BlockquoteContent } from "@twilio-paste/blockquote/";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { Callout, CalloutHeading, CalloutText } from "@twilio-paste/callout";
import { CodeBlock, CodeBlockHeader, CodeBlockWrapper } from "@twilio-paste/code-block";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/disclosure";
import { Heading } from "@twilio-paste/heading";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import { CopyIcon } from "@twilio-paste/icons/esm/CopyIcon";
import { RefreshIcon } from "@twilio-paste/icons/esm/RefreshIcon";
import { ThumbsDownIcon } from "@twilio-paste/icons/esm/ThumbsDownIcon";
import { ThumbsUpIcon } from "@twilio-paste/icons/esm/ThumbsUpIcon";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { InlineCode } from "@twilio-paste/inline-code";
import { ListItem, UnorderedList } from "@twilio-paste/list";
import { Paragraph } from "@twilio-paste/paragraph";
import { Separator } from "@twilio-paste/separator";
import {
  SidePanel,
  SidePanelBody,
  SidePanelButton,
  SidePanelContainer,
  SidePanelHeader,
  SidePanelPushContentWrapper,
} from "@twilio-paste/side-panel";
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
      <AIChatMessage variant="user">
        <AIChatMessageBody>
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
        <AIChatMessageBody>
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
        <AIChatMessageBody animated>
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
        <AIChatMessageBody animated>
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

const rubyCode = `#!/usr/bin/ruby

# Import the library. This is a really really long line that should be wrapped.
require 'tk'

# Root window.
root = TkRoot.new  {
  title 'Push Me'
  background '#111188'
}

# Add a label to the root window.
lab = TkLabel.new(root) {
  text "Hey there,\nPush a button!"
  background '#3333AA'
  foreground '#CCCCFF'
}
`;

export const MessageBodyTypeWriterEnrichedText = (): React.ReactNode => {
  return (
    <Box>
      <Heading as="h2" variant="heading20">
        With enriched text
      </Heading>
      <Box marginBottom="space60">
        <AIChatMessageBody animated size="fullScreen">
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
        </AIChatMessageBody>
      </Box>
    </Box>
  );
};

export const MessageBodyTypeWriterComplexComponents = (): React.ReactNode => {
  return (
    <Box>
      <Heading as="h2" variant="heading20">
        With complex components
      </Heading>
      <Box marginBottom="space60">
        <AIChatMessageBody animated>
          <Paragraph>
            <Box display="flex">
              This <ThumbsUpIcon decorative />
              is text that contains <ThumbsDownIcon decorative /> icons between elements
            </Box>
          </Paragraph>
          <Paragraph>
            <Blockquote url="#">
              <BlockquoteContent>
                With AI-driven products, the design process is no longer just about aesthetics. It’s about designing for
                the human experience as a whole.
              </BlockquoteContent>
              <BlockquoteCitation author="Google" source="People + AI Guidebook" />
            </Blockquote>
          </Paragraph>
          <Paragraph>
            <Callout variant="neutral">
              <CalloutHeading as="h2">Heads up!</CalloutHeading>
              <CalloutText>This is some information you need to know.</CalloutText>
            </Callout>
          </Paragraph>
          <Paragraph>
            <CodeBlockWrapper>
              <CodeBlockHeader>Build a button</CodeBlockHeader>
              <CodeBlock code={rubyCode} language="ruby" />
            </CodeBlockWrapper>
          </Paragraph>
          <Paragraph>
            <Disclosure visible>
              <DisclosureHeading as="h4" variant="heading40">
                Between the World and Me by Ta-Nehisi Coates
              </DisclosureHeading>
              <DisclosureContent>
                But race is the child of racism, not the father. And the process of naming “the people” has never been a
                matter of genealogy and physiognomy so much as one of hierarchy. Difference in hue and hair is old. But
                the belief in the preeminence of hue and hair, the notion that these factors can correctly organize a
                society and that they signify deeper attributes, which are indelible—this is the new idea at the heart
                of these new people who have been brought up hopelessly, tragically, deceitfully, to believe that they
                are white.
              </DisclosureContent>
            </Disclosure>
          </Paragraph>
        </AIChatMessageBody>
      </Box>
    </Box>
  );
};

export const MessageBodyTypeWriterFullscreen = (): React.ReactNode => {
  return (
    <AIChatMessageBody animated size="fullScreen">
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
    </AIChatMessageBody>
  );
};

export const MessageBodyTypeWriterDefaultSidePanel: StoryFn = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <SidePanelContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <SidePanel label="example side panel for speed">
        <SidePanelHeader>
          <ArtificialIntelligenceIcon decorative size="sizeIcon50" color="colorTextIcon" />
          <Heading as="h3" variant="heading30" marginBottom="space0">
            Assistant
          </Heading>
        </SidePanelHeader>
        <Separator orientation="horizontal" verticalSpacing="space0" />
        <SidePanelBody>
          <Box width="100%">
            <AIChatLog>
              <AIChatMessage variant="bot">
                <AIChatMessageAuthor aria-label="ai said">Good Bot</AIChatMessageAuthor>
                <AIChatMessageBody animated>
                  <span style={{ fontWeight: 600 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>{" "}
                  Deserunt delectus fuga, necessitatibus eligendiiure adipisci facilis exercitationem officiis dolorem
                  laborum, ex fugiat quisquam itaque, earum sit{" "}
                  <a href="https://google.com">nesciunt impedit repellat assumenda.</a> new text,{" "}
                  <Anchor showExternal href="https://google.com">
                    434324
                  </Anchor>
                  <UnorderedList>
                    <ListItem>Item 1</ListItem>
                    <ListItem>Item 2</ListItem>
                    <ListItem>Item 3</ListItem>
                  </UnorderedList>
                </AIChatMessageBody>
              </AIChatMessage>
            </AIChatLog>
          </Box>
        </SidePanelBody>
      </SidePanel>
      <SidePanelPushContentWrapper>
        <SidePanelButton variant="secondary" pressed={!isOpen}>
          Toggle Side Panel
        </SidePanelButton>
      </SidePanelPushContentWrapper>
    </SidePanelContainer>
  );
};
MessageBodyTypeWriterDefaultSidePanel.parameters = {
  padding: false,
  a11y: {
    config: {
      rules: [
        {
          /*
           * Using position="relative" on SidePanel causes it to overflow other themes in stacked and side-by-side views, and therefore fail color contrast checks based on SidePanelBody's content.
           * The DefaultVRT test below serves to test color contrast on the Side Panel component without this issue causing false failures.
           */
          id: "color-contrast",
          selector: "*:not(*)",
        },
      ],
    },
  },
};
