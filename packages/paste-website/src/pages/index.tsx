import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Link} from 'gatsby';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {SiteWrapper} from '../components/site-wrapper';
import {Grid} from '../components/grid';
import {StyledHr} from '../components/StyledHr';
import {Brush} from '../components/icons/Brush';
import {Terminal} from '../components/icons/Terminal';
import {WindowLayout} from '../components/icons/WindowLayout';

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
        <Text as="h1" fontSize="fontSize100" marginBottom="space60" lineHeight="lineHeight70">
          Paste
        </Text>
        <Text fontSize="fontSize30" lineHeight="lineHeight50">
          Paste is a design system for designing and building consistent experiences at Twilio. It is made up of tokens
          and components, along with in-depth documentation to assist designers and developers faced with solving our
          customers’ problems. It is open source and contributions are welcome.
        </Text>
        <Box marginTop="space80" marginBottom="space80">
          <Box display="inline" marginRight="space40">
            <Button as="a" href="/getting-started/" size="default" variant="primary">
              Get Started
            </Button>
          </Box>
          <Button as="a" href="/components" size="default" variant="secondary">
            View Components
          </Button>
        </Box>
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
            <Text as="h3" fontSize="fontSize60" lineHeight="lineHeight50" marginBottom="space60">
              Themes
            </Text>
            <Text lineHeight="lineHeight30">
              Each component shares a common set of <Link to="/tokens">design tokens</Link> that allow us to easily
              change their value based on a theme.
            </Text>
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
            <Text as="h3" fontSize="fontSize60" lineHeight="lineHeight50" marginBottom="space60">
              Usage Examples
            </Text>
            <Text lineHeight="lineHeight30">
              Learn how to use Paste components and the underlying tokens through usage examples and guidelines.
            </Text>
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
            <Text as="h3" fontSize="fontSize60" lineHeight="lineHeight50" marginBottom="space60">
              Component API
            </Text>
            <Text lineHeight="lineHeight30">
              Each Paste component is thoroughly documented with a list of props and descriptions of how they should be
              used.
            </Text>
          </Box>
        </Grid>
      </LandingContainer>
      <StyledHr />
    </SiteWrapper>
  );
};

export default IndexPage;
