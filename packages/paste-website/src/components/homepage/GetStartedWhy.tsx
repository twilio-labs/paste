import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';

import HomeGetStartedIllo2 from '../../assets/illustrations/home_getstarted_2.svg';
import {GetStartedCard} from './GetStartedCard';
import {GetStartedCardIllustration} from './GetStartedCardIllustration';
import {GetStartedCardLink} from './GetStartedCardLink';

export const GetStarterWhy: React.FC = () => {
  return (
    <GetStartedCard>
      <GetStartedCardIllustration>
        <HomeGetStartedIllo2 aria-hidden="true" />
      </GetStartedCardIllustration>
      <Heading as="h3" variant="heading30">
        Why use Paste?
      </Heading>
      <Paragraph>
        Paste helps you rapidly prototype, and ship great, inclusive customer experiences. It makes it easy to do the
        right thing, cheaply.
      </Paragraph>
      <GetStartedCardLink to="/getting-started/about-paste">Learn about Paste</GetStartedCardLink>
    </GetStartedCard>
  );
};
