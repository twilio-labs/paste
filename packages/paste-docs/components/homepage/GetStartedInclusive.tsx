import * as React from 'react';
// import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import HomeGetStartedIllo1 from '../../assets/illustrations/home_getstarted_1.svg';
import {GetStartedCard} from './GetStartedCard';
import {GetStartedCardIllustration} from './GetStartedCardIllustration';
import {GetStartedCardLink} from './GetStartedCardLink';

interface GetStartedInclusiveProps {
  animationDelay: number;
}

export const GetStartedInclusive: React.FC<GetStartedInclusiveProps> = ({animationDelay}) => {
  return (
    <GetStartedCard animationDelay={animationDelay}>
      <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
        <div>
          <GetStartedCardIllustration>
            <HomeGetStartedIllo1 aria-hidden="true" />
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
          onClick={
            () => {} /* TODO
            trackCustomEvent({
              category: "Get started",
              action: "click-see-inclusive-guidelines",
              label: "See inclusive guidelines",
            })*/
          }
        >
          See Inclusive guidelines
        </GetStartedCardLink>
      </Box>
    </GetStartedCard>
  );
};
