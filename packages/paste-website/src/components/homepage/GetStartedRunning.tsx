import * as React from 'react';
import useResizeObserver from 'use-resize-observer';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import HomeGetStartedIllo3 from '../../assets/illustrations/home_getstarted_3.svg';
import {GetStartedCard} from './GetStartedCard';
import {GetStartedCardIllustration} from './GetStartedCardIllustration';
import {GetStartedCardLinks} from './GetStartedCardLinks';
import {GetStartedCardLink} from './GetStartedCardLink';

interface GetStartedRunningProps {
  animationDelay: number;
}

export const GetStartedRunning: React.FC<GetStartedRunningProps> = ({animationDelay}) => {
  const {ref, width: linkBoxWidth = 1} = useResizeObserver<HTMLDivElement>();
  return (
    <GetStartedCard animationDelay={animationDelay}>
      <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
        <div>
          <GetStartedCardIllustration>
            <HomeGetStartedIllo3 aria-hidden="true" />
          </GetStartedCardIllustration>
          <Heading as="h3" variant="heading30">
            Get up and running
          </Heading>
          <Paragraph>
            Whether you&rsquo;re a designer or developer, setting up Paste is easy and only takes a few minutes!
          </Paragraph>
        </div>
        <GetStartedCardLinks ref={ref} vertical={linkBoxWidth < 220}>
          <GetStartedCardLink to="/getting-started/engineering">Developer setup</GetStartedCardLink>
          <GetStartedCardLink to="/getting-started/design">Designer setup</GetStartedCardLink>
        </GetStartedCardLinks>
      </Box>
    </GetStartedCard>
  );
};
