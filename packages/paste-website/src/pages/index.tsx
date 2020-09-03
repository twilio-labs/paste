import * as React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@twilio-paste/styling-library';
import { SiteWrapper } from '../components/site-wrapper';
import { Box, Heading, Paragraph, Anchor, Stack, Card, Grid, Column, MediaObject, MediaFigure, MediaBody, UnorderedList, ListItem } from '@twilio-paste/core';
import { P } from '../components/Typography';
import { SiteLink } from '../components/SiteLink';
import { SiteMetaDefaults } from '../constants';
import { NewIcon } from '@twilio-paste/icons/esm/NewIcon';

const LandingContainer = styled(Box)`
  margin-right: auto;
  margin-left: auto;
`;

const IndexPage: React.FC<{}> = (): React.ReactElement => {
  return (
    <SiteWrapper>
      <Helmet>
        <title>{SiteMetaDefaults.TITLE}</title>
        <link rel="canonical" href="https://paste.twilio.design" />
        <meta name="description" content={SiteMetaDefaults.DESCRIPTION} />
      </Helmet>
      <LandingContainer marginTop="space140">
        <Grid>
          <Column span={[12, 12, 4]}>
            <Heading as="h1" variant="heading10">
              Paste
            </Heading>
            <Box maxWidth="size60">
              <P variant="lead">
                Paste is a design system used to build accessible, consistent, and high quality customer experiences at
                Twilio. Paste is open source and contributions are welcome.{' '}
                <SiteLink to="/getting-started/about-paste/">Read more about the Paste platform here.</SiteLink>
              </P>
            </Box>
            <Box marginTop="space80" marginBottom="space80">
              <Heading as="h2" variant="heading20">
                Get Started
              </Heading>
              <Stack orientation="vertical" spacing="space30">
                <SiteLink to="/getting-started/engineering">Guidelines for front-end engineers</SiteLink>
                <SiteLink to="/roadmap">View our component roadmap</SiteLink>
                <Anchor href="https://codesandbox.io/s/paste-starter-kit-rj7yy">
                  Check out our components in a Code Sandbox
              </Anchor>
              </Stack>
            </Box>
          </Column>
          <Column span={[12, 12, 4]} offset={[0, 0, 1]}>
            <Card>
              <MediaObject as="div">
                <MediaFigure as="div" spacing={["space0", "space0", "space60"]}>
                  <NewIcon decorative={true} size="sizeIcon60" />
                </MediaFigure>
                <MediaBody as="div">
                  <Heading as="h2" variant={"heading30"}>
                    What's new in Paste?
                 </Heading>
                  <UnorderedList>
                    <ListItem>Find icons easier than ever with our new <SiteLink to="/icons">icon list</SiteLink> page</ListItem>
                    <ListItem>By popular demand, we've released a <SiteLink to="/components/button#destructive-secondary-button">secondary variant for destructive buttons</SiteLink></ListItem>
                  </UnorderedList>
                </MediaBody>
              </MediaObject>
            </Card>
          </Column>
        </Grid>
      </LandingContainer>

      <LandingContainer marginTop="space160" marginBottom="space200">
        <Grid gutter="space30">
          <Column span={[12, 12, 3]}><Card padding="space80">
            <Heading as="h2" variant="heading20">
              <SiteLink to="/components">Components</SiteLink>
            </Heading>
            <Paragraph>Use Paste components in Sketch or React to compose your user interfaces.</Paragraph>
          </Card></Column>
          <Column span={[12, 12, 3]}>
            <Card padding="space80">
              <Heading as="h2" variant="heading20">
                <SiteLink to="/content">Content</SiteLink>
              </Heading>
              <Paragraph>
                Read our content guidelines to write authentic and inclusive content for Twilio&rsquo;s products.
            </Paragraph>
            </Card>
          </Column>
          <Column span={[12, 12, 3]}><Card padding="space80">
            <Heading as="h2" variant="heading20">
              <SiteLink to="/layout">Layout</SiteLink>
            </Heading>
            <Paragraph>Use layout components to space, align, and position your UI in a variety of ways.</Paragraph>
          </Card></Column>
        </Grid>
      </LandingContainer>
    </SiteWrapper>
  );
};

export default IndexPage;
