import * as React from 'react';
//import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import HomeGetStartedIllo2 from '../../assets/illustrations/home_getstarted_2.svg';
import {GetStartedCard} from './GetStartedCard';
import {GetStartedCardIllustration} from './GetStartedCardIllustration';
import {GetStartedCardLink} from './GetStartedCardLink';

export const GetStarterWhy: React.FC = () => {
  return (
    <GetStartedCard>
      <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
        <div>
          <GetStartedCardIllustration>
            <HomeGetStartedIllo2 aria-hidden="true" />
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
          href="/getting-started/about-paste"
          onClick={
            () => {} /* TODO
            trackCustomEvent({
              category: "Get started",
              action: "click-learn-about-paste",
              label: "Learn about Paste",
            })*/
          }
        >
          Learn about Paste
        </GetStartedCardLink>
      </Box>
    </GetStartedCard>
  );
};
