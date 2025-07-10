import { Anchor } from "@twilio-paste/anchor";
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Box } from "@twilio-paste/box";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/breadcrumb";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { ChatComposer, ChatComposerActionGroup, ChatComposerContainer } from "@twilio-paste/chat-composer";
import { Checkbox } from "@twilio-paste/checkbox";
import { CustomizationProvider } from "@twilio-paste/customization";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHead,
  DataGridHeader,
  DataGridRow,
} from "@twilio-paste/data-grid";
import { DetailText } from "@twilio-paste/detail-text";
import { FormPill, FormPillGroup, useFormPillState } from "@twilio-paste/form-pill-group";
import { Heading } from "@twilio-paste/heading";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { CommunityIcon } from "@twilio-paste/icons/esm/CommunityIcon";
import { CopyIcon } from "@twilio-paste/icons/esm/CopyIcon";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { RefreshIcon } from "@twilio-paste/icons/esm/RefreshIcon";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import { ThumbsDownIcon } from "@twilio-paste/icons/esm/ThumbsDownIcon";
import { ThumbsUpIcon } from "@twilio-paste/icons/esm/ThumbsUpIcon";
import { UnsortedIcon } from "@twilio-paste/icons/esm/UnsortedIcon";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import {
  PageHeader,
  PageHeaderActions,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderParagraph,
  PageHeaderSetting,
} from "@twilio-paste/page-header";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import {
  SidePanel,
  SidePanelBody,
  SidePanelContainer,
  SidePanelFooter,
  SidePanelHeader,
  SidePanelPushContentWrapper,
} from "@twilio-paste/side-panel";
import {
  SummaryDetail,
  SummaryDetailContent,
  SummaryDetailHeading,
  SummaryDetailHeadingContent,
  SummaryDetailToggleButton,
} from "@twilio-paste/summary-detail";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { ArrowBackIcon } from "@twilio-paste/icons/esm/ArrowBackIcon";
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

export const ExampleAIChatLogSidePanel = (): React.ReactNode => {
  const searchInput = useUID();
  const pillState = useFormPillState();
  const [isOpen, setIsOpen] = React.useState(true);
  const [showSource, setShowSource] = React.useState(false);

  return (
    <SidePanelContainer
      isOpen={isOpen}
      setIsOpen={(e) => {
        setIsOpen(e);
        setShowSource(false);
      }}
    >
      <SidePanel label="intelligent assistant ai bot side panel">
        <SidePanelHeader>
          <Box display="flex" alignItems="center" columnGap="space30">
            {showSource ? (
              <Button variant="secondary_icon" size="reset" onClick={() => setShowSource(false)}>
                <ArrowBackIcon decorative={false} title="Go back" size="sizeIcon50" />
              </Button>
            ) : null}

            <Heading as="h3" variant="heading30" marginBottom="space0">
              {showSource ? "Sources" : "Assistant"}
            </Heading>
          </Box>
        </SidePanelHeader>
        <SidePanelBody>
          <Box width="100%">
            {showSource ? (
              <Box display="flex" flexDirection="column" rowGap="space50">
                <AIChatMessageSourceLink number="1" url="#">
                  Source title
                </AIChatMessageSourceLink>
                <AIChatMessageSourceLink number="2" url="#">
                  Source title
                </AIChatMessageSourceLink>
                <AIChatMessageSourceLink number="3" url="#">
                  Source title
                </AIChatMessageSourceLink>
                <AIChatMessageSourceLink number="4" url="#">
                  Source title with a very long title that should wrap to the next line
                </AIChatMessageSourceLink>
              </Box>
            ) : (
              <AIChatLog>
                <AIChatMessage variant="bot">
                  <AIChatMessageAuthor aria-label="ai said">Good Bot</AIChatMessageAuthor>
                  <AIChatMessageBody>Hello, what can I help you with?</AIChatMessageBody>
                </AIChatMessage>
                <AIChatMessage variant="user">
                  <AIChatMessageBody>Hi! Can you help me with my user interface?</AIChatMessageBody>
                </AIChatMessage>
                <AIChatMessage variant="bot">
                  <AIChatMessageAuthor aria-label="ai said">Good Bot</AIChatMessageAuthor>
                  Of course! What do you need help with?
                </AIChatMessage>
                <AIChatMessage variant="bot">
                  <AIChatMessageAuthor aria-label="ai said">Good Bot</AIChatMessageAuthor>
                  <AIChatMessageBody>
                    I&apos;m happy to help with any questions you have about user interfaces, accessibility, or the
                    Twilio Paste design system. Just ask!
                  </AIChatMessageBody>
                </AIChatMessage>
                <AIChatMessage variant="user">
                  <AIChatMessageBody>My question is about the Switch component.</AIChatMessageBody>
                </AIChatMessage>
                <AIChatMessage variant="bot">
                  <AIChatMessageAuthor aria-label="ai said">Good Bot</AIChatMessageAuthor>
                  <AIChatMessageBody>
                    A <Anchor href="https://paste.twilio.design/components/switch">Switch</Anchor> is an interactive
                    binary control. What other information about the Paste Switch component can I help with?
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
                      <Box
                        display="flex"
                        flexDirection="column"
                        rowGap="space20"
                        marginBottom="space30"
                        fontSize="fontSize20"
                      >
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
                      <Button variant="secondary" onClick={() => setShowSource(true)}>
                        View all sources
                      </Button>
                    </SummaryDetailContent>
                  </SummaryDetail>
                </AIChatMessage>
              </AIChatLog>
            )}
          </Box>
        </SidePanelBody>
        {showSource ? null : (
          <SidePanelFooter variant="chat">
            <ChatComposerContainer variant="contained">
              <ChatComposer
                maxHeight="size10"
                config={{
                  namespace: "customer-chat",
                  onError: (e) => {
                    throw e;
                  },
                }}
                placeholder="Chat text"
                ariaLabel="A basic chat composer"
              />
              <ChatComposerActionGroup>
                <Button variant="secondary_icon" size="reset" onClick={() => setShowSource(true)}>
                  <AttachIcon decorative={false} title="attach files to the message" />
                </Button>
                <Button variant="primary_icon" size="reset">
                  <SendIcon decorative={false} title="Send" />
                </Button>
              </ChatComposerActionGroup>
            </ChatComposerContainer>
          </SidePanelFooter>
        )}
      </SidePanel>
      <SidePanelPushContentWrapper>
        <Box paddingX="space100" paddingTop="space130" paddingBottom="space160">
          <PageHeader size="default">
            <PageHeaderSetting>
              <Breadcrumb aria-label={useUID()}>
                <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
                <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
                <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              </Breadcrumb>
            </PageHeaderSetting>
            <PageHeaderDetails>
              <PageHeaderHeading>Objects</PageHeaderHeading>
              <PageHeaderActions>
                <ButtonGroup>
                  <Button variant="secondary" onClick={() => setIsOpen(!isOpen)}>
                    <ArtificialIntelligenceIcon decorative />
                    Ask assistant
                  </Button>
                </ButtonGroup>
              </PageHeaderActions>
              <PageHeaderParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
                faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
              </PageHeaderParagraph>
            </PageHeaderDetails>
          </PageHeader>
          <Box>
            <Box display="flex" flexDirection="column" rowGap="space50">
              <Box maxWidth="size30">
                <Label htmlFor={searchInput}>Search</Label>
                <Input id={searchInput} type="text" insertBefore={<SearchIcon decorative />} />
              </Box>
              <Box>
                <Heading as="h1" variant="heading50">
                  Filter
                </Heading>
                <FormPillGroup {...pillState} aria-label="filters" size="large" variant="tree">
                  <FormPill {...pillState} onSelect={() => {}}>
                    <PlusIcon decorative />
                    Label
                  </FormPill>
                  <FormPill {...pillState} onSelect={() => {}}>
                    <PlusIcon decorative />
                    Label
                  </FormPill>
                  <FormPill {...pillState} onSelect={() => {}}>
                    <PlusIcon decorative />
                    Label
                  </FormPill>
                </FormPillGroup>
              </Box>
              <Box marginBottom="space60" display="flex" justifyContent="space-between" alignItems="center">
                <DetailText marginTop="space0">
                  <Text as="span" color="colorTextWeak" fontSize="fontSize30">
                    3 results
                  </Text>
                </DetailText>
                <ButtonGroup>
                  <Button variant="secondary" size="small">
                    <ExportIcon decorative />
                    Export
                  </Button>
                  <Button variant="secondary" size="icon_small">
                    <MoreIcon decorative={false} title="menu with more options" />
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
            <DataGrid aria-label="label1">
              <DataGridHead>
                <DataGridRow>
                  <DataGridHeader width="52px">
                    <Checkbox>
                      <ScreenReaderOnly>label</ScreenReaderOnly>
                    </Checkbox>
                  </DataGridHeader>
                  <DataGridHeader>
                    <Box display="flex" columnGap="space20">
                      Header
                      <UnsortedIcon decorative={false} title="sort column" />
                    </Box>
                  </DataGridHeader>
                  <DataGridHeader>
                    <Box display="flex" columnGap="space20">
                      Header
                      <UnsortedIcon decorative={false} title="sort column" />
                    </Box>
                  </DataGridHeader>
                  <DataGridHeader>
                    <Box display="flex" columnGap="space20">
                      Header
                      <UnsortedIcon decorative={false} title="sort column" />
                    </Box>
                  </DataGridHeader>
                  <DataGridHeader>
                    <Box display="flex" columnGap="space20" justifyContent="flex-end">
                      Header
                      <UnsortedIcon decorative={false} title="sort column" />
                    </Box>
                  </DataGridHeader>
                </DataGridRow>
              </DataGridHead>
              <DataGridBody>
                <DataGridRow>
                  <DataGridCell>
                    <Checkbox>
                      <ScreenReaderOnly>label</ScreenReaderOnly>
                    </Checkbox>
                  </DataGridCell>
                  <DataGridCell>
                    <Anchor href="#">Anchor</Anchor>
                  </DataGridCell>
                  <DataGridCell>Content</DataGridCell>
                  <DataGridCell>Content</DataGridCell>
                  <DataGridCell textAlign="right">Content</DataGridCell>
                </DataGridRow>
                <DataGridRow>
                  <DataGridCell>
                    <Checkbox>
                      <ScreenReaderOnly>label</ScreenReaderOnly>
                    </Checkbox>
                  </DataGridCell>
                  <DataGridCell>
                    <Anchor href="#">Anchor</Anchor>
                  </DataGridCell>
                  <DataGridCell>Content</DataGridCell>
                  <DataGridCell>Content</DataGridCell>
                  <DataGridCell textAlign="right">Content</DataGridCell>
                </DataGridRow>
                <DataGridRow>
                  <DataGridCell>
                    <Checkbox>
                      <ScreenReaderOnly>label</ScreenReaderOnly>
                    </Checkbox>
                  </DataGridCell>
                  <DataGridCell>
                    <Anchor href="#">Anchor</Anchor>
                  </DataGridCell>
                  <DataGridCell>Content</DataGridCell>
                  <DataGridCell>Content</DataGridCell>
                  <DataGridCell textAlign="right">Content</DataGridCell>
                </DataGridRow>
              </DataGridBody>
            </DataGrid>
          </Box>
        </Box>
      </SidePanelPushContentWrapper>
    </SidePanelContainer>
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
