import * as React from 'react';
import {Router} from '@reach/router';
import {FeedbackPopover, UnratedPage, LikedPage, DislikedPage} from '../src/components/shortcodes/feedback-popover';

const NOOP = (): void => {};

export const ButtonFeedbackPopover = (): React.ReactNode => (
  <Router>
    <FeedbackPopover />
  </Router>
);
export const UnratedPageFeedbackPopover = (): React.ReactNode => (
  <Router>
    <UnratedPage likePage={NOOP} dislikePage={NOOP} />
  </Router>
);
export const LikedPageFeedbackPopover = (): React.ReactNode => (
  <Router>
    <LikedPage likePage={NOOP} dislikePage={NOOP} />
  </Router>
);
export const DislikedPageFeedbackPopover = (): React.ReactNode => (
  <Router>
    <DislikedPage likePage={NOOP} dislikePage={NOOP} />
  </Router>
);

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Website/Feedback-Popover',
  component: ButtonFeedbackPopover,
};
