import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import Image from 'next/image';

import HomeGetStartedIllo2 from '../../assets/illustrations/home_getstarted_2.svg';
import HomeGetStartedIllo2Dark from '../../assets/illustrations/home_getstarted_2_dark.svg';
import {GetStartedCard} from './GetStartedCard';
import {GetStartedCardIllustration} from './GetStartedCardIllustration';
import {GetStartedCardLink} from './GetStartedCardLink';
import {useDarkModeContext} from '../../context/DarkModeContext';
import {event} from '../../lib/gtag';

export const GetStarterWhy = (): JSX.Element => {
  const {theme} = useDarkModeContext();
  return (
    <GetStartedCard>
      <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
        <div>
          <GetStartedCardIllustration>
            {theme === 'twilio' ? (
              <Image src={HomeGetStartedIllo2} aria-hidden="true" alt="" />
            ) : (
              <Image src={HomeGetStartedIllo2Dark} aria-hidden="true" alt="" />
            )}
          </GetStartedCardIllustration>
          <Heading as="h2" variant="heading30">
            Why use Paste?
          </Heading>
          <Paragraph>
            Paste helps you rapidly prototype, and ship great, inclusive customer experiences. It makes it easy to do
            the right thing, cheaply.
          </Paragraph>
        </div>
        <GetStartedCardLink
          href="/introduction/about-paste"
          onClick={() =>
            event({
              category: 'Get started',
              action: 'click-learn-about-paste',
              label: 'Learn about Paste',
            })
          }
        >
          Learn about Paste
        </GetStartedCardLink>
      </Box>
    </GetStartedCard>
  );
};
