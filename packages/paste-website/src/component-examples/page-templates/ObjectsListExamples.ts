export const FullObjectsListExample = `
<Box
  paddingX="space100"
  paddingTop="space130"
  paddingBottom="space160"
  display="flex"
  flexDirection="column"
  rowGap="space130"
>
  <Box display="flex" columnGap="space30" justifyContent="space-between" alignItems="flex-start">
    <Box maxWidth="size70">
      <Box display="flex" rowGap="space30" marginBottom="space30">
        <Breadcrumb aria-label={useUID()}>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Heading as="h4" variant="heading10">
        Objects
      </Heading>
      <Paragraph marginBottom="space0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
        faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
      </Paragraph>
    </Box>
    <Box marginBottom="space30" marginTop="space80">
      <ButtonGroup>
        <Button variant="secondary">Label</Button>
        <Button variant="primary">Label</Button>
      </ButtonGroup>
    </Box>
  </Box>
  <Box>
    <Box display="flex" flexDirection="column" rowGap="space50" marginBottom="space90">
      <Box display="flex" columnGap="space80" alignItems="flex-end">
        <Box minWidth="size30" maxWidth="size60" width="100%" display="flex" columnGap="space50">
          <Box width="100%">
            <Label htmlFor={criteria1}>Label</Label>
            <Select id={criteria1}>1</Select>
          </Box>
          <Box width="100%">
            <Label htmlFor={criteria2}>Label</Label>
            <Select id={criteria2}>2</Select>
          </Box>
          <Box width="100%">
            <Label htmlFor={criteria3}>Label</Label>
            <Select id={criteria3}>3</Select>
          </Box>
        </Box>
        <Box
          height="100%"
          display="flex"
          width="size20"
          justifyContent="flex-start"
          alignItems="flex-end"
          whiteSpace="nowrap"
        >
          <ButtonGroup>
            <Button variant="primary">
              <FilterIcon decorative />
              Apply
            </Button>
            <Button variant="secondary">Clear all</Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Separator orientation="horizontal" />
      <Box display="flex" columnGap="space80" maxWidth="size110">
        <Box maxWidth="size40">
          <Input
            type="text"
            insertBefore={<SearchIcon decorative color="colorTextPrimary" />}
            placeholder="Search"
            aria-label={useUID()}
          />
        </Box>
        <Separator orientation="vertical" />
        <Box>
          <ButtonGroup>
            <Button variant="secondary">
              <DownloadIcon decorative />
              Export
            </Button>
            <Button variant="secondary" size="icon">
              <MoreIcon decorative={false} title="menu" />
            </Button>
          </ButtonGroup>
        </Box>
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
</Box>`.trim();

export const DefaultObjectsListExample = `
<Box
  paddingX="space100"
  paddingTop="space130"
  paddingBottom="space160"
  display="flex"
  flexDirection="column"
  rowGap="space130"
>
  <Box display="flex" columnGap="space30" justifyContent="space-between" alignItems="flex-start">
    <Box maxWidth="size70">
      <Box display="flex" rowGap="space30" marginBottom="space30">
        <Breadcrumb aria-label={useUID()}>
          <BreadcrumbItem href="#">Phone numbers</BreadcrumbItem>
          <BreadcrumbItem href="#">Manage</BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Heading as="h4" variant="heading10">
        Verified caller IDs
      </Heading>
      <Paragraph marginBottom="space0">
        Verify a number that you own to use it as a caller ID or as the “To” number for outbound calls and messages.
        The phone numbers you buy from Twilio or port to Twilio can always be used as caller IDs.
      </Paragraph>
    </Box>
    <Box marginBottom="space30" marginTop="space80" whiteSpace="nowrap">
      <Button variant="primary">Add a new caller ID</Button>
    </Box>
  </Box>
  <Box>
    <Box maxWidth="size70" marginBottom="space90" display="flex" columnGap="space80" alignItems="flex-end">
      <Box maxWidth="size90" display="flex" columnGap="space50">
        <Box width="100%">
          <Label htmlFor={input1}>Phone number</Label>
          <Input type="text" id={input1} />
        </Box>
        <Box width="100%">
          <Label htmlFor={input2}>Friendly name</Label>
          <Input type="text" id={input2} />
        </Box>
      </Box>
      <Box display="flex" width="size20" justifyContent="flex-start">
        <ButtonGroup>
          <Button variant="secondary">
            <FilterIcon decorative />
            Apply
          </Button>
          <Button variant="secondary">Clear</Button>
        </ButtonGroup>
      </Box>
    </Box>
    <DataGrid aria-label={useUID()}>
      <DataGridHead>
        <DataGridRow>
          <DataGridHeader width="52px">
            <Checkbox>
              <ScreenReaderOnly>label</ScreenReaderOnly>
            </Checkbox>
          </DataGridHeader>
          <DataGridHeader>
            <Box display="flex" columnGap="space20">
              Phone number
              <UnsortedIcon decorative={false} title="sort column" />
            </Box>
          </DataGridHeader>
          <DataGridHeader>
            <Box display="flex" columnGap="space20">
              Friendly name
              <UnsortedIcon decorative={false} title="sort column" />
            </Box>
          </DataGridHeader>
          <DataGridHeader>
            <Box display="flex" columnGap="space20">
              Actions
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
          <DataGridCell>+1 512 809 4343</DataGridCell>
          <DataGridCell>(512) 809-4343</DataGridCell>
          <DataGridCell>
            <Button variant="destructive_secondary" size="small">
              Delete
            </Button>
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>
            <Checkbox>
              <ScreenReaderOnly>label</ScreenReaderOnly>
            </Checkbox>
          </DataGridCell>
          <DataGridCell>+86 591 1093 1093</DataGridCell>
          <DataGridCell>+86 591 1093 1093</DataGridCell>
          <DataGridCell>
            <Button variant="destructive_secondary" size="small">
              Delete
            </Button>
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>
            <Checkbox>
              <ScreenReaderOnly>label</ScreenReaderOnly>
            </Checkbox>
          </DataGridCell>
          <DataGridCell>+1 213 343 1345</DataGridCell>
          <DataGridCell>(213) 343-1345</DataGridCell>
          <DataGridCell>
            <Button variant="destructive_secondary" size="small">
              Delete
            </Button>
          </DataGridCell>
        </DataGridRow>
      </DataGridBody>
    </DataGrid>
  </Box>
</Box>`.trim();
