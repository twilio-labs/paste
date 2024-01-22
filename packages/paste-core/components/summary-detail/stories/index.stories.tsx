import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Paragraph } from "@twilio-paste/paragraph";
import * as React from "react";

import {
  SummaryDetail,
  SummaryDetailContent,
  SummaryDetailHeading,
  type SummaryDetailInitialState,
  type SummaryDetailStateReturn,
  useSummaryDetailState,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/SummaryDetail",
};

export const Default: StoryFn = () => {
  return (
    <SummaryDetail>
      <SummaryDetailHeading>Summary thing, you can put anything in here</SummaryDetailHeading>
      <SummaryDetailContent>Details to show. Again anything in here is possible</SummaryDetailContent>
    </SummaryDetail>
  );
};

export const OpenByDefault: StoryFn = () => {
  return (
    <SummaryDetail visible>
      <SummaryDetailHeading>Summary thing, you can put anything in here</SummaryDetailHeading>
      <SummaryDetailContent>Details to show. Again anything in here is possible</SummaryDetailContent>
    </SummaryDetail>
  );
};

export const InContainer: StoryFn = () => {
  return (
    <Box width="200px">
      <SummaryDetail visible>
        <SummaryDetailHeading>Summary thing, you can put anything in here</SummaryDetailHeading>
        <SummaryDetailContent>Details to show. Again anything in here is possible</SummaryDetailContent>
      </SummaryDetail>
    </Box>
  );
};

interface UseDelayedDisclosureStateProps extends SummaryDetailInitialState {
  delay: number;
}
const useDelayedSummaryDetailState = ({
  delay,
  ...initialState
}: UseDelayedDisclosureStateProps): SummaryDetailStateReturn => {
  const disclosure = useSummaryDetailState(initialState);
  const [transitioning, setTransitioning] = React.useState(false);
  return {
    ...disclosure,
    transitioning,
    toggle: () => {
      setTransitioning(true);
      setTimeout(() => {
        disclosure.toggle();
        setTransitioning(false);
      }, delay);
    },
  };
};

export const StateHook: StoryFn = () => {
  const { transitioning, ...summaryDetailState } = useDelayedSummaryDetailState({
    delay: 500,
  });
  const clickableHeading = summaryDetailState.visible ? "Hide with delay" : "Show with delay";
  return (
    <>
      <Paragraph>This Disclosure should be visible on load, and take 1 second to open and close.</Paragraph>
      <SummaryDetail state={summaryDetailState}>
        <SummaryDetailHeading>{transitioning ? "Please wait..." : clickableHeading}</SummaryDetailHeading>
        <SummaryDetailContent>Details to show. Again anything in here is possible</SummaryDetailContent>
      </SummaryDetail>
    </>
  );
};

StateHook.storyName = "State hook";
