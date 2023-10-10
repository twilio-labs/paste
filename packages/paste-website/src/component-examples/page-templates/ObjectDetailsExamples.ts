export const FullObjectDetailsExample = `
<Box
  paddingX="space100"
  paddingTop="space130"
  paddingBottom="space160"
  display="flex"
  flexDirection="column"
  rowGap="space130"
>
  <Box display="flex" columnGap="space30" justifyContent="space-between" alignItems="flex-end">
    <Box>
      <Box display="flex" rowGap="space30" marginBottom="space30">
        <Breadcrumb aria-label={useUID()}>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box>
        <Heading as="h4" variant="heading10" marginBottom="space0">
          Object details
        </Heading>
      </Box>
    </Box>
    <Box marginBottom="space30">
      <Button variant="secondary">Label</Button>
    </Box>
  </Box>
  <Box display="flex" flexDirection="column">
    <InPageNavigation aria-label={useUID()}>
      <InPageNavigationItem href="#" currentPage>
        Nav item
      </InPageNavigationItem>
      <InPageNavigationItem href="#">Nav item</InPageNavigationItem>
      <InPageNavigationItem href="#">Nav item</InPageNavigationItem>
    </InPageNavigation>
    <Box display="flex" flexDirection="column" rowGap="space100">
      <Box>
        <Heading as="h5" variant="heading20">
          Heading
        </Heading>
        <Box display="flex" columnGap="space70" width="size80">
          <Box width="size40">
            <DescriptionList>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
            </DescriptionList>
          </Box>
          <Box width="size40">
            <DescriptionList>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
            </DescriptionList>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box display="flex" width="100%" justifyContent="space-between" alignItems="flex-start">
          <Heading as="h5" variant="heading20">
            Heading
          </Heading>
          <Button variant="secondary">Label</Button>
        </Box>
        <Box maxWidth="size80">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
            faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
          </Paragraph>
        </Box>
        <Table>
          <THead>
            <Tr>
              <Th>Header</Th>
              <Th>Header</Th>
              <Th>Header</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>Content</Td>
              <Td>Content</Td>
              <Td>Content</Td>
            </Tr>
            <Tr>
              <Td>Content</Td>
              <Td>Content</Td>
              <Td>Content</Td>
            </Tr>
            <Tr>
              <Td>Content</Td>
              <Td>Content</Td>
              <Td>Content</Td>
            </Tr>
          </TBody>
        </Table>
      </Box>
    </Box>
  </Box>
</Box>`.trim();

export const DefaultObjectDetailsExample = `
<Box
  paddingX="space100"
  paddingTop="space130"
  paddingBottom="space160"
  display="flex"
  flexDirection="column"
  rowGap="space130"
>
  <Box display="flex" columnGap="space30" justifyContent="space-between" alignItems="flex-end">
    <Box>
      <Box display="flex" rowGap="space30" marginBottom="space30">
        <Breadcrumb aria-label={useUID()}>
          <BreadcrumbItem href="#">Voice</BreadcrumbItem>
          <BreadcrumbItem href="#">Calls</BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box>
        <Heading as="h4" variant="heading10" marginBottom="space0">
          Call details
        </Heading>
      </Box>
    </Box>
    <Box marginBottom="space30">
      <Button variant="secondary">Give call quality feedback</Button>
    </Box>
  </Box>
  <Box display="flex" flexDirection="column">
    <InPageNavigation aria-label={useUID()}>
      <InPageNavigationItem href="#overview" currentPage>
        Overview
      </InPageNavigationItem>
      <InPageNavigationItem href="#insights-summary">Insights summary</InPageNavigationItem>
    </InPageNavigation>
    <Box display="flex" flexDirection="column" rowGap="space130">
      <Box>
        <Heading as="h5" variant="heading20">
          Properties
        </Heading>
        <Box display="flex" columnGap="space70" width="size80">
          <Box width="size40">
            <DescriptionList>
              <DescriptionListSet>
                <DescriptionListTerm>Message SID</DescriptionListTerm>
                <DescriptionListDetails>MG48n1d86b68737525hfd84w91dah0w3088n</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Message service</DescriptionListTerm>
                <DescriptionListDetails>
                  <Text as="span" fontStyle="italic" color="colorTextWeak">
                    Not available
                  </Text>
                </DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Created at</DescriptionListTerm>
                <DescriptionListDetails>13:42:57 PDT 2020-09-29</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>From</DescriptionListTerm>
                <DescriptionListDetails>(606) 609-4293</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>To</DescriptionListTerm>
                <DescriptionListDetails>(323) 754-2093</DescriptionListDetails>
              </DescriptionListSet>
            </DescriptionList>
          </Box>
          <Box width="size40">
            <DescriptionList>
              <DescriptionListSet>
                <DescriptionListTerm>Direction</DescriptionListTerm>
                <DescriptionListDetails>Incoming</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>API endpoint</DescriptionListTerm>
                <DescriptionListDetails>
                  <Text as="span" fontStyle="italic" color="colorTextWeak">
                    Not available
                  </Text>
                </DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Message segments</DescriptionListTerm>
                <DescriptionListDetails>1</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Encoding</DescriptionListTerm>
                <DescriptionListDetails>
                  <Text as="span" fontStyle="italic" color="colorTextWeak">
                    Not available
                  </Text>
                </DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>
                  <Box display="flex" height="space60" columnGap="space20">
                    Term
                    <Button variant="primary_icon" size="reset">
                      <InformationIcon decorative={false} title="what are terms?" />
                    </Button>
                  </Box>
                </DescriptionListTerm>
                <DescriptionListDetails>$0.0075</DescriptionListDetails>
              </DescriptionListSet>
            </DescriptionList>
          </Box>
        </Box>
        <DescriptionList>
          <DescriptionListSet>
            <DescriptionListTerm>Term</DescriptionListTerm>
            <DescriptionListDetails>
              <Box
                backgroundColor="colorBackground"
                maxWidth="size80"
                padding="space50"
                borderRadius="borderRadius20"
              >
                <Text as="span" fontFamily="fontFamilyCode">
                  Want to know what a day in the life of a Robotics Engineer is like? Join UAT tomorrow at 4PM MST
                  to learn about our innovative degrees. Registration is free but space is limited. Sign up here:
                </Text>
              </Box>
            </DescriptionListDetails>
          </DescriptionListSet>
        </DescriptionList>
      </Box>
      <Box>
        <Heading as="h5" variant="heading20">
          Errors and warnings
        </Heading>
        <Table>
          <THead>
            <Tr>
              <Th>Code</Th>
              <Th>Type</Th>
              <Th>Description</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Box display="flex" columnGap="space30">
                  <WarningIcon decorative={false} title="warning" color="colorTextIconWarning" />
                  <Text as="span" fontWeight="fontWeightSemibold">
                    11200 HTTP retrieval failure
                  </Text>
                </Box>
              </Td>
              <Td>Warning</Td>
              <Td>Twilio’s servers were unable to fetch a non-error response from the designated URL.</Td>
            </Tr>
          </TBody>
        </Table>
      </Box>
    </Box>
  </Box>
</Box>`.trim();
