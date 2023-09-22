import * as React from 'react';

import { PackageStatusLegend } from '../src/components/shortcodes/package-status-legend';

const basicStatusProps = {
  packageStatus: 'Production',
  figmaStatus: 'yes',
  designCommitteeReview: 'yes',
  engineerCommitteeReview: 'yes',
};

const alphaStatusProps = {
  packageStatus: 'Alpha',
  figmaStatus: 'yes',
  designCommitteeReview: null,
  engineerCommitteeReview: 'yes',
};

const betaStatusProps = {
  packageStatus: 'Beta',
  figmaStatus: null,
  designCommitteeReview: 'yes',
  engineerCommitteeReview: null,
};

export const EmptyStatusLegend = (): React.ReactNode => {
  return <PackageStatusLegend {...basicStatusProps} />;
};

export const AlphaStatusNeedsDesignReview = (): React.ReactNode => {
  return <PackageStatusLegend {...alphaStatusProps} />;
};

export const BetaStatusNeedsFigmaAndEngReview = (): React.ReactNode => {
  return <PackageStatusLegend {...betaStatusProps} />;
};

export default {
  title: 'Website/PackageStatusLegend',
  component: EmptyStatusLegend,
};
