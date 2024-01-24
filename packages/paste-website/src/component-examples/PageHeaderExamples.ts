export const defaultPageHeaderExample = `
const PageHeaderExample = () => {
  return (
    <PageHeader size="default">
      <PageHeaderSetting>
        <Breadcrumb>
          <BreadcrumbItem href="#">Manage billing</BreadcrumbItem>
        </Breadcrumb>
      </PageHeaderSetting>
      <PageHeaderDetails>
        <PageHeaderKeyword>
          <Badge as="span" variant="new">
            <NewIcon decorative />
            Beta
          </Badge>
        </PageHeaderKeyword>
        <PageHeaderHeading>Subscriptions</PageHeaderHeading>
        <PageHeaderActions>
          <ButtonGroup>
            <Button variant="primary">Add a subscription <ArrowForwardIcon decorative /></Button>
          </ButtonGroup>
        </PageHeaderActions>
        <PageHeaderParagraph>Manage your subscriptions here. Costs listed here may exclude taxes, fees, support fees, expert services costs, and certain other products.</PageHeaderParagraph>
      </PageHeaderDetails>
      <PageHeaderInPageNavigation>
        <InPageNavigation aria-label="get started">
          <InPageNavigationItem href="#" currentPage>
            Subscriptions
          </InPageNavigationItem>
          <InPageNavigationItem href="#">Recurring items</InPageNavigationItem>
        </InPageNavigation>
      </PageHeaderInPageNavigation>
    </PageHeader>
  );
};
render(
  <PageHeaderExample />
)
`.trim();

export const interruptedPageHeaderExample = `
const PageHeaderExample = () => {
  return (
    <PageHeader size="default">
      <PageHeaderSetting>
      <Anchor href="#" display="inline-flex" alignItems="center"><ArrowBackIcon decorative />Return to Flex</Anchor>
      </PageHeaderSetting>
      <PageHeaderDetails>
        <PageHeaderHeading>Getting started with Segment</PageHeaderHeading>
        <PageHeaderMeta><Anchor href="#">Download the help guide PDF</Anchor></PageHeaderMeta>
      </PageHeaderDetails>
    </PageHeader>
  );
};
render(
  <PageHeaderExample />
)
`.trim();

export const compactPageHeaderExample = `
const PageHeaderExample = () => {
  return (
    <Box maxWidth="size50" borderStyle="solid" padding="space50" borderWidth="borderWidth10" borderColor="colorBorderDecorative10Weaker" borderRadius="borderRadius20">
      <PageHeader size="compact">
        <PageHeaderDetails>
          <PageHeaderPrefix><Avatar name="parker smith" size="sizeIcon100" icon={UserIcon} /></PageHeaderPrefix>
          <PageHeaderHeading>Parker Smith</PageHeaderHeading>
          <PageHeaderActions>
            <ButtonGroup>
              <Button variant="secondary" size="small">Edit</Button>
              <Button variant="secondary" size="small"><MoreIcon decorative={false} title="more menu" /></Button>
            </ButtonGroup>
          </PageHeaderActions>
          <PageHeaderMeta>
            Customer since June 11, 2009
            <StatusBadge variant="ConnectivityAvailable">
              Online
            </StatusBadge>
          </PageHeaderMeta>
        </PageHeaderDetails>
        <PageHeaderInPageNavigation>
          <InPageNavigation aria-label="get started">
            <InPageNavigationItem href="#" currentPage>
              Customer details
            </InPageNavigationItem>
            <InPageNavigationItem href="#">Customer history</InPageNavigationItem>
          </InPageNavigation>
        </PageHeaderInPageNavigation>
      </PageHeader>
    </Box>
  );
};
render(
  <PageHeaderExample />
)
`.trim();

export const objectDetailsPageHeaderExample = `
const PageHeaderExample = () => {
  return (
    <PageHeader size="default">
      <PageHeaderSetting>
        <Breadcrumb>
          <BreadcrumbItem href="#">Voice</BreadcrumbItem>
          <BreadcrumbItem href="#">Calls</BreadcrumbItem>
        </Breadcrumb>
      </PageHeaderSetting>
      <PageHeaderDetails>
        <PageHeaderHeading>Call details</PageHeaderHeading>
        <PageHeaderActions>
            <Button variant="secondary">Give call quality feedback</Button>
        </PageHeaderActions>
      </PageHeaderDetails>
      <PageHeaderInPageNavigation>
        <InPageNavigation aria-label="get started">
          <InPageNavigationItem href="#" currentPage>
            Overview
          </InPageNavigationItem>
          <InPageNavigationItem href="#">Insights summary</InPageNavigationItem>
        </InPageNavigation>
      </PageHeaderInPageNavigation>
    </PageHeader>
  );
};
render(
  <PageHeaderExample />
)
`.trim();

export const objectsListPageHeaderExample = `
const PageHeaderExample = () => {
  return (
    <PageHeader size="default">
      <PageHeaderSetting>
        <Breadcrumb>
          <BreadcrumbItem href="#">Phone numbers</BreadcrumbItem>
          <BreadcrumbItem href="#">Manage</BreadcrumbItem>
        </Breadcrumb>
      </PageHeaderSetting>
      <PageHeaderDetails>
        <PageHeaderHeading>Verified caller IDs</PageHeaderHeading>
        <PageHeaderActions>
            <Button variant="primary">Add caller ID</Button>
        </PageHeaderActions>
        <PageHeaderParagraph>Use numbers you own as caller ID or the "To" number for outbound calls and messages. Phone numbers you buy from Twilio or port to Twilio can always be used as caller IDs.</PageHeaderParagraph>
      </PageHeaderDetails>
    </PageHeader>
  );
};
render(
  <PageHeaderExample />
)
`.trim();

export const settingsPageHeaderExample = `
const PageHeaderExample = () => {
  return (
    <PageHeader size="default">
      <PageHeaderSetting>
        <Breadcrumb>
          <BreadcrumbItem href="#">Phone numbers</BreadcrumbItem>
          <BreadcrumbItem href="#">Manage</BreadcrumbItem>
        </Breadcrumb>
      </PageHeaderSetting>
      <PageHeaderDetails>
        <PageHeaderHeading>Billing settings</PageHeaderHeading>
        <PageHeaderParagraph>Use numbers you own as caller ID or the "To" number for outbound calls and messages. Phone numbers you buy from Twilio or port to Twilio can always be used as caller IDs.</PageHeaderParagraph>
      </PageHeaderDetails>
      <PageHeaderInPageNavigation>
        <InPageNavigation aria-label="get started">
          <InPageNavigationItem href="#" currentPage>
            Invoicing
          </InPageNavigationItem>
          <InPageNavigationItem href="#">Service address</InPageNavigationItem>
          <InPageNavigationItem href="#">Tax information</InPageNavigationItem>
        </InPageNavigation>
      </PageHeaderInPageNavigation>
    </PageHeader>
  );
};
render(
  <PageHeaderExample />
)
`.trim();

export const wizardPageHeaderExample = `
const PageHeaderExample = () => {
  return (
    <PageHeader size="default">
      <PageHeaderSetting>
        <Breadcrumb>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <ProgressSteps>
          <ProgressStepComplete as="div">Select warehouse type</ProgressStepComplete>
          <ProgressStepSeparator />
          <ProgressStepCurrent as="div">Connect warehouse</ProgressStepCurrent>
          <ProgressStepSeparator />
          <ProgressStepIncomplete as="div">Set sync schedule</ProgressStepIncomplete>
        </ProgressSteps>
      </PageHeaderSetting>
      <PageHeaderDetails>
        <PageHeaderKeyword>Add warehouse</PageHeaderKeyword>
        <PageHeaderHeading>Connect Azure SQL data warehouse</PageHeaderHeading>
        <PageHeaderParagraph>Follow the steps below to start setting up Azure SQL data warehouse.</PageHeaderParagraph>
      </PageHeaderDetails>
    </PageHeader>
  );
};
render(
  <PageHeaderExample />
)
`.trim();
