import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Heading } from '@twilio-paste/heading';
import { Paragraph } from '@twilio-paste/paragraph';
import Image from 'next/image';

import HomeGetStartedIllo1 from '../../assets/illustrations/home_getstarted_1.svg';
import HomeGetStartedIllo1Dark from '../../assets/illustrations/home_getstarted_1_dark.svg';
import { GetStartedCard } from './GetStartedCard';
import { GetStartedCardIllustration } from './GetStartedCardIllustration';
import { GetStartedCardLink } from './GetStartedCardLink';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { event } from '../../lib/gtag';

interface GetStartedInclusiveProps {
  animationDelay: number;
}

export const GetStartedInclusive: React.FC<React.PropsWithChildren<GetStartedInclusiveProps>> = ({
  animationDelay,
}) => {
  const { theme } = useDarkModeContext();
  return (
    <GetStartedCard animationDelay={animationDelay}>
      <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
        <div>
          <GetStartedCardIllustration>
            {theme === 'twilio' ? (
              <Image src={HomeGetStartedIllo1} aria-hidden="true" alt="" />
            ) : (
              <Image src={HomeGetStartedIllo1Dark} aria-hidden="true" alt="" />
            )}
          </GetStartedCardIllustration>
          <Heading as="h2" variant="heading30">
            Build inclusively by default
          </Heading>
          <Paragraph>
            Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier to
            build accessibly.
          </Paragraph>
        </div>
        <GetStartedCardLink
          href="/inclusive-design"
          onClick={() =>
            event({
              category: 'Get started',
              action: 'click-see-inclusive-guidelines',
              label: 'See inclusive guidelines',
            })
          }
        >
          See Inclusive guidelines
        </GetStartedCardLink>
      </Box>
    </GetStartedCard>
  );
};
