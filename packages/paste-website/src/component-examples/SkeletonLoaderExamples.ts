export const CompositionExample = `
const SkeletonLoaderComposition = () => {
  const [loaded] = React.useState(false);

  return (
    <>
      {loaded ?
      <Text as="span">Single line of text</Text> :
      <SkeletonLoader width="100px" />
      }
    </>
  );
};

render(
  <SkeletonLoaderComposition />
)
`.trim();

export const TextExample = `
const SkeletonLoaderText = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? <Text as="span">Single line of text</Text> : <SkeletonLoader width="100px" />}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderText />
)
`.trim();

export const ParagraphExample = `
const SkeletonLoaderParagraph = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? (
        <Box width="500px">
          <Paragraph>
            Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It's a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.
          </Paragraph>
        </Box>
      ) : (
        <Box width="500px">
          <Stack orientation="vertical" spacing="space20">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader width="80px" />
          </Stack>
        </Box>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderParagraph />
)
`.trim();

export const HeadingExample = `
const SkeletonLoaderHeading = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? (
        <Stack orientation="vertical" spacing="space60">
          <Heading as="h1" variant="heading10">
            Heading one
          </Heading>
          <Heading as="h2" variant="heading20">
            Heading two
          </Heading>
          <Heading as="h3" variant="heading30">
            Heading three
          </Heading>
          <Heading as="h4" variant="heading40">
            Heading four
          </Heading>
          <Heading as="h5" variant="heading50">
            Heading five
          </Heading>
          <Heading as="h6" variant="heading60">
            Heading six
          </Heading>
        </Stack>
      ) : (
        <Stack orientation="vertical" spacing="space60">
          <SkeletonLoader height="44px" width="100px" />
          <SkeletonLoader height="32px" width="100px" />
          <SkeletonLoader height="28px" width="100px" />
          <SkeletonLoader height="24px" width="100px" />
          <SkeletonLoader height="20px" width="100px" />
          <SkeletonLoader height="20px" width="100px" />
        </Stack>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderHeading />
)
`.trim();

export const ButtonsExample = `
const SkeletonLoaderButtons = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? (
        <Stack orientation="horizontal" spacing="space40">
          <Button variant="primary">Button one</Button>
          <Button variant="secondary">Button two</Button>
          <Button variant="secondary">Button three</Button>
        </Stack>
      ) : (
        <Stack orientation="horizontal" spacing="space40">
          <SkeletonLoader width="98px" height="36px" />
          <SkeletonLoader width="98px" height="36px" />
          <SkeletonLoader width="108px" height="36px" />
        </Stack>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderButtons />
)
`.trim();

export const AvatarExample = `
const SkeletonLoaderAvatar = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? (
        <Avatar size="sizeIcon70" name="Paste Engineer" />
      ) : (
        <SkeletonLoader borderRadius="borderRadiusCircle" size="sizeIcon70" />
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderAvatar />
)
`.trim();

export const IconExample = `
const SkeletonLoaderIcon = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? <CalendarIcon decorative={false} title="Calendar icon" /> : <SkeletonLoader size="sizeIcon30" />}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderIcon />
)
`.trim();

export const CardExample = `
const SkeletonLoaderCard = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? (
        <Box width="500px">
          <Card>
            <Heading as="h1" variant="heading10">
              Impossible
            </Heading>
            <Paragraph>Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It's a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.</Paragraph>
          </Card>
        </Box>
      ) : (
        <Box width="500px">
          <Card>
            <Box marginBottom="space80">
              <SkeletonLoader height="44px" width="100px" />
            </Box>
            <Stack orientation="vertical" spacing="space20">
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </Stack>
            <Box marginTop="space20" marginBottom="space80">
              <SkeletonLoader width="200px" />
            </Box>
          </Card>
        </Box>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderCard />
)
`.trim();

export const TableExample = `
const SkeletonLoaderTable = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      <Table tableLayout="fixed">
        <THead>
          <Tr>
            <Th width="300px">Contacts</Th>
            <Th>Date Added</Th>
            <Th>Last Opened</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>{loaded ? <Text as="span">Adriana Lovelock</Text> : <SkeletonLoader width="50%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-09-17</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-06-28</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
          <Tr>
            <Td>{loaded ? <Text as="span">Adam Brown</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-03-06</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-08-17</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
          <Tr>
            <Td>{loaded ? <Text as="span">Amanda Cutlack</Text> : <SkeletonLoader width="55%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-02-11</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-12-27</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
          <Tr>
            <Td>{loaded ? <Text as="span">John Daily</Text> : <SkeletonLoader width="30%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-04-92</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-09-17</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
        </TBody>
      </Table>
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderTable />
)
`.trim();
