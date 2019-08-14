import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {SiteWrapper} from '../components/default-site-wrapper';
import {Grid} from '../components/grid';
import {StyledHr} from '../components/StyledHr';
import {Brush} from '../components/icons/Brush';
import {Terminal} from '../components/icons/Terminal';
import {WindowLayout} from '../components/icons/WindowLayout';

const LandingContainer = styled(Box)`
  margin-right: auto;
  margin-left: auto;
`;

const StyledButtonRow = styled(Box)`
  a {
    margin-right: ${themeGet('space.space40')};
  }
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
          Enamel pin meh cloud bread copper mug next level gentrify ugh lumbersexual art party selvage chicharrones
          hexagon wolf wayfarers whatever. Locavore stumptown VHS semiotics. Woke selfies 8-bit tofu cliche portland
          synth glossier fanny pack. Meditation 3 wolf moon beard drinking vinegar.
        </Text>
        <StyledButtonRow marginTop="space80" marginBottom="space80">
          <Button as="a" href="/" size="default" variant="primary">
            Install Paste 0.1
          </Button>
          <Button as="a" href="/components" size="default" variant="secondary">
            View Components
          </Button>
        </StyledButtonRow>
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
              Themeability
            </Text>
            <Text lineHeight="lineHeight30">
              Prism glossier photo booth godard synth vape tumeric subway tile trust fund cred hexagon raw denim master
              cleanse.
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
              Prism glossier photo booth godard synth vape tumeric subway tile trust fund cred hexagon raw denim master
              cleanse.
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
              Prism glossier photo booth godard synth vape tumeric subway tile trust fund cred hexagon raw denim master
              cleanse.
            </Text>
          </Box>
        </Grid>
      </LandingContainer>
      <StyledHr />
    </SiteWrapper>
  );
};

export default IndexPage;
