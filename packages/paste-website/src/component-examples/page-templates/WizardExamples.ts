export const DefaultWizardExample = `
<Box display="flex" width="100%" justifyContent="center" paddingX="space10">
  <Box paddingTop="space130" paddingBottom="space160" width="size70" maxWidth="size80">
    <PageHeader>
      <PageHeaderSetting>
        <Breadcrumb aria-label={useUID()}>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <ProgressSteps>
          <ProgressStepCurrent as="div">Label</ProgressStepCurrent>
          <ProgressStepSeparator />
          <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
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
        <PageHeaderHeading>Verb heading</PageHeaderHeading>
        <PageHeaderParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
          faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
        </PageHeaderParagraph>
      </PageHeaderDetails>
    </PageHeader>
    <Box display="flex" flexDirection="column" rowGap="space130">
      <Box>
        <Form>
          <FormControl>
            <Label htmlFor={input1}>Label</Label>
            <Input type="text" id={input1} name="input1" />
          </FormControl>
          <FormControl>
            <Label htmlFor={input2}>Label</Label>
            <Input type="text" id={input2} name="input2" />
          </FormControl>
          <FormControl>
            <Label htmlFor={input3}>Label</Label>
            <Input type="text" id={input3} name="input3" />
          </FormControl>
          <FormControl>
            <Label htmlFor={input4}>Label</Label>
            <Input type="text" id={input4} name="input4" />
          </FormControl>
        </Form>
      </Box>
      <Box display="flex" justifyContent="end">
        <ButtonGroup>
          <Button variant="secondary">Cancel or Close</Button>
          <Button variant="primary">
            Next <ArrowForwardIcon decorative />
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  </Box>
</Box>`.trim();

export const DefaultWizardWithContentExample = `
<>
  <Sidebar
    variant="compact"
    collapsed={true}
    sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
    topbarSkipLinkID={topbarSkipLinkID}
    mainContentSkipLinkID={mainContentSkipLinkID}
    aria-label={sidebarId}
  >
    <div id={sidebarNavigationSkipLinkID} />
  </Sidebar>
  <SidebarPushContentWrapper collapsed={true} variant="compact">
    <Topbar id={topbarSkipLinkID}> </Topbar>
    <Box display="flex" width="100%" justifyContent="center" paddingX="space50" id={mainContentSkipLinkID}>
      <Box paddingTop="space130" paddingBottom="space160" width="size70" maxWidth="size80">
        <PageHeader>
          <PageHeaderDetails>
            <PageHeaderKeyword>Add Reverse ETL destination</PageHeaderKeyword>
            <PageHeaderHeading>Set up destination</PageHeaderHeading>
          </PageHeaderDetails>
        </PageHeader>
        <Box display="flex" flexDirection="column" rowGap="space130">
          <Box>
            <Form>
              <FormControl>
                <Label htmlFor={input1}>Destination name</Label>
                <Input type="text" id={input1} name="input1" />
                <HelpText>
                  Identifies this destination within your organization and typically includes the business unit,
                  geographic region, or environment. Example: Google Analytics North America Prod.
                </HelpText>
              </FormControl>
            </Form>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Button variant="secondary">
              <ArrowBackIcon decorative />
              Back
            </Button>
            <ButtonGroup>
              <Button variant="secondary">Cancel or Close</Button>
              <Button variant="primary">Create destination</Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  </SidebarPushContentWrapper>
</>`.trim();

export const DefaultWizardOrderedListExample = `
<Box display="flex" width="100%" justifyContent="center" paddingX="space10">
  <Box paddingTop="space130" paddingBottom="space160" width="size70" maxWidth="size80">
    <PageHeader>
      <PageHeaderSetting>
        <ProgressSteps>
          <ProgressStepComplete as="div">Select warehouse type</ProgressStepComplete>
          <ProgressStepSeparator />
          <ProgressStepCurrent as="div">Connect warehouse</ProgressStepCurrent>
          <ProgressStepSeparator />
          <ProgressStepIncomplete as="div">Set sync schedule</ProgressStepIncomplete>
          <ProgressStepSeparator />
          <ProgressStepIncomplete as="div">Set selective sync</ProgressStepIncomplete>
        </ProgressSteps>
      </PageHeaderSetting>
      <PageHeaderDetails>
        <PageHeaderKeyword>Add warehouse</PageHeaderKeyword>
        <PageHeaderHeading>Connect Azure SQL data warehouse</PageHeaderHeading>
        <PageHeaderParagraph>
          Follow the steps below to start setting up Azure SQL data warehouse.
        </PageHeaderParagraph>
      </PageHeaderDetails>
    </PageHeader>
    <Box display="flex" flexDirection="column" rowGap="space130">
      <Box display="flex" flexDirection="column" rowGap="space130" role="list">
        <Form>
          <Box display="flex" role="listitem">
            <Box width="size10" flexShrink={0}>
              <Text
                as="span"
                color="colorTextWeak"
                fontWeight="fontWeightSemibold"
                fontSize="fontSize60"
                lineHeight="lineHeight60"
              >
                1
              </Text>
            </Box>
            <Box width="100%">
              <FormSection>
                <FormSectionHeading variant="heading30">Configure your AzureSQL database</FormSectionHeading>
                <FormSectionDescription>
                  Make sure you’re logging in with a user that has read and write permissions so that we can write
                  to your database. If you’re unsure on how to get started, view our documentation on Azure SQL data
                  warehouse.
                </FormSectionDescription>
              </FormSection>
            </Box>
          </Box>
          <Box display="flex" role="listitem">
            <Box width="size10" flexShrink={0}>
              <Text
                as="span"
                color="colorTextWeak"
                fontWeight="fontWeightSemibold"
                fontSize="fontSize60"
                lineHeight="lineHeight60"
              >
                2
              </Text>
            </Box>
            <Box width="100%">
              <FormSection>
                <FormSectionHeading variant="heading30">Name your schema</FormSectionHeading>
                <FormSectionDescription>
                  Pick a name to help you identify this space in the warehouse, or use the default name provided.
                  This can’t be changed once the warehouse is connected.
                </FormSectionDescription>
                <FormControl>
                  <Label htmlFor={input1} required>
                    Name
                  </Label>
                  <Input type="text" id={input1} name="input1" required value="vik_test" />
                </FormControl>
              </FormSection>
            </Box>
          </Box>
          <Box display="flex" role="listitem">
            <Box width="size10" flexShrink={0}>
              <Text
                as="span"
                color="colorTextWeak"
                fontWeight="fontWeightSemibold"
                fontSize="fontSize60"
                lineHeight="lineHeight60"
              >
                3
              </Text>
            </Box>
            <Box width="100%">
              <FormSection>
                <FormSectionHeading variant="heading30">Enter your credentials</FormSectionHeading>
                <FormSectionDescription>Copy and paste these credentials from AzureSQL.</FormSectionDescription>
                <FormControl>
                  <Label htmlFor={input2}>Server name</Label>
                  <Input type="text" id={input2} name="input2" />
                </FormControl>
                <FormControl>
                  <Label htmlFor={input3}>Database</Label>
                  <Input type="text" id={input3} name="input3" />
                </FormControl>
                <FormControl>
                  <Label htmlFor={input4}>User</Label>
                  <Input type="text" id={input4} name="input4" />
                </FormControl>
                <FormControl>
                  <Label htmlFor={input5}>Password</Label>
                  <Input type="text" id={input5} name="input5" />
                </FormControl>
              </FormSection>
            </Box>
          </Box>
          <Box display="flex" role="listitem">
            <Box width="size10" flexShrink={0}>
              <Text
                as="span"
                color="colorTextWeak"
                fontWeight="fontWeightSemibold"
                fontSize="fontSize60"
                lineHeight="lineHeight60"
              >
                4
              </Text>
            </Box>
            <Box width="100%">
              <FormSection>
                <FormSectionHeading variant="heading30" marginBottom="space0">
                  Test connection
                </FormSectionHeading>
                <Box>
                  <Button variant="primary">Test warehouse connection</Button>
                </Box>
              </FormSection>
            </Box>
          </Box>
        </Form>
      </Box>
      <Box>
        <Separator orientation="horizontal" />
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="space40"
          marginTop="space50"
          alignItems="center"
        >
          <Button variant="secondary">
            <ArrowBackIcon decorative />
            Back
          </Button>
          <Box display="flex" columnGap="space40" alignItems="center">
            <Paragraph marginBottom="space0">Test your warehouse connection first.</Paragraph>
            <Button variant="primary" disabled>
              Next <ArrowForwardIcon decorative />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
</Box>
`.trim();

export const DefaultWizardOrderedListExampleRender = `
const App = () => {
  const input1 = useUID();
  const input2 = useUID();
  const input3 = useUID();
  const input4 = useUID();
  const input5 = useUID();
  return (
    ${DefaultWizardOrderedListExample}
  );
}

render(
  <App />
)
`.trim();

export const WizardFooterOptionsExample = `
<Box
  display="flex"
  flexDirection="column"
  width="100%"
  maxWidth="size70"
  paddingY="space150"
  paddingX="space100"
  rowGap="space200"
  >
  <Box display="flex" width="100%" flexDirection="column" rowGap="space50">
    <Separator orientation="horizontal" />
    <Box display="flex" justifyContent="space-between">
      <Button variant="secondary">
        <ArrowBackIcon decorative />
        Back
      </Button>
      <ButtonGroup>
        <Button variant="secondary">Cancel or close</Button>
        <Button variant="primary">
          Next <ArrowForwardIcon decorative />
        </Button>
      </ButtonGroup>
    </Box>
  </Box>
  <Box>
    <Box display="flex" justifyContent="space-between">
      <Button variant="secondary">
        <ArrowBackIcon decorative />
        Back
      </Button>
      <Button variant="primary">
        Next <ArrowForwardIcon decorative />
      </Button>
    </Box>
  </Box>
</Box>`.trim();

export const WizardFullPageExample = `
<Box paddingBottom="space50">
  <Topbar id={useUID()}>
    <TopbarActions justify="start">
      <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
        Entities: Add warehouse
      </Text>
    </TopbarActions>
    <TopbarActions justify="end">
      <Button variant="secondary">Cancel or close</Button>
    </TopbarActions>
  </Topbar>
  <Box width="100%" display="flex" justifyContent="center">
    <Box width="size70" marginTop="space130">
      <PageHeader>
        <PageHeaderDetails>
          <PageHeaderHeading>Add warehouse</PageHeaderHeading>
        </PageHeaderDetails>
      </PageHeader>
      <Box display="flex" flexDirection="column" rowGap="space130">
        <VisualPickerRadioGroup
          value={value}
          legend="Select warehouse type"
          onChange={(newValue) => {
            setValue(newValue);
          }}
          name="warehouse type"
        >
          <VisualPickerRadio labelText="Snowflake" value="snowflake">
            Snowflake
          </VisualPickerRadio>
          <VisualPickerRadio labelText="Redshift" value="redshift">
            Redshift
          </VisualPickerRadio>
          <VisualPickerRadio labelText="BigQuery" value="bigquery">
            BigQuery
          </VisualPickerRadio>
        </VisualPickerRadioGroup>
        <Box display="flex" justifyContent="flex-end">
          <ButtonGroup>
            <Button variant="secondary">Cancel or close</Button>
            <Button variant="primary">
              Next <ArrowForwardIcon decorative />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  </Box>
</Box>`.trim();

export const WizardDefaultHeaderWithProgressStepsExample = `
<Box display="flex" width="100%" justifyContent="center" paddingX="space10">
  <Box
    paddingTop="space130"
    paddingBottom="space160"
    display="flex"
    flexDirection="column"
    rowGap="space130"
    width="size70"
    maxWidth="size80"
  >
    <PageHeader>
      <PageHeaderSetting>
        <Breadcrumb aria-label={useUID()}>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <ProgressSteps>
          <ProgressStepCurrent as="div">Label</ProgressStepCurrent>
          <ProgressStepSeparator />
          <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
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
        <PageHeaderHeading>Verb heading</PageHeaderHeading>
        <PageHeaderParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
          faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
        </PageHeaderParagraph>
      </PageHeaderDetails>
    </PageHeader>
  </Box>
</Box>
`.trim();

export const WizardFullPageHeaderWithProgressStepsExample = `
<Box paddingBottom="space50">
  <Topbar id={useUID()}>
    <TopbarActions justify="start">
      <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
        Wizard title
      </Text>
    </TopbarActions>
    <TopbarActions justify="center">
      <ProgressSteps>
        <ProgressStepComplete as="div">Label</ProgressStepComplete>
        <ProgressStepSeparator />
        <ProgressStepCurrent as="div">Label</ProgressStepCurrent>
        <ProgressStepSeparator />
        <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
      </ProgressSteps>
    </TopbarActions>
    <TopbarActions justify="end">
      <Button variant="secondary">Cancel or close</Button>
    </TopbarActions>
  </Topbar>
</Box>
`.trim();
