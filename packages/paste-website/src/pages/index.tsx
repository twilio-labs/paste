import * as React from 'react';
import {Helmet} from 'react-helmet';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {
  Box,
  Heading,
  Paragraph,
  Anchor,
  Stack,
  Card,
  Grid,
  Column,
  UnorderedList,
  ListItem,
  Separator,
} from '@twilio-paste/core';
import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';
import IllustrationBuildingBlocks from '../assets/illustrations/IllustrationBuildingBlocks.svg';
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
        <Grid gutter="space40" marginTop="space140">
          <Column span={[12, 12, 8]}>
            <Heading as="h1" variant="heading10">
              Paste
            </Heading>
            <Box maxWidth="size60">
              <P variant="lead">
                Paste is a design system used to build accessible, consistent, and high quality customer experiences at
                Twilio. Paste is open source and contributions are welcome.{' '}
                <SiteLink to="/getting-started/about-paste/">Read more about the Paste platform.</SiteLink>
              </P>
            </Box>
            <Box marginTop="space80" marginBottom="space120">
              <Heading as="h2" variant="heading20">
                Get Started
              </Heading>
              <Stack orientation="vertical" spacing="space30">
                <SiteLink to="/getting-started/engineering">Guidelines for front-end engineers</SiteLink>
                <SiteLink to="/getting-started/design">Guidelines for product designers</SiteLink>
                <Anchor
                  href="https://codesandbox.io/s/paste-starter-kit-rj7yy"
                  onClick={() =>
                    trackCustomEvent({
                      category: 'Home',
                      action: 'Click',
                      label: 'Check out our components in a Code Sandbox',
                    })
                  }
                >
                  Check out our components in a Code Sandbox
                </Anchor>
              </Stack>
            </Box>
          </Column>
          <Column span={[12, 12, 4]}>
            <IllustrationBuildingBlocks aria-hidden="true" role="img" />
          </Column>
          <Column span={12}>
            <Separator orientation="horizontal" verticalSpacing="space20" />
            <Box paddingX="space120" paddingTop="space130">
              <Grid>
                <Column span={[12, 12, 3]}>
                  <Heading as="h2" variant="heading30">
                    <Stack as="span" orientation="horizontal" spacing="space20">
                      <NewIcon color="colorTextNew" decorative size="sizeIcon60" />
                      What&rsquo;s new in Paste?
                    </Stack>
                  </Heading>
                  <Paragraph>
                    To see what&rsquo;s coming soon <SiteLink to="/roadmap">view our roadmap</SiteLink>.
                  </Paragraph>
                </Column>
                <Column span={[12, 12, 9]}>
                  <UnorderedList marginBottom="space0">
                    <ListItem>
                      The <SiteLink to="/components/toast">Toast component</SiteLink> makes its debut.
                    </ListItem>
                    <ListItem>
                      A 2010 classic, <SiteLink to="/layout/media-object">the Media Object</SiteLink> gets some well
                      deserved attention.
                    </ListItem>
                    <ListItem>
                      Usage guidelines and brand approved illustrations are now documented in our{' '}
                      <SiteLink to="/illustrations">illustrations section</SiteLink> page
                    </ListItem>
                  </UnorderedList>
                </Column>
              </Grid>
            </Box>
          </Column>
        </Grid>

        <Grid gutter="space30" marginTop="space160" marginBottom="space200">
          <Column span={[12, 12, 4]}>
            <Box marginBottom="space40">
              <Card padding="space80">
                <Heading as="h2" variant="heading20">
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
