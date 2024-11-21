import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import * as React from "react";

import { Blockquote, BlockquoteContent, BlockquoteSource } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Blockquote",
  component: Blockquote,
};

export const Default: StoryFn = () => (
  <Box maxWidth="600px">
    <Blockquote url="#">
      <BlockquoteContent>
        With AI-driven products, the design process is no longer just about aesthetics. It’s about designing for the
        human experience as a whole.
      </BlockquoteContent>
      <BlockquoteSource author="Google" source="People + AI Guidebook" />
    </Blockquote>
  </Box>
);

export const WithoutUrl: StoryFn = () => (
  <Box maxWidth="600px">
    <Blockquote>
      <BlockquoteContent>
        With AI-driven products, the design process is no longer just about aesthetics. It’s about designing for the
        human experience as a whole.
      </BlockquoteContent>
      <BlockquoteSource author="Google" source="People + AI Guidebook" />
    </Blockquote>
  </Box>
);

export const WithoutSource: StoryFn = () => (
  <Box maxWidth="600px">
    <Blockquote>
      <BlockquoteContent>
        With AI-driven products, the design process is no longer just about aesthetics. It’s about designing for the
        human experience as a whole.
      </BlockquoteContent>
      <BlockquoteSource author="Google" />
    </Blockquote>
  </Box>
);
