import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {useTheme} from '@twilio-paste/theme';

import {WorksGreatWith} from './WorksGreatWith';
import {LandingPageSectionContent} from './LandingPageLayoutUtils';
import InteractiveSliderSVG from '../../assets/illustrations/customization_interactive_slider.svg';
import InteractiveSliderSmallSVG from '../../assets/illustrations/customization_interactive_slider_small.svg';

export const LandingPageHero: React.FC = () => {
  const {backgroundColors} = useTheme();
  return (
    <Box
      background={`linear-gradient(90deg, ${backgroundColors.colorBackgroundPrimaryDark} 0%, ${backgroundColors.colorBackgroundPrimaryDarkest} 100%)`}
    >
      <Box backgroundColor="colorBackgroundBody" padding="space70">
        <Box
          backgroundColor="colorBackground"
          borderRadius="borderRadius20"
          paddingX={['space90', 'space160']}
          paddingY={['space90', 'space190']}
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
                fontSize={['fontSize90', 'fontSize110']}
                fontWeight="fontWeightBold"
                lineHeight={['lineHeight90', 'lineHeight110']}
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
            <Box
              display={['none', 'block']}
              position="absolute"
              right="spaceNegative160"
              top="50px"
              maxWidth="size70"
              width="60%"
            >
              <InteractiveSliderSVG width="100%" />
            </Box>
            <Box display={['block', 'none']} maxWidth={['400px']} marginX="auto">
              <InteractiveSliderSmallSVG width="100%" />
            </Box>
          </LandingPageSectionContent>
        </Box>
      </Box>
      <WorksGreatWith />
    </Box>
  );
};
