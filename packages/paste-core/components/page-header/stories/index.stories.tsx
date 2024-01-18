// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Anchor } from "@twilio-paste/anchor";
import { Avatar } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/breadcrumb";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { CustomizationProvider } from "@twilio-paste/customization";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { InPageNavigation, InPageNavigationItem } from "@twilio-paste/in-page-navigation";
import {
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepIncomplete,
  ProgressStepSeparator,
  ProgressSteps,
} from "@twilio-paste/progress-steps";
import { Separator } from "@twilio-paste/separator";
import { StatusBadge } from "@twilio-paste/status";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import {
  PageHeader,
  PageHeaderActions,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderInPageNavigation,
  PageHeaderKeyword,
  PageHeaderMeta,
  PageHeaderParagraph,
  PageHeaderPrefix,
  PageHeaderSeparator,
  PageHeaderSetting,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Page Header",
  component: PageHeader,
};

export const Default = (): React.ReactElement => {
  return (
    <PageHeader size="default">
      <PageHeaderSetting>
        <Breadcrumb>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </PageHeaderSetting>
      <PageHeaderDetails>
        <PageHeaderKeyword>Wizard title</PageHeaderKeyword>
        <PageHeaderPrefix>
          <Avatar size="sizeIcon90" name="Avatar Name" />
        </PageHeaderPrefix>
        <PageHeaderHeading>Page title</PageHeaderHeading>
        <PageHeaderActions>
          <ButtonGroup>
            <Button variant="secondary">Action</Button>
            <Button variant="secondary">Action</Button>
          </ButtonGroup>
        </PageHeaderActions>
        <PageHeaderMeta>
          <Badge variant="success" as="span">
            Badge
          </Badge>
          Meta
          <Anchor href="#">Meta</Anchor>
        </PageHeaderMeta>
        <PageHeaderParagraph>Paragraph text</PageHeaderParagraph>
      </PageHeaderDetails>
      <PageHeaderInPageNavigation>
        <InPageNavigation aria-label="get started">
          <InPageNavigationItem href="#" currentPage>
            Label
          </InPageNavigationItem>
          <InPageNavigationItem href="#">Label</InPageNavigationItem>
          <InPageNavigationItem href="#">Label</InPageNavigationItem>
        </InPageNavigation>
      </PageHeaderInPageNavigation>
    </PageHeader>
  );
};

export const SeparatorVersusNav = (): React.ReactElement => {
  return (
    <Box display="flex" columnGap="space200">
      <Box width="size70" backgroundColor="colorBackground" height="min-content">
        <PageHeader size="default">
          <PageHeaderSetting>
            <Breadcrumb>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </PageHeaderSetting>
          <PageHeaderDetails>
            <PageHeaderKeyword>Wizard title</PageHeaderKeyword>
            <PageHeaderPrefix>
              <Avatar size="sizeIcon90" name="Avatar Name" />
            </PageHeaderPrefix>
            <PageHeaderHeading>Page title</PageHeaderHeading>
            <PageHeaderActions>
              <Button variant="secondary">Action</Button>
            </PageHeaderActions>
            <PageHeaderMeta>
              <Badge variant="success" as="span">
                Badge
              </Badge>
              Meta
              <Anchor href="#">Meta</Anchor>
            </PageHeaderMeta>
            <PageHeaderParagraph>Paragraph text</PageHeaderParagraph>
          </PageHeaderDetails>
          <PageHeaderSeparator>
            <Separator orientation="horizontal" />
          </PageHeaderSeparator>
        </PageHeader>
      </Box>
      <Box width="size70" backgroundColor="colorBackground" height="min-content">
        <PageHeader size="default">
          <PageHeaderSetting>
            <Breadcrumb>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </PageHeaderSetting>
          <PageHeaderDetails>
            <PageHeaderKeyword>Wizard title</PageHeaderKeyword>
            <PageHeaderPrefix>
              <Avatar size="sizeIcon90" name="Avatar Name" />
            </PageHeaderPrefix>
            <PageHeaderHeading>Page title</PageHeaderHeading>
            <PageHeaderActions>
              <Button variant="secondary">Action</Button>
            </PageHeaderActions>
            <PageHeaderMeta>
              <Badge variant="success" as="span">
                Badge
              </Badge>
              Meta
              <Anchor href="#">Meta</Anchor>
            </PageHeaderMeta>
            <PageHeaderParagraph>Paragraph text</PageHeaderParagraph>
          </PageHeaderDetails>
          <PageHeaderInPageNavigation>
            <InPageNavigation aria-label="get started">
              <InPageNavigationItem href="#" currentPage>
                Label
              </InPageNavigationItem>
              <InPageNavigationItem href="#">Label</InPageNavigationItem>
              <InPageNavigationItem href="#">Label</InPageNavigationItem>
            </InPageNavigation>
          </PageHeaderInPageNavigation>
        </PageHeader>
      </Box>
    </Box>
  );
};

export const Compact = (): React.ReactElement => {
  return (
    <Box maxWidth="size50">
      <PageHeader size="compact">
        <PageHeaderDetails>
          <PageHeaderPrefix>
            <Avatar size="sizeIcon100" name="Avatar Name" />
          </PageHeaderPrefix>
          <PageHeaderHeading>Parker Smith</PageHeaderHeading>
          <PageHeaderMeta>
            Metadata <Anchor href="">Documentation</Anchor>
            <StatusBadge variant="ProcessDraft" as="span">
              Draft
            </StatusBadge>
            <Badge variant="error" as="span">
              Label
            </Badge>
            <Badge variant="neutral" as="span">
              Label
            </Badge>
            <Badge variant="neutral" as="span">
              Label
            </Badge>
          </PageHeaderMeta>
          <PageHeaderActions>
            <ButtonGroup>
              <Button variant="secondary" size="small">
                Edit
              </Button>
              <Button variant="secondary" size="small">
                <MoreIcon decorative={false} title="more menu" />
              </Button>
            </ButtonGroup>
          </PageHeaderActions>
          <PageHeaderParagraph>
            A Breadcrumb is text that shows navigation hierarchy and lets users navigate a nested path of pages.
          </PageHeaderParagraph>
        </PageHeaderDetails>
      </PageHeader>
    </Box>
  );
};

export const Wizard = (): React.ReactElement => {
  return (
    <Box maxWidth="size70">
      <PageHeader>
        <PageHeaderSetting>
          <Breadcrumb>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
          <ProgressSteps>
            <ProgressStepComplete as="div">Label</ProgressStepComplete>
            <ProgressStepSeparator />
            <ProgressStepCurrent as="div">Label</ProgressStepCurrent>
            <ProgressStepSeparator />
            <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
            <ProgressStepSeparator />
            <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
            <ProgressStepSeparator />
            <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
          </ProgressSteps>
        </PageHeaderSetting>
        <PageHeaderDetails>
          <PageHeaderKeyword>Wizard title</PageHeaderKeyword>
          <PageHeaderHeading>Heading</PageHeaderHeading>
          <PageHeaderParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
            faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
          </PageHeaderParagraph>
        </PageHeaderDetails>
      </PageHeader>
    </Box>
  );
};

export const Wrapped = (): React.ReactElement => {
  return (
    <PageHeader size="default">
      <PageHeaderSetting>
        <Breadcrumb>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </PageHeaderSetting>
      <PageHeaderDetails>
        <PageHeaderKeyword>Wizard title</PageHeaderKeyword>
        <PageHeaderPrefix>
          <Avatar size="sizeIcon90" variant="entity" name="Avatar Name" />
        </PageHeaderPrefix>
        <PageHeaderHeading>
          This is a very very very very very very very very l o n g headingheadingheadingheadingheading heading heading
          heading
        </PageHeaderHeading>
        <PageHeaderActions>
          <ButtonGroup>
            <Button variant="secondary">Action with a lot of text in the button Action Action Action Action</Button>
            <Button variant="secondary">Action</Button>
          </ButtonGroup>
        </PageHeaderActions>
        <PageHeaderMeta>
          <Badge variant="success" as="span">
            Badge
          </Badge>
          <Badge variant="neutral" as="span">
            Badge
          </Badge>
          <Badge variant="error" as="span">
            Badge
          </Badge>
          Meta, sooooooooooooooooooooo so so so so so so so so so so so much met
          <Anchor href="#">Meta</Anchor>
          <Badge variant="error" as="span">
            Badge but this one wraps
          </Badge>
        </PageHeaderMeta>
        <PageHeaderParagraph>
          Paragraph textParagraph textParagraph textParagraph textParagraph textParagraph textParagraph textParagraph
          textParagraph textParagraph textParagraph textParagraph textParagraph textParagraph textParagraph text
        </PageHeaderParagraph>
      </PageHeaderDetails>
      <PageHeaderInPageNavigation>
        <InPageNavigation aria-label="get started">
          <InPageNavigationItem href="#" currentPage>
            Label
          </InPageNavigationItem>
          <InPageNavigationItem href="#">Label</InPageNavigationItem>
          <InPageNavigationItem href="#">Label</InPageNavigationItem>
        </InPageNavigation>
      </PageHeaderInPageNavigation>
    </PageHeader>
  );
};

export const TwilioExamples = (): React.ReactElement => {
  return (
    <Box display="flex" flexDirection="column" rowGap="space150" maxWidth="size70">
      <PageHeader>
        <PageHeaderDetails>
          <PageHeaderPrefix>
            <Avatar size="sizeIcon90" variant="entity" name="Avatar Name" />
          </PageHeaderPrefix>
          <PageHeaderHeading>Overview</PageHeaderHeading>
          <PageHeaderMeta>
            <Anchor href="">Manage services</Anchor>
            <Anchor href="" showExternal>
              Functions quickstart
            </Anchor>
          </PageHeaderMeta>
          <PageHeaderParagraph>
            Twilio Functions enables you to create communication applications, hosted and deployed entirely on our cloud
            infrastructure. Write custom code with Twilio Functions and store files with Twilio Assets. <br />
            <br /> Each project you work on will be contained in a “Service”. A Service is an application container to
            store all your Functions and Assets, and used to manage deployments and separate environments. You will
            likely create a new Service for each new project you work on.
          </PageHeaderParagraph>
          <PageHeaderActions>
            <Button variant="primary">Create service</Button>
          </PageHeaderActions>
        </PageHeaderDetails>
      </PageHeader>
      <PageHeader>
        <PageHeaderDetails>
          <PageHeaderHeading>Super SIMs</PageHeaderHeading>
          <PageHeaderActions>
            <ButtonGroup>
              <Button variant="secondary">
                Register a SIM <ArrowForwardIcon decorative />
              </Button>
              <Button variant="primary">
                Order SIMs
                <ArrowForwardIcon decorative />
              </Button>
            </ButtonGroup>
          </PageHeaderActions>
        </PageHeaderDetails>
        <PageHeaderInPageNavigation>
          <InPageNavigation aria-label="nav">
            <InPageNavigationItem href="#" currentPage>
              SIMs
            </InPageNavigationItem>
            <InPageNavigationItem href="#">Bulk action history</InPageNavigationItem>
          </InPageNavigation>
        </PageHeaderInPageNavigation>
      </PageHeader>
      <PageHeader>
        <PageHeaderSetting>
          <Breadcrumb>
            <BreadcrumbItem href="#">Components</BreadcrumbItem>
          </Breadcrumb>
        </PageHeaderSetting>
        <PageHeaderDetails>
          <PageHeaderKeyword>
            <StatusBadge variant="ProcessDraft" as="span">
              Peer review pending
            </StatusBadge>
          </PageHeaderKeyword>
          <PageHeaderHeading>Data Grid</PageHeaderHeading>
          <PageHeaderMeta>
            Version 8.2.1 <Anchor href="">Github</Anchor> <Anchor href="">Storybook</Anchor>
          </PageHeaderMeta>
          <PageHeaderParagraph>
            A data grid is an interactive table used for working with a large collection of data in a scannable way.
          </PageHeaderParagraph>
        </PageHeaderDetails>
        <PageHeaderInPageNavigation>
          <InPageNavigation aria-label="nav">
            <InPageNavigationItem href="#" currentPage>
              Guidelines
            </InPageNavigationItem>
            <InPageNavigationItem href="#">API</InPageNavigationItem>
            <InPageNavigationItem href="#">Changelog</InPageNavigationItem>
          </InPageNavigation>
        </PageHeaderInPageNavigation>
      </PageHeader>
    </Box>
  );
};

export const Customized = (): React.ReactElement => {
  const theme = useTheme();
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        PAGE_HEADER: { backgroundColor: "colorBackgroundDecorative10Weakest", borderRadius: "borderRadius20" },
        PAGE_HEADER_SETTING: { marginBottom: "space0" },
        PAGE_HEADER_DETAILS: { marginX: "space100" },
        PAGE_HEADER_KEYWORD: { marginBottom: "space0" },
        PAGE_HEADER_PREFIX: { marginRight: "space0" },
        PAGE_HEADER_HEADING_WRAPPER: { borderStyle: "solid", borderWidth: "borderWidth10" },
        PAGE_HEADER_HEADING: { margin: "space30" },
        PAGE_HEADER_ACTIONS: { justifySelf: "center" },
        PAGE_HEADER_META: { columnGap: "space90" },
        PAGE_HEADER_PARAGRAPH_WRAPPER: { borderStyle: "solid", borderWidth: "borderWidth10" },
        PAGE_HEADER_PARAGRAPH: { backgroundColor: "colorBackgroundAvailable" },
        PAGE_HEADER_IN_PAGE_NAVIGATION: { marginX: "space100" },
      }}
    >
      <PageHeader size="default" data-testid="page_header">
        <PageHeaderSetting data-testid="page_header_setting">
          <Breadcrumb>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PageHeaderSetting>
        <PageHeaderDetails data-testid="page_header_details">
          <PageHeaderKeyword data-testid="page_header_keyword">Detail text</PageHeaderKeyword>
          <PageHeaderPrefix data-testid="page_header_prefix">
            <Avatar size="sizeIcon90" name="Avatar Name" />
          </PageHeaderPrefix>
          <PageHeaderHeading data-testid="page_header_heading">Page title</PageHeaderHeading>
          <PageHeaderActions data-testid="page_header_actions">
            <ButtonGroup>
              <Button variant="secondary">Action</Button>
              <Button variant="secondary">Action</Button>
            </ButtonGroup>
          </PageHeaderActions>
          <PageHeaderMeta data-testid="page_header_meta">
            <Badge variant="success" as="span">
              Badge
            </Badge>
            Meta
            <Anchor href="#">Meta</Anchor>
          </PageHeaderMeta>
          <PageHeaderParagraph data-testid="page_header_paragraph">Paragraph text</PageHeaderParagraph>
        </PageHeaderDetails>
        <PageHeaderInPageNavigation data-testid="page_header_in_page_navigation">
          <InPageNavigation aria-label="get started">
            <InPageNavigationItem href="#" currentPage>
              Label
            </InPageNavigationItem>
            <InPageNavigationItem href="#">Label</InPageNavigationItem>
            <InPageNavigationItem href="#">Label</InPageNavigationItem>
          </InPageNavigation>
        </PageHeaderInPageNavigation>
      </PageHeader>
    </CustomizationProvider>
  );
};
