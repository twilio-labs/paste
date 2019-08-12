import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Grid} from '../components/grid';
import {SiteWrapper} from '../components/default-site-wrapper';
import Brush from '../components/svg/brush';
import Terminal from '../components/svg/terminal';
import WindowLayout from '../components/svg/window-layout';

const LandingContainer = styled(Box)`
  margin: ${themeGet('space.space200')} auto;
`;

const ButtonRow = styled.div`
  display: flex;
  margin: ${themeGet('space.space80')} 0;

  a {
    margin-right: ${themeGet('space.space40')};
    text-decoration: none;
  }
`;

const StyledHr = styled.hr`
  height: ${themeGet('borderWidths.borderWidth20')};
  margin: ${themeGet('space.space50')} 0;
  background-color: ${themeGet('borderColors.colorBorderDark')};
  border: 0;
`;

const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: ${themeGet('space.space50')};
  background-color: ${themeGet('backgroundColors.colorBackground')};
  border-radius: 50%;
`;

const IndexPage: React.FC<{}> = (): React.ReactElement => {
  return (
    <SiteWrapper>
      <LandingContainer maxWidth="size60">
        <Text as="h1" fontSize="fontSize100" marginBottom="space60" lineHeight="lineHeight70">
          Paste
        </Text>
        <Text fontSize="fontSize30" lineHeight="lineHeight50">
          Enamel pin meh cloud bread copper mug next level gentrify ugh lumbersexual art party selvage chicharrones
          hexagon wolf wayfarers whatever. Locavore stumptown VHS semiotics. Woke selfies 8-bit tofu cliche portland
          synth glossier fanny pack. Meditation 3 wolf moon beard drinking vinegar.
        </Text>
        <ButtonRow>
          <Button as="a" href="/" size="default" variant="primary">
            Install Paste 0.1
          </Button>
          <Button as="a" href="/components" size="default" variant="secondary">
            View Components
          </Button>
        </ButtonRow>
      </LandingContainer>
      <StyledHr />
      <LandingContainer>
        <Grid columnWidth={220} gap={30}>
          <div>
            <IconCircle>
              <Brush size={24} />
            </IconCircle>
            <Text as="h3" fontSize="fontSize60" lineHeight="lineHeight50" marginBottom="space60">
              Themeability
            </Text>
            <Text lineHeight="lineHeight30">
              Prism glossier photo booth godard synth vape tumeric subway tile trust fund cred hexagon raw denim master
              cleanse.
            </Text>
          </div>
          <div>
            <IconCircle>
              <WindowLayout size={24} />
            </IconCircle>
            <Text as="h3" fontSize="fontSize60" lineHeight="lineHeight50" marginBottom="space60">
              Usage Examples
            </Text>
            <Text lineHeight="lineHeight30">
              Prism glossier photo booth godard synth vape tumeric subway tile trust fund cred hexagon raw denim master
              cleanse.
            </Text>
          </div>
          <div>
            <IconCircle>
              <Terminal size={24} />
            </IconCircle>
            <Text as="h3" fontSize="fontSize60" lineHeight="lineHeight50" marginBottom="space60">
              Component API
            </Text>
            <Text lineHeight="lineHeight30">
              Prism glossier photo booth godard synth vape tumeric subway tile trust fund cred hexagon raw denim master
              cleanse.
            </Text>
          </div>
        </Grid>
      </LandingContainer>
      <StyledHr />
    </SiteWrapper>
  );
};

export default IndexPage;
