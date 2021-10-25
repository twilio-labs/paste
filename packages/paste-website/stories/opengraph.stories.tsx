import * as React from 'react-16';
import {GraphImageWrapper} from '../src/components/open-graph-card/GraphImageWrapper';
import {GraphImageHero} from '../src/components/open-graph-card/GraphImageHero';
import {GraphImageDetails} from '../src/components/open-graph-card/GraphImageDetails';

export const AlertCard = (): React.ReactNode => {
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

  return (
    <GraphImageWrapper>
      <GraphImageHero feature={packageData.Feature} description={packageData.description} />
      <GraphImageDetails {...packageData} />
    </GraphImageWrapper>
  );
};

export const ButtonCard = (): React.ReactNode => {
  const packageData = {
    name: '@twilio-paste/button',
    description: 'A button communicates that users can trigger an action.',
    Feature: 'Button',
    Documentation: false,
    Figma: 'not applicable',
    Code: 'yes',
    Design_committee_review: null,
    Engineer_committee_review: null,
    type: 'components',
  };

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
