import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';

import {LandingPageSection, LandingPageSectionContent} from './LandingPageLayoutUtils';
import {LandingPageDesigner} from './LandingPageDesigner';
import {DoodleBurst} from '../../assets/illustrations/DoodleBurst';
import {DoodleLoopMedium} from '../../assets/illustrations/DoodleLoopMedium';
import {DoodleLoopTiny} from '../../assets/illustrations/DoodleLoopTiny';

const LikeTwilioHeadline: React.FC = () => {
  return (
    <Box maxWidth="size60" marginX="auto" paddingBottom="space100" textAlign="center">
      <Heading as="h2" variant="heading10">
        Like Twilio, but for UI
      </Heading>
      <Text as="p" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
        Have you ever thought to yourself, &ldquo;Wow, I wish building beautiful, accessible UIs for my brand was as
        easy as sending an SMS through Twilio&rdquo;? Well, gosh, you’re in luck.
      </Text>
    </Box>
  );
};

const DesktopDesigner: React.FC = () => {
  return (
    <>
      <Box as="span" position="absolute" display={['none', 'none', 'block']} top={-55} left={-55}>
        <DoodleBurst />
      </Box>
      <Stack orientation="vertical" spacing="space50">
        <LandingPageDesigner />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text as="span" color="colorTextWeak">
            Your data will not be saved.
          </Text>
          <Button as="a" href="https://remix.twilio.design" variant="secondary">
            Try the Beta Theme Designer
          </Button>
        </Box>
      </Stack>
    </>
  );
};

const MobileDesigner: React.FC = () => {
  return (
    <>
      <Box
        bottom="0"
        top="0"
        right="0"
        left="0"
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="zIndex10"
      >
        <Button as="a" href="https://remix.twilio.design" variant="primary">
          Try the beta Theme Designer
        </Button>
      </Box>
      <StaticImage
        src="../../assets/images/customization/theme-designer-mobile-screenshot.png"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
      />
    </>
  );
};

export const LikeTwilio: React.FC = () => {
  return (
    <LandingPageSection zIndex="zIndex10" overflow="hidden">
      <LandingPageSectionContent variant="narrow" paddingTop={['space200', 'space200', 'space0']}>
        <LikeTwilioHeadline />

        <Box display={['none', 'block']} position="relative">
          <DesktopDesigner />
        </Box>

        <Box display={['block', 'none']} marginY="space120" position="relative">
          <MobileDesigner />
        </Box>

        <Box
          as="span"
          position="absolute"
          display={['flex', 'flex', 'none']}
          justifyContent="center"
          top={0}
          left={0}
          right={0}
        >
          <DoodleLoopTiny />
        </Box>

        <Box as="span" position="absolute" display={['none', 'none', 'block']} bottom={120} right={-120}>
          <DoodleLoopMedium />
        </Box>
      </LandingPageSectionContent>
    </LandingPageSection>
  );
};
