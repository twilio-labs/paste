import * as React from 'react';

import { GraphImageWrapper } from '../src/components/open-graph-card/GraphImageWrapper';
import { GraphImageHero } from '../src/components/open-graph-card/GraphImageHero';
import { GraphImageDetails } from '../src/components/open-graph-card/GraphImageDetails';

export const AlertCard = (): React.ReactNode => {
  const packageData = {
    name: '@twilio-paste/alert',
    description: 'An alert notifies a user to high-priority or time-sensitive information.',
    Feature: 'Alert',
    Documentation: true,
    Figma: 'false',
    Code: 'true',
    'Design committee review': 'true',
    'Engineer committee review': 'true',
    type: 'components',
    version: '1.0.0',
    status: 'production',
    'Component Category': 'component',
    'Product suitability': '',
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
    'Design committee review': '',
    'Engineer committee review': '',
    type: 'components',
    version: '1.0.0',
    status: 'production',
    'Component Category': 'component',
    'Product suitability': '',
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
