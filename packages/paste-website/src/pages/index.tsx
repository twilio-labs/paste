import * as React from 'react';
import {Helmet} from 'react-helmet';
import {navigate} from 'gatsby';
import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Separator} from '@twilio-paste/separator';
import {SiteWrapper} from '../components/site-wrapper';
import {Grid} from '../components/grid';
import {P} from '../components/Typography';
import {SiteLink} from '../components/SiteLink';
import {SiteMetaDefaults} from '../constants';
import {OrderedList, UnorderedList, ListItem} from '@twilio-paste/list';
import {Anchor} from '@twilio-paste/anchor';

const LandingContainer = styled(Box)`
  margin-right: auto;
  margin-left: auto;
`;

const IconCircle = styled(Box)`
  justify-content: center;
  align-items: center;
  width: ${themeGet('space.space160')};
  height: ${themeGet('space.space160')};
`;

const IndexPage: React.FC<{}> = (): React.ReactElement => {
  return (
    <SiteWrapper>
      <Helmet>
        <title>{SiteMetaDefaults.TITLE}</title>
        <link rel="canonical" href="https://paste.twilio.design" />
        <meta name="description" content={SiteMetaDefaults.DESCRIPTION} />
      </Helmet>
      <LandingContainer marginTop="space140" marginBottom="space200">
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
          <UnorderedList>
            <ListItem>
              <SiteLink to="/getting-started/engineering">Getting started with Paste's React components</SiteLink>
            </ListItem>
            <ListItem>
              <SiteLink to="/roadmap">View our component roadmap</SiteLink>
            </ListItem>
            <ListItem>
              <Anchor href="https://codesandbox.io/s/paste-starter-kit-rj7yy">
                Check out our components in a Code Sandbox
              </Anchor>
            </ListItem>
          </UnorderedList>
        </Box>
      </LandingContainer>
      <Separator orientation="horizontal" verticalSpacing="space50" />
      <LandingContainer marginTop="space200" marginBottom="space200">
        <Grid columnWidth={220} gap={30}>
          <Box>
            <Heading as="h2" variant="heading20">
              <SiteLink to="/components">Components</SiteLink>
            </Heading>
            <Paragraph>Use Paste components in Sketch or React to compose your user interfaces.</Paragraph>
          </Box>
          <Box>
            <Heading as="h2" variant="heading20">
              <SiteLink to="/content">Content</SiteLink>
            </Heading>
            <Paragraph>
              Read our content guidelines to write authentic ands inclusive content for Twilio's products.
            </Paragraph>
          </Box>
          <Box>
            <Heading as="h2" variant="heading20">
              <SiteLink to="/layout">Layout</SiteLink>
            </Heading>
            <Paragraph>Use layout components to space, align, and position your UI in a variety of ways.</Paragraph>
          </Box>
        </Grid>
      </LandingContainer>
    </SiteWrapper>
  );
};

export default IndexPage;
