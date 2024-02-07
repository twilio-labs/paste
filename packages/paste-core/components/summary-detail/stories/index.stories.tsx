import type { StoryFn } from "@storybook/react";
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Card } from "@twilio-paste/card";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";
import * as React from "react";

import {
  SummaryDetail,
  SummaryDetailContent,
  SummaryDetailHeading,
  SummaryDetailHeadingContent,
  type SummaryDetailInitialState,
  type SummaryDetailStateReturn,
  SummaryDetailToggleButton,
  useSummaryDetailState,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/SummaryDetail",
};

export const Default: StoryFn = () => {
  return (
    <SummaryDetail>
      <SummaryDetailHeading>
        <SummaryDetailToggleButton aria-label="BOOP" />
        <SummaryDetailHeadingContent>
          <Text as="p" fontWeight="fontWeightBold">
            Inbound Call
          </Text>
          <Text as="p" fontSize="fontSize20" fontWeight="fontWeightLight">
            Jan 11, 2023
            <Anchor href="#" marginLeft="space30">
              (View transcript)
            </Anchor>
          </Text>
        </SummaryDetailHeadingContent>
      </SummaryDetailHeading>
      <SummaryDetailContent>
        <Text as="strong">Agent: </Text>
        <Text as="span">John Doe</Text>
        <Text as="span" marginX="space40" color="colorTextWeaker">
          |
        </Text>
        <Text as="strong">Duration: </Text>
        <Text as="span">3m 14s</Text>
      </SummaryDetailContent>
    </SummaryDetail>
  );
};

export const OpenByDefault: StoryFn = () => {
  return (
    <SummaryDetail visible>
      <SummaryDetailHeading>
        <SummaryDetailToggleButton />
        <SummaryDetailHeadingContent>
          <Text as="p" fontWeight="fontWeightBold">
            Inbound Call
          </Text>
          <Text as="p" fontSize="fontSize20" fontWeight="fontWeightLight">
            Jan 11, 2023
          </Text>
        </SummaryDetailHeadingContent>
      </SummaryDetailHeading>
      <SummaryDetailContent>
        <Text as="strong">Agent: </Text>
        <Text as="span">John Doe</Text>
        <Text as="span" marginX="space40" color="colorTextWeaker">
          |
        </Text>
        <Text as="strong">Duration: </Text>
        <Text as="span">3m 14s</Text>
      </SummaryDetailContent>
    </SummaryDetail>
  );
};

export const InContainer: StoryFn = () => {
  return (
    <Box width="220px">
      <Card>
        <SummaryDetail visible>
          <SummaryDetailHeading>
            <SummaryDetailToggleButton />
            <SummaryDetailHeadingContent>
              <Text as="p" fontWeight="fontWeightBold">
                Inbound Call
              </Text>
              <Text as="p" fontSize="fontSize20" fontWeight="fontWeightLight">
                Jan 11, 2023
              </Text>
            </SummaryDetailHeadingContent>
          </SummaryDetailHeading>
          <SummaryDetailContent>
            <div>
              <Text as="strong">Agent: </Text>
              <Text as="span">John Doe</Text>
            </div>
            <div>
              <Text as="strong">Duration: </Text>
              <Text as="span">3m 14s</Text>
            </div>
          </SummaryDetailContent>
        </SummaryDetail>
      </Card>
    </Box>
  );
};

export const AlternateComposition: StoryFn = () => {
  return (
    <Box width="300px">
      <SummaryDetail visible>
        <SummaryDetailContent>
          <Text as="strong">Agent: </Text>
          <Text as="span">John Doe</Text>
          <Text as="span" marginX="space40" color="colorTextWeaker">
            |
          </Text>
          <Text as="strong">Duration: </Text>
          <Text as="span">3m 14s</Text>
        </SummaryDetailContent>
        <SummaryDetailHeading>
          <SummaryDetailHeadingContent>
            <Text as="p" fontWeight="fontWeightBold">
              Inbound Call
            </Text>
            <Text as="p" fontSize="fontSize20" fontWeight="fontWeightLight">
              Jan 11, 2023
            </Text>
          </SummaryDetailHeadingContent>
          <SummaryDetailToggleButton />
        </SummaryDetailHeading>
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
        <SummaryDetailHeading>
          <SummaryDetailToggleButton />
          <SummaryDetailHeadingContent>
            {transitioning ? "Please wait..." : clickableHeading}
          </SummaryDetailHeadingContent>
        </SummaryDetailHeading>
        <SummaryDetailContent>
          <Text as="strong">Agent: </Text>
          <Text as="span">John Doe</Text>
          <Text as="span" marginX="space40" color="colorTextWeaker">
            |
          </Text>
          <Text as="strong">Duration: </Text>
          <Text as="span">3m 14s</Text>
        </SummaryDetailContent>
      </SummaryDetail>
    </>
  );
};

StateHook.storyName = "State hook";
