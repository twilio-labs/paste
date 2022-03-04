import * as React from 'react';
import {FeedbackPopover, UnratedPage, LikedPage, DislikedPage} from '../src/components/shortcodes/feedback-popover';

const NOOP = (): void => {};

export const ButtonFeedbackPopover = (): React.ReactNode => <FeedbackPopover pathname="storybook" />;
export const UnratedPageFeedbackPopover = (): React.ReactNode => (
  <UnratedPage likePage={NOOP} dislikePage={NOOP} pathname="storybook" />
);
export const LikedPageFeedbackPopover = (): React.ReactNode => (
  <LikedPage likePage={NOOP} dislikePage={NOOP} pathname="storybook" />
);
export const DislikedPageFeedbackPopover = (): React.ReactNode => (
  <DislikedPage likePage={NOOP} dislikePage={NOOP} pathname="storybook" />
);

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Website/Feedback-Popover',
  component: ButtonFeedbackPopover,
};
