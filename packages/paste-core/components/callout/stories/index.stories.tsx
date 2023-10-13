import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import * as React from "react";

import { Callout, CalloutHeading, CalloutList, CalloutListItem, CalloutText } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Callout",
  component: Callout,
};

const ExampleList: React.FC<React.PropsWithChildren<{ as: "ul" | "ol" }>> = ({ as }) => (
  <CalloutList as={as}>
    <CalloutListItem>Item one</CalloutListItem>
    <CalloutListItem>Item two</CalloutListItem>
    <CalloutListItem>Item three</CalloutListItem>
  </CalloutList>
);

export const Variants: StoryFn = () => {
  return (
    <Box display="flex" flexDirection="column" rowGap="space60">
      <Callout variant="new">
        <CalloutHeading as="h3">New callout</CalloutHeading>
        <CalloutText>This is some content.</CalloutText>
      </Callout>
      <Callout variant="neutral">
        <CalloutHeading as="h3">Neutral callout</CalloutHeading>
        <CalloutText>This is some content.</CalloutText>
      </Callout>
      <Callout variant="success">
        <CalloutHeading as="h3">Success callout</CalloutHeading>
        <CalloutText>This is some content.</CalloutText>
      </Callout>
      <Callout variant="error">
        <CalloutHeading as="h3">Error callout</CalloutHeading>
        <CalloutText>This is some content.</CalloutText>
      </Callout>
      <Callout variant="warning">
        <CalloutHeading as="h3">Warning callout</CalloutHeading>
        <CalloutText>This is some content.</CalloutText>
      </Callout>
    </Box>
  );
};

export const VariantsWithList: StoryFn = () => {
  return (
    <Box display="flex" flexDirection="column" rowGap="space60">
      <Callout variant="new">
        <CalloutHeading as="h3">New callout</CalloutHeading>
        <CalloutText>Take a look at this list:</CalloutText>
        <ExampleList as="ol" />
      </Callout>
      <Callout variant="neutral">
        <CalloutHeading as="h3">Neutral callout</CalloutHeading>
        <CalloutText>Take a look at this list:</CalloutText>
        <ExampleList as="ul" />
      </Callout>
      <Callout variant="success">
        <CalloutHeading as="h3">Success callout</CalloutHeading>
        <CalloutText>Take a look at this list:</CalloutText>
        <ExampleList as="ol" />
      </Callout>
      <Callout variant="error">
        <CalloutHeading as="h3">Error callout</CalloutHeading>
        <CalloutText>Take a look at this list:</CalloutText>
        <ExampleList as="ul" />
      </Callout>
      <Callout variant="warning">
        <CalloutHeading as="h3">Warning callout</CalloutHeading>
        <CalloutText>Take a look at this list:</CalloutText>
        <ExampleList as="ol" />
      </Callout>
    </Box>
  );
};

export const CalloutWithMargin: StoryFn = () => (
  <>
    <Callout variant="success" marginY="space70">
      <CalloutHeading as="h3">Callout with marginY</CalloutHeading>
      <CalloutText>This is some content.</CalloutText>
    </Callout>
  </>
);
