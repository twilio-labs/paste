import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';

import HomeGetStartedIllo1 from '../../assets/illustrations/home_getstarted_1.svg';
import {GetStartedCard} from './GetStartedCard';
import {GetStartedCardIllustration} from './GetStartedCardIllustration';
import {GetStartedCardLink} from './GetStartedCardLink';

export const GetStartedInclusive: React.FC = () => {
  return (
    <GetStartedCard>
      <GetStartedCardIllustration>
        <HomeGetStartedIllo1 aria-hidden="true" />
      </GetStartedCardIllustration>
      <Heading as="h3" variant="heading30">
        Inclusive by default
      </Heading>
      <Paragraph>
        Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier to
        build accessibly.
      </Paragraph>
      <GetStartedCardLink to="/inclusive-design">See Inclusive guidelines</GetStartedCardLink>
    </GetStartedCard>
  );
};
