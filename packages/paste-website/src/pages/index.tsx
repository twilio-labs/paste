import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Box, Heading, Paragraph, Anchor, Stack, Card, Grid, Column, UnorderedList, ListItem} from '@twilio-paste/core';
import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';
import {SiteWrapper} from '../components/site-wrapper';
import {P} from '../components/Typography';
import {SiteLink} from '../components/SiteLink';
import {SiteMetaDefaults} from '../constants';

const IndexPage: React.FC<{}> = (): React.ReactElement => {
  return (
    <SiteWrapper>
      <Helmet>
        <title>{SiteMetaDefaults.TITLE}</title>
        <link rel="canonical" href="https://paste.twilio.design" />
        <meta name="description" content={SiteMetaDefaults.DESCRIPTION} />
      </Helmet>
      <Box maxWidth="size120">
        <Grid gutter="space80" marginTop="space140">
          <Column span={[12, 12, 6, 7, 8]}>
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
          <Column span={[12, 12, 6, 5, 4]}>
            <Card padding={['space60', 'space60', 'space60', 'space90']}>
              <Heading as="h2" variant="heading30">
                <Stack as="span" orientation="horizontal" spacing="space20">
                  <NewIcon color="colorTextNew" decorative size="sizeIcon60" />
                  What&rsquo;s new in Paste?
                </Stack>
              </Heading>
              <UnorderedList marginBottom="space0">
                <ListItem>
                  Find icons easier than ever with our new <SiteLink to="/icons">icon list</SiteLink> page
                </ListItem>
                <ListItem>
                  By popular demand, we&rsquo;ve released a{' '}
                  <SiteLink to="/components/button#destructive-secondary-button">
                    secondary variant for destructive buttons
                  </SiteLink>
                </ListItem>
              </UnorderedList>
            </Card>
          </Column>
        </Grid>

        <Grid gutter="space30" marginTop="space160" marginBottom="space200">
          <Column span={[12, 12, 4]}>
            <Box marginBottom="space40">
              <Card padding="space80">
                <Heading as="h2" variant="heading30">
                  <SiteLink to="/components">Components</SiteLink>
                </Heading>
                <Paragraph>Use Paste components in Sketch or React to compose your user interfaces.</Paragraph>
              </Card>
            </Box>
          </Column>
          <Column span={[12, 12, 4]}>
            <Box marginBottom="space40">
              <Card padding="space80">
                <Heading as="h2" variant="heading20">
                  <SiteLink to="/content">Content</SiteLink>
                </Heading>
                <Paragraph>
                  Read our content guidelines to write authentic and inclusive content for Twilio&rsquo;s products.
                </Paragraph>
              </Card>
            </Box>
          </Column>
          <Column span={[12, 12, 4]}>
            <Box marginBottom="space40">
              <Card padding="space80">
                <Heading as="h2" variant="heading20">
                  <SiteLink to="/layout">Layout</SiteLink>
                </Heading>
                <Paragraph>Use layout components to space, align, and position your UI in a variety of ways.</Paragraph>
              </Card>
            </Box>
          </Column>
        </Grid>
      </Box>
    </SiteWrapper>
  );
};

export default IndexPage;
