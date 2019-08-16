import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Link} from 'gatsby';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {SiteWrapper} from '../components/site-wrapper';
import {Grid} from '../components/grid';
import {StyledHr} from '../components/StyledHr';
import {Heading} from '../components/Heading';
import {P} from '../components/Typography';
import {Brush} from '../components/icons/Brush';
import {Terminal} from '../components/icons/Terminal';
import {WindowLayout} from '../components/icons/WindowLayout';
import {Callout, CalloutTitle, CalloutText} from '../components/callout';

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
      <LandingContainer maxWidth="size60" marginTop="space200" marginBottom="space200">
        <Heading as="h1" headingStyle="headingStyle10">
          Paste
        </Heading>
        <P variant="lead">
          Paste is a design system for designing and building consistent experiences at Twilio. It is made up of tokens
          and components, along with in-depth documentation to assist designers and developers faced with solving our
          customers’ problems. It is open source and contributions are welcome.
        </P>
        <Box marginTop="space80" marginBottom="space80">
          <Box display="inline" marginRight="space40">
            <Button as="a" href="/getting-started/" size="default" variant="primary">
              Get Started
            </Button>
          </Box>
          <Box display="inline" marginRight="space40">
            <Button as="a" href="/components" size="default" variant="secondary">
              View Components
            </Button>
          </Box>
          <Button as="a" href="/migrate" size="default" variant="secondary">
            Migration Guide
          </Button>
        </Box>
        <Callout>
          <CalloutTitle as="h4">Looking for Flex / Console / SendGrid design systems?</CalloutTitle>
          <CalloutText as="div" marginTop="space40">
            <ul>
              <li>
                <a href="http://styleguide.sendgrid.com/">SendGrid Style Guide</a>
              </li>
              <li>
                <a href="https://code.hq.twilio.com/pages/react/react-components/">Console React Components</a> (VPN
                Required)
              </li>
              <li>
                <a href="https://zpl.io/2yOZ0Dy">Frame Elements for Flex</a>
              </li>
            </ul>
          </CalloutText>
        </Callout>
      </LandingContainer>
      <StyledHr />
      <LandingContainer marginTop="space200" marginBottom="space200">
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
              Each component shares a common set of <Link to="/tokens">design tokens</Link> that allow us to easily
              change their value based on a theme.
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
              <Link to="/getting-started">usage examples and guidelines</Link>.
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
              Each <Link to="/components">Paste component</Link> is thoroughly documented with a list of props and
              descriptions of how they should be used.
            </P>
          </Box>
        </Grid>
      </LandingContainer>
      <StyledHr />
    </SiteWrapper>
  );
};

export default IndexPage;
