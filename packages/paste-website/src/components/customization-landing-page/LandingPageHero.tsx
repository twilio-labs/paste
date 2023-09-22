import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { Heading } from '@twilio-paste/heading';
import { Text } from '@twilio-paste/text';
import Image from 'next/image';

import HeroSlider from '../../assets/images/customization/hero-slider-mobile.png';
import { LandingPageSectionContent } from './LandingPageLayoutUtils';
import { WorksGreatWith } from './WorksGreatWith';
import { ImageSlider } from './image-slider';

export const LandingPageHero = (): JSX.Element => {
  return (
    <Box overflow="hidden">
      <Box padding="space70">
        <Box
          paddingX={['space90', 'space160']}
          paddingTop={['space90', 'space190']}
          position="relative"
          css={{
            paddingBottom: '100px',
          }}
          _before={{
            content: '" "',
            display: 'block',
            backgroundColor: 'colorBackground',
            borderRadius: 'borderRadius20',
            position: 'absolute',
            // @ts-expect-error @TODO not included in our types, but prob should be?
            clipPath: 'polygon(0 0, 100% 80px, 100% 100%, 0 100%)',
            transform: 'scaleY(-1)',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          <LandingPageSectionContent variant="default">
            <Box maxWidth={['none', 'size70']} width={['100%', '40%']}>
              <Heading as="div" variant="heading40">
                <Text as="span" color="colorTextNeutral">
                  Paste for Programmable Apps
                </Text>
              </Heading>
              <Text
                as="h1"
                fontFamily="fontFamilyDisplay"
                fontSize={['fontSizeDisplay20', 'fontSizeDisplay30']}
                fontWeight="fontWeightExtrabold"
                lineHeight={['lineHeightDisplay20', 'lineHeightDisplay30']}
                marginBottom="space70"
              >
                Customize your Twilio-powered apps using Paste
              </Text>
              <Text as="p" fontSize="fontSize60" lineHeight="lineHeight60" marginBottom="space70">
                Rapidly build enterprise-grade, inclusive, and extensible UIs that look and feel like your brand.
              </Text>
              <Button as="a" href="/customization/customization-provider" variant="primary">
                Start customizing
              </Button>
            </Box>

            <ImageSlider />

            <Box display={['block', 'none']} maxWidth="600px" marginX="auto">
              <Image src={HeroSlider} alt="" placeholder="blur" style={{ width: '100%', height: '100%' }} />
            </Box>
          </LandingPageSectionContent>
        </Box>
      </Box>
      <WorksGreatWith />
    </Box>
  );
};
