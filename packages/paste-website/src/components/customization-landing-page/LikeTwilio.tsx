import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';

import {LandingPageSection, LandingPageSectionContent} from './LandingPageLayoutUtils';
import {LandingPageDesigner} from './LandingPageDesigner';

export const LikeTwilio: React.FC = () => {
  return (
    <LandingPageSection>
      <LandingPageSectionContent variant="narrow">
        <Box maxWidth="size60" marginX="auto" textAlign="center">
          <Heading as="h2" variant="heading10">
            Like Twilio, but for UI
          </Heading>
          <Text as="p" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
            Have you ever thought to yourself, &ldquo;wow, I wish building beautiful, accessible UIs for my brand was as
            easy as sending an SMS through Twilio&rdquo;? Well, gosh, you’re in luck.
          </Text>
        </Box>
        <Stack orientation="vertical" spacing="space50">
          <LandingPageDesigner />
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text as="span" color="colorTextWeak">
              Your data will not be saved
            </Text>
            <Button as="a" href="https://remix.twilio.design" variant="secondary">
              Try the Beta Theme Designer
            </Button>
          </Box>
        </Stack>
      </LandingPageSectionContent>
    </LandingPageSection>
  );
};
