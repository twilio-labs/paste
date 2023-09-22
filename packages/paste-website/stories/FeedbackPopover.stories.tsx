import * as React from "react";

import { DislikedPage, FeedbackPopover, LikedPage, UnratedPage } from "../src/components/shortcodes/feedback-popover";

const NOOP = (): void => {};

export const ButtonFeedbackPopover = (): React.ReactNode => <FeedbackPopover />;
export const UnratedPageFeedbackPopover = (): React.ReactNode => <UnratedPage likePage={NOOP} dislikePage={NOOP} />;
export const LikedPageFeedbackPopover = (): React.ReactNode => <LikedPage likePage={NOOP} dislikePage={NOOP} />;
export const DislikedPageFeedbackPopover = (): React.ReactNode => <DislikedPage likePage={NOOP} dislikePage={NOOP} />;

// eslint-disable-next-line import/no-default-export
export default {
  title: "Website/Feedback-Popover",
  component: ButtonFeedbackPopover,
};
