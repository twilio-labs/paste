export const DefaultWizardExample = `
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
    <Box display="flex" flexDirection="column">
      <Box display="flex" rowGap="space30" marginBottom="space130">
        <Breadcrumb aria-label={useUID()}>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Box>
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
      <Box marginTop="space70">
        <DetailText marginTop="space0">Wizard title</DetailText>
        <Heading as="h4" variant="heading10">
          Verb heading
        </Heading>
        <Paragraph marginBottom="space0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
          faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
        </Paragraph>
      </Box>
    </Box>
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
      <Box
        paddingTop="space130"
        paddingBottom="space160"
        display="flex"
        flexDirection="column"
        rowGap="space130"
        width="size70"
        maxWidth="size80"
      >
        <Box display="flex" flexDirection="column">
          <DetailText marginTop="space0">Add Reverse ETL destination</DetailText>
          <Heading as="h4" variant="heading10" marginBottom="space0">
            Set up destination
          </Heading>
        </Box>
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
  </SidebarPushContentWrapper>
</>`.trim();

export const DefaultWizardOrderedListExample = `
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
    <Box display="flex" flexDirection="column">
      <ProgressSteps>
        <ProgressStepComplete as="div">Select warehouse type</ProgressStepComplete>
        <ProgressStepSeparator />
        <ProgressStepCurrent as="div">Connect warehouse</ProgressStepCurrent>
        <ProgressStepSeparator />
        <ProgressStepIncomplete as="div">Set sync schedule</ProgressStepIncomplete>
        <ProgressStepSeparator />
        <ProgressStepIncomplete as="div">Set selective sync</ProgressStepIncomplete>
      </ProgressSteps>
      <Box marginTop="space70">
        <DetailText marginTop="space0">Add warehouse</DetailText>
        <Heading as="h4" variant="heading10">
          Connect Azure SQL data warehouse
        </Heading>
        <Paragraph marginBottom="space0">
          Follow the steps below to start setting up Azure SQL data warehouse.
        </Paragraph>
      </Box>
    </Box>
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
                Make sure you’re logging in with a user that has read and write permissions so that we can write to
                your database. If you’re unsure on how to get started, view our documentation on Azure SQL data
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
                Pick a name to help you identify this space in the warehouse, or use the default name provided. This
                can’t be changed once the warehouse is connected.
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
    <Box width="size70" marginTop="space130" display="flex" flexDirection="column" rowGap="space130">
      <Heading as="h5" variant="heading10" marginBottom="space0">
        Add warehouse
      </Heading>
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
    <Box display="flex" flexDirection="column">
      <Box display="flex" rowGap="space30" marginBottom="space130">
        <Breadcrumb aria-label={useUID()}>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Box>
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
      <Box marginTop="space70">
        <DetailText marginTop="space0">Wizard title</DetailText>
        <Heading as="h4" variant="heading10">
          Verb heading
        </Heading>
        <Paragraph marginBottom="space0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
          faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
        </Paragraph>
      </Box>
    </Box>
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
