export const DefaultExample = `const CardExample = () => {
  return (
    <Card>
      <Heading as="h2" variant="heading20">
        Parable of the Talents
      </Heading>
      <Paragraph>
        Choose your leaders with wisdom and forethought. To be led by a coward is to be controlled by all that the
        coward fears. To be led by a fool is to be led by the opportunists who control the fool. To be led by a thief is
        to offer up your most precious treasures to be stolen. To be led by a liar is to ask to be lied to. To be led by
        a tyrant is to sell yourself and those you love into slavery.
      </Paragraph>
      <Paragraph marginBottom="space0">
        —
        <Anchor href="https://www.goodreads.com/book/show/60932.Parable_of_the_Talents">Octavia Butler</Anchor>
      </Paragraph>
    </Card>
  );
};

render(<CardExample />);`.trim();

export const AdjustingPaddingExample = `const CardExample = () => {
  return (
    <Box maxWidth="size40">
      <Card padding="space0">
        <Box padding="space160" display="flex" justifyContent="center">
          <AlertsAndNotifications />
        </Box>
        <Separator orientation="horizontal" verticalSpacing="space0" />
        <Box paddingY="space60" paddingX="space90">
          <Heading as="h2" variant="heading40">
            Alerts and notifications
          </Heading>
          <Paragraph>
            Inform, engage, and drive customers to take action. Deliver reliable multichannel notifications through
            Twilio.
          </Paragraph>
          <Button variant="secondary" size="small">
            Try notifications
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

render(<CardExample />);`.trim();

export const TitleBodyButtonExample = `const CardExample = () => {
  return (
    <Stack orientation="vertical" spacing="space40">
      <Card padding="space120">
        <Heading as="h2" variant="heading20">
          The Transgender District
        </Heading>
        <Paragraph>
          The mission of the Transgender District is to create an urban environment that fosters the rich history,
          culture, legacy, and empowerment of transgender people and its deep roots in the southeastern Tenderloin
          neighborhood. The transgender district aims to stabilize and economically empower the transgender community
          through ownership of homes, businesses, historic and cultural sites, and safe community spaces.
        </Paragraph>
        <Button variant="primary" as="a" href="https://www.transgenderdistrictsf.com/">
          Support The Transgender District
        </Button>
      </Card>
      <Card padding="space120">
        <Heading as="h2" variant="heading20">
          Inside Out
        </Heading>
        <Paragraph>
          Inside Out empowers, educates, and advocates for LGBTQ+ of youth from the Pikes Peak Region in Southern
          Colorado. Inside Out does this by creating safe spaces, support systems and teaching life skills to all youth
          in the community and working to make the community safer and more accepting of gender and sexual orientation
          diversity.
        </Paragraph>
        <Button variant="primary" as="a" href="https://insideoutys.org/">
          Support Inside Out
        </Button>
      </Card>
      <Card padding="space120">
        <Heading as="h2" variant="heading20">
          The Audre Lorde Project
        </Heading>
        <Paragraph>
          The Audre Lorde Project is a Lesbian, Gay, Bisexual, Two Spirit, Trans and Gender Non Conforming People of
          Color center for community organizing, focusing on the New York City area. Through mobilization, education and
          capacity-building, they work for community wellness and progressive social and economic justice. Committed to
          struggling across differences, they seek to responsibly reflect, represent and serve their various
          communities.
        </Paragraph>
        <Button variant="primary" as="a" href="https://alp.org/">
          Support The Audre Lorde Project
        </Button>
      </Card>
    </Stack>
  );
};

render(<CardExample />);`.trim();

export const MarketingOneExample = `const CardExample = () => {
  return (
    <Card>
      <MediaObject verticalAlign="top">
        <MediaFigure spacing="space90">
          <Box as="img" src="./card/marketing1.png" maxHeight="150px" />
        </MediaFigure>
        <MediaBody>
          <Heading as="h6" variant="heading30">
            Transform your unstructured voice data into actionable insights
          </Heading>
          <Paragraph>Get accurate transcriptions, and use AI-powered language operators.</Paragraph>
          <Button variant="primary">
            Discover Voice Intelligence <ArrowForwardIcon decorative />
          </Button>
        </MediaBody>
      </MediaObject>
    </Card>
  );
};

render(<CardExample />);`.trim();

export const MarketingTwoExample = `const CardExample = () => {
  return (
    <Card>
      <MediaObject verticalAlign="top">
        <MediaFigure spacing="space90">
          <Marketing2 />
        </MediaFigure>
        <MediaBody>
          <Heading as="h6" variant="heading30">
            Multi-channel user verification
          </Heading>
          <Paragraph>
            Verify is a fully managed API for multichannel user verification. And it now includes guaranteed protection
            from SMS pumping fraud with Fraud Guard.
          </Paragraph>
          <ButtonGroup>
            <Button variant="primary">
              Start building <ArrowForwardIcon decorative />
            </Button>
            <Button variant="secondary">
              Learn more <LinkExternalIcon decorative />
            </Button>
          </ButtonGroup>
        </MediaBody>
      </MediaObject>
    </Card>
  );
};

render(<CardExample />);`.trim();

export const MarketingThreeExample = `const CardExample = () => {
  return (
    <Card>
      <MediaObject verticalAlign="top">
        <MediaFigure spacing="space40">
          <Marketing3 />
        </MediaFigure>
        <MediaBody>
          <Box paddingBottom="space70">
            <Badge as="span" variant="brand30">
              <ProductSegmentIcon decorative />
              Twilio Segment CDP
            </Badge>
          </Box>
          <Heading as="h6" variant="heading10">
            Know your customers personally with Twilio Segment
          </Heading>
          <Paragraph>
            You can now use your Twilio credentials to log in and explore Segment, our customer data platform. Combine
            data across the customer lifecycle into a single, golden profile with our CDP.
          </Paragraph>
          <Button variant="secondary">Log in to Segment with Twilio</Button>
        </MediaBody>
      </MediaObject>
    </Card>
  );
};

render(<CardExample />);`.trim();

export const MarketingFourExample = `const CardExample = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor="colorBackground"
      paddingY="space120"
      paddingX="space180"
      borderRadius="borderRadius30"
    >
      <Box width="100%" display="flex" justifyContent="center">
        <Marketing4 />
      </Box>
      <Box>
        <Heading as="h6" variant="heading10">
          Turn your recordings into transcriptions
        </Heading>
        <Paragraph>
          Next steps: Turn your voice recordings into transcripts and extra insights such as key phrases and compliance
          issues with Voice Intelligence.
        </Paragraph>
        <Button variant="primary">
          Discover Voice Intelligence <ArrowForwardIcon decorative />
        </Button>
      </Box>
    </Box>
  );
};

render(<CardExample />);`.trim();

export const PricingExample = `const CardExample = () => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" columnGap="space60">
      <Card paddingY="space100" paddingX="space70">
        <Badge as="span" variant="success">
          Current plan
        </Badge>
        <Box textAlign="center" marginTop="space70">
          <Box width="100%" display="flex" justifyContent="center">
            <Avatar icon={UserIcon} name="free plan" size="sizeIcon90" />
          </Box>
          <Box marginY="space30">
            <Heading as="h6" variant="heading30">
              Free
            </Heading>
          </Box>
          <Paragraph marginBottom="space0">$0 / month</Paragraph>
          <Box marginTop="space70">
            <Button variant="secondary">Contact us to change plan</Button>
          </Box>
          <Separator orientation="horizontal" verticalSpacing="space70" />
          <Box textAlign="left" display="grid" gridTemplateRows="repeat(4, min-content)" rowGap="space30">
            <Paragraph marginBottom="space0">
              <Box display="flex" columnGap="space20">
                <AcceptIcon color="colorTextIconAvailable" decorative />
                10 seats
              </Box>
            </Paragraph>
            <Paragraph marginBottom="space0">
              <Box display="flex" columnGap="space20">
                <AcceptIcon color="colorTextIconAvailable" decorative />
                3 sources
              </Box>
            </Paragraph>
            <Paragraph marginBottom="space0">
              <Box display="flex" columnGap="space20">
                <AcceptIcon color="colorTextIconAvailable" decorative />
                1 warehouse destination
              </Box>
            </Paragraph>
            <Paragraph marginBottom="space0">
              <Box display="flex" columnGap="space20">
                <AcceptIcon color="colorTextIconAvailable" decorative />
                10,000 MTU
              </Box>
            </Paragraph>
          </Box>
        </Box>
      </Card>
      <Card paddingY="space100" paddingX="space70">
        <Badge as="span" variant="brand10">
          <LogoTwilioIcon decorative />
          Exclusively available to you
        </Badge>
        <Box textAlign="center" marginTop="space70">
          <Box width="100%" display="flex" justifyContent="center">
            <AvatarGroup variant="user" size="sizeIcon90">
              <Avatar icon={UserIcon} name="free plan" />
              <Avatar icon={UserIcon} name="free plan" />
            </AvatarGroup>
          </Box>
          <Box marginY="space30">
            <Heading as="h6" variant="heading30">
              Twilio Developer
            </Heading>
          </Box>
          <Paragraph marginBottom="space0">$0 / month</Paragraph>
          <Box marginTop="space70">
            <Button variant="primary">Contact us to upgrade</Button>
          </Box>
          <Separator orientation="horizontal" verticalSpacing="space70" />
          <Box textAlign="left" display="grid" gridTemplateRows="repeat(4, min-content)" rowGap="space30">
            <Paragraph marginBottom="space0">
              <Box display="flex" columnGap="space20">
                <AcceptIcon color="colorTextIconAvailable" decorative />
                10 seats
              </Box>
            </Paragraph>
            <Paragraph marginBottom="space0">
              <Box display="flex" columnGap="space20">
                <AcceptIcon color="colorTextIconAvailable" decorative />
                3 sources
              </Box>
            </Paragraph>
            <Paragraph marginBottom="space0">
              <Box display="flex" columnGap="space20">
                <AcceptIcon color="colorTextIconAvailable" decorative />
                1 warehouse destination
              </Box>
            </Paragraph>
            <Paragraph marginBottom="space0">
              <Box display="flex" columnGap="space20">
                <AcceptIcon color="colorTextIconAvailable" decorative />
                10,000 MTU
              </Box>
            </Paragraph>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

render(<CardExample />);`.trim();
