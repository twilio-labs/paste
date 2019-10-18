import * as React from 'react';
import {Helmet} from 'react-helmet';
import {navigate} from 'gatsby';
import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';
import {SiteWrapper} from '../components/site-wrapper';
import {Grid} from '../components/grid';
import {StyledHr} from '../components/StyledHr';
import {Heading} from '../components/Heading';
import {P, UL, LI} from '../components/Typography';
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
        <meta charSet="utf-8" />
        <title>{SiteMetaDefaults.TITLE}</title>
        <link rel="canonical" href="https://paste.twilio.design" />
        <meta name="description" content={SiteMetaDefaults.DESCRIPTION} />
      </Helmet>
      <LandingContainer maxWidth="size60" marginTop="space200" marginBottom="space200">
        <Heading as="h1" headingStyle="headingStyle10">
          Paste
        </Heading>
        <P variant="lead">
          Paste is an internal design system for designing and building consistent experiences at Twilio. It is made up
          of tokens and components, along with in-depth documentation to assist designers and developers faced with
          solving our customers’ problems. It is open source and contributions are welcome.
        </P>
        <Box marginTop="space80" marginBottom="space80">
          <Box display="inline" marginRight="space40">
            <Button
              size="default"
              variant="primary"
              onClick={() => {
                navigate('/getting-started/');
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box display="inline" marginRight="space40">
            <Button
              size="default"
              variant="secondary"
              onClick={() => {
                navigate('/components/');
              }}
            >
              View Components
            </Button>
          </Box>
          <Button
            size="default"
            variant="secondary"
            onClick={() => {
              navigate('/roadmap/');
            }}
          >
            Roadmap
          </Button>
        </Box>
        <Callout>
          <CalloutTitle as="h4">Looking for Flex / Console / SendGrid design systems?</CalloutTitle>
          <CalloutText as="div" marginTop="space40">
            <UL>
              <LI>
                <Anchor href="https://code.hq.twilio.com/pages/react/react-components/">
                  Console React Components
                </Anchor>
              </LI>
              <LI>
                <Anchor href="https://styleguide.sendgrid.com/">SendGrid Style Guide</Anchor>
              </LI>
              <LI>
                <Anchor href="https://www.twilio.com/docs/flex/flex-overview-ui-programmability">Flex UI Docs</Anchor>
              </LI>
            </UL>
          </CalloutText>
        </Callout>
      </LandingContainer>
      <StyledHr />
      <LandingContainer marginTop="space200" marginBottom="space200" maxWidth="size100">
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
            <Heading as="h2" headingStyle="headingStyle20">
              Themes
            </Heading>
            <P>
              Each component shares a common set of <SiteLink to="/tokens">design tokens</SiteLink> that allow us to
              easily change their value based on a theme.
            </P>
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
            <Heading as="h2" headingStyle="headingStyle20">
              Usage Examples
            </Heading>
            <P>
              Learn how to use Paste components and the underlying tokens through{' '}
              <SiteLink to="/getting-started">usage examples and guidelines</SiteLink>.
            </P>
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
            <Heading as="h2" headingStyle="headingStyle20">
              Component API
            </Heading>
            <P>
              Each <SiteLink to="/components">Paste component</SiteLink> is thoroughly documented with a list of props
              and descriptions of how they should be used.
            </P>
          </Box>
        </Grid>
      </LandingContainer>
    </SiteWrapper>
  );
};

export default IndexPage;
