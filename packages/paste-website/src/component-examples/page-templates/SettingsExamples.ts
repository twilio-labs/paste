export const FullSettingsExample = `
<Box
  paddingX="space100"
  paddingTop="space130"
  paddingBottom="space160"
  display="flex"
  flexDirection="column"
  rowGap="space130"
  maxWidth="size90"
>
  <Box display="flex" flexDirection="column">
    <Box display="flex" rowGap="space30" marginBottom="space30">
      <Breadcrumb aria-label={useUID()}>
        <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </Box>
    <Box>
      <Heading as="h4" variant="heading10" marginBottom="space0">
        Billing settings
      </Heading>
    </Box>
  </Box>
  <Box>
    <InPageNavigation aria-label={useUID()}>
      <InPageNavigationItem href="#invoicing">Invoicing</InPageNavigationItem>
      <InPageNavigationItem href="#service-address" currentPage>
        Service address
      </InPageNavigationItem>
      <InPageNavigationItem href="#tax-information">Tax information</InPageNavigationItem>
    </InPageNavigation>
    <Form maxWidth="size70">
      <Box display="flex" flexDirection="column">
        <Heading as="h5" variant="heading20">
          Service address
        </Heading>
        <Paragraph marginBottom="space0">
          This information will be used for taxation purposes. For US customers, this is your service address. For
          international customers, this is your permanent place of establishment (e.g. head office).
        </Paragraph>
      </Box>
      <FormControl>
        <Label htmlFor={input1}>Country</Label>
        <Input type="text" id={input1} name="input1" />
      </FormControl>
      <FormControl>
        <Label htmlFor={input2}>Address line 1</Label>
        <Input type="text" id={input2} name="input2" />
      </FormControl>
      <FormControl>
        <Label htmlFor={input3}>Address line 2 (optional)</Label>
        <Input type="text" id={input3} name="input3" />
      </FormControl>
      <FormControl>
        <Label htmlFor={input4}>City</Label>
        <Input type="text" id={input4} name="input4" />
      </FormControl>
      <FormControl>
        <Label htmlFor={input5}>State</Label>
        <Input type="text" id={input5} name="input5" />
      </FormControl>
      <FormControl>
        <Label htmlFor={input6}>Zipcode</Label>
        <Input type="text" id={input6} name="input6" />
      </FormControl>
      <FormActions>
        <Button variant="primary">Save changes</Button>
      </FormActions>
    </Form>
  </Box>
</Box>`.trim();

export const SettingsOverviewExample = `
<Box display="flex" width="100%" justifyContent="center">
  <Box
    paddingTop="space130"
    paddingBottom="space160"
    display="flex"
    flexDirection="column"
    rowGap="space130"
    maxWidth="size90"
  >
    <Box display="flex" flexDirection="column">
      <Box display="flex" rowGap="space30" marginBottom="space30">
        <Breadcrumb aria-label={useUID()}>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box>
        <Heading as="h4" variant="heading10">
          Welcome, Dena
        </Heading>
        <Paragraph marginBottom="space0">
          View and manage your user settings, security, and preferences here.
        </Paragraph>
      </Box>
    </Box>
    <Box>
      <Grid vertical gutter="space40">
        <Column padding="space0">
          <Grid gutter="space40" equalColumnHeights>
            <Column span={6}>
              <Card padding="space100">
                <Heading as="h5" variant="heading20">
                  Personal information
                </Heading>
                <DescriptionList>
                  <DescriptionListSet>
                    <DescriptionListTerm>Email address</DescriptionListTerm>
                    <DescriptionListDetails>dena.doe@owl.com</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Full name</DescriptionListTerm>
                    <DescriptionListDetails>Dena Doe</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>User SID</DescriptionListTerm>
                    <DescriptionListDetails>123454353SDASDFFSDS</DescriptionListDetails>
                  </DescriptionListSet>
                </DescriptionList>
                <Button variant="secondary">
                  <EditIcon decorative />
                  Edit
                </Button>
              </Card>
            </Column>
            <Column span={6}>
              <Card padding="space100">
                <Heading as="h5" variant="heading20">
                  Two-factor authentication (2FA)
                </Heading>
                <DescriptionList>
                  <DescriptionListSet>
                    <DescriptionListTerm>Phone number</DescriptionListTerm>
                    <DescriptionListDetails>+1 (123) 123-1234</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Default 2FA method</DescriptionListTerm>
                    <DescriptionListDetails>Text message (SMS)</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Alternative 2FA method</DescriptionListTerm>
                    <DescriptionListDetails>Authenticator app</DescriptionListDetails>
                  </DescriptionListSet>
                </DescriptionList>
                <Button variant="secondary">
                  <EditIcon decorative />
                  Edit
                </Button>
              </Card>
            </Column>
          </Grid>
        </Column>
        <Column>
          <Card padding="space100">
            <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Box display="flex" flexDirection="row">
                <LockIcon decorative size="sizeIcon70" color="colorTextIcon" />
                <Heading as="h5" variant="heading20" marginBottom="space0">
                  Password
                </Heading>
              </Box>
              <Button variant="secondary">Reset password</Button>
            </Box>
          </Card>
        </Column>
      </Grid>
    </Box>
  </Box>
</Box>`.trim();
