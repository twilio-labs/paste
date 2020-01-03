import * as React from 'react';
import {Helmet} from 'react-helmet';
import {navigate} from 'gatsby';
import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {UnorderedList, ListItem} from '@twilio-paste/list';
import {SiteWrapper} from '../components/site-wrapper';
import {Grid} from '../components/grid';
import {StyledHr} from '../components/StyledHr';
import {P} from '../components/Typography';
import {Brush} from '../components/icons/Brush';
import {Terminal} from '../components/icons/Terminal';
import {WindowLayout} from '../components/icons/WindowLayout';
import {Callout, CalloutTitle, CalloutText} from '../components/callout';
import {SiteLink} from '../components/SiteLink';
import {SiteMetaDefaults} from '../constants';

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
      <LandingContainer maxWidth="size60" marginTop="space200" marginBottom="space200">
        <Heading as="h1" variant="heading10">
          Paste
        </Heading>
        <P variant="lead">
          Paste is a design system used to build accessible, consistent, and high quality customer experiences at
          Twilio. Paste is open source and contributions are welcome.
        </P>
        <Box marginTop="space80" marginBottom="space80">
          <Box display="inline-block" marginRight="space40">
            <Button
              as="a"
              href="/getting-started/"
              size="default"
              variant="primary"
              onClick={event => {
                event.preventDefault();
                navigate('/getting-started/');
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box display="inline-block" marginRight="space40">
            <Button
              as="a"
              href="/components/"
              size="default"
              variant="secondary"
              onClick={event => {
                event.preventDefault();
                navigate('/components/');
              }}
            >
              View Components
            </Button>
          </Box>
          <Button
            as="a"
            href="/roadmap/"
            size="default"
            variant="secondary"
            onClick={event => {
              event.preventDefault();
              navigate('/roadmap/');
            }}
          >
            Roadmap
          </Button>
        </Box>
      </LandingContainer>
      <StyledHr />
      <LandingContainer marginTop="space200" marginBottom="space200" maxWidth="size100">
        <Callout>
          <CalloutTitle as="h4">Looking for Flex / Console / SendGrid design systems?</CalloutTitle>
          <CalloutText as="div" marginTop="space40">
            <UnorderedList>
              <ListItem>
                <Anchor href="https://code.hq.twilio.com/pages/react/react-components/">
                  Console React Components
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor href="https://styleguide.sendgrid.com/">SendGrid Style Guide</Anchor>
              </ListItem>
              <ListItem>
                <Anchor href="https://www.twilio.com/docs/flex/flex-overview-ui-programmability">Flex UI Docs</Anchor>
              </ListItem>
            </UnorderedList>
          </CalloutText>
        </Callout>
        <Grid columnWidth={220} gap={30}>
          <Box>
            <IconCircle
              display="flex"
              marginBottom="space50"
              backgroundColor="colorBackground"
              borderRadius="borderRadiusCircle"
            >
              <Brush size={24} />
            </IconCircle>
            <Heading as="h2" variant="heading20">
              Themes
            </Heading>
            <Paragraph>
              Each component shares a common set of <SiteLink to="/tokens">design tokens</SiteLink> that allow us to
              easily change their value based on a theme.
            </Paragraph>
          </Box>
          <Box>
            <IconCircle
              display="flex"
              marginBottom="space50"
              backgroundColor="colorBackground"
              borderRadius="borderRadiusCircle"
            >
              <WindowLayout size={24} />
            </IconCircle>
            <Heading as="h2" variant="heading20">
              Usage Examples
            </Heading>
            <Paragraph>
              Learn how to use Paste components and the underlying tokens through{' '}
              <SiteLink to="/getting-started">usage examples and guidelines</SiteLink>.
            </Paragraph>
          </Box>
          <Box>
            <IconCircle
              display="flex"
              marginBottom="space50"
              backgroundColor="colorBackground"
              borderRadius="borderRadiusCircle"
            >
              <Terminal size={24} />
            </IconCircle>
            <Heading as="h2" variant="heading20">
              Code Sandbox
            </Heading>
            <Paragraph>
              We&rsquo;ve loaded a Code Sandbox with the latest components from Paste Core for you to get a feel for
              working with Paste.
            </Paragraph>
            <Paragraph>
              <Button as="a" href="https://codesandbox.io/s/paste-starter-kit-rj7yy" variant="secondary">
                Code Sandbox
              </Button>
            </Paragraph>
          </Box>
        </Grid>
      </LandingContainer>
    </SiteWrapper>
  );
};

export default IndexPage;
