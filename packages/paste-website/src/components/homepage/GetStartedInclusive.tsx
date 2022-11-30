import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';

import HomeGetStartedIllo1 from '../../assets/illustrations/home_getstarted_1.svg';
import HomeGetStartedIllo1Dark from '../../assets/illustrations/home_getstarted_1_dark.svg';
import {GetStartedCard} from './GetStartedCard';
import {GetStartedCardIllustration} from './GetStartedCardIllustration';
import {GetStartedCardLink} from './GetStartedCardLink';
import {useDarkModeContext} from '../../context/DarkModeContext';

interface GetStartedInclusiveProps {
  animationDelay: number;
}

export const GetStartedInclusive: React.FC<React.PropsWithChildren<GetStartedInclusiveProps>> = ({animationDelay}) => {
  const {theme} = useDarkModeContext();
  return (
    <GetStartedCard animationDelay={animationDelay}>
      <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
        <div>
          <GetStartedCardIllustration>
            {theme === 'default' ? (
              <HomeGetStartedIllo1 aria-hidden="true" />
            ) : (
              <HomeGetStartedIllo1Dark aria-hidden="true" />
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
          to="/inclusive-design"
          onClick={() =>
            trackCustomEvent({
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
