import type { Story } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Pane } from "evergreen-ui";
import * as React from "react";
import UIBox from "ui-box";

export default {
  title: "Performance/Box",
  component: Box,
};

export const PasteBox: Story = () => {
  return (
    <Box
      backgroundColor="colorBackgroundDestructive"
      padding="space80"
      borderRadius="borderRadius30"
      color="colorTextInverse"
    >
      This is a box
    </Box>
  );
};
PasteBox.parameters = {
  a11y: {
    // no need to a11y check perf benchmarks
    disable: true,
  },
};
export const EvergreenPane: Story = () => {
  return (
    <Pane backgroundColor="red" padding="20px" borderRadius="4px" color="white">
      This is a box
    </Pane>
  );
};
EvergreenPane.parameters = {
  a11y: {
    // no need to a11y check perf benchmarks
    disable: true,
  },
};
export const EvergreenUIBox: Story = () => {
  return (
    <UIBox backgroundColor="red" padding="20px" borderRadius="4px" color="white">
      This is a box
    </UIBox>
  );
};
EvergreenUIBox.parameters = {
  a11y: {
    // no need to a11y check perf benchmarks
    disable: true,
  },
};
