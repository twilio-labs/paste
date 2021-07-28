import * as React from 'react';
import {GraphImageWrapper} from '../src/components/open-graph-card/GraphImageWrapper';
import {GraphImageHero} from '../src/components/open-graph-card/GraphImageHero';
import {GraphImageDetails} from '../src/components/open-graph-card/GraphImageDetails';

const packageData = {
  name: '@twilio-paste/alert',
  description: 'An alert notifies a user to high-priority or time-sensitive information.',
  Feature: 'Alert',
  Documentation: true,
  Figma: 'false',
  Code: 'true',
  Design_committee_review: 'true',
  Engineer_committee_review: 'true',
  type: 'components',
};

export const AlertCard = (): React.ReactNode => {
  return (
    <GraphImageWrapper>
      <GraphImageHero feature={packageData.Feature} description={packageData.description} />
      <GraphImageDetails {...packageData} />
    </GraphImageWrapper>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Website/OpenGraph-Card',
  component: AlertCard,
};
