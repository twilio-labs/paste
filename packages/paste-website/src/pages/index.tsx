import * as React from 'react';
import {Helmet} from 'react-helmet';
import styled from '@emotion/styled';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Anchor} from '@twilio-paste/anchor';
import {Stack} from '@twilio-paste/stack';
import {Card} from '@twilio-paste/card';
import {SiteWrapper} from '../components/site-wrapper';
import {Grid} from '../components/grid';
import {P} from '../components/Typography';
import {SiteLink} from '../components/SiteLink';
import {SiteMetaDefaults} from '../constants';

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
        <Heading as="h1" variant="heading10">
          Paste
        </Heading>
        <Box maxWidth="size60">
          <P variant="lead">
            Paste is a design system used to build accessible, consistent, and high quality customer experiences at
            Twilio. Paste is open source and contributions are welcome.
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
      </LandingContainer>
      <LandingContainer marginTop="space160" marginBottom="space200">
        <Grid columnWidth={220} gap={30}>
          <Card padding="space80">
            <Heading as="h2" variant="heading20">
              <SiteLink to="/components">Components</SiteLink>
            </Heading>
            <Paragraph>Use Paste components in Sketch or React to compose your user interfaces.</Paragraph>
          </Card>
          <Card padding="space80">
            <Heading as="h2" variant="heading20">
              <SiteLink to="/content">Content</SiteLink>
            </Heading>
            <Paragraph>
              Read our content guidelines to write authentic and inclusive content for Twilio&rsquo;s products.
            </Paragraph>
          </Card>
          <Card padding="space80">
            <Heading as="h2" variant="heading20">
              <SiteLink to="/layout">Layout</SiteLink>
            </Heading>
            <Paragraph>Use layout components to space, align, and position your UI in a variety of ways.</Paragraph>
          </Card>
        </Grid>
      </LandingContainer>
    </SiteWrapper>
  );
};

export default IndexPage;
