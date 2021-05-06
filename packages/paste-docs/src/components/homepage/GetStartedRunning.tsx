import * as React from 'react';
import useResizeObserver from 'use-resize-observer';
// import { trackCustomEvent } from "gatsby-plugin-google-analytics";
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
          <Heading as="h2" variant="heading30">
            Get up and running
          </Heading>
          <Paragraph>We have step-by-step guides to get you set up with Paste efficiently.</Paragraph>
        </div>
        <GetStartedCardLinks ref={ref} vertical={linkBoxWidth < 220}>
          <GetStartedCardLink
            href="/getting-started/engineering"
            onClick={
              () => {} /* TODO
              trackCustomEvent({
                category: "Get started",
                action: "click-developer-setup",
                label: "Developer setup",
              })*/
            }
          >
            Developer setup
          </GetStartedCardLink>
          <GetStartedCardLink
            href="/getting-started/design"
            onClick={
              () => {} /* TODO
              trackCustomEvent({
                category: "Get started",
                action: "click-designer-setup",
                label: "Designer setup",
              })*/
            }
          >
            Designer setup
          </GetStartedCardLink>
        </GetStartedCardLinks>
      </Box>
    </GetStartedCard>
  );
};
