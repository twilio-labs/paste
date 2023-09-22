import { render, screen } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore react import is flagged as unused by tsx but required when running the tests
import * as React from 'react';

import { PackageStatusLegend } from '../components/shortcodes/package-status-legend';

// This component only exists to use React (to silence a config catch-22 error)
const PackageStatusEmpty = (): JSX.Element => (
  <Theme.Provider theme="default">
    <PackageStatusLegend />
  </Theme.Provider>
);

describe('PackageStatusLegend', () => {
  it('should render an Alpha badge for an Alpha packageStatus', () => {
    render(
      <Theme.Provider theme="default">
        <PackageStatusLegend packageStatus="Alpha" />
      </Theme.Provider>,
    );
    expect(screen.getByText('Alpha')).toBeDefined();
  });

  it('should render a Beta badge for a Beta packageStatus', () => {
    render(
      <Theme.Provider theme="default">
        <PackageStatusLegend packageStatus="Beta" />
      </Theme.Provider>,
    );
    expect(screen.getByText('Beta')).toBeDefined();
  });

  it('should render a Design Assets Pending badge if Figma status is null', () => {
    render(
      <Theme.Provider theme="default">
        <PackageStatusLegend figmaStatus={null} />
      </Theme.Provider>,
    );
    expect(screen.getByText('Design assets pending')).toBeDefined();
  });

  it('should render a Review Pending badge if designCommitteeReview is null', () => {
    render(
      <Theme.Provider theme="default">
        <PackageStatusLegend designCommitteeReview={null} />
      </Theme.Provider>,
    );
    expect(screen.getByText('Peer review pending')).toBeDefined();
  });

  it('should render a Review Pending badge if engineerCommitteeReview is null', () => {
    render(
      <Theme.Provider theme="default">
        <PackageStatusLegend engineerCommitteeReview={null} />
      </Theme.Provider>,
    );
    expect(screen.getByText('Peer review pending')).toBeDefined();
  });

  it('should render a Review Pending badge both CommitteeReviews are null', () => {
    render(
      <Theme.Provider theme="default">
        <PackageStatusLegend engineerCommitteeReview={null} designCommitteeReview={null} />
      </Theme.Provider>,
    );
    expect(screen.getByText('Peer review pending')).toBeDefined();
  });

  it('should not render package status badges if there are no package statuses', () => {
    render(
      <Theme.Provider theme="default">
        <PackageStatusEmpty />
      </Theme.Provider>,
    );
    expect(screen.queryByText('Alpha')).toBeNull();
    expect(screen.queryByText('Beta')).toBeNull();
    expect(screen.queryByText('Design assets pending')).toBeDefined();
    expect(screen.queryByText('Peer review pending')).toBeDefined();
  });

  it('should not render any badges when all statuses are production ready', () => {
    render(
      <Theme.Provider theme="default">
        <PackageStatusLegend
          packageStatus="Production"
          figmaStatus="yes"
          designCommitteeReview="yes"
          engineerCommitteeReview="yes"
        />
      </Theme.Provider>,
    );
    expect(screen.queryByText('Alpha')).toBeNull();
    expect(screen.queryByText('Beta')).toBeNull();
    expect(screen.queryByText('Design assets pending')).toBeNull();
    expect(screen.queryByText('Peer review pending')).toBeNull();
  });
});
