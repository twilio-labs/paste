import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import HomeGetStartedIllo2 from '../../assets/illustrations/home_getstarted_2.svg';
import {GetStartedCard} from './GetStartedCard';
import {GetStartedCardIllustration} from './GetStartedCardIllustration';
import {GetStartedCardLink} from './GetStartedCardLink';

interface GetStarterWhyProps {
  show: boolean;
}
export const GetStarterWhy: React.FC<GetStarterWhyProps> = ({show}) => {
  return (
    <GetStartedCard show={show}>
      <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
        <div>
          <GetStartedCardIllustration>
            <HomeGetStartedIllo2 aria-hidden="true" />
          </GetStartedCardIllustration>
          <Heading as="h3" variant="heading30">
            Why use Paste?
          </Heading>
          <Paragraph>
            Paste helps you rapidly prototype, and ship great, inclusive customer experiences. It makes it easy to do
            the right thing, cheaply.
          </Paragraph>
        </div>
        <GetStartedCardLink to="/getting-started/about-paste">Learn about Paste</GetStartedCardLink>
      </Box>
    </GetStartedCard>
  );
};
