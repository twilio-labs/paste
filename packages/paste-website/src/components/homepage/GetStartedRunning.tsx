import { Box } from '@twilio-paste/box';
import { Heading } from '@twilio-paste/heading';
import { Paragraph } from '@twilio-paste/paragraph';
import Image from 'next/image';
import * as React from 'react';
import useResizeObserver from 'use-resize-observer';

import HomeGetStartedIllo3 from '../../assets/illustrations/home_getstarted_3.svg';
import HomeGetStartedIllo3Dark from '../../assets/illustrations/home_getstarted_3_dark.svg';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { event } from '../../lib/gtag';
import { GetStartedCard } from './GetStartedCard';
import { GetStartedCardIllustration } from './GetStartedCardIllustration';
import { GetStartedCardLink } from './GetStartedCardLink';
import { GetStartedCardLinks } from './GetStartedCardLinks';

interface GetStartedRunningProps {
  animationDelay: number;
}

export const GetStartedRunning: React.FC<React.PropsWithChildren<GetStartedRunningProps>> = ({ animationDelay }) => {
  const { ref, width: linkBoxWidth = 1 } = useResizeObserver<HTMLDivElement>();
  const { theme } = useDarkModeContext();
  return (
    <GetStartedCard animationDelay={animationDelay}>
      <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
        <div>
          <GetStartedCardIllustration>
            {theme === 'twilio' ? (
              <Image src={HomeGetStartedIllo3} aria-hidden="true" alt="" />
            ) : (
              <Image src={HomeGetStartedIllo3Dark} aria-hidden="true" alt="" />
            )}
          </GetStartedCardIllustration>
          <Heading as="h2" variant="heading30">
            Get up and running
          </Heading>
          <Paragraph>We have step-by-step guides to get you set up with Paste efficiently.</Paragraph>
        </div>
        <GetStartedCardLinks ref={ref} vertical={linkBoxWidth < 220}>
          <GetStartedCardLink
            href="/introduction/for-engineers/quickstart"
            onClick={() =>
              event({
                category: 'Get started',
                action: 'click-developer-setup',
                label: 'Developer setup',
              })
            }
          >
            Developer setup
          </GetStartedCardLink>
          <GetStartedCardLink
            href="/introduction/for-designers/design-guidelines"
            onClick={() =>
              event({
                category: 'Get started',
                action: 'click-designer-setup',
                label: 'Designer setup',
              })
            }
          >
            Designer setup
          </GetStartedCardLink>
        </GetStartedCardLinks>
      </Box>
    </GetStartedCard>
  );
};
