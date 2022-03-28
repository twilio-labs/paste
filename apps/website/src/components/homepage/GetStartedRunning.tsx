import * as React from 'react';
import useResizeObserver from 'use-resize-observer';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import HomeGetStartedIllo3 from '../../assets/illustrations/home_getstarted_3.svg';
import HomeGetStartedIllo3Dark from '../../assets/illustrations/home_getstarted_3_dark.svg';
import {GetStartedCard} from './GetStartedCard';
import {GetStartedCardIllustration} from './GetStartedCardIllustration';
import {GetStartedCardLinks} from './GetStartedCardLinks';
import {GetStartedCardLink} from './GetStartedCardLink';
import {useDarkModeContext} from '../../context/DarkModeContext';

interface GetStartedRunningProps {
  animationDelay: number;
}

export const GetStartedRunning: React.FC<GetStartedRunningProps> = ({animationDelay}) => {
  const {ref, width: linkBoxWidth = 1} = useResizeObserver<HTMLDivElement>();
  const {theme} = useDarkModeContext();
  return (
    <GetStartedCard animationDelay={animationDelay}>
      <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
        <div>
          <GetStartedCardIllustration>
            {theme === 'default' ? (
              <HomeGetStartedIllo3 aria-hidden="true" />
            ) : (
              <HomeGetStartedIllo3Dark aria-hidden="true" />
            )}
          </GetStartedCardIllustration>
          <Heading as="h2" variant="heading30">
            Get up and running
          </Heading>
          <Paragraph>We have step-by-step guides to get you set up with Paste efficiently.</Paragraph>
        </div>
        <GetStartedCardLinks ref={ref} vertical={linkBoxWidth < 220}>
          <GetStartedCardLink
            to="/introduction/for-engineers/quickstart"
            onClick={() =>
              trackCustomEvent({
                category: 'Get started',
                action: 'click-developer-setup',
                label: 'Developer setup',
              })
            }
          >
            Developer setup
          </GetStartedCardLink>
          <GetStartedCardLink
            to="/introduction/for-designers/design-guidelines"
            onClick={() =>
              trackCustomEvent({
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
